"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getConvertedText, getNlTextConvertedToDialect } from "./actions";
import { instance } from "@viz-js/viz";
import { ERROR_MESSAGE } from "./constants";
import { EXAMPLE_NL_TEXT } from "./grammar/examples/input/example_nl_text";
import { EXAMPLE_NL_TEXT_CONVERTED } from "./grammar/examples/input/example_nl_text_converted";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

const PETRI_NET = "petriNet";
const DECLARE = "declare";
export default function Home() {
  const [text, setText] = useState(EXAMPLE_NL_TEXT_CONVERTED);
  const [nlText, setNlText] = useState(EXAMPLE_NL_TEXT);
  const [petriNet, setPetriNet] = useState("");
  const [declare, setDeclare] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleConvert(EXAMPLE_NL_TEXT_CONVERTED);
  }, []);

  const handleConvert = async (textToConvert: string) => {
    setIsLoading(true);

    const conversions = await getConvertedText(textToConvert);
    setPetriNet(conversions[0]);
    setDeclare(conversions[1]);
    if (!conversions[0].startsWith(ERROR_MESSAGE)) {
      graphvizToSVG(tpn2graphviz(conversions[0]));
    }

    setIsLoading(false);
  };

  const tpn2graphviz = (tpnData: string) => {
    // Array to store DOT output lines
    let dotOutput = [
      "digraph PetriNet {",
      `\tranksep=".3";`,
      `\tfontsize="10";`,
      "\tremincross=true;",
      `\tmargin="0.0,0.0";`,
      `\tfontname="Arial";`,
      `\trankdir="LR";`,
      `\tedge [arrowsize="0.5"];`,
      `\tnode [height=".2",width=".2",fontname="Arial",fontsize="10"];`,
    ];

    // Regular expressions to match places, transitions, and arcs
    const placePattern = /^place\s+"?(\w+)"?(?:\s+init\s+(\d+))?;/;
    // const transitionPattern = /^trans\s+"([\w\s]+)"~"([\w\s]*)"\s+in\s+(["\w\s]+)\s+out\s+(["\w\s]+)"/;
    const transitionPattern = /^trans\s+(.+)\s+in\s+(.*)\s+out\s+(.*);/;
    const transitionLabelWithIdPattern = /"(\w+)"\s*~\s*"([\w\s]*)"/;

    // Process each line of the TPN data
    const lines = tpnData.split("\n");
    for (let line of lines) {
      line = line.trim();
      if (line.length == 0) continue;

      // Match a place definition
      const placeMatch = line.match(placePattern);
      if (placeMatch) {
        const placeId = placeMatch[1];
        const placeTokens: any = placeMatch[2];
        if (placeTokens >= 1) {
          if (placeTokens == 1) {
            dotOutput.push(
              `\t"${placeId}" [shape="circle",label="",height=".1",width=".1",style="filled",fillcolor="black",peripheries="2"];`
            );
          } else if (placeTokens > 1) {
            dotOutput.push(`\t"${placeId}" [shape="circle",label="${placeTokens}",height=".1",width=".1"];`);
          }
        } else {
          dotOutput.push(`\t"${placeId}" [shape="circle",label=""];`);
        }
        continue;
      }

      // Match a transition definition
      const transitionMatch = line.match(transitionPattern);
      if (transitionMatch) {
        const transIDLabel = transitionMatch[1].trim();
        var transId = transIDLabel.replace(/["']/g, "");
        var transLabel = transIDLabel.replace(/["']/g, "");

        const labelIDMatch = transIDLabel.match(transitionLabelWithIdPattern);
        if (labelIDMatch) {
          transId = labelIDMatch[1].trim();
          transLabel = labelIDMatch[2].trim();
        }

        const inputPlaces = transitionMatch[2].trim().replace(/["']/g, "").split(/\s+/);
        const outputPlaces = transitionMatch[3].trim().replace(/["']/g, "").split(/\s+/);

        if (transLabel == "") {
          dotOutput.push(
            `\t"${transId}" [shape="box",label="",height=".2",width=".2",style="filled",fillcolor="black"];`
          );
        } else {
          dotOutput.push(`\t"${transId}" [shape="box",label="${transLabel}"];`);
        }
        // Add arcs (in -> out)
        inputPlaces.forEach((inputPlace) => {
          dotOutput.push(`\t"${inputPlace}" -> "${transId}";`);
        });
        outputPlaces.forEach((outputPlace) => {
          dotOutput.push(`\t"${transId}" -> "${outputPlace}";`);
        });
        continue;
      }
    }

    // Close the DOT graph
    dotOutput.push("}");

    // Return the final DOT representation as a string
    const out = dotOutput.join("\n");
    // console.log(out);
    return out;
  };

  const graphvizToSVG = (dotInput: string) => {
    // Use Viz.js to convert DOT to SVG
    instance().then((viz) => {
      const svg = viz.renderSVGElement(dotInput);
      const container = document.getElementById("graph");
      if (container) {
        container.innerHTML = "";
        container.appendChild(svg);
      }
    });
  };

  const handleDownloadFile = (type: string) => {
    let model = "";
    let fileName = "";
    if (type === PETRI_NET) {
      model = petriNet;
      fileName = "PetriNet.tpn";
    } else if (type === DECLARE) {
      model = declare;
      fileName = "DeclareModel.decl";
    }

    const fileBlob = new Blob([model], {
      type: "text/plain",
    });
    const url = window.URL.createObjectURL(fileBlob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const convertFreeTextToDialect = async (): Promise<void> => {
    setIsLoading(true);

    const response = await getNlTextConvertedToDialect(nlText);
    setText(response.convertedText);
    await handleConvert(response.convertedText);

    setIsLoading(false);
  };

  return (
    <div className="flex flex-col w-full h-screen gap-12 p-12">
      <div className="flex flex-row gap-12 items-center justify-center h-1/2">
        <div className="flex flex-col w-1/2 h-full gap-2">
          <Label htmlFor="message">Prompt for AI to convert text into dialect and model</Label>
          <Textarea
            placeholder="Type a description of a business process..."
            id="message"
            className="h-full"
            value={nlText}
            onChange={(e) => setNlText(e.target.value)}
          />
          <button
            className="bg-slate-200 rounded-md py-1 mt-2 hover:bg-slate-300"
            onClick={() => convertFreeTextToDialect()}
          >
            Convert
          </button>
        </div>
        <div className="flex flex-col w-1/2 h-full gap-2">
          <Label htmlFor="message">Generated dialect</Label>
          <Textarea
            placeholder="Type the text, using our dialect, that you want to be converted..."
            id="message"
            className="h-full"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="bg-slate-200 rounded-md py-1 mt-2 hover:bg-slate-300" onClick={() => handleConvert(text)}>
            Convert
          </button>
        </div>
      </div>
      <Tabs
        defaultValue={PETRI_NET}
        className="h-1/2"
        onValueChange={(v) => {
          if (v === PETRI_NET && !petriNet.startsWith(ERROR_MESSAGE)) {
            graphvizToSVG(tpn2graphviz(petriNet));
          }
        }}
      >
        <TabsList className="w-full">
          <TabsTrigger value={PETRI_NET} className="w-1/2">
            Petri Net
          </TabsTrigger>
          <TabsTrigger value={DECLARE} className="w-1/2">
            Declare
          </TabsTrigger>
        </TabsList>
        <TabsContent value={PETRI_NET} className="pb-6 h-full">
          {petriNet.startsWith(ERROR_MESSAGE) ? (
            <Textarea
              id="message"
              className={`h-[90%] w-full overflow-auto text-red-600`}
              value={petriNet}
              disabled={true}
            />
          ) : (
            <div id="graph" className="h-[90%] w-full overflow-auto"></div>
          )}
          <button
            className="bg-blue-400 text-white rounded-md py-1 mt-2 h-[10%] w-full hover:bg-blue-500 disabled:bg-blue-200"
            disabled={petriNet.startsWith(ERROR_MESSAGE)}
            onClick={() => handleDownloadFile(PETRI_NET)}
          >
            Download TPN file
          </button>
        </TabsContent>
        <TabsContent value={DECLARE} className="pb-6 h-full">
          <Textarea
            placeholder="The .decl value of the Declare Model..."
            id="message"
            className={`h-[90%] w-full overflow-auto ${declare.startsWith(ERROR_MESSAGE) && "text-red-600"}`}
            value={declare}
            disabled={true}
          />
          <button
            className="bg-blue-400 text-white rounded-md py-1 mt-2 h-[10%] w-full hover:bg-blue-500 disabled:bg-blue-200"
            disabled={declare.startsWith(ERROR_MESSAGE)}
            onClick={() => handleDownloadFile(DECLARE)}
          >
            Download DECL file
          </button>
        </TabsContent>
      </Tabs>
      {isLoading && <LoadingSpinner />}
    </div>
  );
}
