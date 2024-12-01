// Generated from app/grammar/MScGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { MScGrammarListener } from "./MScGrammarListener";

export class MScGrammarParser extends Parser {
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
	public static readonly RULE_description = 0;
	public static readonly RULE_leadingStatement = 1;
	public static readonly RULE_initialStatement = 2;
	public static readonly RULE_closingStatement = 3;
	public static readonly RULE_statementList = 4;
	public static readonly RULE_statement = 5;
	public static readonly RULE_afterStatement = 6;
	public static readonly RULE_asp = 7;
	public static readonly RULE_osp = 8;
	public static readonly RULE_immediatelyExpression = 9;
	public static readonly RULE_eventuallyExpression = 10;
	public static readonly RULE_sequencePreActivityExpression = 11;
	public static readonly RULE_andPreActivityExpression = 12;
	public static readonly RULE_orPreActivityExpression = 13;
	public static readonly RULE_repeatSincePreActivityExpression = 14;
	public static readonly RULE_postActivityExpression = 15;
	public static readonly RULE_sequencePostActivityExpression = 16;
	public static readonly RULE_andPostActivityExpression = 17;
	public static readonly RULE_orPostActivityExpression = 18;
	public static readonly RULE_activity = 19;
	public static readonly RULE_aspId = 20;
	public static readonly RULE_ospId = 21;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"description", "leadingStatement", "initialStatement", "closingStatement", 
		"statementList", "statement", "afterStatement", "asp", "osp", "immediatelyExpression", 
		"eventuallyExpression", "sequencePreActivityExpression", "andPreActivityExpression", 
		"orPreActivityExpression", "repeatSincePreActivityExpression", "postActivityExpression", 
		"sequencePostActivityExpression", "andPostActivityExpression", "orPostActivityExpression", 
		"activity", "aspId", "ospId",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'The following textual description follows the closed-world assumption, meaning that only the activities specified can be executed in the specified order. Any possible activity and execution that is not specified is considered impossible.'", 
		"'Initially start '", "'.'", "'After '", "' ends, the process finishes.'", 
		"', '", "': '", "' and '", "' or '", "'immediately '", "'eventually '", 
		"'start '", "' and start '", "'either start '", "' or start '", "'either repeat since '", 
		"' ends'", "' ends and '", "'either '", "' ends or '", "'\"'", "'('", 
		"')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "WORD", "SPACE", "NEWLINE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MScGrammarParser._LITERAL_NAMES, MScGrammarParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MScGrammarParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "MScGrammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return MScGrammarParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return MScGrammarParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(MScGrammarParser._ATN, this);
	}
	// @RuleVersion(0)
	public description(): DescriptionContext {
		let _localctx: DescriptionContext = new DescriptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, MScGrammarParser.RULE_description);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 44;
			this.leadingStatement();
			this.state = 45;
			this.initialStatement();
			this.state = 47;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 46;
				this.statementList();
				}
				break;
			}
			this.state = 49;
			this.closingStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public leadingStatement(): LeadingStatementContext {
		let _localctx: LeadingStatementContext = new LeadingStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, MScGrammarParser.RULE_leadingStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 51;
			this.match(MScGrammarParser.T__0);
			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MScGrammarParser.NEWLINE) {
				{
				{
				this.state = 52;
				this.match(MScGrammarParser.NEWLINE);
				}
				}
				this.state = 57;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initialStatement(): InitialStatementContext {
		let _localctx: InitialStatementContext = new InitialStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, MScGrammarParser.RULE_initialStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 58;
			this.match(MScGrammarParser.T__1);
			this.state = 59;
			this.activity();
			this.state = 60;
			this.match(MScGrammarParser.T__2);
			this.state = 64;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MScGrammarParser.NEWLINE) {
				{
				{
				this.state = 61;
				this.match(MScGrammarParser.NEWLINE);
				}
				}
				this.state = 66;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public closingStatement(): ClosingStatementContext {
		let _localctx: ClosingStatementContext = new ClosingStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, MScGrammarParser.RULE_closingStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this.match(MScGrammarParser.T__3);
			this.state = 68;
			this.activity();
			this.state = 69;
			this.match(MScGrammarParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementList(): StatementListContext {
		let _localctx: StatementListContext = new StatementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, MScGrammarParser.RULE_statementList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
			this.statement();
			this.state = 75;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 72;
					this.statement();
					}
					}
				}
				this.state = 77;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, MScGrammarParser.RULE_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 81;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 78;
				this.afterStatement();
				}
				break;

			case 2:
				{
				this.state = 79;
				this.asp();
				}
				break;

			case 3:
				{
				this.state = 80;
				this.osp();
				}
				break;
			}
			this.state = 86;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MScGrammarParser.NEWLINE) {
				{
				{
				this.state = 83;
				this.match(MScGrammarParser.NEWLINE);
				}
				}
				this.state = 88;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public afterStatement(): AfterStatementContext {
		let _localctx: AfterStatementContext = new AfterStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, MScGrammarParser.RULE_afterStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 89;
			this.match(MScGrammarParser.T__3);
			this.state = 90;
			this.postActivityExpression();
			this.state = 91;
			this.match(MScGrammarParser.T__5);
			this.state = 94;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MScGrammarParser.T__9:
				{
				this.state = 92;
				this.immediatelyExpression();
				}
				break;
			case MScGrammarParser.T__10:
				{
				this.state = 93;
				this.eventuallyExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 96;
			this.match(MScGrammarParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public asp(): AspContext {
		let _localctx: AspContext = new AspContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, MScGrammarParser.RULE_asp);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this.aspId();
			this.state = 99;
			this.match(MScGrammarParser.T__6);
			this.state = 100;
			this.activity();
			this.state = 101;
			this.match(MScGrammarParser.T__7);
			this.state = 102;
			this.activity();
			this.state = 107;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 103;
					this.match(MScGrammarParser.T__7);
					this.state = 104;
					this.activity();
					}
					}
				}
				this.state = 109;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			}
			this.state = 110;
			this.match(MScGrammarParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public osp(): OspContext {
		let _localctx: OspContext = new OspContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, MScGrammarParser.RULE_osp);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 112;
			this.ospId();
			this.state = 113;
			this.match(MScGrammarParser.T__6);
			this.state = 114;
			this.activity();
			this.state = 115;
			this.match(MScGrammarParser.T__8);
			this.state = 116;
			this.activity();
			this.state = 121;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 117;
					this.match(MScGrammarParser.T__8);
					this.state = 118;
					this.activity();
					}
					}
				}
				this.state = 123;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
			this.state = 124;
			this.match(MScGrammarParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public immediatelyExpression(): ImmediatelyExpressionContext {
		let _localctx: ImmediatelyExpressionContext = new ImmediatelyExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, MScGrammarParser.RULE_immediatelyExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 126;
			this.match(MScGrammarParser.T__9);
			this.state = 131;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 127;
				this.sequencePreActivityExpression();
				}
				break;

			case 2:
				{
				this.state = 128;
				this.andPreActivityExpression();
				}
				break;

			case 3:
				{
				this.state = 129;
				this.orPreActivityExpression();
				}
				break;

			case 4:
				{
				this.state = 130;
				this.repeatSincePreActivityExpression();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventuallyExpression(): EventuallyExpressionContext {
		let _localctx: EventuallyExpressionContext = new EventuallyExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, MScGrammarParser.RULE_eventuallyExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			this.match(MScGrammarParser.T__10);
			this.state = 134;
			this.sequencePreActivityExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sequencePreActivityExpression(): SequencePreActivityExpressionContext {
		let _localctx: SequencePreActivityExpressionContext = new SequencePreActivityExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, MScGrammarParser.RULE_sequencePreActivityExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 136;
			this.match(MScGrammarParser.T__11);
			this.state = 137;
			this.activity();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public andPreActivityExpression(): AndPreActivityExpressionContext {
		let _localctx: AndPreActivityExpressionContext = new AndPreActivityExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, MScGrammarParser.RULE_andPreActivityExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 139;
			this.match(MScGrammarParser.T__11);
			this.state = 142;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MScGrammarParser.T__20:
				{
				this.state = 140;
				this.activity();
				}
				break;
			case MScGrammarParser.T__21:
				{
				this.state = 141;
				this.ospId();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 144;
			this.match(MScGrammarParser.T__12);
			this.state = 147;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MScGrammarParser.T__20:
				{
				this.state = 145;
				this.activity();
				}
				break;
			case MScGrammarParser.T__21:
				{
				this.state = 146;
				this.ospId();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 156;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 149;
					this.match(MScGrammarParser.T__12);
					this.state = 152;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case MScGrammarParser.T__20:
						{
						this.state = 150;
						this.activity();
						}
						break;
					case MScGrammarParser.T__21:
						{
						this.state = 151;
						this.ospId();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 158;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orPreActivityExpression(): OrPreActivityExpressionContext {
		let _localctx: OrPreActivityExpressionContext = new OrPreActivityExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, MScGrammarParser.RULE_orPreActivityExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 159;
			this.match(MScGrammarParser.T__13);
			this.state = 162;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MScGrammarParser.T__20:
				{
				this.state = 160;
				this.activity();
				}
				break;
			case MScGrammarParser.T__21:
				{
				this.state = 161;
				this.aspId();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 164;
			this.match(MScGrammarParser.T__14);
			this.state = 167;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MScGrammarParser.T__20:
				{
				this.state = 165;
				this.activity();
				}
				break;
			case MScGrammarParser.T__21:
				{
				this.state = 166;
				this.aspId();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 176;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 169;
					this.match(MScGrammarParser.T__14);
					this.state = 172;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case MScGrammarParser.T__20:
						{
						this.state = 170;
						this.activity();
						}
						break;
					case MScGrammarParser.T__21:
						{
						this.state = 171;
						this.aspId();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 178;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public repeatSincePreActivityExpression(): RepeatSincePreActivityExpressionContext {
		let _localctx: RepeatSincePreActivityExpressionContext = new RepeatSincePreActivityExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, MScGrammarParser.RULE_repeatSincePreActivityExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 179;
			this.match(MScGrammarParser.T__15);
			this.state = 180;
			this.activity();
			this.state = 181;
			this.match(MScGrammarParser.T__14);
			this.state = 184;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MScGrammarParser.T__20:
				{
				this.state = 182;
				this.activity();
				}
				break;
			case MScGrammarParser.T__21:
				{
				this.state = 183;
				this.aspId();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 193;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 186;
					this.match(MScGrammarParser.T__14);
					this.state = 189;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case MScGrammarParser.T__20:
						{
						this.state = 187;
						this.activity();
						}
						break;
					case MScGrammarParser.T__21:
						{
						this.state = 188;
						this.aspId();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 195;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public postActivityExpression(): PostActivityExpressionContext {
		let _localctx: PostActivityExpressionContext = new PostActivityExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, MScGrammarParser.RULE_postActivityExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 199;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				this.state = 196;
				this.sequencePostActivityExpression();
				}
				break;

			case 2:
				{
				this.state = 197;
				this.andPostActivityExpression();
				}
				break;

			case 3:
				{
				this.state = 198;
				this.orPostActivityExpression();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sequencePostActivityExpression(): SequencePostActivityExpressionContext {
		let _localctx: SequencePostActivityExpressionContext = new SequencePostActivityExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, MScGrammarParser.RULE_sequencePostActivityExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			this.activity();
			this.state = 202;
			this.match(MScGrammarParser.T__16);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public andPostActivityExpression(): AndPostActivityExpressionContext {
		let _localctx: AndPostActivityExpressionContext = new AndPostActivityExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, MScGrammarParser.RULE_andPostActivityExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 206;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MScGrammarParser.T__20:
				{
				this.state = 204;
				this.activity();
				}
				break;
			case MScGrammarParser.T__21:
				{
				this.state = 205;
				this.ospId();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 208;
			this.match(MScGrammarParser.T__17);
			this.state = 217;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 211;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case MScGrammarParser.T__20:
						{
						this.state = 209;
						this.activity();
						}
						break;
					case MScGrammarParser.T__21:
						{
						this.state = 210;
						this.ospId();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 213;
					this.match(MScGrammarParser.T__17);
					}
					}
				}
				this.state = 219;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			}
			this.state = 222;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MScGrammarParser.T__20:
				{
				this.state = 220;
				this.activity();
				}
				break;
			case MScGrammarParser.T__21:
				{
				this.state = 221;
				this.ospId();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 224;
			this.match(MScGrammarParser.T__16);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orPostActivityExpression(): OrPostActivityExpressionContext {
		let _localctx: OrPostActivityExpressionContext = new OrPostActivityExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, MScGrammarParser.RULE_orPostActivityExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
			this.match(MScGrammarParser.T__18);
			this.state = 229;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MScGrammarParser.T__20:
				{
				this.state = 227;
				this.activity();
				}
				break;
			case MScGrammarParser.T__21:
				{
				this.state = 228;
				this.aspId();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 231;
			this.match(MScGrammarParser.T__19);
			this.state = 240;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 234;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case MScGrammarParser.T__20:
						{
						this.state = 232;
						this.activity();
						}
						break;
					case MScGrammarParser.T__21:
						{
						this.state = 233;
						this.aspId();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 236;
					this.match(MScGrammarParser.T__19);
					}
					}
				}
				this.state = 242;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			}
			this.state = 245;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MScGrammarParser.T__20:
				{
				this.state = 243;
				this.activity();
				}
				break;
			case MScGrammarParser.T__21:
				{
				this.state = 244;
				this.aspId();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 247;
			this.match(MScGrammarParser.T__16);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public activity(): ActivityContext {
		let _localctx: ActivityContext = new ActivityContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, MScGrammarParser.RULE_activity);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 249;
			this.match(MScGrammarParser.T__20);
			this.state = 250;
			this.match(MScGrammarParser.WORD);
			this.state = 255;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 251;
					this.match(MScGrammarParser.SPACE);
					this.state = 252;
					this.match(MScGrammarParser.WORD);
					}
					}
				}
				this.state = 257;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			}
			this.state = 258;
			this.match(MScGrammarParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aspId(): AspIdContext {
		let _localctx: AspIdContext = new AspIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, MScGrammarParser.RULE_aspId);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 260;
			this.match(MScGrammarParser.T__21);
			this.state = 261;
			this.match(MScGrammarParser.WORD);
			this.state = 266;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 262;
					this.match(MScGrammarParser.SPACE);
					this.state = 263;
					this.match(MScGrammarParser.WORD);
					}
					}
				}
				this.state = 268;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			}
			this.state = 269;
			this.match(MScGrammarParser.T__22);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ospId(): OspIdContext {
		let _localctx: OspIdContext = new OspIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, MScGrammarParser.RULE_ospId);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 271;
			this.match(MScGrammarParser.T__21);
			this.state = 272;
			this.match(MScGrammarParser.WORD);
			this.state = 277;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 273;
					this.match(MScGrammarParser.SPACE);
					this.state = 274;
					this.match(MScGrammarParser.WORD);
					}
					}
				}
				this.state = 279;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			}
			this.state = 280;
			this.match(MScGrammarParser.T__22);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1C\u011D\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x03\x02\x03\x02\x03\x02\x05\x022\n\x02\x03\x02\x03\x02\x03\x03\x03\x03" +
		"\x07\x038\n\x03\f\x03\x0E\x03;\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x07" +
		"\x04A\n\x04\f\x04\x0E\x04D\v\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06" +
		"\x03\x06\x07\x06L\n\x06\f\x06\x0E\x06O\v\x06\x03\x07\x03\x07\x03\x07\x05" +
		"\x07T\n\x07\x03\x07\x07\x07W\n\x07\f\x07\x0E\x07Z\v\x07\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x05\ba\n\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x07\tl\n\t\f\t\x0E\to\v\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x07\nz\n\n\f\n\x0E\n}\v\n\x03\n\x03\n\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x05\v\x86\n\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E" +
		"\x03\x0E\x03\x0E\x05\x0E\x91\n\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\x96" +
		"\n\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\x9B\n\x0E\x07\x0E\x9D\n\x0E\f\x0E" +
		"\x0E\x0E\xA0\v\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xA5\n\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x05\x0F\xAA\n\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xAF\n\x0F" +
		"\x07\x0F\xB1\n\x0F\f\x0F\x0E\x0F\xB4\v\x0F\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x05\x10\xBB\n\x10\x03\x10\x03\x10\x03\x10\x05\x10\xC0\n\x10" +
		"\x07\x10\xC2\n\x10\f\x10\x0E\x10\xC5\v\x10\x03\x11\x03\x11\x03\x11\x05" +
		"\x11\xCA\n\x11\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x05\x13\xD1\n\x13" +
		"\x03\x13\x03\x13\x03\x13\x05\x13\xD6\n\x13\x03\x13\x03\x13\x07\x13\xDA" +
		"\n\x13\f\x13\x0E\x13\xDD\v\x13\x03\x13\x03\x13\x05\x13\xE1\n\x13\x03\x13" +
		"\x03\x13\x03\x14\x03\x14\x03\x14\x05\x14\xE8\n\x14\x03\x14\x03\x14\x03" +
		"\x14\x05\x14\xED\n\x14\x03\x14\x03\x14\x07\x14\xF1\n\x14\f\x14\x0E\x14" +
		"\xF4\v\x14\x03\x14\x03\x14\x05\x14\xF8\n\x14\x03\x14\x03\x14\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x07\x15\u0100\n\x15\f\x15\x0E\x15\u0103\v\x15\x03" +
		"\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u010B\n\x16\f\x16" +
		"\x0E\x16\u010E\v\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x07" +
		"\x17\u0116\n\x17\f\x17\x0E\x17\u0119\v\x17\x03\x17\x03\x17\x03\x17\rM" +
		"m{\x9E\xB2\xC3\xDB\xF2\u0101\u010C\u0117\x02\x02\x18\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02\x02\x02\x02" +
		"\u012B\x02.\x03\x02\x02\x02\x045\x03\x02\x02\x02\x06<\x03\x02\x02\x02" +
		"\bE\x03\x02\x02\x02\nI\x03\x02\x02\x02\fS\x03\x02\x02\x02\x0E[\x03\x02" +
		"\x02\x02\x10d\x03\x02\x02\x02\x12r\x03\x02\x02\x02\x14\x80\x03\x02\x02" +
		"\x02\x16\x87\x03\x02\x02\x02\x18\x8A\x03\x02\x02\x02\x1A\x8D\x03\x02\x02" +
		"\x02\x1C\xA1\x03\x02\x02\x02\x1E\xB5\x03\x02\x02\x02 \xC9\x03\x02\x02" +
		"\x02\"\xCB\x03\x02\x02\x02$\xD0\x03\x02\x02\x02&\xE4\x03\x02\x02\x02(" +
		"\xFB\x03\x02\x02\x02*\u0106\x03\x02\x02\x02,\u0111\x03\x02\x02\x02./\x05" +
		"\x04\x03\x02/1\x05\x06\x04\x0202\x05\n\x06\x0210\x03\x02\x02\x0212\x03" +
		"\x02\x02\x0223\x03\x02\x02\x0234\x05\b\x05\x024\x03\x03\x02\x02\x0259" +
		"\x07\x03\x02\x0268\x07\x1C\x02\x0276\x03\x02\x02\x028;\x03\x02\x02\x02" +
		"97\x03\x02\x02\x029:\x03\x02\x02\x02:\x05\x03\x02\x02\x02;9\x03\x02\x02" +
		"\x02<=\x07\x04\x02\x02=>\x05(\x15\x02>B\x07\x05\x02\x02?A\x07\x1C\x02" +
		"\x02@?\x03\x02\x02\x02AD\x03\x02\x02\x02B@\x03\x02\x02\x02BC\x03\x02\x02" +
		"\x02C\x07\x03\x02\x02\x02DB\x03\x02\x02\x02EF\x07\x06\x02\x02FG\x05(\x15" +
		"\x02GH\x07\x07\x02\x02H\t\x03\x02\x02\x02IM\x05\f\x07\x02JL\x05\f\x07" +
		"\x02KJ\x03\x02\x02\x02LO\x03\x02\x02\x02MN\x03\x02\x02\x02MK\x03\x02\x02" +
		"\x02N\v\x03\x02\x02\x02OM\x03\x02\x02\x02PT\x05\x0E\b\x02QT\x05\x10\t" +
		"\x02RT\x05\x12\n\x02SP\x03\x02\x02\x02SQ\x03\x02\x02\x02SR\x03\x02\x02" +
		"\x02TX\x03\x02\x02\x02UW\x07\x1C\x02\x02VU\x03\x02\x02\x02WZ\x03\x02\x02" +
		"\x02XV\x03\x02\x02\x02XY\x03\x02\x02\x02Y\r\x03\x02\x02\x02ZX\x03\x02" +
		"\x02\x02[\\\x07\x06\x02\x02\\]\x05 \x11\x02]`\x07\b\x02\x02^a\x05\x14" +
		"\v\x02_a\x05\x16\f\x02`^\x03\x02\x02\x02`_\x03\x02\x02\x02ab\x03\x02\x02" +
		"\x02bc\x07\x05\x02\x02c\x0F\x03\x02\x02\x02de\x05*\x16\x02ef\x07\t\x02" +
		"\x02fg\x05(\x15\x02gh\x07\n\x02\x02hm\x05(\x15\x02ij\x07\n\x02\x02jl\x05" +
		"(\x15\x02ki\x03\x02\x02\x02lo\x03\x02\x02\x02mn\x03\x02\x02\x02mk\x03" +
		"\x02\x02\x02np\x03\x02\x02\x02om\x03\x02\x02\x02pq\x07\x05\x02\x02q\x11" +
		"\x03\x02\x02\x02rs\x05,\x17\x02st\x07\t\x02\x02tu\x05(\x15\x02uv\x07\v" +
		"\x02\x02v{\x05(\x15\x02wx\x07\v\x02\x02xz\x05(\x15\x02yw\x03\x02\x02\x02" +
		"z}\x03\x02\x02\x02{|\x03\x02\x02\x02{y\x03\x02\x02\x02|~\x03\x02\x02\x02" +
		"}{\x03\x02\x02\x02~\x7F\x07\x05\x02\x02\x7F\x13\x03\x02\x02\x02\x80\x85" +
		"\x07\f\x02\x02\x81\x86\x05\x18\r\x02\x82\x86\x05\x1A\x0E\x02\x83\x86\x05" +
		"\x1C\x0F\x02\x84\x86\x05\x1E\x10\x02\x85\x81\x03\x02\x02\x02\x85\x82\x03" +
		"\x02\x02\x02\x85\x83\x03\x02\x02\x02\x85\x84\x03\x02\x02\x02\x86\x15\x03" +
		"\x02\x02\x02\x87\x88\x07\r\x02\x02\x88\x89\x05\x18\r\x02\x89\x17\x03\x02" +
		"\x02\x02\x8A\x8B\x07\x0E\x02\x02\x8B\x8C\x05(\x15\x02\x8C\x19\x03\x02" +
		"\x02\x02\x8D\x90\x07\x0E\x02\x02\x8E\x91\x05(\x15\x02\x8F\x91\x05,\x17" +
		"\x02\x90\x8E\x03\x02\x02\x02\x90\x8F\x03\x02\x02\x02\x91\x92\x03\x02\x02" +
		"\x02\x92\x95\x07\x0F\x02\x02\x93\x96\x05(\x15\x02\x94\x96\x05,\x17\x02" +
		"\x95\x93\x03\x02\x02\x02\x95\x94\x03\x02\x02\x02\x96\x9E\x03\x02\x02\x02" +
		"\x97\x9A\x07\x0F\x02\x02\x98\x9B\x05(\x15\x02\x99\x9B\x05,\x17\x02\x9A" +
		"\x98\x03\x02\x02\x02\x9A\x99\x03\x02\x02\x02\x9B\x9D\x03\x02\x02\x02\x9C" +
		"\x97\x03\x02\x02\x02\x9D\xA0\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9E" +
		"\x9C\x03\x02\x02\x02\x9F\x1B\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA1" +
		"\xA4\x07\x10\x02\x02\xA2\xA5\x05(\x15\x02\xA3\xA5\x05*\x16\x02\xA4\xA2" +
		"\x03\x02\x02\x02\xA4\xA3\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xA9" +
		"\x07\x11\x02\x02\xA7\xAA\x05(\x15\x02\xA8\xAA\x05*\x16\x02\xA9\xA7\x03" +
		"\x02\x02\x02\xA9\xA8\x03\x02\x02\x02\xAA\xB2\x03\x02\x02\x02\xAB\xAE\x07" +
		"\x11\x02\x02\xAC\xAF\x05(\x15\x02\xAD\xAF\x05*\x16\x02\xAE\xAC\x03\x02" +
		"\x02\x02\xAE\xAD\x03\x02\x02\x02\xAF\xB1\x03\x02\x02\x02\xB0\xAB\x03\x02" +
		"\x02\x02\xB1\xB4\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB2\xB0\x03\x02" +
		"\x02\x02\xB3\x1D\x03\x02\x02\x02\xB4\xB2\x03\x02\x02\x02\xB5\xB6\x07\x12" +
		"\x02\x02\xB6\xB7\x05(\x15\x02\xB7\xBA\x07\x11\x02\x02\xB8\xBB\x05(\x15" +
		"\x02\xB9\xBB\x05*\x16\x02\xBA\xB8\x03\x02\x02\x02\xBA\xB9\x03\x02\x02" +
		"\x02\xBB\xC3\x03\x02\x02\x02\xBC\xBF\x07\x11\x02\x02\xBD\xC0\x05(\x15" +
		"\x02\xBE\xC0\x05*\x16\x02\xBF\xBD\x03\x02\x02\x02\xBF\xBE\x03\x02\x02" +
		"\x02\xC0\xC2\x03\x02\x02\x02\xC1\xBC\x03\x02\x02\x02\xC2\xC5\x03\x02\x02" +
		"\x02\xC3\xC4\x03\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC4\x1F\x03\x02\x02" +
		"\x02\xC5\xC3\x03\x02\x02\x02\xC6\xCA\x05\"\x12\x02\xC7\xCA\x05$\x13\x02" +
		"\xC8\xCA\x05&\x14\x02\xC9\xC6\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02" +
		"\xC9\xC8\x03\x02\x02\x02\xCA!\x03\x02\x02\x02\xCB\xCC\x05(\x15\x02\xCC" +
		"\xCD\x07\x13\x02\x02\xCD#\x03\x02\x02\x02\xCE\xD1\x05(\x15\x02\xCF\xD1" +
		"\x05,\x17\x02\xD0\xCE\x03\x02\x02\x02\xD0\xCF\x03\x02\x02\x02\xD1\xD2" +
		"\x03\x02\x02\x02\xD2\xDB\x07\x14\x02\x02\xD3\xD6\x05(\x15\x02\xD4\xD6" +
		"\x05,\x17\x02\xD5\xD3\x03\x02\x02\x02\xD5\xD4\x03\x02\x02\x02\xD6\xD7" +
		"\x03\x02\x02\x02\xD7\xD8\x07\x14\x02\x02\xD8\xDA\x03\x02\x02\x02\xD9\xD5" +
		"\x03\x02\x02\x02\xDA\xDD\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDB\xD9" +
		"\x03\x02\x02\x02\xDC\xE0\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDE\xE1" +
		"\x05(\x15\x02\xDF\xE1\x05,\x17\x02\xE0\xDE\x03\x02\x02\x02\xE0\xDF\x03" +
		"\x02\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2\xE3\x07\x13\x02\x02\xE3%\x03" +
		"\x02\x02\x02\xE4\xE7\x07\x15\x02\x02\xE5\xE8\x05(\x15\x02\xE6\xE8\x05" +
		"*\x16\x02\xE7\xE5\x03\x02\x02\x02\xE7\xE6\x03\x02\x02\x02\xE8\xE9\x03" +
		"\x02\x02\x02\xE9\xF2\x07\x16\x02\x02\xEA\xED\x05(\x15\x02\xEB\xED\x05" +
		"*\x16\x02\xEC\xEA\x03\x02\x02\x02\xEC\xEB\x03\x02\x02\x02\xED\xEE\x03" +
		"\x02\x02\x02\xEE\xEF\x07\x16\x02\x02\xEF\xF1\x03\x02\x02\x02\xF0\xEC\x03" +
		"\x02\x02\x02\xF1\xF4\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF2\xF0\x03" +
		"\x02\x02\x02\xF3\xF7\x03\x02\x02\x02\xF4\xF2\x03\x02\x02\x02\xF5\xF8\x05" +
		"(\x15\x02\xF6\xF8\x05*\x16\x02\xF7\xF5\x03\x02\x02\x02\xF7\xF6\x03\x02" +
		"\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFA\x07\x13\x02\x02\xFA\'\x03\x02" +
		"\x02\x02\xFB\xFC\x07\x17\x02\x02\xFC\u0101\x07\x1A\x02\x02\xFD\xFE\x07" +
		"\x1B\x02\x02\xFE\u0100\x07\x1A\x02\x02\xFF\xFD\x03\x02\x02\x02\u0100\u0103" +
		"\x03\x02\x02\x02\u0101\u0102\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02" +
		"\u0102\u0104\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02\u0104\u0105\x07" +
		"\x17\x02\x02\u0105)\x03\x02\x02\x02\u0106\u0107\x07\x18\x02\x02\u0107" +
		"\u010C\x07\x1A\x02\x02\u0108\u0109\x07\x1B\x02\x02\u0109\u010B\x07\x1A" +
		"\x02\x02\u010A\u0108\x03\x02\x02\x02\u010B\u010E\x03\x02\x02\x02\u010C" +
		"\u010D\x03\x02\x02\x02\u010C\u010A\x03\x02\x02\x02\u010D\u010F\x03\x02" +
		"\x02\x02\u010E\u010C\x03\x02\x02\x02\u010F\u0110\x07\x19\x02\x02\u0110" +
		"+\x03\x02\x02\x02\u0111\u0112\x07\x18\x02\x02\u0112\u0117\x07\x1A\x02" +
		"\x02\u0113\u0114\x07\x1B\x02\x02\u0114\u0116\x07\x1A\x02\x02\u0115\u0113" +
		"\x03\x02\x02\x02\u0116\u0119\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02" +
		"\u0117\u0115\x03\x02\x02\x02\u0118\u011A\x03\x02\x02\x02\u0119\u0117\x03" +
		"\x02\x02\x02\u011A\u011B\x07\x19\x02\x02\u011B-\x03\x02\x02\x02#19BMS" +
		"X`m{\x85\x90\x95\x9A\x9E\xA4\xA9\xAE\xB2\xBA\xBF\xC3\xC9\xD0\xD5\xDB\xE0" +
		"\xE7\xEC\xF2\xF7\u0101\u010C\u0117";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MScGrammarParser.__ATN) {
			MScGrammarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MScGrammarParser._serializedATN));
		}

		return MScGrammarParser.__ATN;
	}

}

export class DescriptionContext extends ParserRuleContext {
	public leadingStatement(): LeadingStatementContext {
		return this.getRuleContext(0, LeadingStatementContext);
	}
	public initialStatement(): InitialStatementContext {
		return this.getRuleContext(0, InitialStatementContext);
	}
	public closingStatement(): ClosingStatementContext {
		return this.getRuleContext(0, ClosingStatementContext);
	}
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MScGrammarParser.RULE_description; }
	// @Override
	public enterRule(listener: MScGrammarListener): void {
		if (listener.enterDescription) {
			listener.enterDescription(this);
		}
	}
	// @Override
	public exitRule(listener: MScGrammarListener): void {
		if (listener.exitDescription) {
			listener.exitDescription(this);
		}
	}
}


export class LeadingStatementContext extends ParserRuleContext {
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MScGrammarParser.NEWLINE);
		} else {
			return this.getToken(MScGrammarParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MScGrammarParser.RULE_leadingStatement; }
	// @Override
	public enterRule(listener: MScGrammarListener): void {
		if (listener.enterLeadingStatement) {
			listener.enterLeadingStatement(this);
		}
	}
	// @Override
	public exitRule(listener: MScGrammarListener): void {
		if (listener.exitLeadingStatement) {
			listener.exitLeadingStatement(this);
		}
	}
}


export class InitialStatementContext extends ParserRuleContext {
	public activity(): ActivityContext {
		return this.getRuleContext(0, ActivityContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MScGrammarParser.NEWLINE);
		} else {
			return this.getToken(MScGrammarParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MScGrammarParser.RULE_initialStatement; }
	// @Override
	public enterRule(listener: MScGrammarListener): void {
		if (listener.enterInitialStatement) {
			listener.enterInitialStatement(this);
		}
	}
	// @Override
	public exitRule(listener: MScGrammarListener): void {
		if (listener.exitInitialStatement) {
			listener.exitInitialStatement(this);
		}
	}
}


export class ClosingStatementContext extends ParserRuleContext {
	public activity(): ActivityContext {
		return this.getRuleContext(0, ActivityContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MScGrammarParser.RULE_closingStatement; }
	// @Override
	public enterRule(listener: MScGrammarListener): void {
		if (listener.enterClosingStatement) {
			listener.enterClosingStatement(this);
		}
	}
	// @Override
	public exitRule(listener: MScGrammarListener): void {
		if (listener.exitClosingStatement) {
			listener.exitClosingStatement(this);
		}
	}
}


export class StatementListContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MScGrammarParser.RULE_statementList; }
	// @Override
	public enterRule(listener: MScGrammarListener): void {
		if (listener.enterStatementList) {
			listener.enterStatementList(this);
		}
	}
	// @Override
	public exitRule(listener: MScGrammarListener): void {
		if (listener.exitStatementList) {
			listener.exitStatementList(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public afterStatement(): AfterStatementContext | undefined {
		return this.tryGetRuleContext(0, AfterStatementContext);
	}
	public asp(): AspContext | undefined {
		return this.tryGetRuleContext(0, AspContext);
	}
	public osp(): OspContext | undefined {
		return this.tryGetRuleContext(0, OspContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MScGrammarParser.NEWLINE);
		} else {
			return this.getToken(MScGrammarParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MScGrammarParser.RULE_statement; }
	// @Override
	public enterRule(listener: MScGrammarListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: MScGrammarListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class AfterStatementContext extends ParserRuleContext {
	public postActivityExpression(): PostActivityExpressionContext {
		return this.getRuleContext(0, PostActivityExpressionContext);
	}
	public immediatelyExpression(): ImmediatelyExpressionContext | undefined {
		return this.tryGetRuleContext(0, ImmediatelyExpressionContext);
	}
	public eventuallyExpression(): EventuallyExpressionContext | undefined {
		return this.tryGetRuleContext(0, EventuallyExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MScGrammarParser.RULE_afterStatement; }
	// @Override
	public enterRule(listener: MScGrammarListener): void {
		if (listener.enterAfterStatement) {
			listener.enterAfterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: MScGrammarListener): void {
		if (listener.exitAfterStatement) {
			listener.exitAfterStatement(this);
		}
	}
}


export class AspContext extends ParserRuleContext {
	public aspId(): AspIdContext {
		return this.getRuleContext(0, AspIdContext);
	}
	public activity(): ActivityContext[];
	public activity(i: number): ActivityContext;
	public activity(i?: number): ActivityContext | ActivityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ActivityContext);
		} else {
			return this.getRuleContext(i, ActivityContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MScGrammarParser.RULE_asp; }
	// @Override
	public enterRule(listener: MScGrammarListener): void {
		if (listener.enterAsp) {
			listener.enterAsp(this);
		}
	}
	// @Override
	public exitRule(listener: MScGrammarListener): void {
		if (listener.exitAsp) {
			listener.exitAsp(this);
		}
	}
}


export class OspContext extends ParserRuleContext {
	public ospId(): OspIdContext {
		return this.getRuleContext(0, OspIdContext);
	}
	public activity(): ActivityContext[];
	public activity(i: number): ActivityContext;
	public activity(i?: number): ActivityContext | ActivityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ActivityContext);
		} else {
			return this.getRuleContext(i, ActivityContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MScGrammarParser.RULE_osp; }
	// @Override
	public enterRule(listener: MScGrammarListener): void {
		if (listener.enterOsp) {
			listener.enterOsp(this);
		}
	}
	// @Override
	public exitRule(listener: MScGrammarListener): void {
		if (listener.exitOsp) {
			listener.exitOsp(this);
		}
	}
}


export class ImmediatelyExpressionContext extends ParserRuleContext {
	public sequencePreActivityExpression(): SequencePreActivityExpressionContext | undefined {
		return this.tryGetRuleContext(0, SequencePreActivityExpressionContext);
	}
	public andPreActivityExpression(): AndPreActivityExpressionContext | undefined {
		return this.tryGetRuleContext(0, AndPreActivityExpressionContext);
	}
	public orPreActivityExpression(): OrPreActivityExpressionContext | undefined {
		return this.tryGetRuleContext(0, OrPreActivityExpressionContext);
	}
	public repeatSincePreActivityExpression(): RepeatSincePreActivityExpressionContext | undefined {
		return this.tryGetRuleContext(0, RepeatSincePreActivityExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MScGrammarParser.RULE_immediatelyExpression; }
	// @Override
	public enterRule(listener: MScGrammarListener): void {
		if (listener.enterImmediatelyExpression) {
			listener.enterImmediatelyExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MScGrammarListener): void {
		if (listener.exitImmediatelyExpression) {
			listener.exitImmediatelyExpression(this);
		}
	}
}


export class EventuallyExpressionContext extends ParserRuleContext {
	public sequencePreActivityExpression(): SequencePreActivityExpressionContext {
		return this.getRuleContext(0, SequencePreActivityExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MScGrammarParser.RULE_eventuallyExpression; }
	// @Override
	public enterRule(listener: MScGrammarListener): void {
		if (listener.enterEventuallyExpression) {
			listener.enterEventuallyExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MScGrammarListener): void {
		if (listener.exitEventuallyExpression) {
			listener.exitEventuallyExpression(this);
		}
	}
}


export class SequencePreActivityExpressionContext extends ParserRuleContext {
	public activity(): ActivityContext {
		return this.getRuleContext(0, ActivityContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MScGrammarParser.RULE_sequencePreActivityExpression; }
	// @Override
	public enterRule(listener: MScGrammarListener): void {
		if (listener.enterSequencePreActivityExpression) {
			listener.enterSequencePreActivityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MScGrammarListener): void {
		if (listener.exitSequencePreActivityExpression) {
			listener.exitSequencePreActivityExpression(this);
		}
	}
}


export class AndPreActivityExpressionContext extends ParserRuleContext {
	public activity(): ActivityContext[];
	public activity(i: number): ActivityContext;
	public activity(i?: number): ActivityContext | ActivityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ActivityContext);
		} else {
			return this.getRuleContext(i, ActivityContext);
		}
	}
	public ospId(): OspIdContext[];
	public ospId(i: number): OspIdContext;
	public ospId(i?: number): OspIdContext | OspIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OspIdContext);
		} else {
			return this.getRuleContext(i, OspIdContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MScGrammarParser.RULE_andPreActivityExpression; }
	// @Override
	public enterRule(listener: MScGrammarListener): void {
		if (listener.enterAndPreActivityExpression) {
			listener.enterAndPreActivityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MScGrammarListener): void {
		if (listener.exitAndPreActivityExpression) {
			listener.exitAndPreActivityExpression(this);
		}
	}
}


export class OrPreActivityExpressionContext extends ParserRuleContext {
	public activity(): ActivityContext[];
	public activity(i: number): ActivityContext;
	public activity(i?: number): ActivityContext | ActivityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ActivityContext);
		} else {
			return this.getRuleContext(i, ActivityContext);
		}
	}
	public aspId(): AspIdContext[];
	public aspId(i: number): AspIdContext;
	public aspId(i?: number): AspIdContext | AspIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AspIdContext);
		} else {
			return this.getRuleContext(i, AspIdContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MScGrammarParser.RULE_orPreActivityExpression; }
	// @Override
	public enterRule(listener: MScGrammarListener): void {
		if (listener.enterOrPreActivityExpression) {
			listener.enterOrPreActivityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MScGrammarListener): void {
		if (listener.exitOrPreActivityExpression) {
			listener.exitOrPreActivityExpression(this);
		}
	}
}


export class RepeatSincePreActivityExpressionContext extends ParserRuleContext {
	public activity(): ActivityContext[];
	public activity(i: number): ActivityContext;
	public activity(i?: number): ActivityContext | ActivityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ActivityContext);
		} else {
			return this.getRuleContext(i, ActivityContext);
		}
	}
	public aspId(): AspIdContext[];
	public aspId(i: number): AspIdContext;
	public aspId(i?: number): AspIdContext | AspIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AspIdContext);
		} else {
			return this.getRuleContext(i, AspIdContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MScGrammarParser.RULE_repeatSincePreActivityExpression; }
	// @Override
	public enterRule(listener: MScGrammarListener): void {
		if (listener.enterRepeatSincePreActivityExpression) {
			listener.enterRepeatSincePreActivityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MScGrammarListener): void {
		if (listener.exitRepeatSincePreActivityExpression) {
			listener.exitRepeatSincePreActivityExpression(this);
		}
	}
}


export class PostActivityExpressionContext extends ParserRuleContext {
	public sequencePostActivityExpression(): SequencePostActivityExpressionContext | undefined {
		return this.tryGetRuleContext(0, SequencePostActivityExpressionContext);
	}
	public andPostActivityExpression(): AndPostActivityExpressionContext | undefined {
		return this.tryGetRuleContext(0, AndPostActivityExpressionContext);
	}
	public orPostActivityExpression(): OrPostActivityExpressionContext | undefined {
		return this.tryGetRuleContext(0, OrPostActivityExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MScGrammarParser.RULE_postActivityExpression; }
	// @Override
	public enterRule(listener: MScGrammarListener): void {
		if (listener.enterPostActivityExpression) {
			listener.enterPostActivityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MScGrammarListener): void {
		if (listener.exitPostActivityExpression) {
			listener.exitPostActivityExpression(this);
		}
	}
}


export class SequencePostActivityExpressionContext extends ParserRuleContext {
	public activity(): ActivityContext {
		return this.getRuleContext(0, ActivityContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MScGrammarParser.RULE_sequencePostActivityExpression; }
	// @Override
	public enterRule(listener: MScGrammarListener): void {
		if (listener.enterSequencePostActivityExpression) {
			listener.enterSequencePostActivityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MScGrammarListener): void {
		if (listener.exitSequencePostActivityExpression) {
			listener.exitSequencePostActivityExpression(this);
		}
	}
}


export class AndPostActivityExpressionContext extends ParserRuleContext {
	public activity(): ActivityContext[];
	public activity(i: number): ActivityContext;
	public activity(i?: number): ActivityContext | ActivityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ActivityContext);
		} else {
			return this.getRuleContext(i, ActivityContext);
		}
	}
	public ospId(): OspIdContext[];
	public ospId(i: number): OspIdContext;
	public ospId(i?: number): OspIdContext | OspIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OspIdContext);
		} else {
			return this.getRuleContext(i, OspIdContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MScGrammarParser.RULE_andPostActivityExpression; }
	// @Override
	public enterRule(listener: MScGrammarListener): void {
		if (listener.enterAndPostActivityExpression) {
			listener.enterAndPostActivityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MScGrammarListener): void {
		if (listener.exitAndPostActivityExpression) {
			listener.exitAndPostActivityExpression(this);
		}
	}
}


export class OrPostActivityExpressionContext extends ParserRuleContext {
	public activity(): ActivityContext[];
	public activity(i: number): ActivityContext;
	public activity(i?: number): ActivityContext | ActivityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ActivityContext);
		} else {
			return this.getRuleContext(i, ActivityContext);
		}
	}
	public aspId(): AspIdContext[];
	public aspId(i: number): AspIdContext;
	public aspId(i?: number): AspIdContext | AspIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AspIdContext);
		} else {
			return this.getRuleContext(i, AspIdContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MScGrammarParser.RULE_orPostActivityExpression; }
	// @Override
	public enterRule(listener: MScGrammarListener): void {
		if (listener.enterOrPostActivityExpression) {
			listener.enterOrPostActivityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: MScGrammarListener): void {
		if (listener.exitOrPostActivityExpression) {
			listener.exitOrPostActivityExpression(this);
		}
	}
}


export class ActivityContext extends ParserRuleContext {
	public WORD(): TerminalNode[];
	public WORD(i: number): TerminalNode;
	public WORD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MScGrammarParser.WORD);
		} else {
			return this.getToken(MScGrammarParser.WORD, i);
		}
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MScGrammarParser.SPACE);
		} else {
			return this.getToken(MScGrammarParser.SPACE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MScGrammarParser.RULE_activity; }
	// @Override
	public enterRule(listener: MScGrammarListener): void {
		if (listener.enterActivity) {
			listener.enterActivity(this);
		}
	}
	// @Override
	public exitRule(listener: MScGrammarListener): void {
		if (listener.exitActivity) {
			listener.exitActivity(this);
		}
	}
}


export class AspIdContext extends ParserRuleContext {
	public WORD(): TerminalNode[];
	public WORD(i: number): TerminalNode;
	public WORD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MScGrammarParser.WORD);
		} else {
			return this.getToken(MScGrammarParser.WORD, i);
		}
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MScGrammarParser.SPACE);
		} else {
			return this.getToken(MScGrammarParser.SPACE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MScGrammarParser.RULE_aspId; }
	// @Override
	public enterRule(listener: MScGrammarListener): void {
		if (listener.enterAspId) {
			listener.enterAspId(this);
		}
	}
	// @Override
	public exitRule(listener: MScGrammarListener): void {
		if (listener.exitAspId) {
			listener.exitAspId(this);
		}
	}
}


export class OspIdContext extends ParserRuleContext {
	public WORD(): TerminalNode[];
	public WORD(i: number): TerminalNode;
	public WORD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MScGrammarParser.WORD);
		} else {
			return this.getToken(MScGrammarParser.WORD, i);
		}
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MScGrammarParser.SPACE);
		} else {
			return this.getToken(MScGrammarParser.SPACE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MScGrammarParser.RULE_ospId; }
	// @Override
	public enterRule(listener: MScGrammarListener): void {
		if (listener.enterOspId) {
			listener.enterOspId(this);
		}
	}
	// @Override
	public exitRule(listener: MScGrammarListener): void {
		if (listener.exitOspId) {
			listener.exitOspId(this);
		}
	}
}


