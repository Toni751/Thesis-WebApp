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
	public static readonly RULE_statementList = 3;
	public static readonly RULE_statement = 4;
	public static readonly RULE_closingStatement = 5;
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
		"description", "leadingStatement", "initialStatement", "statementList", 
		"statement", "closingStatement", "afterStatement", "asp", "osp", "immediatelyExpression", 
		"eventuallyExpression", "sequencePreActivityExpression", "andPreActivityExpression", 
		"orPreActivityExpression", "repeatSincePreActivityExpression", "postActivityExpression", 
		"sequencePostActivityExpression", "andPostActivityExpression", "orPostActivityExpression", 
		"activity", "aspId", "ospId",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'The following textual description follows the closed-world assumption, meaning that only the activities specified can be executed in the specified order. Any possible activity and execution that is not specified is considered impossible.'", 
		"'Initially start '", "'.'", "'After '", "', the process finishes.'", 
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
			this.state = 46;
			this.statementList();
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
			this.state = 48;
			this.match(MScGrammarParser.T__0);
			this.state = 52;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MScGrammarParser.NEWLINE) {
				{
				{
				this.state = 49;
				this.match(MScGrammarParser.NEWLINE);
				}
				}
				this.state = 54;
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
			this.state = 55;
			this.match(MScGrammarParser.T__1);
			this.state = 56;
			this.activity();
			this.state = 57;
			this.match(MScGrammarParser.T__2);
			this.state = 61;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MScGrammarParser.NEWLINE) {
				{
				{
				this.state = 58;
				this.match(MScGrammarParser.NEWLINE);
				}
				}
				this.state = 63;
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
	public statementList(): StatementListContext {
		let _localctx: StatementListContext = new StatementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, MScGrammarParser.RULE_statementList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 64;
			this.statement();
			this.state = 68;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 65;
					this.statement();
					}
					}
				}
				this.state = 70;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
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
		this.enterRule(_localctx, 8, MScGrammarParser.RULE_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 71;
				this.afterStatement();
				}
				break;

			case 2:
				{
				this.state = 72;
				this.closingStatement();
				}
				break;

			case 3:
				{
				this.state = 73;
				this.asp();
				}
				break;

			case 4:
				{
				this.state = 74;
				this.osp();
				}
				break;
			}
			this.state = 80;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MScGrammarParser.NEWLINE) {
				{
				{
				this.state = 77;
				this.match(MScGrammarParser.NEWLINE);
				}
				}
				this.state = 82;
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
		this.enterRule(_localctx, 10, MScGrammarParser.RULE_closingStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 83;
			this.match(MScGrammarParser.T__3);
			this.state = 84;
			this.postActivityExpression();
			this.state = 85;
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
	public afterStatement(): AfterStatementContext {
		let _localctx: AfterStatementContext = new AfterStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, MScGrammarParser.RULE_afterStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this.match(MScGrammarParser.T__3);
			this.state = 88;
			this.postActivityExpression();
			this.state = 89;
			this.match(MScGrammarParser.T__5);
			this.state = 92;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MScGrammarParser.T__9:
				{
				this.state = 90;
				this.immediatelyExpression();
				}
				break;
			case MScGrammarParser.T__10:
				{
				this.state = 91;
				this.eventuallyExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 94;
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
			this.state = 96;
			this.aspId();
			this.state = 97;
			this.match(MScGrammarParser.T__6);
			this.state = 98;
			this.activity();
			this.state = 99;
			this.match(MScGrammarParser.T__7);
			this.state = 100;
			this.activity();
			this.state = 105;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 101;
					this.match(MScGrammarParser.T__7);
					this.state = 102;
					this.activity();
					}
					}
				}
				this.state = 107;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			}
			this.state = 108;
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
			this.state = 110;
			this.ospId();
			this.state = 111;
			this.match(MScGrammarParser.T__6);
			this.state = 112;
			this.activity();
			this.state = 113;
			this.match(MScGrammarParser.T__8);
			this.state = 114;
			this.activity();
			this.state = 119;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 115;
					this.match(MScGrammarParser.T__8);
					this.state = 116;
					this.activity();
					}
					}
				}
				this.state = 121;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			}
			this.state = 122;
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
			this.state = 124;
			this.match(MScGrammarParser.T__9);
			this.state = 129;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 125;
				this.sequencePreActivityExpression();
				}
				break;

			case 2:
				{
				this.state = 126;
				this.andPreActivityExpression();
				}
				break;

			case 3:
				{
				this.state = 127;
				this.orPreActivityExpression();
				}
				break;

			case 4:
				{
				this.state = 128;
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
			this.state = 131;
			this.match(MScGrammarParser.T__10);
			this.state = 132;
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
			this.state = 134;
			this.match(MScGrammarParser.T__11);
			this.state = 135;
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
			this.state = 137;
			this.match(MScGrammarParser.T__11);
			this.state = 140;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MScGrammarParser.T__20:
				{
				this.state = 138;
				this.activity();
				}
				break;
			case MScGrammarParser.T__21:
				{
				this.state = 139;
				this.ospId();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 142;
			this.match(MScGrammarParser.T__12);
			this.state = 145;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MScGrammarParser.T__20:
				{
				this.state = 143;
				this.activity();
				}
				break;
			case MScGrammarParser.T__21:
				{
				this.state = 144;
				this.ospId();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 154;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 147;
					this.match(MScGrammarParser.T__12);
					this.state = 150;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case MScGrammarParser.T__20:
						{
						this.state = 148;
						this.activity();
						}
						break;
					case MScGrammarParser.T__21:
						{
						this.state = 149;
						this.ospId();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 156;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
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
			this.state = 157;
			this.match(MScGrammarParser.T__13);
			this.state = 160;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MScGrammarParser.T__20:
				{
				this.state = 158;
				this.activity();
				}
				break;
			case MScGrammarParser.T__21:
				{
				this.state = 159;
				this.aspId();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 162;
			this.match(MScGrammarParser.T__14);
			this.state = 165;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MScGrammarParser.T__20:
				{
				this.state = 163;
				this.activity();
				}
				break;
			case MScGrammarParser.T__21:
				{
				this.state = 164;
				this.aspId();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 174;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 167;
					this.match(MScGrammarParser.T__14);
					this.state = 170;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case MScGrammarParser.T__20:
						{
						this.state = 168;
						this.activity();
						}
						break;
					case MScGrammarParser.T__21:
						{
						this.state = 169;
						this.aspId();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 176;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
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
			this.state = 177;
			this.match(MScGrammarParser.T__15);
			this.state = 178;
			this.activity();
			this.state = 179;
			this.match(MScGrammarParser.T__14);
			this.state = 182;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MScGrammarParser.T__20:
				{
				this.state = 180;
				this.activity();
				}
				break;
			case MScGrammarParser.T__21:
				{
				this.state = 181;
				this.aspId();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 191;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 184;
					this.match(MScGrammarParser.T__14);
					this.state = 187;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case MScGrammarParser.T__20:
						{
						this.state = 185;
						this.activity();
						}
						break;
					case MScGrammarParser.T__21:
						{
						this.state = 186;
						this.aspId();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 193;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
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
			this.state = 197;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 194;
				this.sequencePostActivityExpression();
				}
				break;

			case 2:
				{
				this.state = 195;
				this.andPostActivityExpression();
				}
				break;

			case 3:
				{
				this.state = 196;
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
			this.state = 199;
			this.activity();
			this.state = 200;
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
			this.state = 204;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MScGrammarParser.T__20:
				{
				this.state = 202;
				this.activity();
				}
				break;
			case MScGrammarParser.T__21:
				{
				this.state = 203;
				this.ospId();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 206;
			this.match(MScGrammarParser.T__17);
			this.state = 215;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 209;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case MScGrammarParser.T__20:
						{
						this.state = 207;
						this.activity();
						}
						break;
					case MScGrammarParser.T__21:
						{
						this.state = 208;
						this.ospId();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 211;
					this.match(MScGrammarParser.T__17);
					}
					}
				}
				this.state = 217;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			}
			this.state = 220;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MScGrammarParser.T__20:
				{
				this.state = 218;
				this.activity();
				}
				break;
			case MScGrammarParser.T__21:
				{
				this.state = 219;
				this.ospId();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 222;
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
			this.state = 224;
			this.match(MScGrammarParser.T__18);
			this.state = 227;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MScGrammarParser.T__20:
				{
				this.state = 225;
				this.activity();
				}
				break;
			case MScGrammarParser.T__21:
				{
				this.state = 226;
				this.aspId();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 229;
			this.match(MScGrammarParser.T__19);
			this.state = 238;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 232;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case MScGrammarParser.T__20:
						{
						this.state = 230;
						this.activity();
						}
						break;
					case MScGrammarParser.T__21:
						{
						this.state = 231;
						this.aspId();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 234;
					this.match(MScGrammarParser.T__19);
					}
					}
				}
				this.state = 240;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			}
			this.state = 243;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MScGrammarParser.T__20:
				{
				this.state = 241;
				this.activity();
				}
				break;
			case MScGrammarParser.T__21:
				{
				this.state = 242;
				this.aspId();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 245;
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
			this.state = 247;
			this.match(MScGrammarParser.T__20);
			this.state = 248;
			this.match(MScGrammarParser.WORD);
			this.state = 253;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 249;
					this.match(MScGrammarParser.SPACE);
					this.state = 250;
					this.match(MScGrammarParser.WORD);
					}
					}
				}
				this.state = 255;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			}
			this.state = 256;
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
			this.state = 258;
			this.match(MScGrammarParser.T__21);
			this.state = 259;
			this.match(MScGrammarParser.WORD);
			this.state = 264;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 260;
					this.match(MScGrammarParser.SPACE);
					this.state = 261;
					this.match(MScGrammarParser.WORD);
					}
					}
				}
				this.state = 266;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			}
			this.state = 267;
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
			this.state = 269;
			this.match(MScGrammarParser.T__21);
			this.state = 270;
			this.match(MScGrammarParser.WORD);
			this.state = 275;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 271;
					this.match(MScGrammarParser.SPACE);
					this.state = 272;
					this.match(MScGrammarParser.WORD);
					}
					}
				}
				this.state = 277;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			}
			this.state = 278;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1C\u011B\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x07\x035\n\x03\f\x03" +
		"\x0E\x038\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04>\n\x04\f\x04\x0E" +
		"\x04A\v\x04\x03\x05\x03\x05\x07\x05E\n\x05\f\x05\x0E\x05H\v\x05\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x05\x06N\n\x06\x03\x06\x07\x06Q\n\x06\f\x06\x0E" +
		"\x06T\v\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x05\b_\n\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07" +
		"\tj\n\t\f\t\x0E\tm\v\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x07\nx\n\n\f\n\x0E\n{\v\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x05\v\x84\n\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03" +
		"\x0E\x05\x0E\x8F\n\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\x94\n\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x05\x0E\x99\n\x0E\x07\x0E\x9B\n\x0E\f\x0E\x0E\x0E\x9E" +
		"\v\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xA3\n\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x05\x0F\xA8\n\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xAD\n\x0F\x07\x0F\xAF" +
		"\n\x0F\f\x0F\x0E\x0F\xB2\v\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x05\x10\xB9\n\x10\x03\x10\x03\x10\x03\x10\x05\x10\xBE\n\x10\x07\x10\xC0" +
		"\n\x10\f\x10\x0E\x10\xC3\v\x10\x03\x11\x03\x11\x03\x11\x05\x11\xC8\n\x11" +
		"\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x05\x13\xCF\n\x13\x03\x13\x03" +
		"\x13\x03\x13\x05\x13\xD4\n\x13\x03\x13\x03\x13\x07\x13\xD8\n\x13\f\x13" +
		"\x0E\x13\xDB\v\x13\x03\x13\x03\x13\x05\x13\xDF\n\x13\x03\x13\x03\x13\x03" +
		"\x14\x03\x14\x03\x14\x05\x14\xE6\n\x14\x03\x14\x03\x14\x03\x14\x05\x14" +
		"\xEB\n\x14\x03\x14\x03\x14\x07\x14\xEF\n\x14\f\x14\x0E\x14\xF2\v\x14\x03" +
		"\x14\x03\x14\x05\x14\xF6\n\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x07\x15\xFE\n\x15\f\x15\x0E\x15\u0101\v\x15\x03\x15\x03\x15\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x07\x16\u0109\n\x16\f\x16\x0E\x16\u010C\v" +
		"\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u0114\n\x17" +
		"\f\x17\x0E\x17\u0117\v\x17\x03\x17\x03\x17\x03\x17\rFky\x9C\xB0\xC1\xD9" +
		"\xF0\xFF\u010A\u0115\x02\x02\x18\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
		"\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E" +
		"\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02\x02\x02\x02\u0129\x02.\x03\x02" +
		"\x02\x02\x042\x03\x02\x02\x02\x069\x03\x02\x02\x02\bB\x03\x02\x02\x02" +
		"\nM\x03\x02\x02\x02\fU\x03\x02\x02\x02\x0EY\x03\x02\x02\x02\x10b\x03\x02" +
		"\x02\x02\x12p\x03\x02\x02\x02\x14~\x03\x02\x02\x02\x16\x85\x03\x02\x02" +
		"\x02\x18\x88\x03\x02\x02\x02\x1A\x8B\x03\x02\x02\x02\x1C\x9F\x03\x02\x02" +
		"\x02\x1E\xB3\x03\x02\x02\x02 \xC7\x03\x02\x02\x02\"\xC9\x03\x02\x02\x02" +
		"$\xCE\x03\x02\x02\x02&\xE2\x03\x02\x02\x02(\xF9\x03\x02\x02\x02*\u0104" +
		"\x03\x02\x02\x02,\u010F\x03\x02\x02\x02./\x05\x04\x03\x02/0\x05\x06\x04" +
		"\x0201\x05\b\x05\x021\x03\x03\x02\x02\x0226\x07\x03\x02\x0235\x07\x1C" +
		"\x02\x0243\x03\x02\x02\x0258\x03\x02\x02\x0264\x03\x02\x02\x0267\x03\x02" +
		"\x02\x027\x05\x03\x02\x02\x0286\x03\x02\x02\x029:\x07\x04\x02\x02:;\x05" +
		"(\x15\x02;?\x07\x05\x02\x02<>\x07\x1C\x02\x02=<\x03\x02\x02\x02>A\x03" +
		"\x02\x02\x02?=\x03\x02\x02\x02?@\x03\x02\x02\x02@\x07\x03\x02\x02\x02" +
		"A?\x03\x02\x02\x02BF\x05\n\x06\x02CE\x05\n\x06\x02DC\x03\x02\x02\x02E" +
		"H\x03\x02\x02\x02FG\x03\x02\x02\x02FD\x03\x02\x02\x02G\t\x03\x02\x02\x02" +
		"HF\x03\x02\x02\x02IN\x05\x0E\b\x02JN\x05\f\x07\x02KN\x05\x10\t\x02LN\x05" +
		"\x12\n\x02MI\x03\x02\x02\x02MJ\x03\x02\x02\x02MK\x03\x02\x02\x02ML\x03" +
		"\x02\x02\x02NR\x03\x02\x02\x02OQ\x07\x1C\x02\x02PO\x03\x02\x02\x02QT\x03" +
		"\x02\x02\x02RP\x03\x02\x02\x02RS\x03\x02\x02\x02S\v\x03\x02\x02\x02TR" +
		"\x03\x02\x02\x02UV\x07\x06\x02\x02VW\x05 \x11\x02WX\x07\x07\x02\x02X\r" +
		"\x03\x02\x02\x02YZ\x07\x06\x02\x02Z[\x05 \x11\x02[^\x07\b\x02\x02\\_\x05" +
		"\x14\v\x02]_\x05\x16\f\x02^\\\x03\x02\x02\x02^]\x03\x02\x02\x02_`\x03" +
		"\x02\x02\x02`a\x07\x05\x02\x02a\x0F\x03\x02\x02\x02bc\x05*\x16\x02cd\x07" +
		"\t\x02\x02de\x05(\x15\x02ef\x07\n\x02\x02fk\x05(\x15\x02gh\x07\n\x02\x02" +
		"hj\x05(\x15\x02ig\x03\x02\x02\x02jm\x03\x02\x02\x02kl\x03\x02\x02\x02" +
		"ki\x03\x02\x02\x02ln\x03\x02\x02\x02mk\x03\x02\x02\x02no\x07\x05\x02\x02" +
		"o\x11\x03\x02\x02\x02pq\x05,\x17\x02qr\x07\t\x02\x02rs\x05(\x15\x02st" +
		"\x07\v\x02\x02ty\x05(\x15\x02uv\x07\v\x02\x02vx\x05(\x15\x02wu\x03\x02" +
		"\x02\x02x{\x03\x02\x02\x02yz\x03\x02\x02\x02yw\x03\x02\x02\x02z|\x03\x02" +
		"\x02\x02{y\x03\x02\x02\x02|}\x07\x05\x02\x02}\x13\x03\x02\x02\x02~\x83" +
		"\x07\f\x02\x02\x7F\x84\x05\x18\r\x02\x80\x84\x05\x1A\x0E\x02\x81\x84\x05" +
		"\x1C\x0F\x02\x82\x84\x05\x1E\x10\x02\x83\x7F\x03\x02\x02\x02\x83\x80\x03" +
		"\x02\x02\x02\x83\x81\x03\x02\x02\x02\x83\x82\x03\x02\x02\x02\x84\x15\x03" +
		"\x02\x02\x02\x85\x86\x07\r\x02\x02\x86\x87\x05\x18\r\x02\x87\x17\x03\x02" +
		"\x02\x02\x88\x89\x07\x0E\x02\x02\x89\x8A\x05(\x15\x02\x8A\x19\x03\x02" +
		"\x02\x02\x8B\x8E\x07\x0E\x02\x02\x8C\x8F\x05(\x15\x02\x8D\x8F\x05,\x17" +
		"\x02\x8E\x8C\x03\x02\x02\x02\x8E\x8D\x03\x02\x02\x02\x8F\x90\x03\x02\x02" +
		"\x02\x90\x93\x07\x0F\x02\x02\x91\x94\x05(\x15\x02\x92\x94\x05,\x17\x02" +
		"\x93\x91\x03\x02\x02\x02\x93\x92\x03\x02\x02\x02\x94\x9C\x03\x02\x02\x02" +
		"\x95\x98\x07\x0F\x02\x02\x96\x99\x05(\x15\x02\x97\x99\x05,\x17\x02\x98" +
		"\x96\x03\x02\x02\x02\x98\x97\x03\x02\x02\x02\x99\x9B\x03\x02\x02\x02\x9A" +
		"\x95\x03\x02\x02\x02\x9B\x9E\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9C" +
		"\x9A\x03\x02\x02\x02\x9D\x1B\x03\x02\x02\x02\x9E\x9C\x03\x02\x02\x02\x9F" +
		"\xA2\x07\x10\x02\x02\xA0\xA3\x05(\x15\x02\xA1\xA3\x05*\x16\x02\xA2\xA0" +
		"\x03\x02\x02\x02\xA2\xA1\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA7" +
		"\x07\x11\x02\x02\xA5\xA8\x05(\x15\x02\xA6\xA8\x05*\x16\x02\xA7\xA5\x03" +
		"\x02\x02\x02\xA7\xA6\x03\x02\x02\x02\xA8\xB0\x03\x02\x02\x02\xA9\xAC\x07" +
		"\x11\x02\x02\xAA\xAD\x05(\x15\x02\xAB\xAD\x05*\x16\x02\xAC\xAA\x03\x02" +
		"\x02\x02\xAC\xAB\x03\x02\x02\x02\xAD\xAF\x03\x02\x02\x02\xAE\xA9\x03\x02" +
		"\x02\x02\xAF\xB2\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB0\xAE\x03\x02" +
		"\x02\x02\xB1\x1D\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB3\xB4\x07\x12" +
		"\x02\x02\xB4\xB5\x05(\x15\x02\xB5\xB8\x07\x11\x02\x02\xB6\xB9\x05(\x15" +
		"\x02\xB7\xB9\x05*\x16\x02\xB8\xB6\x03\x02\x02\x02\xB8\xB7\x03\x02\x02" +
		"\x02\xB9\xC1\x03\x02\x02\x02\xBA\xBD\x07\x11\x02\x02\xBB\xBE\x05(\x15" +
		"\x02\xBC\xBE\x05*\x16\x02\xBD\xBB\x03\x02\x02\x02\xBD\xBC\x03\x02\x02" +
		"\x02\xBE\xC0\x03\x02\x02\x02\xBF\xBA\x03\x02\x02\x02\xC0\xC3\x03\x02\x02" +
		"\x02\xC1\xC2\x03\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC2\x1F\x03\x02\x02" +
		"\x02\xC3\xC1\x03\x02\x02\x02\xC4\xC8\x05\"\x12\x02\xC5\xC8\x05$\x13\x02" +
		"\xC6\xC8\x05&\x14\x02\xC7\xC4\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02" +
		"\xC7\xC6\x03\x02\x02\x02\xC8!\x03\x02\x02\x02\xC9\xCA\x05(\x15\x02\xCA" +
		"\xCB\x07\x13\x02\x02\xCB#\x03\x02\x02\x02\xCC\xCF\x05(\x15\x02\xCD\xCF" +
		"\x05,\x17\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCD\x03\x02\x02\x02\xCF\xD0" +
		"\x03\x02\x02\x02\xD0\xD9\x07\x14\x02\x02\xD1\xD4\x05(\x15\x02\xD2\xD4" +
		"\x05,\x17\x02\xD3\xD1\x03\x02\x02\x02\xD3\xD2\x03\x02\x02\x02\xD4\xD5" +
		"\x03\x02\x02\x02\xD5\xD6\x07\x14\x02\x02\xD6\xD8\x03\x02\x02\x02\xD7\xD3" +
		"\x03\x02\x02\x02\xD8\xDB\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xD9\xD7" +
		"\x03\x02\x02\x02\xDA\xDE\x03\x02\x02\x02\xDB\xD9\x03\x02\x02\x02\xDC\xDF" +
		"\x05(\x15\x02\xDD\xDF\x05,\x17\x02\xDE\xDC\x03\x02\x02\x02\xDE\xDD\x03" +
		"\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE1\x07\x13\x02\x02\xE1%\x03" +
		"\x02\x02\x02\xE2\xE5\x07\x15\x02\x02\xE3\xE6\x05(\x15\x02\xE4\xE6\x05" +
		"*\x16\x02\xE5\xE3\x03\x02\x02\x02\xE5\xE4\x03\x02\x02\x02\xE6\xE7\x03" +
		"\x02\x02\x02\xE7\xF0\x07\x16\x02\x02\xE8\xEB\x05(\x15\x02\xE9\xEB\x05" +
		"*\x16\x02\xEA\xE8\x03\x02\x02\x02\xEA\xE9\x03\x02\x02\x02\xEB\xEC\x03" +
		"\x02\x02\x02\xEC\xED\x07\x16\x02\x02\xED\xEF\x03\x02\x02\x02\xEE\xEA\x03" +
		"\x02\x02\x02\xEF\xF2\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF0\xEE\x03" +
		"\x02\x02\x02\xF1\xF5\x03\x02\x02\x02\xF2\xF0\x03\x02\x02\x02\xF3\xF6\x05" +
		"(\x15\x02\xF4\xF6\x05*\x16\x02\xF5\xF3\x03\x02\x02\x02\xF5\xF4\x03\x02" +
		"\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF8\x07\x13\x02\x02\xF8\'\x03\x02" +
		"\x02\x02\xF9\xFA\x07\x17\x02\x02\xFA\xFF\x07\x1A\x02\x02\xFB\xFC\x07\x1B" +
		"\x02\x02\xFC\xFE\x07\x1A\x02\x02\xFD\xFB\x03\x02\x02\x02\xFE\u0101\x03" +
		"\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\u0100\u0102" +
		"\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0102\u0103\x07\x17\x02\x02" +
		"\u0103)\x03\x02\x02\x02\u0104\u0105\x07\x18\x02\x02\u0105\u010A\x07\x1A" +
		"\x02\x02\u0106\u0107\x07\x1B\x02\x02\u0107\u0109\x07\x1A\x02\x02\u0108" +
		"\u0106\x03\x02\x02\x02\u0109\u010C\x03\x02\x02\x02\u010A\u010B\x03\x02" +
		"\x02\x02\u010A\u0108\x03\x02\x02\x02\u010B\u010D\x03\x02\x02\x02\u010C" +
		"\u010A\x03\x02\x02\x02\u010D\u010E\x07\x19\x02\x02\u010E+\x03\x02\x02" +
		"\x02\u010F\u0110\x07\x18\x02\x02\u0110\u0115\x07\x1A\x02\x02\u0111\u0112" +
		"\x07\x1B\x02\x02\u0112\u0114\x07\x1A\x02\x02\u0113\u0111\x03\x02\x02\x02" +
		"\u0114\u0117\x03\x02\x02\x02\u0115\u0116\x03\x02\x02\x02\u0115\u0113\x03" +
		"\x02\x02\x02\u0116\u0118\x03\x02\x02\x02\u0117\u0115\x03\x02\x02\x02\u0118" +
		"\u0119\x07\x19\x02\x02\u0119-\x03\x02\x02\x02\"6?FMR^ky\x83\x8E\x93\x98" +
		"\x9C\xA2\xA7\xAC\xB0\xB8\xBD\xC1\xC7\xCE\xD3\xD9\xDE\xE5\xEA\xF0\xF5\xFF" +
		"\u010A\u0115";
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
	public statementList(): StatementListContext {
		return this.getRuleContext(0, StatementListContext);
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
	public closingStatement(): ClosingStatementContext | undefined {
		return this.tryGetRuleContext(0, ClosingStatementContext);
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


export class ClosingStatementContext extends ParserRuleContext {
	public postActivityExpression(): PostActivityExpressionContext {
		return this.getRuleContext(0, PostActivityExpressionContext);
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


