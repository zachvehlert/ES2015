//var PI = 3.14;
//PI = 42; // stop me from doing this!

const PI = 3.14;
PI = 42; // --> Uncaught TypeError: Assignment to constant variable.

//What is the difference between var and let?
    //Var is redeclarable and is function scoped while let is not redeclarable and is block scoped. Only var is hoisted.

//What is the difference between var and const?
    //Var is reassignable, redeclarable, and is function scoped while const is not reassignable, 
    //not redeclarable, and is block scoped. Only var is hoisted.

//What is the difference between let and const?
    //let is reassignable.

//What is hoisting?
    //Var types will be hoisted, initialized without a value as soon as the code is run and assigned a value at the point of declaration.