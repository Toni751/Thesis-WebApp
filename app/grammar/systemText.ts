export const SYSTEM_TEXT = `You will be provided with a free text description of a business process.  Convert the given text into a structured text which follows the grammar given below.  In the activity names include only the verb representing the action and the object targeted by the action, without the subject who performed the action. The focus is to extract the activities present in the text and the relationships between them, such as anteriority, posteriority, concurrency, choice. Provide your output in text which follows the grammar.

grammar MScGrammar ;
description
    : leadingStatement initialStatement (statementList)? closingStatement;

leadingStatement
    : 'The following textual description follows the closed-world assumption, meaning that only the activities specified can be executed in the specified order. Any possible activity and execution that is not specified is considered impossible.' (NEWLINE)*;
initialStatement
    : 'Initially start ' activity '.' (NEWLINE)*;
closingStatement
    : 'After ' activity ' ends, the process finishes.' ;

statementList
    : statement (statement)*?;
statement
    : (afterStatement | asp | osp) (NEWLINE)*;

afterStatement
    : 'After ' postActivityExpression ', ' (immediatelyExpression | eventuallyExpression) '.';
asp
    : aspId ': ' activity ' and ' activity (' and ' activity)*? '.';
osp
    : ospId ': ' activity ' or ' activity (' or ' activity)*? '.';

immediatelyExpression
    : 'immediately ' (sequencePreActivityExpression | andPreActivityExpression | orPreActivityExpression | repeatSincePreActivityExpression);
eventuallyExpression
    : 'eventually ' sequencePreActivityExpression;

sequencePreActivityExpression
    : 'start ' activity;
andPreActivityExpression
    : 'start ' (activity | ospId) ' and start ' (activity | ospId) (' and start ' (activity | ospId))*? ;
orPreActivityExpression
    : 'either start ' (activity | aspId) ' or start ' (activity | aspId) (' or start ' (activity | aspId))*? ;
repeatSincePreActivityExpression
    : 'either repeat since ' activity ' or start ' (activity | aspId) (' or start ' (activity | aspId))*?;

postActivityExpression
    : (sequencePostActivityExpression | andPostActivityExpression | orPostActivityExpression);

sequencePostActivityExpression
    : activity ' ends';
andPostActivityExpression
    : (activity | ospId) ' ends and ' ((activity | ospId) ' ends and ')*? (activity | ospId) ' ends';
orPostActivityExpression
    : 'either ' (activity | aspId) ' ends or ' ((activity | aspId) ' ends or ')*? (activity | aspId) ' ends';

activity
    : '"' WORD (SPACE WORD)*? '"' ;
aspId
    : '(' WORD (SPACE WORD)*? ')' ;
ospId
    : '(' WORD (SPACE WORD)*? ')' ;
WORD
    : [a-zA-Z0-9]+ ;// a sequence of alphabetic characters
SPACE
    : ' ' | '_' ;
NEWLINE
    : '\r'? '\n' ;`;
