// Generated from app/grammar/MScGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { DescriptionContext } from "./MScGrammarParser";
import { LeadingStatementContext } from "./MScGrammarParser";
import { InitialStatementContext } from "./MScGrammarParser";
import { ClosingStatementContext } from "./MScGrammarParser";
import { StatementListContext } from "./MScGrammarParser";
import { StatementContext } from "./MScGrammarParser";
import { AfterStatementContext } from "./MScGrammarParser";
import { AspContext } from "./MScGrammarParser";
import { OspContext } from "./MScGrammarParser";
import { ImmediatelyExpressionContext } from "./MScGrammarParser";
import { EventuallyExpressionContext } from "./MScGrammarParser";
import { SequencePreActivityExpressionContext } from "./MScGrammarParser";
import { AndPreActivityExpressionContext } from "./MScGrammarParser";
import { OrPreActivityExpressionContext } from "./MScGrammarParser";
import { RepeatSincePreActivityExpressionContext } from "./MScGrammarParser";
import { PostActivityExpressionContext } from "./MScGrammarParser";
import { SequencePostActivityExpressionContext } from "./MScGrammarParser";
import { AndPostActivityExpressionContext } from "./MScGrammarParser";
import { OrPostActivityExpressionContext } from "./MScGrammarParser";
import { ActivityContext } from "./MScGrammarParser";
import { AspIdContext } from "./MScGrammarParser";
import { OspIdContext } from "./MScGrammarParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MScGrammarParser`.
 */
export interface MScGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `MScGrammarParser.description`.
	 * @param ctx the parse tree
	 */
	enterDescription?: (ctx: DescriptionContext) => void;
	/**
	 * Exit a parse tree produced by `MScGrammarParser.description`.
	 * @param ctx the parse tree
	 */
	exitDescription?: (ctx: DescriptionContext) => void;

	/**
	 * Enter a parse tree produced by `MScGrammarParser.leadingStatement`.
	 * @param ctx the parse tree
	 */
	enterLeadingStatement?: (ctx: LeadingStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MScGrammarParser.leadingStatement`.
	 * @param ctx the parse tree
	 */
	exitLeadingStatement?: (ctx: LeadingStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MScGrammarParser.initialStatement`.
	 * @param ctx the parse tree
	 */
	enterInitialStatement?: (ctx: InitialStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MScGrammarParser.initialStatement`.
	 * @param ctx the parse tree
	 */
	exitInitialStatement?: (ctx: InitialStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MScGrammarParser.closingStatement`.
	 * @param ctx the parse tree
	 */
	enterClosingStatement?: (ctx: ClosingStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MScGrammarParser.closingStatement`.
	 * @param ctx the parse tree
	 */
	exitClosingStatement?: (ctx: ClosingStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MScGrammarParser.statementList`.
	 * @param ctx the parse tree
	 */
	enterStatementList?: (ctx: StatementListContext) => void;
	/**
	 * Exit a parse tree produced by `MScGrammarParser.statementList`.
	 * @param ctx the parse tree
	 */
	exitStatementList?: (ctx: StatementListContext) => void;

	/**
	 * Enter a parse tree produced by `MScGrammarParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `MScGrammarParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `MScGrammarParser.afterStatement`.
	 * @param ctx the parse tree
	 */
	enterAfterStatement?: (ctx: AfterStatementContext) => void;
	/**
	 * Exit a parse tree produced by `MScGrammarParser.afterStatement`.
	 * @param ctx the parse tree
	 */
	exitAfterStatement?: (ctx: AfterStatementContext) => void;

	/**
	 * Enter a parse tree produced by `MScGrammarParser.asp`.
	 * @param ctx the parse tree
	 */
	enterAsp?: (ctx: AspContext) => void;
	/**
	 * Exit a parse tree produced by `MScGrammarParser.asp`.
	 * @param ctx the parse tree
	 */
	exitAsp?: (ctx: AspContext) => void;

	/**
	 * Enter a parse tree produced by `MScGrammarParser.osp`.
	 * @param ctx the parse tree
	 */
	enterOsp?: (ctx: OspContext) => void;
	/**
	 * Exit a parse tree produced by `MScGrammarParser.osp`.
	 * @param ctx the parse tree
	 */
	exitOsp?: (ctx: OspContext) => void;

	/**
	 * Enter a parse tree produced by `MScGrammarParser.immediatelyExpression`.
	 * @param ctx the parse tree
	 */
	enterImmediatelyExpression?: (ctx: ImmediatelyExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MScGrammarParser.immediatelyExpression`.
	 * @param ctx the parse tree
	 */
	exitImmediatelyExpression?: (ctx: ImmediatelyExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MScGrammarParser.eventuallyExpression`.
	 * @param ctx the parse tree
	 */
	enterEventuallyExpression?: (ctx: EventuallyExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MScGrammarParser.eventuallyExpression`.
	 * @param ctx the parse tree
	 */
	exitEventuallyExpression?: (ctx: EventuallyExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MScGrammarParser.sequencePreActivityExpression`.
	 * @param ctx the parse tree
	 */
	enterSequencePreActivityExpression?: (ctx: SequencePreActivityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MScGrammarParser.sequencePreActivityExpression`.
	 * @param ctx the parse tree
	 */
	exitSequencePreActivityExpression?: (ctx: SequencePreActivityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MScGrammarParser.andPreActivityExpression`.
	 * @param ctx the parse tree
	 */
	enterAndPreActivityExpression?: (ctx: AndPreActivityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MScGrammarParser.andPreActivityExpression`.
	 * @param ctx the parse tree
	 */
	exitAndPreActivityExpression?: (ctx: AndPreActivityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MScGrammarParser.orPreActivityExpression`.
	 * @param ctx the parse tree
	 */
	enterOrPreActivityExpression?: (ctx: OrPreActivityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MScGrammarParser.orPreActivityExpression`.
	 * @param ctx the parse tree
	 */
	exitOrPreActivityExpression?: (ctx: OrPreActivityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MScGrammarParser.repeatSincePreActivityExpression`.
	 * @param ctx the parse tree
	 */
	enterRepeatSincePreActivityExpression?: (ctx: RepeatSincePreActivityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MScGrammarParser.repeatSincePreActivityExpression`.
	 * @param ctx the parse tree
	 */
	exitRepeatSincePreActivityExpression?: (ctx: RepeatSincePreActivityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MScGrammarParser.postActivityExpression`.
	 * @param ctx the parse tree
	 */
	enterPostActivityExpression?: (ctx: PostActivityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MScGrammarParser.postActivityExpression`.
	 * @param ctx the parse tree
	 */
	exitPostActivityExpression?: (ctx: PostActivityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MScGrammarParser.sequencePostActivityExpression`.
	 * @param ctx the parse tree
	 */
	enterSequencePostActivityExpression?: (ctx: SequencePostActivityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MScGrammarParser.sequencePostActivityExpression`.
	 * @param ctx the parse tree
	 */
	exitSequencePostActivityExpression?: (ctx: SequencePostActivityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MScGrammarParser.andPostActivityExpression`.
	 * @param ctx the parse tree
	 */
	enterAndPostActivityExpression?: (ctx: AndPostActivityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MScGrammarParser.andPostActivityExpression`.
	 * @param ctx the parse tree
	 */
	exitAndPostActivityExpression?: (ctx: AndPostActivityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MScGrammarParser.orPostActivityExpression`.
	 * @param ctx the parse tree
	 */
	enterOrPostActivityExpression?: (ctx: OrPostActivityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MScGrammarParser.orPostActivityExpression`.
	 * @param ctx the parse tree
	 */
	exitOrPostActivityExpression?: (ctx: OrPostActivityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `MScGrammarParser.activity`.
	 * @param ctx the parse tree
	 */
	enterActivity?: (ctx: ActivityContext) => void;
	/**
	 * Exit a parse tree produced by `MScGrammarParser.activity`.
	 * @param ctx the parse tree
	 */
	exitActivity?: (ctx: ActivityContext) => void;

	/**
	 * Enter a parse tree produced by `MScGrammarParser.aspId`.
	 * @param ctx the parse tree
	 */
	enterAspId?: (ctx: AspIdContext) => void;
	/**
	 * Exit a parse tree produced by `MScGrammarParser.aspId`.
	 * @param ctx the parse tree
	 */
	exitAspId?: (ctx: AspIdContext) => void;

	/**
	 * Enter a parse tree produced by `MScGrammarParser.ospId`.
	 * @param ctx the parse tree
	 */
	enterOspId?: (ctx: OspIdContext) => void;
	/**
	 * Exit a parse tree produced by `MScGrammarParser.ospId`.
	 * @param ctx the parse tree
	 */
	exitOspId?: (ctx: OspIdContext) => void;
}

