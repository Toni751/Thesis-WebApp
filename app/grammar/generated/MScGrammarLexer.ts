// Generated from app/grammar/MScGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class MScGrammarLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly WORD = 24;
	public static readonly SPACE = 25;
	public static readonly NEWLINE = 26;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "WORD", "SPACE", 
		"NEWLINE",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'The following textual description follows the closed-world assumption, meaning that only the activities specified can be executed in the specified order. Any possible activity and execution that is not specified is considered impossible.'", 
		"'Initially start '", "'.'", "'After '", "', the process finishes.'", 
		"', '", "': '", "' and '", "' or '", "'immediately '", "'eventually '", 
		"'start '", "' and start '", "'either start '", "' or start '", "'repeat since '", 
		"' ends'", "' ends and '", "'either '", "' ends or '", "'\"'", "'('", 
		"')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "WORD", "SPACE", "NEWLINE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MScGrammarLexer._LITERAL_NAMES, MScGrammarLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MScGrammarLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(MScGrammarLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "MScGrammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return MScGrammarLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return MScGrammarLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return MScGrammarLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return MScGrammarLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x1C\u01F0\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03" +
		"\x17\x03\x18\x03\x18\x03\x19\x06\x19\u01E6\n\x19\r\x19\x0E\x19\u01E7\x03" +
		"\x1A\x03\x1A\x03\x1B\x05\x1B\u01ED\n\x1B\x03\x1B\x03\x1B\x02\x02\x02\x1C" +
		"\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02" +
		"\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D" +
		"\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02" +
		"\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C\x03\x02\x04\x05\x02" +
		"2;C\\c|\x04\x02\"\"aa\x02\u01F1\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02" +
		"\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02" +
		"\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02" +
		"\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02" +
		"\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02" +
		"\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02" +
		"\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+" +
		"\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02" +
		"\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x037\x03\x02\x02\x02" +
		"\x05\u0125\x03\x02\x02\x02\x07\u0136\x03\x02\x02\x02\t\u0138\x03\x02\x02" +
		"\x02\v\u013F\x03\x02\x02\x02\r\u0157\x03\x02\x02\x02\x0F\u015A\x03\x02" +
		"\x02\x02\x11\u015D\x03\x02\x02\x02\x13\u0163\x03\x02\x02\x02\x15\u0168" +
		"\x03\x02\x02\x02\x17\u0175\x03\x02\x02\x02\x19\u0181\x03\x02\x02\x02\x1B" +
		"\u0188\x03\x02\x02\x02\x1D\u0194\x03\x02\x02\x02\x1F\u01A2\x03\x02\x02" +
		"\x02!\u01AD\x03\x02\x02\x02#\u01BB\x03\x02\x02\x02%\u01C1\x03\x02\x02" +
		"\x02\'\u01CC\x03\x02\x02\x02)\u01D4\x03\x02\x02\x02+\u01DE\x03\x02\x02" +
		"\x02-\u01E0\x03\x02\x02\x02/\u01E2\x03\x02\x02\x021\u01E5\x03\x02\x02" +
		"\x023\u01E9\x03\x02\x02\x025\u01EC\x03\x02\x02\x0278\x07V\x02\x0289\x07" +
		"j\x02\x029:\x07g\x02\x02:;\x07\"\x02\x02;<\x07h\x02\x02<=\x07q\x02\x02" +
		"=>\x07n\x02\x02>?\x07n\x02\x02?@\x07q\x02\x02@A\x07y\x02\x02AB\x07k\x02" +
		"\x02BC\x07p\x02\x02CD\x07i\x02\x02DE\x07\"\x02\x02EF\x07v\x02\x02FG\x07" +
		"g\x02\x02GH\x07z\x02\x02HI\x07v\x02\x02IJ\x07w\x02\x02JK\x07c\x02\x02" +
		"KL\x07n\x02\x02LM\x07\"\x02\x02MN\x07f\x02\x02NO\x07g\x02\x02OP\x07u\x02" +
		"\x02PQ\x07e\x02\x02QR\x07t\x02\x02RS\x07k\x02\x02ST\x07r\x02\x02TU\x07" +
		"v\x02\x02UV\x07k\x02\x02VW\x07q\x02\x02WX\x07p\x02\x02XY\x07\"\x02\x02" +
		"YZ\x07h\x02\x02Z[\x07q\x02\x02[\\\x07n\x02\x02\\]\x07n\x02\x02]^\x07q" +
		"\x02\x02^_\x07y\x02\x02_`\x07u\x02\x02`a\x07\"\x02\x02ab\x07v\x02\x02" +
		"bc\x07j\x02\x02cd\x07g\x02\x02de\x07\"\x02\x02ef\x07e\x02\x02fg\x07n\x02" +
		"\x02gh\x07q\x02\x02hi\x07u\x02\x02ij\x07g\x02\x02jk\x07f\x02\x02kl\x07" +
		"/\x02\x02lm\x07y\x02\x02mn\x07q\x02\x02no\x07t\x02\x02op\x07n\x02\x02" +
		"pq\x07f\x02\x02qr\x07\"\x02\x02rs\x07c\x02\x02st\x07u\x02\x02tu\x07u\x02" +
		"\x02uv\x07w\x02\x02vw\x07o\x02\x02wx\x07r\x02\x02xy\x07v\x02\x02yz\x07" +
		"k\x02\x02z{\x07q\x02\x02{|\x07p\x02\x02|}\x07.\x02\x02}~\x07\"\x02\x02" +
		"~\x7F\x07o\x02\x02\x7F\x80\x07g\x02\x02\x80\x81\x07c\x02\x02\x81\x82\x07" +
		"p\x02\x02\x82\x83\x07k\x02\x02\x83\x84\x07p\x02\x02\x84\x85\x07i\x02\x02" +
		"\x85\x86\x07\"\x02\x02\x86\x87\x07v\x02\x02\x87\x88\x07j\x02\x02\x88\x89" +
		"\x07c\x02\x02\x89\x8A\x07v\x02\x02\x8A\x8B\x07\"\x02\x02\x8B\x8C\x07q" +
		"\x02\x02\x8C\x8D\x07p\x02\x02\x8D\x8E\x07n\x02\x02\x8E\x8F\x07{\x02\x02" +
		"\x8F\x90\x07\"\x02\x02\x90\x91\x07v\x02\x02\x91\x92\x07j\x02\x02\x92\x93" +
		"\x07g\x02\x02\x93\x94\x07\"\x02\x02\x94\x95\x07c\x02\x02\x95\x96\x07e" +
		"\x02\x02\x96\x97\x07v\x02\x02\x97\x98\x07k\x02\x02\x98\x99\x07x\x02\x02" +
		"\x99\x9A\x07k\x02\x02\x9A\x9B\x07v\x02\x02\x9B\x9C\x07k\x02\x02\x9C\x9D" +
		"\x07g\x02\x02\x9D\x9E\x07u\x02\x02\x9E\x9F\x07\"\x02\x02\x9F\xA0\x07u" +
		"\x02\x02\xA0\xA1\x07r\x02\x02\xA1\xA2\x07g\x02\x02\xA2\xA3\x07e\x02\x02" +
		"\xA3\xA4\x07k\x02\x02\xA4\xA5\x07h\x02\x02\xA5\xA6\x07k\x02\x02\xA6\xA7" +
		"\x07g\x02\x02\xA7\xA8\x07f\x02\x02\xA8\xA9\x07\"\x02\x02\xA9\xAA\x07e" +
		"\x02\x02\xAA\xAB\x07c\x02\x02\xAB\xAC\x07p\x02\x02\xAC\xAD\x07\"\x02\x02" +
		"\xAD\xAE\x07d\x02\x02\xAE\xAF\x07g\x02\x02\xAF\xB0\x07\"\x02\x02\xB0\xB1" +
		"\x07g\x02\x02\xB1\xB2\x07z\x02\x02\xB2\xB3\x07g\x02\x02\xB3\xB4\x07e\x02" +
		"\x02\xB4\xB5\x07w\x02\x02\xB5\xB6\x07v\x02\x02\xB6\xB7\x07g\x02\x02\xB7" +
		"\xB8\x07f\x02\x02\xB8\xB9\x07\"\x02\x02\xB9\xBA\x07k\x02\x02\xBA\xBB\x07" +
		"p\x02\x02\xBB\xBC\x07\"\x02\x02\xBC\xBD\x07v\x02\x02\xBD\xBE\x07j\x02" +
		"\x02\xBE\xBF\x07g\x02\x02\xBF\xC0\x07\"\x02\x02\xC0\xC1\x07u\x02\x02\xC1" +
		"\xC2\x07r\x02\x02\xC2\xC3\x07g\x02\x02\xC3\xC4\x07e\x02\x02\xC4\xC5\x07" +
		"k\x02\x02\xC5\xC6\x07h\x02\x02\xC6\xC7\x07k\x02\x02\xC7\xC8\x07g\x02\x02" +
		"\xC8\xC9\x07f\x02\x02\xC9\xCA\x07\"\x02\x02\xCA\xCB\x07q\x02\x02\xCB\xCC" +
		"\x07t\x02\x02\xCC\xCD\x07f\x02\x02\xCD\xCE\x07g\x02\x02\xCE\xCF\x07t\x02" +
		"\x02\xCF\xD0\x070\x02\x02\xD0\xD1\x07\"\x02\x02\xD1\xD2\x07C\x02\x02\xD2" +
		"\xD3\x07p\x02\x02\xD3\xD4\x07{\x02\x02\xD4\xD5\x07\"\x02\x02\xD5\xD6\x07" +
		"r\x02\x02\xD6\xD7\x07q\x02\x02\xD7\xD8\x07u\x02\x02\xD8\xD9\x07u\x02\x02" +
		"\xD9\xDA\x07k\x02\x02\xDA\xDB\x07d\x02\x02\xDB\xDC\x07n\x02\x02\xDC\xDD" +
		"\x07g\x02\x02\xDD\xDE\x07\"\x02\x02\xDE\xDF\x07c\x02\x02\xDF\xE0\x07e" +
		"\x02\x02\xE0\xE1\x07v\x02\x02\xE1\xE2\x07k\x02\x02\xE2\xE3\x07x\x02\x02" +
		"\xE3\xE4\x07k\x02\x02\xE4\xE5\x07v\x02\x02\xE5\xE6\x07{\x02\x02\xE6\xE7" +
		"\x07\"\x02\x02\xE7\xE8\x07c\x02\x02\xE8\xE9\x07p\x02\x02\xE9\xEA\x07f" +
		"\x02\x02\xEA\xEB\x07\"\x02\x02\xEB\xEC\x07g\x02\x02\xEC\xED\x07z\x02\x02" +
		"\xED\xEE\x07g\x02\x02\xEE\xEF\x07e\x02\x02\xEF\xF0\x07w\x02\x02\xF0\xF1" +
		"\x07v\x02\x02\xF1\xF2\x07k\x02\x02\xF2\xF3\x07q\x02\x02\xF3\xF4\x07p\x02" +
		"\x02\xF4\xF5\x07\"\x02\x02\xF5\xF6\x07v\x02\x02\xF6\xF7\x07j\x02\x02\xF7" +
		"\xF8\x07c\x02\x02\xF8\xF9\x07v\x02\x02\xF9\xFA\x07\"\x02\x02\xFA\xFB\x07" +
		"k\x02\x02\xFB\xFC\x07u\x02\x02\xFC\xFD\x07\"\x02\x02\xFD\xFE\x07p\x02" +
		"\x02\xFE\xFF\x07q\x02\x02\xFF\u0100\x07v\x02\x02\u0100\u0101\x07\"\x02" +
		"\x02\u0101\u0102\x07u\x02\x02\u0102\u0103\x07r\x02\x02\u0103\u0104\x07" +
		"g\x02\x02\u0104\u0105\x07e\x02\x02\u0105\u0106\x07k\x02\x02\u0106\u0107" +
		"\x07h\x02\x02\u0107\u0108\x07k\x02\x02\u0108\u0109\x07g\x02\x02\u0109" +
		"\u010A\x07f\x02\x02\u010A\u010B\x07\"\x02\x02\u010B\u010C\x07k\x02\x02" +
		"\u010C\u010D\x07u\x02\x02\u010D\u010E\x07\"\x02\x02\u010E\u010F\x07e\x02" +
		"\x02\u010F\u0110\x07q\x02\x02\u0110\u0111\x07p\x02\x02\u0111\u0112\x07" +
		"u\x02\x02\u0112\u0113\x07k\x02\x02\u0113\u0114\x07f\x02\x02\u0114\u0115" +
		"\x07g\x02\x02\u0115\u0116\x07t\x02\x02\u0116\u0117\x07g\x02\x02\u0117" +
		"\u0118\x07f\x02\x02\u0118\u0119\x07\"\x02\x02\u0119\u011A\x07k\x02\x02" +
		"\u011A\u011B\x07o\x02\x02\u011B\u011C\x07r\x02\x02\u011C\u011D\x07q\x02" +
		"\x02\u011D\u011E\x07u\x02\x02\u011E\u011F\x07u\x02\x02\u011F\u0120\x07" +
		"k\x02\x02\u0120\u0121\x07d\x02\x02\u0121\u0122\x07n\x02\x02\u0122\u0123" +
		"\x07g\x02\x02\u0123\u0124\x070\x02\x02\u0124\x04\x03\x02\x02\x02\u0125" +
		"\u0126\x07K\x02\x02\u0126\u0127\x07p\x02\x02\u0127\u0128\x07k\x02\x02" +
		"\u0128\u0129\x07v\x02\x02\u0129\u012A\x07k\x02\x02\u012A\u012B\x07c\x02" +
		"\x02\u012B\u012C\x07n\x02\x02\u012C\u012D\x07n\x02\x02\u012D\u012E\x07" +
		"{\x02\x02\u012E\u012F\x07\"\x02\x02\u012F\u0130\x07u\x02\x02\u0130\u0131" +
		"\x07v\x02\x02\u0131\u0132\x07c\x02\x02\u0132\u0133\x07t\x02\x02\u0133" +
		"\u0134\x07v\x02\x02\u0134\u0135\x07\"\x02\x02\u0135\x06\x03\x02\x02\x02" +
		"\u0136\u0137\x070\x02\x02\u0137\b\x03\x02\x02\x02\u0138\u0139\x07C\x02" +
		"\x02\u0139\u013A\x07h\x02\x02\u013A\u013B\x07v\x02\x02\u013B\u013C\x07" +
		"g\x02\x02\u013C\u013D\x07t\x02\x02\u013D\u013E\x07\"\x02\x02\u013E\n\x03" +
		"\x02\x02\x02\u013F\u0140\x07.\x02\x02\u0140\u0141\x07\"\x02\x02\u0141" +
		"\u0142\x07v\x02\x02\u0142\u0143\x07j\x02\x02\u0143\u0144\x07g\x02\x02" +
		"\u0144\u0145\x07\"\x02\x02\u0145\u0146\x07r\x02\x02\u0146\u0147\x07t\x02" +
		"\x02\u0147\u0148\x07q\x02\x02\u0148\u0149\x07e\x02\x02\u0149\u014A\x07" +
		"g\x02\x02\u014A\u014B\x07u\x02\x02\u014B\u014C\x07u\x02\x02\u014C\u014D" +
		"\x07\"\x02\x02\u014D\u014E\x07h\x02\x02\u014E\u014F\x07k\x02\x02\u014F" +
		"\u0150\x07p\x02\x02\u0150\u0151\x07k\x02\x02\u0151\u0152\x07u\x02\x02" +
		"\u0152\u0153\x07j\x02\x02\u0153\u0154\x07g\x02\x02\u0154\u0155\x07u\x02" +
		"\x02\u0155\u0156\x070\x02\x02\u0156\f\x03\x02\x02\x02\u0157\u0158\x07" +
		".\x02\x02\u0158\u0159\x07\"\x02\x02\u0159\x0E\x03\x02\x02\x02\u015A\u015B" +
		"\x07<\x02\x02\u015B\u015C\x07\"\x02\x02\u015C\x10\x03\x02\x02\x02\u015D" +
		"\u015E\x07\"\x02\x02\u015E\u015F\x07c\x02\x02\u015F\u0160\x07p\x02\x02" +
		"\u0160\u0161\x07f\x02\x02\u0161\u0162\x07\"\x02\x02\u0162\x12\x03\x02" +
		"\x02\x02\u0163\u0164\x07\"\x02\x02\u0164\u0165\x07q\x02\x02\u0165\u0166" +
		"\x07t\x02\x02\u0166\u0167\x07\"\x02\x02\u0167\x14\x03\x02\x02\x02\u0168" +
		"\u0169\x07k\x02\x02\u0169\u016A\x07o\x02\x02\u016A\u016B\x07o\x02\x02" +
		"\u016B\u016C\x07g\x02\x02\u016C\u016D\x07f\x02\x02\u016D\u016E\x07k\x02" +
		"\x02\u016E\u016F\x07c\x02\x02\u016F\u0170\x07v\x02\x02\u0170\u0171\x07" +
		"g\x02\x02\u0171\u0172\x07n\x02\x02\u0172\u0173\x07{\x02\x02\u0173\u0174" +
		"\x07\"\x02\x02\u0174\x16\x03\x02\x02\x02\u0175\u0176\x07g\x02\x02\u0176" +
		"\u0177\x07x\x02\x02\u0177\u0178\x07g\x02\x02\u0178\u0179\x07p\x02\x02" +
		"\u0179\u017A\x07v\x02\x02\u017A\u017B\x07w\x02\x02\u017B\u017C\x07c\x02" +
		"\x02\u017C\u017D\x07n\x02\x02\u017D\u017E\x07n\x02\x02\u017E\u017F\x07" +
		"{\x02\x02\u017F\u0180\x07\"\x02\x02\u0180\x18\x03\x02\x02\x02\u0181\u0182" +
		"\x07u\x02\x02\u0182\u0183\x07v\x02\x02\u0183\u0184\x07c\x02\x02\u0184" +
		"\u0185\x07t\x02\x02\u0185\u0186\x07v\x02\x02\u0186\u0187\x07\"\x02\x02" +
		"\u0187\x1A\x03\x02\x02\x02\u0188\u0189\x07\"\x02\x02\u0189\u018A\x07c" +
		"\x02\x02\u018A\u018B\x07p\x02\x02\u018B\u018C\x07f\x02\x02\u018C\u018D" +
		"\x07\"\x02\x02\u018D\u018E\x07u\x02\x02\u018E\u018F\x07v\x02\x02\u018F" +
		"\u0190\x07c\x02\x02\u0190\u0191\x07t\x02\x02\u0191\u0192\x07v\x02\x02" +
		"\u0192\u0193\x07\"\x02\x02\u0193\x1C\x03\x02\x02\x02\u0194\u0195\x07g" +
		"\x02\x02\u0195\u0196\x07k\x02\x02\u0196\u0197\x07v\x02\x02\u0197\u0198" +
		"\x07j\x02\x02\u0198\u0199\x07g\x02\x02\u0199\u019A\x07t\x02\x02\u019A" +
		"\u019B\x07\"\x02\x02\u019B\u019C\x07u\x02\x02\u019C\u019D\x07v\x02\x02" +
		"\u019D\u019E\x07c\x02\x02\u019E\u019F\x07t\x02\x02\u019F\u01A0\x07v\x02" +
		"\x02\u01A0\u01A1\x07\"\x02\x02\u01A1\x1E\x03\x02\x02\x02\u01A2\u01A3\x07" +
		"\"\x02\x02\u01A3\u01A4\x07q\x02\x02\u01A4\u01A5\x07t\x02\x02\u01A5\u01A6" +
		"\x07\"\x02\x02\u01A6\u01A7\x07u\x02\x02\u01A7\u01A8\x07v\x02\x02\u01A8" +
		"\u01A9\x07c\x02\x02\u01A9\u01AA\x07t\x02\x02\u01AA\u01AB\x07v\x02\x02" +
		"\u01AB\u01AC\x07\"\x02\x02\u01AC \x03\x02\x02\x02\u01AD\u01AE\x07t\x02" +
		"\x02\u01AE\u01AF\x07g\x02\x02\u01AF\u01B0\x07r\x02\x02\u01B0\u01B1\x07" +
		"g\x02\x02\u01B1\u01B2\x07c\x02\x02\u01B2\u01B3\x07v\x02\x02\u01B3\u01B4" +
		"\x07\"\x02\x02\u01B4\u01B5\x07u\x02\x02\u01B5\u01B6\x07k\x02\x02\u01B6" +
		"\u01B7\x07p\x02\x02\u01B7\u01B8\x07e\x02\x02\u01B8\u01B9\x07g\x02\x02" +
		"\u01B9\u01BA\x07\"\x02\x02\u01BA\"\x03\x02\x02\x02\u01BB\u01BC\x07\"\x02" +
		"\x02\u01BC\u01BD\x07g\x02\x02\u01BD\u01BE\x07p\x02\x02\u01BE\u01BF\x07" +
		"f\x02\x02\u01BF\u01C0\x07u\x02\x02\u01C0$\x03\x02\x02\x02\u01C1\u01C2" +
		"\x07\"\x02\x02\u01C2\u01C3\x07g\x02\x02\u01C3\u01C4\x07p\x02\x02\u01C4" +
		"\u01C5\x07f\x02\x02\u01C5\u01C6\x07u\x02\x02\u01C6\u01C7\x07\"\x02\x02" +
		"\u01C7\u01C8\x07c\x02\x02\u01C8\u01C9\x07p\x02\x02\u01C9\u01CA\x07f\x02" +
		"\x02\u01CA\u01CB\x07\"\x02\x02\u01CB&\x03\x02\x02\x02\u01CC\u01CD\x07" +
		"g\x02\x02\u01CD\u01CE\x07k\x02\x02\u01CE\u01CF\x07v\x02\x02\u01CF\u01D0" +
		"\x07j\x02\x02\u01D0\u01D1\x07g\x02\x02\u01D1\u01D2\x07t\x02\x02\u01D2" +
		"\u01D3\x07\"\x02\x02\u01D3(\x03\x02\x02\x02\u01D4\u01D5\x07\"\x02\x02" +
		"\u01D5\u01D6\x07g\x02\x02\u01D6\u01D7\x07p\x02\x02\u01D7\u01D8\x07f\x02" +
		"\x02\u01D8\u01D9\x07u\x02\x02\u01D9\u01DA\x07\"\x02\x02\u01DA\u01DB\x07" +
		"q\x02\x02\u01DB\u01DC\x07t\x02\x02\u01DC\u01DD\x07\"\x02\x02\u01DD*\x03" +
		"\x02\x02\x02\u01DE\u01DF\x07$\x02\x02\u01DF,\x03\x02\x02\x02\u01E0\u01E1" +
		"\x07*\x02\x02\u01E1.\x03\x02\x02\x02\u01E2\u01E3\x07+\x02\x02\u01E30\x03" +
		"\x02\x02\x02\u01E4\u01E6\t\x02\x02\x02\u01E5\u01E4\x03\x02\x02\x02\u01E6" +
		"\u01E7\x03\x02\x02\x02\u01E7\u01E5\x03\x02\x02\x02\u01E7\u01E8\x03\x02" +
		"\x02\x02\u01E82\x03\x02\x02\x02\u01E9\u01EA\t\x03\x02\x02\u01EA4\x03\x02" +
		"\x02\x02\u01EB\u01ED\x07\x0F\x02\x02\u01EC\u01EB\x03\x02\x02\x02\u01EC" +
		"\u01ED\x03\x02\x02\x02\u01ED\u01EE\x03\x02\x02\x02\u01EE\u01EF\x07\f\x02" +
		"\x02\u01EF6\x03\x02\x02\x02\x05\x02\u01E7\u01EC\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MScGrammarLexer.__ATN) {
			MScGrammarLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MScGrammarLexer._serializedATN));
		}

		return MScGrammarLexer.__ATN;
	}

}

