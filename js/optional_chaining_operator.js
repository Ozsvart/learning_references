// Optional Chaining Operator (?.)

/* Accesses an object's property or calls a function. If it is undefined or null, the expression short circles
and evaluates to undefined instead of throwing an error. */

/* Syntax:
        obj.val?.prop
        obj.val?.[expr]
        obj.func?.(args)*/

let will_pokemon = {
    pikachu: {
        species: "mouse pokemon",
        height: 0.4,
        weight: 6
    }
}

let andrei_pokemon = {
    raichu: {
        species: "mouse pokemon",
        height: 0.4,
        weight: 30,
        power: ""
    }
}

// using ternary operator
const weight2 = (andrei_pokemon.pikachu && andrei_pokemon.pikachu.weight) ? andrei_pokemon.pikachu.weight : undefined

// using optional chaining operator
let weight3 = andrei_pokemon?.pikachu?.weight
console.log(weight3)

let weight = will_pokemon.pikachu.weight
console.log("weight": weight)
let weight2 = andrei_pokemon.pikachu.weight
console.log("weight": weight)

//Nullish Coalescing Operator (??)

/* A logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined,
and otherwise returns its left-hand side operand.
It is a special case of the OR (||) operator. */
/* Combining nullish coalescing operator and optional chaining operator, you can access a property of an object
which may be nullish and provide a default value if it is. */
let power = andrei_pokemon?.raichu?.power ?? "no power"
console.log(power)

