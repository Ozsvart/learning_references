// Type Assignment

// When defining types in TS, always use the lowercase version
let a: number = 4

// Literal type, when you hover over b, it shows the constant value, because it can't be changed.
const b = 4

// null vs undefined
const c = null

let d: null = null
d = undefined // it throws an error

// Array Type
const e: number[] = [1, 2, 3]
//
const f: [1, 2, 3] = [1, 2, 3]
f.push(4) // throws error, because in this case nothing can be modified in the array

// Any Type
let g: any = 4

g = 3
g = "sdf"

const h = JSON.parse("sdfsdf") // the type is any
const i = fetch("sdfsdf").then(res => res.json()).then(data => { data }) // data also has the type any
// Using any cuts down all the benefits of using TS, so you should avoid it.

// Object Basics
const personExample: {name: string; age: number; isProgrammer?: boolean} = { name: "Kyle", age: 28} // question mark syntax makes the property optional
// The properties can be separated by semi-colon, colon or a new line.

// Types

type Person /* camelcase! */ = {name: string; age: number; isProgrammer?: boolean; friends: string[]; address: { street: string}}
const person: Person = {
    name: "Kyle",
    age: 28,
    friends: [],
    address: {
        street: "Main St."
    }
}

const person2: Person = {
    name: "Sally",
    age: 22,
    friends: [],
    address: {
        street: "Main St."
    }
}

// Type Person can also be assigned a number, the type can be changed to anything. It is more flexible than interfaces.

// Interfaces
// Interface work with objects only.

interface PersonInterface {
    name: "Kyle",
    age: 28,
    friends: [],
    address: {
        street: "Main St."
    }
}

// Defining Functions

function printName(name: string, name2: string) {
    console.log(name, name2)
}

function sum(a: number, b: number) {
    return "sdf"
}

const num = sum(1, 2) // TypeScript knows that the return type will be a string.

//
function printPerson(person: {name: string}) {
    console.log(person.name)
}

const personPrint = {name: "Kyle", age: 28}

printPerson(personPrint)

// Void Type

function printName2(name: string): void {
    console.log(name)
}

/* The function above doesn't return anything. So what is the return type? It is set to void.
In TS undefined and void hasa slightly different meaning. Void means that this returns nothing and won't return anything at all. */