%{
void yyerror (char *s);
int yylex();
#include <stdio.h>     /* C declarations used in actions */
#include <stdlib.h>
#include <ctype.h>
#include <math.h>
int symbols[52];
char num[50];
int symbolVal(char symbol);
void updateSymbolVal(char symbol, int val);
%}

%union {int num; char id;}         /* Yacc definitions */
%start line
%token print
%token SIN TAN COS
%token exit_command
%token <num> number
%token <id> identifier
%type <num> line exp term 
%type <id> assignment

%%

/* descriptions of expected inputs     corresponding actions (in C) */

line    : assignment ';'		{;}
		| exit_command ';'		{exit(EXIT_SUCCESS);}
		| print exp ';'			{printf("Printing %d\n", $2);}
		| line assignment ';'	{;}
		| line print exp ';'	{printf("Printing %d\n", $3);}
		| line exit_command ';'	{exit(EXIT_SUCCESS);}
        ;

assignment : identifier '=' exp  { updateSymbolVal($1,$3); }
			;
exp    	: term                  {$$ = $1;}

       	| exp '+' term          {
			   						$$ = $1 + $3;
									printf("Addition: %d ", $1);
									printf("+ %d ", $3);
									printf("= %d\n ", $$);
		   
		   						}
		   
       	| exp '-' term          {
			   						$$ = $1 - $3;
									printf("Subtracting: %d ", $1);
									printf("- %d ", $3);
									printf("= %d\n ", $$);
		   						}
        
		| exp '*' term          {
									$$ = $1 * $3;
								
									printf("Multiplying: %d ", $1);
									printf("* %d ", $3);
									printf("= %d\n ", $$);
								}

        | exp '/' term          {
                                    if($3==0){
                                        printf("Divide By Zero Not allowed");
                                        exit(0);
                                    }else{
										
                                        $$ = $1 / $3;
									
										printf("Dividing: %d ", $1);
										printf("/ %d ", $3);
										printf("= %d\n ", $$);
                                    }
                                    
                                }

        | '-' term              {
									$$=-$2;
									printf("Negative: %d ", $2);
									printf("= %d\n ", $$);
									
		
		
								}

        | SIN term              {
			
									$$=sin($2);
									printf("Sin(%d", $2);
									printf(") = %d\n ", $$);
									
									
								}

        | TAN term              {
									$$=tan($2);
									printf("Tan(%d", $2);
									printf(") = %d\n ", $$);
								
								}

        | COS term              {
									$$=cos($2);
									printf("Cos(%d", $2);
									printf(") = %d\n ", $$);
									
								}  

        | exp '%' term          {
									$$ = $1 % $3;
									printf("Modulo: %d ", $1);
									printf("Mod %d ", $3);
									printf("= %d\n ", $$);
		
		
								}

        | exp '^' term          {
									$$ = pow($1,$3);
									printf("Exponenet: %d ", $1);
									printf("^ %d ", $3);
									printf("= %d\n ", $$);
		
		
								}
       	;

term   	: number                {$$ = $1;}
		| identifier			{$$ = symbolVal($1);} 
        ;

%%                     /* C code */

int computeSymbolIndex(char token)
{
	int idx = -1;
	if(islower(token)) {
		idx = token - 'a' + 26;
	} else if(isupper(token)) {
		idx = token - 'A';
	}
	return idx;
} 

/* returns the value of a given symbol */
int symbolVal(char symbol)
{
	int bucket = computeSymbolIndex(symbol);
	return symbols[bucket];
}

/* updates the value of a given symbol */
void updateSymbolVal(char symbol, int val)
{
	int bucket = computeSymbolIndex(symbol);
	symbols[bucket] = val;
}

int main (void) {
	/* init symbol table */
	int i;
	printf("Welcome to the Scientific Calculator \n");
	printf("Every Expression must be a specific format i.e :");
	printf(" V = T Operation T; \n");
	for(i=0; i<52; i++) {
		symbols[i] = 0;
	}

	return yyparse ( );
}

void yyerror (char *s) {fprintf (stderr, "%s\n", s);} 