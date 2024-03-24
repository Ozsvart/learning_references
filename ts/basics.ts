/* TypeScript is normal JavaScript with types added on the top of it. Everything that is valid in JavaScript, s also valid in TypeScript.
Browsers can't run TypeScript. */

// Why to use TypeScript?
// It makes reading code quicker, errors can be found easier.

// in JS:
const button = document.createElement("button")

button.addEventListener("click", handleClick)

function handleClick(e) {
    console.log(e.target)
}

//in TS
const button = document.createElement("button")

button.addEventListener("click", handleClick)

function handleClick(e: MouseEvent) {
    console.log(e.target)
}

/* When initializing a TS project using the command line, first run command "npm init -y"
Then "npm i --save-dev typescript"
To create an initialization config file: "npx tsc --init"
To convert TS into a JS file: "npx tsc script.ts"

Or initialization with a bundler (e.g. vite)
"npm create vite@latest ."
Choose Vanilla, then TypeScript.
"npm install"
"npm run dev"
We can remove:
- vite.svg
- counter.ts
- style.css
- typescript.svg

The content of main.ts can also be removed.

To create a distribution folder: "npm run build"
Production version: "npm run preview"*/