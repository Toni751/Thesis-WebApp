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

// the first element in the string is the .tpn file
// the second element in the string is the .decl file
export async function getConvertedText(text: string): Promise<string[]> {
  const modelStorage = SharedModelStorage.getInstance();
  const conversions: string[] = [];
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
      conversions.push(modelStorage.getOutputText());
    } catch (error) {
      conversions.push(ERROR_MESSAGE + error);
    }
  }

  return conversions;
}
