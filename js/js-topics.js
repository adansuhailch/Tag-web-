const jsTopicData = {

    /* ═══════════════════════════════════════════════
       1. JAVASCRIPT BASICS
    ═══════════════════════════════════════════════ */
    "script-tag": {
        title: "<script> Tag", category: "Basics", difficulty: "Beginner",
        history: "The <script> tag embeds or references JavaScript code in an HTML document. It can appear in <head> or <body>. Best practice is to place it before </body> or use the 'defer' attribute.",
        code: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Script Tag</title>\n</head>\n<body>\n  <p id="demo">Hello World</p>\n  <script>\n    document.getElementById('demo').textContent = 'JavaScript is running!';\n  <\/script>\n</body>\n</html>`,
        quiz: "Where is the best place to put a <script> tag for performance?", answer: "before closing body tag"
    },

    "console-log": {
        title: "console.log()", category: "Basics", difficulty: "Beginner",
        history: "console.log() prints messages to the browser's developer console. Essential for debugging. Other useful methods: console.error(), console.warn(), console.table().",
        code: `<script>\n  console.log('Hello, World!');\n  console.log(42);\n  console.log([1, 2, 3]);\n  console.log({name: 'Adan', age: 20});\n<\/script>`,
        quiz: "Which method prints output to the browser console?", answer: "console.log"
    },

    "comments": {
        title: "Comments", category: "Basics", difficulty: "Beginner",
        history: "Comments are ignored by the JavaScript engine. Single-line comments use // and multi-line comments use /* */. They help document and explain code.",
        code: `<script>\n  // This is a single-line comment\n\n  /*\n   * This is a\n   * multi-line comment\n   */\n\n  let x = 5; // inline comment\n  console.log(x);\n<\/script>`,
        quiz: "What symbol starts a single-line JavaScript comment?", answer: "//"
    },

    "variables": {
        title: "Variables (let, const, var)", category: "Basics", difficulty: "Beginner",
        history: "Variables store data values. 'var' is function-scoped (old). 'let' is block-scoped and reassignable. 'const' is block-scoped and cannot be reassigned. Prefer const, then let.",
        code: `<script>\n  var oldWay = 'avoid var';\n  let age = 20;       // can be reassigned\n  const name = 'Adan'; // cannot be reassigned\n\n  age = 21; // ✅ OK\n  // name = 'Ali'; // ❌ Error!\n\n  console.log(name, age);\n<\/script>`,
        quiz: "Which keyword declares a block-scoped variable that cannot be reassigned?", answer: "const"
    },

    "data-types": {
        title: "Data Types", category: "Basics", difficulty: "Beginner",
        history: "JavaScript has 8 data types: String, Number, Boolean, Null, Undefined, Object, Symbol, BigInt. Use typeof to check a value's type.",
        code: `<script>\n  let str   = 'Hello';        // String\n  let num   = 42;             // Number\n  let bool  = true;           // Boolean\n  let empty = null;           // Null\n  let undef;                  // Undefined\n  let obj   = {a: 1};        // Object\n  let big   = 9007199254740993n; // BigInt\n\n  console.log(typeof str);  // "string"\n  console.log(typeof num);  // "number"\n  console.log(typeof bool); // "boolean"\n<\/script>`,
        quiz: "What is the data type of 'Hello World'?", answer: "string"
    },

    "template-literals": {
        title: "Template Literals", category: "Basics", difficulty: "Beginner",
        history: "Template literals (backtick strings) allow embedded expressions using ${} syntax and support multi-line strings. Introduced in ES6.",
        code: `<script>\n  const name = 'Adan';\n  const age  = 20;\n\n  // Old way\n  console.log('Hi ' + name + ', you are ' + age);\n\n  // Template literal\n  console.log(\`Hi \${name}, you are \${age} years old!\`);\n\n  // Multi-line\n  const msg = \`Line 1\n  Line 2\n  Line 3\`;\n  console.log(msg);\n<\/script>`,
        quiz: "What character wraps a template literal?", answer: "backtick"
    },

    /* ═══════════════════════════════════════════════
       2. OPERATORS & EXPRESSIONS
    ═══════════════════════════════════════════════ */
    "arithmetic-operators": {
        title: "Arithmetic Operators", category: "Operators", difficulty: "Beginner",
        history: "Arithmetic operators perform math: + (add), - (subtract), * (multiply), / (divide), % (modulo/remainder), ** (exponent), ++ (increment), -- (decrement).",
        code: `<script>\n  console.log(10 + 3);  // 13\n  console.log(10 - 3);  // 7\n  console.log(10 * 3);  // 30\n  console.log(10 / 3);  // 3.333...\n  console.log(10 % 3);  // 1\n  console.log(2 ** 8);  // 256\n\n  let x = 5;\n  x++;\n  console.log(x); // 6\n<\/script>`,
        quiz: "Which operator returns the remainder of a division?", answer: "%"
    },

    "comparison-operators": {
        title: "Comparison Operators", category: "Operators", difficulty: "Beginner",
        history: "Comparison operators compare values and return true/false. Always prefer === (strict equality) over == (loose equality) to avoid type coercion bugs.",
        code: `<script>\n  console.log(5 == '5');  // true  (loose)\n  console.log(5 === '5'); // false (strict)\n  console.log(5 !== 3);   // true\n  console.log(10 > 5);    // true\n  console.log(10 < 5);    // false\n  console.log(5 >= 5);    // true\n<\/script>`,
        quiz: "Which operator checks value AND type equality?", answer: "==="
    },

    "logical-operators": {
        title: "Logical Operators", category: "Operators", difficulty: "Beginner",
        history: "&& (AND), || (OR), ! (NOT). Short-circuit evaluation: && stops at the first falsy value, || stops at the first truthy value. Useful for default values: const val = input || 'default'.",
        code: `<script>\n  console.log(true && false); // false\n  console.log(true || false); // true\n  console.log(!true);          // false\n\n  // Short-circuit\n  const user = null;\n  const name = user || 'Guest';\n  console.log(name); // 'Guest'\n<\/script>`,
        quiz: "Which logical operator returns true only if BOTH conditions are true?", answer: "&&"
    },

    "ternary-operator": {
        title: "Ternary Operator", category: "Operators", difficulty: "Beginner",
        history: "The ternary operator is a compact if/else: condition ? valueIfTrue : valueIfFalse. Great for simple conditions, but avoid nesting for readability.",
        code: `<script>\n  const age = 18;\n  const access = age >= 18 ? 'Allowed' : 'Denied';\n  console.log(access); // 'Allowed'\n\n  // Equivalent to:\n  // if (age >= 18) { access = 'Allowed'; } else { access = 'Denied'; }\n<\/script>`,
        quiz: "What symbol separates the true and false values in a ternary operator?", answer: ":"
    },

    /* ═══════════════════════════════════════════════
       3. CONTROL FLOW
    ═══════════════════════════════════════════════ */
    "if-else": {
        title: "if / else", category: "Control Flow", difficulty: "Beginner",
        history: "if/else conditionally executes code blocks. Use else if for multiple conditions. Always wrap blocks in {} even for single-line statements.",
        code: `<script>\n  const score = 75;\n\n  if (score >= 90) {\n    console.log('A grade');\n  } else if (score >= 70) {\n    console.log('B grade');\n  } else if (score >= 50) {\n    console.log('C grade');\n  } else {\n    console.log('Fail');\n  }\n<\/script>`,
        quiz: "What keyword starts a conditional statement in JavaScript?", answer: "if"
    },

    "switch": {
        title: "switch Statement", category: "Control Flow", difficulty: "Beginner",
        history: "switch evaluates an expression and matches it against case labels. Don't forget break! Use default for the fallback case.",
        code: `<script>\n  const day = 'Monday';\n\n  switch (day) {\n    case 'Monday':\n      console.log('Start of work week');\n      break;\n    case 'Friday':\n      console.log('End of work week');\n      break;\n    case 'Saturday':\n    case 'Sunday':\n      console.log('Weekend!');\n      break;\n    default:\n      console.log('Midweek');\n  }\n<\/script>`,
        quiz: "What keyword prevents fall-through in a switch statement?", answer: "break"
    },

    "for-loop": {
        title: "for Loop", category: "Control Flow", difficulty: "Beginner",
        history: "The for loop repeats a block a set number of times. Syntax: for (init; condition; update). Also: for...of iterates over iterables, for...in iterates over object keys.",
        code: `<script>\n  // Classic for loop\n  for (let i = 0; i < 5; i++) {\n    console.log('Count:', i);\n  }\n\n  // for...of (arrays)\n  const fruits = ['Apple', 'Banana', 'Cherry'];\n  for (const fruit of fruits) {\n    console.log(fruit);\n  }\n<\/script>`,
        quiz: "Which loop is best for iterating over an array's values?", answer: "for of"
    },

    "while-loop": {
        title: "while / do...while", category: "Control Flow", difficulty: "Beginner",
        history: "while checks the condition BEFORE each iteration. do...while checks AFTER — so it always runs at least once.",
        code: `<script>\n  let count = 0;\n  while (count < 3) {\n    console.log('while:', count);\n    count++;\n  }\n\n  let x = 0;\n  do {\n    console.log('do-while:', x);\n    x++;\n  } while (x < 3);\n<\/script>`,
        quiz: "Which loop always executes its body at least once?", answer: "do while"
    },

    "break-continue": {
        title: "break & continue", category: "Control Flow", difficulty: "Beginner",
        history: "break exits the loop immediately. continue skips the rest of the current iteration and jumps to the next.",
        code: `<script>\n  for (let i = 0; i < 10; i++) {\n    if (i === 3) continue; // skip 3\n    if (i === 7) break;    // stop at 7\n    console.log(i);\n  }\n  // Prints: 0, 1, 2, 4, 5, 6\n<\/script>`,
        quiz: "Which keyword skips the current iteration of a loop?", answer: "continue"
    },

    /* ═══════════════════════════════════════════════
       4. FUNCTIONS
    ═══════════════════════════════════════════════ */
    "function-declaration": {
        title: "Function Declaration", category: "Functions", difficulty: "Beginner",
        history: "Functions are reusable blocks of code. Declared with the 'function' keyword. Function declarations are hoisted — you can call them before they appear in code.",
        code: `<script>\n  function greet(name) {\n    return 'Hello, ' + name + '!';\n  }\n\n  console.log(greet('Adan')); // Hello, Adan!\n  console.log(greet('Ali'));  // Hello, Ali!\n<\/script>`,
        quiz: "What keyword declares a function in JavaScript?", answer: "function"
    },

    "arrow-functions": {
        title: "Arrow Functions", category: "Functions", difficulty: "Beginner",
        history: "Arrow functions (=>) are a concise ES6 syntax. They don't have their own 'this' context, making them great for callbacks. Single-expression bodies can omit return and {}.",
        code: `<script>\n  // Traditional\n  function add(a, b) { return a + b; }\n\n  // Arrow function\n  const addArrow = (a, b) => a + b;\n\n  // Single param — no parens needed\n  const double = n => n * 2;\n\n  console.log(addArrow(3, 4)); // 7\n  console.log(double(5));      // 10\n<\/script>`,
        quiz: "What symbol is used to write an arrow function?", answer: "=>"
    },

    "parameters-arguments": {
        title: "Parameters & Arguments", category: "Functions", difficulty: "Beginner",
        history: "Parameters are the named inputs in a function definition. Arguments are the actual values passed when calling it. Default parameters provide fallback values.",
        code: `<script>\n  function introduce(name = 'Stranger', age = 0) {\n    console.log(\`I am \${name}, age \${age}\`);\n  }\n\n  introduce('Adan', 20); // I am Adan, age 20\n  introduce('Sara');     // I am Sara, age 0\n  introduce();           // I am Stranger, age 0\n<\/script>`,
        quiz: "What are the values passed into a function when called called?", answer: "arguments"
    },

    "return-values": {
        title: "Return Values", category: "Functions", difficulty: "Beginner",
        history: "The return statement sends a value back from a function and stops execution. A function without return returns undefined.",
        code: `<script>\n  function multiply(a, b) {\n    return a * b;\n  }\n\n  const result = multiply(6, 7);\n  console.log(result); // 42\n\n  function noReturn() {\n    console.log('No return');\n  }\n  console.log(noReturn()); // undefined\n<\/script>`,
        quiz: "What keyword is used to return a value from a function?", answer: "return"
    },

    "callbacks": {
        title: "Callback Functions", category: "Functions", difficulty: "Intermediate",
        history: "A callback is a function passed as an argument to another function, to be called later. Fundamental pattern in async JavaScript and array methods like forEach, map, filter.",
        code: `<script>\n  function doMath(a, b, callback) {\n    return callback(a, b);\n  }\n\n  const add = (x, y) => x + y;\n  const mul = (x, y) => x * y;\n\n  console.log(doMath(3, 4, add)); // 7\n  console.log(doMath(3, 4, mul)); // 12\n\n  // Real-world: setTimeout callback\n  setTimeout(() => console.log('1 second later!'), 1000);\n<\/script>`,
        quiz: "What is a function that is passed as an argument to another function called?", answer: "callback"
    },

    "rest-spread": {
        title: "Rest & Spread Operators", category: "Functions", difficulty: "Intermediate",
        history: "The spread operator (...) expands arrays/objects. The rest parameter (...) collects remaining arguments into an array. Both use the same '...' syntax.",
        code: `<script>\n  // Rest — collect args\n  function sum(...nums) {\n    return nums.reduce((a, b) => a + b, 0);\n  }\n  console.log(sum(1, 2, 3, 4)); // 10\n\n  // Spread — expand array\n  const arr1 = [1, 2, 3];\n  const arr2 = [...arr1, 4, 5];\n  console.log(arr2); // [1, 2, 3, 4, 5]\n\n  // Spread — copy object\n  const obj1 = {a: 1};\n  const obj2 = {...obj1, b: 2};\n  console.log(obj2); // {a:1, b:2}\n<\/script>`,
        quiz: "What operator collects remaining arguments into an array?", answer: "rest"
    },

    /* ═══════════════════════════════════════════════
       5. ARRAYS
    ═══════════════════════════════════════════════ */
    "array-basics": {
        title: "Array Basics", category: "Arrays", difficulty: "Beginner",
        history: "Arrays store ordered lists of values. Zero-indexed. Can hold any data type. Key properties: .length. Common methods: push, pop, shift, unshift, indexOf, includes.",
        code: `<script>\n  const fruits = ['Apple', 'Banana', 'Cherry'];\n\n  console.log(fruits[0]);      // 'Apple'\n  console.log(fruits.length);  // 3\n  console.log(fruits.includes('Banana')); // true\n\n  fruits.push('Date');         // add to end\n  fruits.unshift('Avocado');  // add to start\n  console.log(fruits);\n<\/script>`,
        quiz: "What index does the first element of an array have?", answer: "0"
    },

    "push-pop": {
        title: "push / pop / shift / unshift", category: "Arrays", difficulty: "Beginner",
        history: "push adds to end, pop removes from end. unshift adds to beginning, shift removes from beginning. All mutate the original array.",
        code: `<script>\n  const stack = [1, 2, 3];\n\n  stack.push(4);           // [1,2,3,4]\n  console.log(stack.pop()); // 4, stack=[1,2,3]\n\n  stack.unshift(0);         // [0,1,2,3]\n  console.log(stack.shift()); // 0, stack=[1,2,3]\n\n  console.log(stack); // [1, 2, 3]\n<\/script>`,
        quiz: "Which method adds an element to the END of an array?", answer: "push"
    },

    "array-map": {
        title: "Array .map()", category: "Arrays", difficulty: "Beginner",
        history: ".map() creates a NEW array by applying a callback to every element. Does not mutate the original. Returns an array of the same length.",
        code: `<script>\n  const numbers = [1, 2, 3, 4, 5];\n\n  const doubled = numbers.map(n => n * 2);\n  console.log(doubled); // [2, 4, 6, 8, 10]\n\n  const names = ['alice', 'bob', 'carol'];\n  const upper = names.map(n => n.toUpperCase());\n  console.log(upper); // ['ALICE', 'BOB', 'CAROL']\n<\/script>`,
        quiz: "What does .map() return?", answer: "new array"
    },

    "array-filter": {
        title: "Array .filter()", category: "Arrays", difficulty: "Beginner",
        history: ".filter() returns a new array with only elements where the callback returns true. Great for searching and removing items.",
        code: `<script>\n  const nums = [1, 2, 3, 4, 5, 6, 7, 8];\n\n  const evens = nums.filter(n => n % 2 === 0);\n  console.log(evens); // [2, 4, 6, 8]\n\n  const words = ['apple', 'ant', 'banana', 'avocado'];\n  const aWords = words.filter(w => w.startsWith('a'));\n  console.log(aWords); // ['apple', 'ant', 'avocado']\n<\/script>`,
        quiz: "What does .filter() return?", answer: "new array"
    },

    "array-reduce": {
        title: "Array .reduce()", category: "Arrays", difficulty: "Intermediate",
        history: ".reduce() processes each element and accumulates a single result. Parameters: callback(accumulator, currentValue) and an optional initial value.",
        code: `<script>\n  const nums = [1, 2, 3, 4, 5];\n\n  const sum = nums.reduce((acc, cur) => acc + cur, 0);\n  console.log(sum); // 15\n\n  const product = nums.reduce((acc, cur) => acc * cur, 1);\n  console.log(product); // 120\n\n  // Flatten array\n  const nested = [[1,2],[3,4],[5]];\n  const flat = nested.reduce((acc, cur) => [...acc, ...cur], []);\n  console.log(flat); // [1,2,3,4,5]\n<\/script>`,
        quiz: "What does .reduce() return?", answer: "single value"
    },

    "array-find": {
        title: "Array .find() & .findIndex()", category: "Arrays", difficulty: "Beginner",
        history: ".find() returns the first element that passes a test. .findIndex() returns its index. Returns undefined/-1 if nothing matches.",
        code: `<script>\n  const users = [\n    {id: 1, name: 'Adan'},\n    {id: 2, name: 'Sara'},\n    {id: 3, name: 'Ali'}\n  ];\n\n  const sara = users.find(u => u.name === 'Sara');\n  console.log(sara); // {id:2, name:'Sara'}\n\n  const idx = users.findIndex(u => u.id === 3);\n  console.log(idx); // 2\n<\/script>`,
        quiz: "What does .find() return if no element matches?", answer: "undefined"
    },

    "array-sort": {
        title: "Array .sort()", category: "Arrays", difficulty: "Intermediate",
        history: ".sort() sorts in place. By default sorts as strings (causes bugs with numbers!). Always provide a comparator for numbers: arr.sort((a,b) => a - b).",
        code: `<script>\n  const letters = ['banana', 'apple', 'cherry'];\n  letters.sort();\n  console.log(letters); // ['apple','banana','cherry']\n\n  const nums = [10, 1, 5, 2, 8];\n  nums.sort((a, b) => a - b); // ascending\n  console.log(nums); // [1, 2, 5, 8, 10]\n\n  nums.sort((a, b) => b - a); // descending\n  console.log(nums); // [10, 8, 5, 2, 1]\n<\/script>`,
        quiz: "What comparator argument sorts numbers ascending?", answer: "(a,b) => a - b"
    },

    "array-foreach": {
        title: "Array .forEach()", category: "Arrays", difficulty: "Beginner",
        history: ".forEach() executes a callback for each element. Returns undefined (cannot chain like map). Use when you need side effects, not a new array.",
        code: `<script>\n  const colors = ['red', 'green', 'blue'];\n\n  colors.forEach((color, index) => {\n    console.log(index + ': ' + color);\n  });\n\n  // 0: red\n  // 1: green\n  // 2: blue\n<\/script>`,
        quiz: "What does .forEach() return?", answer: "undefined"
    },

    /* ═══════════════════════════════════════════════
       6. OBJECTS
    ═══════════════════════════════════════════════ */
    "object-basics": {
        title: "Object Basics", category: "Objects", difficulty: "Beginner",
        history: "Objects store key-value pairs. Keys are strings (or Symbols). Values can be any type. Access with dot notation (obj.key) or bracket notation (obj['key']).",
        code: `<script>\n  const person = {\n    name: 'Adan',\n    age: 20,\n    city: 'Lahore'\n  };\n\n  console.log(person.name);      // 'Adan'\n  console.log(person['age']);    // 20\n\n  // Add / update property\n  person.email = 'adan@mail.com';\n  person.age = 21;\n\n  // Delete property\n  delete person.city;\n\n  console.log(person);\n<\/script>`,
        quiz: "Which notation accesses an object property with a dynamic key?", answer: "bracket notation"
    },

    "object-methods": {
        title: "Object Methods", category: "Objects", difficulty: "Beginner",
        history: "Object static methods help inspect and manipulate objects. Object.keys() → array of keys. Object.values() → array of values. Object.entries() → [[key, value], ...]. Object.assign() merges objects.",
        code: `<script>\n  const car = {make: 'Toyota', model: 'Corolla', year: 2022};\n\n  console.log(Object.keys(car));   // ['make','model','year']\n  console.log(Object.values(car)); // ['Toyota','Corolla',2022]\n  console.log(Object.entries(car));\n  // [['make','Toyota'],['model','Corolla'],['year',2022]]\n\n  const copy = Object.assign({}, car, {year: 2023});\n  console.log(copy);\n<\/script>`,
        quiz: "Which Object method returns an array of a key's values?", answer: "Object.values"
    },

    "this-keyword": {
        title: "this Keyword", category: "Objects", difficulty: "Intermediate",
        history: "'this' refers to the object that called the function. In a method, 'this' is the object. In arrow functions 'this' is inherited from the enclosing scope. In node.js/strict mode at the top level it is undefined.",
        code: `<script>\n  const person = {\n    name: 'Adan',\n    greet: function() {\n      console.log('Hi, I am ' + this.name);\n    },\n    // Arrow: inherits outer this (wrong in objects!)\n    greetArrow: () => {\n      console.log('Arrow this:', this); // undefined / window\n    }\n  };\n\n  person.greet();      // Hi, I am Adan\n  person.greetArrow(); // Arrow this: window\n<\/script>`,
        quiz: "In a regular method, what does 'this' refer to?", answer: "the object"
    },

    "destructuring": {
        title: "Destructuring", category: "Objects", difficulty: "Intermediate",
        history: "Destructuring unpacks values from arrays or properties from objects into distinct variables. Supports defaults and renaming.",
        code: `<script>\n  // Object destructuring\n  const {name, age, city = 'Unknown'} = {name: 'Adan', age: 20};\n  console.log(name, age, city); // Adan 20 Unknown\n\n  // Array destructuring\n  const [first, second, ...rest] = [1, 2, 3, 4, 5];\n  console.log(first, second, rest); // 1 2 [3,4,5]\n\n  // In function params\n  function show({name, age}) {\n    console.log(\`\${name} is \${age}\`);\n  }\n  show({name: 'Sara', age: 22}); // Sara is 22\n<\/script>`,
        quiz: "What is the syntax feature called that unpacks object properties into variables?", answer: "destructuring"
    },

    /* ═══════════════════════════════════════════════
       7. DOM MANIPULATION
    ═══════════════════════════════════════════════ */
    "getElementById": {
        title: "getElementById()", category: "DOM", difficulty: "Beginner",
        history: "document.getElementById('id') returns the element with the given ID. Returns null if not found. One of the fastest DOM selectors.",
        code: `<!DOCTYPE html>\n<html>\n<body>\n  <h1 id="title">Original Title</h1>\n  <button onclick="changeTitle()">Change Title</button>\n\n  <script>\n    function changeTitle() {\n      const el = document.getElementById('title');\n      el.textContent = 'Title Changed! ✅';\n      el.style.color = 'teal';\n    }\n  <\/script>\n</body>\n</html>`,
        quiz: "What method selects an element by its id attribute?", answer: "getElementById"
    },

    "querySelector": {
        title: "querySelector & querySelectorAll", category: "DOM", difficulty: "Beginner",
        history: "querySelector() returns the FIRST matching element using CSS selectors. querySelectorAll() returns a NodeList of all matches. Most flexible DOM selector.",
        code: `<!DOCTYPE html>\n<html>\n<body>\n  <p class="info">Info 1</p>\n  <p class="info">Info 2</p>\n  <p id="special">Special</p>\n\n  <script>\n    const first = document.querySelector('.info');\n    first.style.color = 'blue';\n\n    const all = document.querySelectorAll('.info');\n    all.forEach(el => el.style.background = '#e0f7ff');\n\n    document.querySelector('#special').style.fontWeight = 'bold';\n  <\/script>\n</body>\n</html>`,
        quiz: "Which method selects the FIRST matching element using any CSS selector?", answer: "querySelector"
    },

    "classList": {
        title: "classList Methods", category: "DOM", difficulty: "Beginner",
        history: "classList lets you add/remove/toggle CSS classes on elements without messing with className string. Methods: add(), remove(), toggle(), contains(), replace().",
        code: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .active { background: teal; color: white; padding: 10px; border-radius:6px; }\n  </style>\n</head>\n<body>\n  <div id="box">Click the button!</div>\n  <button onclick="toggle()">Toggle Active</button>\n\n  <script>\n    function toggle() {\n      const box = document.getElementById('box');\n      box.classList.toggle('active');\n      console.log('has active:', box.classList.contains('active'));\n    }\n  <\/script>\n</body>\n</html>`,
        quiz: "Which classList method adds a class if absent, removes it if present?", answer: "toggle"
    },

    "style-manipulation": {
        title: "Style Manipulation", category: "DOM", difficulty: "Beginner",
        history: "element.style lets you set inline CSS. Use camelCase: backgroundColor, fontSize. For bulk changes, prefer adding/removing CSS classes. getComputedStyle reads the final computed style.",
        code: `<!DOCTYPE html>\n<html>\n<body>\n  <div id="box" style="width:100px;height:100px;background:coral;border-radius:8px"></div>\n  <button onclick="animate()">Animate!</button>\n\n  <script>\n    function animate() {\n      const box = document.getElementById('box');\n      box.style.width = '200px';\n      box.style.background = 'teal';\n      box.style.transition = 'all 0.4s ease';\n      box.style.borderRadius = '50%';\n    }\n  <\/script>\n</body>\n</html>`,
        quiz: "How do you set the background color using element.style?", answer: "backgroundColor"
    },

    "createElement": {
        title: "createElement & appendChild", category: "DOM", difficulty: "Beginner",
        history: "document.createElement() creates a new HTML element in memory. appendChild() / append() inserts it into the DOM. insertBefore() and prepend() offer more control.",
        code: `<!DOCTYPE html>\n<html>\n<body>\n  <ul id="list"></ul>\n  <button onclick="addItem()">Add Item</button>\n\n  <script>\n    let count = 1;\n    function addItem() {\n      const li = document.createElement('li');\n      li.textContent = 'Item ' + count++;\n      li.style.padding = '4px';\n      document.getElementById('list').appendChild(li);\n    }\n  <\/script>\n</body>\n</html>`,
        quiz: "Which method creates a new HTML element?", answer: "createElement"
    },

    "remove-element": {
        title: "Removing Elements", category: "DOM", difficulty: "Beginner",
        history: "element.remove() removes the element from the DOM. Older approach: parent.removeChild(child). innerHTML = '' clears all children quickly.",
        code: `<!DOCTYPE html>\n<html>\n<body>\n  <p id="msg">This will be removed.</p>\n  <button onclick="removeMsg()">Remove Paragraph</button>\n\n  <script>\n    function removeMsg() {\n      const el = document.getElementById('msg');\n      el.remove();\n    }\n  <\/script>\n</body>\n</html>`,
        quiz: "Which method removes an element from the DOM?", answer: "remove"
    },

    /* ═══════════════════════════════════════════════
       8. EVENTS
    ═══════════════════════════════════════════════ */
    "addEventListener": {
        title: "addEventListener()", category: "Events", difficulty: "Beginner",
        history: "addEventListener attaches an event handler to an element. Preferred over inline onclick attributes because you can attach multiple listeners and easily remove them.",
        code: `<!DOCTYPE html>\n<html>\n<body>\n  <button id="btn">Click Me!</button>\n  <p id="output"></p>\n\n  <script>\n    const btn = document.getElementById('btn');\n    let clicks = 0;\n\n    btn.addEventListener('click', function() {\n      clicks++;\n      document.getElementById('output').textContent =\n        'Clicked ' + clicks + ' times!';\n    });\n  <\/script>\n</body>\n</html>`,
        quiz: "What method is used to attach an event handler to an element?", answer: "addEventListener"
    },

    "keyboard-events": {
        title: "Keyboard Events", category: "Events", difficulty: "Beginner",
        history: "keydown fires when a key is pressed. keyup fires when released. Use event.key to get the actual key value. event.code gives the physical key position.",
        code: `<!DOCTYPE html>\n<html>\n<body>\n  <input id="inp" placeholder="Type something...">\n  <p id="out"></p>\n\n  <script>\n    document.getElementById('inp').addEventListener('keydown', function(e) {\n      document.getElementById('out').textContent =\n        'Key: ' + e.key + ' | Code: ' + e.code;\n\n      if (e.key === 'Enter') {\n        alert('Enter pressed!');\n      }\n    });\n  <\/script>\n</body>\n</html>`,
        quiz: "Which event fires when a keyboard key is pressed down?", answer: "keydown"
    },

    "form-events": {
        title: "Form Events", category: "Events", difficulty: "Beginner",
        history: "submit fires when a form is submitted. input fires on every keystroke. change fires when a input loses focus with a new value. preventDefault() stops default browser behavior (like page reload on submit).",
        code: `<!DOCTYPE html>\n<html>\n<body>\n  <form id="myForm">\n    <input id="username" type="text" placeholder="Enter name">\n    <button type="submit">Submit</button>\n  </form>\n  <p id="result"></p>\n\n  <script>\n    document.getElementById('myForm').addEventListener('submit', function(e) {\n      e.preventDefault();\n      const val = document.getElementById('username').value;\n      document.getElementById('result').textContent = 'Hello, ' + val + '!';\n    });\n  <\/script>\n</body>\n</html>`,
        quiz: "Which method prevents the default action of a form submission?", answer: "preventDefault"
    },

    "event-bubbling": {
        title: "Event Bubbling & Delegation", category: "Events", difficulty: "Intermediate",
        history: "Events bubble up from child to parent to document. stopPropagation() stops bubbling. Event delegation attaches one listener to a parent and uses event.target to handle children — efficient for dynamic lists.",
        code: `<!DOCTYPE html>\n<html>\n<body>\n  <ul id="myList">\n    <li>Item 1</li>\n    <li>Item 2</li>\n    <li>Item 3</li>\n  </ul>\n  <p id="clicked"></p>\n\n  <script>\n    // Event delegation — one listener handles all <li>\n    document.getElementById('myList').addEventListener('click', function(e) {\n      if (e.target.tagName === 'LI') {\n        document.getElementById('clicked').textContent =\n          'Clicked: ' + e.target.textContent;\n      }\n    });\n  <\/script>\n</body>\n</html>`,
        quiz: "What is it called when an event listener handles children via a parent?", answer: "event delegation"
    },

    /* ═══════════════════════════════════════════════
       9. ASYNC JAVASCRIPT
    ═══════════════════════════════════════════════ */
    "promises": {
        title: "Promises", category: "Async", difficulty: "Intermediate",
        history: "A Promise represents a value that will be available in the future. States: pending, fulfilled, rejected. .then() handles success, .catch() handles errors, .finally() runs regardless.",
        code: `<script>\n  function fetchData(success) {\n    return new Promise((resolve, reject) => {\n      setTimeout(() => {\n        if (success) resolve('Data loaded!');\n        else reject('Error: failed to load');\n      }, 1000);\n    });\n  }\n\n  fetchData(true)\n    .then(data => console.log(data))\n    .catch(err => console.error(err))\n    .finally(() => console.log('Done!'));\n<\/script>`,
        quiz: "Which method handles a rejected Promise?", answer: ".catch"
    },

    "async-await": {
        title: "async / await", category: "Async", difficulty: "Intermediate",
        history: "async/await is syntactic sugar over Promises. An async function always returns a Promise. await pauses execution until the Promise settles. Wrap in try/catch for error handling.",
        code: `<script>\n  function delay(ms) {\n    return new Promise(resolve => setTimeout(resolve, ms));\n  }\n\n  async function run() {\n    console.log('Start');\n    await delay(1000);\n    console.log('After 1 second');\n    await delay(500);\n    console.log('After 0.5 more seconds');\n  }\n\n  run();\n<\/script>`,
        quiz: "What keyword pauses async function execution until a Promise resolves?", answer: "await"
    },

    "fetch-api": {
        title: "fetch API", category: "Async", difficulty: "Intermediate",
        history: "fetch() is the modern way to make HTTP requests. Returns a Promise. Response must be parsed: .json() for JSON, .text() for text. Always check response.ok for errors.",
        code: `<script>\n  async function getUser() {\n    try {\n      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');\n      if (!response.ok) throw new Error('HTTP error: ' + response.status);\n\n      const user = await response.json();\n      console.log(user.name);\n      console.log(user.email);\n    } catch (err) {\n      console.error('Fetch failed:', err);\n    }\n  }\n\n  getUser();\n<\/script>`,
        quiz: "What method parses a fetch response body as JSON?", answer: ".json()"
    },

    "error-handling": {
        title: "try / catch / finally", category: "Async", difficulty: "Beginner",
        history: "try wraps potentially failing code. catch receives the Error object. finally always runs. throw creates errors manually. Use specific error types (TypeError, RangeError) for clearer debugging.",
        code: `<script>\n  function divide(a, b) {\n    if (b === 0) throw new Error('Cannot divide by zero!');\n    return a / b;\n  }\n\n  try {\n    console.log(divide(10, 2));  // 5\n    console.log(divide(10, 0));  // throws!\n  } catch (err) {\n    console.error('Caught:', err.message);\n  } finally {\n    console.log('always runs');\n  }\n<\/script>`,
        quiz: "What keyword manually throws an error in JavaScript?", answer: "throw"
    },

    /* ═══════════════════════════════════════════════
       10. BROWSER APIS
    ═══════════════════════════════════════════════ */
    "localStorage": {
        title: "localStorage", category: "Browser APIs", difficulty: "Beginner",
        history: "localStorage persists data across browser sessions (until explicitly cleared). setItem / getItem / removeItem / clear. Can only store strings — use JSON.stringify/parse for objects.",
        code: `<script>\n  // Store data\n  localStorage.setItem('username', 'Adan');\n  localStorage.setItem('score', JSON.stringify({points: 100}));\n\n  // Retrieve data\n  const name = localStorage.getItem('username');\n  const score = JSON.parse(localStorage.getItem('score'));\n\n  console.log(name);         // 'Adan'\n  console.log(score.points); // 100\n\n  // Remove\n  localStorage.removeItem('username');\n  // localStorage.clear(); // clears ALL\n<\/script>`,
        quiz: "What method stores a value in localStorage?", answer: "setItem"
    },

    "sessionStorage": {
        title: "sessionStorage", category: "Browser APIs", difficulty: "Beginner",
        history: "sessionStorage is like localStorage but data is cleared when the browser tab is closed. Same API: setItem, getItem, removeItem, clear. Useful for temporary session data.",
        code: `<script>\n  sessionStorage.setItem('page', 'home');\n  sessionStorage.setItem('user', JSON.stringify({id: 1, role: 'admin'}));\n\n  const page = sessionStorage.getItem('page');\n  const user = JSON.parse(sessionStorage.getItem('user'));\n\n  console.log(page);      // 'home'\n  console.log(user.role); // 'admin'\n\n  // Cleared automatically when tab closes\n<\/script>`,
        quiz: "When does sessionStorage data get cleared?", answer: "when the tab closes"
    },

    "timers": {
        title: "setTimeout & setInterval", category: "Browser APIs", difficulty: "Beginner",
        history: "setTimeout(fn, ms) runs a function ONCE after a delay. setInterval(fn, ms) runs it REPEATEDLY every ms milliseconds. clearTimeout/clearInterval cancel them.",
        code: `<!DOCTYPE html>\n<html>\n<body>\n  <p id="timer">0</p>\n  <button onclick="startTimer()">Start</button>\n  <button onclick="stopTimer()">Stop</button>\n\n  <script>\n    let count = 0, id;\n    function startTimer() {\n      id = setInterval(() => {\n        count++;\n        document.getElementById('timer').textContent = count;\n      }, 1000);\n    }\n    function stopTimer() {\n      clearInterval(id);\n    }\n  <\/script>\n</body>\n</html>`,
        quiz: "Which function runs code repeatedly at a set interval?", answer: "setInterval"
    },

    "clipboard-api": {
        title: "Clipboard API", category: "Browser APIs", difficulty: "Intermediate",
        history: "The modern Clipboard API is async and requires HTTPS (or localhost). navigator.clipboard.writeText() writes text; readText() reads it. Older execCommand('copy') is deprecated.",
        code: `<!DOCTYPE html>\n<html>\n<body>\n  <input id="inp" value="Hello, World!" style="width:200px">\n  <button onclick="copyText()">📋 Copy</button>\n  <span id="msg"></span>\n\n  <script>\n    async function copyText() {\n      const text = document.getElementById('inp').value;\n      try {\n        await navigator.clipboard.writeText(text);\n        document.getElementById('msg').textContent = ' Copied!';\n      } catch(err) {\n        console.error('Copy failed:', err);\n      }\n    }\n  <\/script>\n</body>\n</html>`,
        quiz: "What API is used for modern copy-to-clipboard functionality?", answer: "clipboard api"
    },

    /* ═══════════════════════════════════════════════
       11. ERROR HANDLING & MISC
    ═══════════════════════════════════════════════ */
    "typeof": {
        title: "typeof Operator", category: "Basics", difficulty: "Beginner",
        history: "typeof returns a string indicating the type of its operand. Common results: 'string', 'number', 'boolean', 'undefined', 'object', 'function', 'symbol'. Note: typeof null === 'object' is a historic bug.",
        code: `<script>\n  console.log(typeof 'hello');    // 'string'\n  console.log(typeof 42);         // 'number'\n  console.log(typeof true);       // 'boolean'\n  console.log(typeof undefined);  // 'undefined'\n  console.log(typeof null);       // 'object' (bug!)\n  console.log(typeof {});         // 'object'\n  console.log(typeof []);         // 'object'\n  console.log(typeof function(){}); // 'function'\n<\/script>`,
        quiz: "What does typeof null return?", answer: "object"
    },

    "string-methods": {
        title: "String Methods", category: "Basics", difficulty: "Beginner",
        history: "Strings are immutable in JS. Common methods: toUpperCase(), toLowerCase(), trim(), split(), replace(), includes(), startsWith(), endsWith(), slice(), indexOf(), padStart().",
        code: `<script>\n  const str = '  Hello, World!  ';\n\n  console.log(str.trim());          // 'Hello, World!'\n  console.log(str.toUpperCase());   // '  HELLO, WORLD!  '\n  console.log(str.includes('World')); // true\n  console.log(str.trim().split(', ')); // ['Hello','World!']\n  console.log('abc'.padStart(5, '0')); // '00abc'\n  console.log('Hi'.repeat(3));       // 'HiHiHi'\n<\/script>`,
        quiz: "Which method removes whitespace from both ends of a string?", answer: "trim"
    },

    "number-methods": {
        title: "Number Methods & Math", category: "Basics", difficulty: "Beginner",
        history: "Math is a built-in object with constants and methods. Number methods: toFixed(), parseInt(), parseFloat(), Number(), isNaN(), isFinite(). Math: Math.random(), Math.floor(), Math.ceil(), Math.max(), Math.min(), Math.abs().",
        code: `<script>\n  console.log(Math.PI);              // 3.14159...\n  console.log(Math.floor(4.9));     // 4\n  console.log(Math.ceil(4.1));      // 5\n  console.log(Math.round(4.5));     // 5\n  console.log(Math.max(3, 7, 2));   // 7\n  console.log(Math.abs(-5));        // 5\n\n  // Random integer 0-9\n  const rand = Math.floor(Math.random() * 10);\n  console.log(rand);\n\n  console.log((3.14159).toFixed(2)); // '3.14'\n<\/script>`,
        quiz: "Which method rounds a number DOWN to the nearest integer?", answer: "Math.floor"
    },

    "nullish-coalescing": {
        title: "Nullish Coalescing (??)", category: "Operators", difficulty: "Intermediate",
        history: "The ?? operator returns the RIGHT side only if the LEFT side is null or undefined (not falsy like 0 or ''). This makes it safer than || for default values when 0 or '' are valid.",
        code: `<script>\n  const a = null ?? 'default';     // 'default'\n  const b = undefined ?? 'fallback'; // 'fallback'\n  const c = 0 ?? 'zero not null';  // 0 (not fallback!)\n  const d = '' ?? 'empty';          // '' (not fallback!)\n\n  console.log(a, b, c, d);\n\n  // Optional chaining + nullish\n  const user = null;\n  const name = user?.name ?? 'Anonymous';\n  console.log(name); // 'Anonymous'\n<\/script>`,
        quiz: "What operator provides a default only for null or undefined?", answer: "??"
    },

    "optional-chaining": {
        title: "Optional Chaining (?.)", category: "Operators", difficulty: "Intermediate",
        history: "?. safely accesses nested properties — returns undefined instead of throwing an error if the object is null/undefined. Works on properties, method calls, and array access.",
        code: `<script>\n  const user = {\n    name: 'Adan',\n    address: {\n      city: 'Lahore'\n    }\n  };\n\n  console.log(user?.name);           // 'Adan'\n  console.log(user?.address?.city);  // 'Lahore'\n  console.log(user?.phone?.number);  // undefined (no error!)\n  console.log(user?.greet?.());     // undefined (no error!)\n<\/script>`,
        quiz: "What operator safely accesses nested object properties?", answer: "?."
    },

    "json": {
        title: "JSON", category: "Async", difficulty: "Beginner",
        history: "JSON (JavaScript Object Notation) is a text format for data exchange. JSON.stringify() converts JS to JSON string. JSON.parse() converts JSON string back to JS. Only supports strings, numbers, booleans, null, arrays, objects.",
        code: `<script>\n  const data = {\n    name: 'Adan',\n    age: 20,\n    skills: ['HTML', 'CSS', 'JavaScript']\n  };\n\n  // JS → JSON string\n  const jsonStr = JSON.stringify(data);\n  console.log(jsonStr);\n  // '{\"name\":\"Adan\",\"age\":20,...}'\n\n  // JSON string → JS\n  const parsed = JSON.parse(jsonStr);\n  console.log(parsed.name);    // 'Adan'\n  console.log(parsed.skills);  // ['HTML','CSS','JavaScript']\n<\/script>`,
        quiz: "Which method converts a JavaScript object to a JSON string?", answer: "JSON.stringify"
    },

    "modules": {
        title: "ES Modules (import/export)", category: "Basics", difficulty: "Intermediate",
        history: "ES Modules let you split code into reusable files. Named exports use export { name }. Default export uses export default. Import with import keyword. Use type='module' in <script>.",
        code: `<!-- math.js -->\n<!-- export function add(a, b) { return a + b; } -->\n<!-- export const PI = 3.14159; -->\n<!-- export default function multiply(a, b) { return a * b; } -->\n\n<!-- main.js -->\n<script type="module">\n  // Named imports\n  // import { add, PI } from './math.js';\n  // Default import\n  // import multiply from './math.js';\n\n  // For this demo:\n  const add = (a, b) => a + b;\n  console.log(add(3, 4)); // 7\n<\/script>`,
        quiz: "What HTML script attribute enables ES module syntax?", answer: "type=module"
    },

    "closures": {
        title: "Closures", category: "Functions", difficulty: "Intermediate",
        history: "A closure is a function that remembers its outer variables even after the outer function has returned. Essential for data privacy and creating factory functions.",
        code: `<script>\n  function makeCounter(start = 0) {\n    let count = start; // private variable\n\n    return {\n      increment() { count++; },\n      decrement() { count--; },\n      value()     { return count; }\n    };\n  }\n\n  const counter = makeCounter(10);\n  counter.increment();\n  counter.increment();\n  counter.decrement();\n  console.log(counter.value()); // 11\n  // count is not accessible directly!\n<\/script>`,
        quiz: "What term describes a function that remembers its outer scope's variables?", answer: "closure"
    },

    "spread-objects": {
        title: "Spread with Objects", category: "Objects", difficulty: "Intermediate",
        history: "Spread (...) copies object properties shallowly. Great for immutable updates in React/Redux patterns. Later properties override earlier ones.",
        code: `<script>\n  const defaults = { theme: 'dark', lang: 'en', fontSize: 14 };\n  const userPref = { theme: 'light', fontSize: 16 };\n\n  // Merge: userPref overrides defaults\n  const settings = { ...defaults, ...userPref };\n  console.log(settings);\n  // { theme:'light', lang:'en', fontSize:16 }\n\n  // Immutable update\n  const user = { name: 'Adan', age: 20 };\n  const updatedUser = { ...user, age: 21 };\n  console.log(updatedUser); // { name:'Adan', age:21 }\n<\/script>`,
        quiz: "What operator is used to merge two objects?", answer: "spread"
    },

    "array-slice-splice": {
        title: "slice & splice", category: "Arrays", difficulty: "Intermediate",
        history: "slice(start, end) returns a new sub-array WITHOUT mutating. splice(start, deleteCount, ...items) mutates the original array — deletes/inserts elements.",
        code: `<script>\n  const arr = [1, 2, 3, 4, 5];\n\n  // slice — no mutation\n  console.log(arr.slice(1, 3)); // [2, 3]\n  console.log(arr);             // [1, 2, 3, 4, 5]\n\n  // splice — mutates!\n  const removed = arr.splice(1, 2, 'a', 'b');\n  console.log(removed); // [2, 3]\n  console.log(arr);     // [1, 'a', 'b', 4, 5]\n<\/script>`,
        quiz: "Which method returns a portion of an array WITHOUT mutating the original?", answer: "slice"
    },

    "date-object": {
        title: "Date Object", category: "Browser APIs", difficulty: "Beginner",
        history: "The Date object represents a moment in time. new Date() = now. Methods: getFullYear(), getMonth() (0-indexed!), getDate(), getHours(), toLocaleDateString(), toLocaleTimeString().",
        code: `<script>\n  const now = new Date();\n\n  console.log(now.getFullYear()); // e.g. 2026\n  console.log(now.getMonth());    // 0-11 (0=Jan)\n  console.log(now.getDate());     // day of month\n  console.log(now.getDay());      // 0=Sun, 6=Sat\n\n  console.log(now.toLocaleDateString());  // '3/7/2026'\n  console.log(now.toLocaleTimeString());  // '1:40 PM'\n\n  // Specific date\n  const birthday = new Date('2005-01-15');\n  console.log(birthday.getFullYear()); // 2005\n<\/script>`,
        quiz: "What value does getMonth() return for January?", answer: "0"
    },

    "class-syntax": {
        title: "ES6 Classes", category: "Objects", difficulty: "Intermediate",
        history: "Classes are syntactic sugar over JavaScript's prototype system. Define a constructor, methods, and use 'extends' for inheritance. Static methods belong to the class, not instances.",
        code: `<script>\n  class Animal {\n    constructor(name, sound) {\n      this.name = name;\n      this.sound = sound;\n    }\n    speak() {\n      return \`\${this.name} says \${this.sound}!\`;\n    }\n  }\n\n  class Dog extends Animal {\n    constructor(name) {\n      super(name, 'Woof');\n    }\n    fetch(item) {\n      return \`\${this.name} fetches the \${item}!\`;\n    }\n  }\n\n  const d = new Dog('Rex');\n  console.log(d.speak());       // Rex says Woof!\n  console.log(d.fetch('ball')); // Rex fetches the ball!\n<\/script>`,
        quiz: "What keyword is used to inherit from a parent class?", answer: "extends"
    }
};

/* ═══════════════════════════════════════════════
   CATEGORY METADATA
═══════════════════════════════════════════════ */
const jsCategories = [
    { key: "Basics", label: "⚡ Basics", color: "#3b82f6" },
    { key: "Operators", label: "➕ Operators", color: "#8b5cf6" },
    { key: "Control Flow", label: "🔀 Control Flow", color: "#ef4444" },
    { key: "Functions", label: "🔧 Functions", color: "#f59e0b" },
    { key: "Arrays", label: "📦 Arrays", color: "#10b981" },
    { key: "Objects", label: "🗂️ Objects", color: "#06b6d4" },
    { key: "DOM", label: "🌐 DOM", color: "#ec4899" },
    { key: "Events", label: "🎯 Events", color: "#f97316" },
    { key: "Async", label: "⏳ Async JS", color: "#a855f7" },
    { key: "Browser APIs", label: "🛠️ Browser APIs", color: "#14b8a6" }
];
