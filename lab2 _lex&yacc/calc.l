%{
#include <math.h>
#include "y.tab.h"
void yyerror (char *s);
int yylex();
%}
%%
"print"				   {return print;}
"exit"				   {return exit_command;}
"sin"                  {return SIN;}
"tan"                  {return TAN;}
"cos"                  {return COS;}
[a-zA-Z]			   {yylval.id = yytext[0]; return identifier;}
[0-9]+                 {yylval.num = atoi(yytext); return number;}

[ \t\n]                ;
[-+*/%^=sin;]             {return yytext[0];}
.                      {ECHO; yyerror ("unexpected character");}

%%
int yywrap (void) {return 1;}