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