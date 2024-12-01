"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GRAMMAR_TEST } from "./grammar/examples/input/grammar_test";
import { getConvertedText } from "./actions";
import { instance } from "@viz-js/viz";

export default function Home() {
  const [text, setText] = useState(GRAMMAR_TEST);
  // const [petriNet, setPetriNet] = useState("");
  const [declare, setDeclare] = useState("");
  // const [tpnSvg, setTpnSvg] = useState<any>("");

  const handleConvert = async () => {
    // console.log("Converting", text);
    const conversions = await getConvertedText(text);
    // console.log("Conversions", conversions);
    setDeclare(conversions[1]);
    graphvizToSVG(tpn2graphviz(conversions[0]));
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

  return (
    <div className="flex flex-row gap-4 items-center justify-center w-full h-screen p-12">
      <div className="flex flex-col w-1/2 gap-1.5 h-full">
        <Label htmlFor="message">Text to be converted</Label>
        <Textarea
          placeholder="Type the text you want to be converted..."
          id="message"
          className="h-full"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="w-full bg-slate-200 rounded-md py-1 mt-2 hover:bg-slate-300" onClick={() => handleConvert()}>
          Convert
        </button>
      </div>
      <div className="w-1/2 flex flex-col h-full mb-16">
        <Tabs defaultValue="petriNet" className="h-full">
          <TabsList className="w-full">
            <TabsTrigger value="petriNet" className="w-1/2">
              Petri Net
            </TabsTrigger>
            <TabsTrigger value="declare" className="w-1/2">
              Declare
            </TabsTrigger>
          </TabsList>
          <TabsContent value="petriNet" className="h-full">
            {/* <Textarea
              placeholder="The .tpn value of the Petri Net..."
              id="message"
              className="h-full"
              value={petriNet}
              disabled={true}
            /> */}
            <div id="graph" className="h-full overflow-auto"></div>
          </TabsContent>
          <TabsContent value="declare" className="h-full">
            <Textarea
              placeholder="The .tpn value of the Declare Model..."
              id="message"
              className="h-full"
              value={declare}
              disabled={true}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
