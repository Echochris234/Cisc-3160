
<!-- PROJECT LOGO -->
<br />
<p align="center">
  

  <h3 align="center">Scientific Calculator</h3>

  <p align="center">
    A simple Yacc and lexx application that implements the functions of a scientific calculator!
    <br />
    <a href="https://github.com/Echochris234/Cisc-3160/Lab3"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Echochris234//Cisc-3160/Lab3">View Demo</a>
    ·
    <a href="https://github.com/Echochris234/Cisc-3160/issues">Report Bug</a>
    ·
    <a href="https://github.com/Echochris234//Cisc-3160/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>

  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


The application is was a Command line program where functions where called based on the user input.

Motivation:
* To practice using various concepts that pertain to the lex and yacc programming languages 
.

### Built With

* [VS Code]
* [Lex]
* [Yacc]
* [C]



<!-- GETTING STARTED -->
## Getting Started

1. Clone the repo
   ```sh
    git clone https://github.com/Echochris234/Cisc-3160/Lab3
   ```
2. Run the following commands [assuming you have lex and yacc installed on your LM]
   ```sh
    yacc -d calc.y
    lex calc.l
    gcc lex.yy.c y.tab.c -o calc
   ```
3. If you followed these commands in order you should be greeted with a file named calc:
 
4. Run Program using the following command 
  ```sh
   ./calc
   ```



<!-- USAGE EXAMPLES -->
## Usage

* Upon start up the user is greeted with a breif description as to how to use the application
 <br><br>
    In order to use the operations one must follow a strict set of rules.
      1. The equation must be assigned to a variable 
      2. The expression must end in an ';'
  <br> <br><br>
      Currently the application supports a few functions such as:
        ·Addition
        ·Subtraction
        ·Multiplication
        ·Division
        ·Modulo(Remainder)
        ·Exponent
        ·Negation
        ·SIN
        ·COS
        ·TAN
    * Depending on the function selected the program request different parameters from the User:
     <br><br>
      * Addition: Variable = A + B;
       <br><br>
      * Subtraction: Variable = A - B;
        <br><br>
      * Multiplication: Variable = A * B;
       <br><br>
      * Division: Variable = A / B; throws error if dividing by 0
      <br><br>
      * Modulo: Variable = A % B;
       <br><br>
      * Exponent: Variable = A ^ B;
       <br><br>
      * Negation: Variable = - A;
       <br><br>
      * SIN: Variable = sin A;
      <br><br>
      * COS: Variable = cos A;
      <br><br>
      * TAN: Variable = tan A;
      <br><br>
      * Quit(Q): exit;
  <br>







<!-- CONTACT -->
## Contact

Christian Vargas - ChristianVargas1595@gmail.com

Project Link: [https://github.com/Echochris234/Cisc-3160/Lab3](https://github.com/Echochris234/Cisc-3160/Lab3)

