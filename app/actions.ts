"use server";
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { MScGrammarLexer } from "./grammar/generated/MScGrammarLexer";
import { MScGrammarParser } from "./grammar/generated/MScGrammarParser";
import { SentenceParser } from "./grammar/SentenceParser";
import { PetriNetListener } from "./grammar/PetriNetListener";
import { DeclareListener } from "./grammar/DeclareListener";
import { ContextListener } from "./grammar/ContextListener";
import { SharedModelStorage } from "./grammar/SharedModelStorage";
import { ERROR_MESSAGE } from "./constants";
import { SYSTEM_TEXT } from "./grammar/systemText";
import { openai } from "@ai-sdk/openai";
import { jsonSchema, generateText, generateObject } from "ai";
import { schema } from "./grammar/JsonSchemaActivities";

// the first element in the string is the .tpn file
// the second element in the string is the .decl file
export async function getConvertedText(text: string): Promise<string[][]> {
  const modelStorage = SharedModelStorage.getInstance();
  const conversions: string[][] = [];
  const sentenceParsers: SentenceParser[] = [];
  sentenceParsers.push(new PetriNetListener());
  sentenceParsers.push(new DeclareListener());

  for (const sentenceParser of sentenceParsers) {
    modelStorage.clear();
    try {
      let inputStream = new ANTLRInputStream(text);
      let lexer = new MScGrammarLexer(inputStream);
      let tokenStream = new CommonTokenStream(lexer);
      let parser = new MScGrammarParser(tokenStream);

      const listener = new ContextListener(sentenceParser);
      let tree = parser.description();
      ParseTreeWalker.DEFAULT.walk(listener, tree);
      conversions.push(modelStorage.getOutputTexts());
    } catch (error) {
      conversions.push([ERROR_MESSAGE + error]);
    }
  }

  return conversions;
}

export async function getNlTextConvertedToDialect(nlText: string): Promise<any> {
  const shallowSchema = {
    type: "object",
    properties: {
      convertedText: {
        type: "string",
        description: "The conversion of the input text to the target grammar.",
      },
    },
    required: ["convertedText"],
    additionalProperties: false,
  };

  const mySchema = jsonSchema<any>(shallowSchema);
  // TODO: this is for the complex schema which tries to guarantee output syntactical correctness
  // const mySchema = jsonSchema<any>(schema);

  const result = await generateObject({
    model: openai("gpt-4o-2024-11-20", {
      structuredOutputs: true,
    }),
    schemaName: "dialect",
    schemaDescription: "Representation of a text in the dialect described by the grammar",
    schema: mySchema,
    messages: [
      { role: "system", content: SYSTEM_TEXT },
      {
        role: "user",
        content: nlText,
      },
    ],
  });

  // console.log(result.object);
  return result.object;
}
