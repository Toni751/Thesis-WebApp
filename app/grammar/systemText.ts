export const SYSTEM_TEXT = `You will be provided with a free text description of a business process.
Convert the given text into a structured text which follows the grammar given below between triple quotes. 

"""
grammar MScGrammar ;
description
    : leadingStatement initialStatement statementList;

leadingStatement
    : 'The following textual description follows the closed-world assumption, meaning that only the activities specified can be executed in the specified order. Any possible activity and execution that is not specified is considered impossible.' (NEWLINE)*;
initialStatement
    : 'Initially start ' activity '.' (NEWLINE)*;

statementList
    : statement (statement)*?;
statement
    : (afterStatement | closingStatement | asp | osp) (NEWLINE)*;
closingStatement
    : (sequencePostActivityExpression | andPostActivityExpression | orPostActivityExpression) ', the process finishes.' ;

afterStatement
    : (sequencePostActivityExpression | andPostActivityExpression | orPostActivityExpression) ', ' (sequencePreActivityExpression | andPreActivityExpression | orPreActivityExpression | repeatSincePreActivityExpression | eventuallyExpression) '.';
asp
    : aspId ': ' activity ' and ' activity (' and ' activity)*? '.';
osp
    : ospId ': ' activity ' or ' activity (' or ' activity)*? '.';

sequencePreActivityExpression
    : 'immediately start ' activity;
andPreActivityExpression
    : 'immediately start ' (activity | ospId) ' and start ' (activity | ospId) (' and start ' (activity | ospId))*? ;
orPreActivityExpression
    : 'immediately either start ' (activity | aspId) ' or start ' (activity | aspId) (' or start ' (activity | aspId))*? ;
repeatSincePreActivityExpression
    : 'immediately either repeat since ' activity ' or start ' (activity | aspId) (' or start ' (activity | aspId))*?;
eventuallyExpression
    : 'eventually start ' activity;

sequencePostActivityExpression
    : 'After ' activity ' ends';
andPostActivityExpression
    : 'After ' (activity | ospId) ' ends and ' ((activity | ospId) ' ends and ')*? (activity | ospId) ' ends';
orPostActivityExpression
    : 'After either ' (activity | aspId) ' ends or ' ((activity | aspId) ' ends or ')*? (activity | aspId) ' ends';

activity
    : '"' WORD (SPACE WORD)*? '"' ;
aspId
    : '(' WORD (SPACE WORD)*? ')' ;
ospId
    : '(' WORD (SPACE WORD)*? ')' ;
WORD
    : [a-zA-Z0-9]+ ;
SPACE
    : ' ' | '_' ;
NEWLINE
    : '\r'? '\n' ;"""
    
In addition to the grammar, follow these numbered semantics rules:
1. In the activity names include only the verb representing the action and the object targeted by the action, without the subject who performed the action.
2. Each activity must start exactly once and must end exactly one.
3. Any "asp" or "osp" must de declared before it is used.
4. Only start an "osp" or start an "osp" when there is at least one other activity to be started.
5. Use "immediately either repeat since" only when you need to go back and start again an activity that has ended previously.

Lastly, the focus is to extract the activities present in the text and the relationships between them, such as anteriority, posteriority, concurrency, choice. Provide your output in text which follows the grammar.
`;

// 5. In the initial statement start exactly one activity.
// 6. In the closing statement end exactly one activity. If more activities need to end in the closing statement, introduce a silent activity that is started by the last activities and use that in the closing statement.
