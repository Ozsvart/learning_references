# Scope

## Definition

Scope means variable access: what variables do I have access to when the code is running? In other words, scope is the current context of execution in which values and expressions are "visible", so they can be referenced.
In JS we are in the root scope by default, this means the window object.

## Syntaxes

```
function aa() {
    console.log("test");
}
```

In the above case, `function aa()` is part of the window.

```
function bb() {
    var a = "Hello";
}

console.log(a)
```

In this case `console.log(a)` throws an error, because `var a` lives only inside `function bb()`. To `console.log` `var a` you can use the following:

```
function bb() {
    var a = "Hello";
    console.log(a);
}

bb()
```

The output will be "Hello".

```
var b = "Can I access this?"

function bb() {
    console.log(b);
}
```

`bb()` has access to `var b`, because both of them live on the window object.

## Renaming a Variable

```
var b = "Can I access this?"

function bb() {
    var b = "Hello";
}
```

When just `console.log(b)`, then the output is `Can I access this?`

**But when you run call the `bb()` function**, `console.log(b)` returns Hello, because b is the same variable.

## Root Scope, Child Scope

```
var fun = 5;

function funFunction() {
    // this is a child scope
    var fun = "Helloooo";
    console.log(1,fun);
}

function funerFunction() {
    // this is a child scope
    var fun = "Bye-bye";
    console.log(2,fun);
}

function funestFunction() {
    // this is a child scope
    fun = "AHHHHH";
    console.log(3,fun);
}

console.log("window", fun)
funFunction();
funerFunction();
funestFunction();
```

If you don't call any of the function, `console.log("window", fun)` will return `window 5`, because they are both in the root scope. When you call all the other three functions, the output will be:  
// window 5  
// 1 "Helloooo"  
// 2 "Bye-bye"  
// 3 "AHHHHH"

When a next time `console.log("window", fun)` runs, it returns `3 "AHHHHH"`, because **in the third case the value of `fun` was modified**. In the first and second cases you will have no access to the `fun` variable in the root scope, because inside the first and second functions, `fun` has its own meaning. This latter is called a naming conflict.

## Scope Levels

### Global Scope

The simplest scope. When you define a variable at the top level of a file (i.e. outside any function/curly braces) you use the global scope, which can be accessed anywhere in your application.

```
<script src"script.js"></script>

// script.js
const a = 1
console.log(a)

// Prints: 1
```

The variable can be used in other files as well.

### Module Scope

Similar to global scope, but module scope variables are only available in the file you define them.

```
<script src"script-1.js" type="module"></script>
<script src"script-2.js" type="module"></script>

// script-1.js
const a = 1
console.log(a)

// Prints: 1

// script-2.js
console.log(a)

// Throws Uncaught Reference Error: a is not defined
```

### Block Scope

It lines up with the curly brace: any time when you have code inside curly braces that is considered its own block scope (e.g. functions, if statements, for loops).

```
function test() {
    const funcVar = "Func"

    if(true) {
        const ifVar = "If"
        console.log(funcVar, ifVar)
        // Prints: "Func", "If"
    }
    console.log(funVar, ifVar)
    // Throws an Uncaught Reference Error: ifVar is not defined
}
```

Each block scope has access:

- to all the variables that between the curly braces but not within another set of curly braces
- to all variables of its parent scope

### Function Scope

Function scope relates to the `var` keyword. Variables defined with the `var` keyword are scoped at the function level instead of the block level. That means they only care about the curly braces of a function.

```
function test() {
    var funcVar = "Func"

    if(true) {
        var ifVar = "If"
        console.log(funcVar, ifVar)
        // Prints: "Func", "If"
    }
    console.log(funVar, ifVar)
    // Prints: "Func", "If"
}
```

This is the same code as above. With the `var` it works well, because if block doesn't matter for function scope.

## Multiple Variables With The Same Name

```
function test() {
const a = "Func"

    if(true) {
        const a = "If"
        console.log(a)
        // Prints: "If"
    }
    console.log(a)
    // Prints: "Func"

}
```

Two variables with the same name in two different scopes are actually two entirely separate variables. They have nothing to do with one another.
