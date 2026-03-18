## `parseInt()` :-

- `parseInt()` is a javascript built-in function that convert a string to an integer(whole number).
- these `parseInt()` work when the output string contain number and we need number.
- if the string contain number + a string, parseInt is convert only the first number.

# USE :- `parseInt(string, redix, fnRefernce)`

## `PreventDefault()` :-

- `preventDefault()` is a javaScript event method that stop the browser default action.
- when an event is triggered, the browser is normally performs a default behavior.
- `preventDefault()` cencals that default behavior.
- this is mostly used form-submit, link-click, keyboard-events

# USE :- `event.preventDefault()`

## `setInterval(function(){ codes }, 1000` :-

- `setInterval()` is a build-in timer function in javaScript, that executedes reapetitive codes.
- it work in both, browser and Node.js environments.
- `setInterval()` follows asynchronous behavior through the javaScript event loop.
- Developer use of automatic task performed.
- it is controled the javaSript events

# `toLocalDateString()` :-

- it is a time or date converter.

# `Math.random()` :-

- it use to create a random number.

# Note :-

# `const form = document.getElementsByClassName("form");`

# `form.addEventListener("submit", function (e) {});`

- `getElementsByClassName()` Returns an HTML collection, not a single element.
- Therefore, you cannot directly invoke `addEventListener()`on the HTML collection.

# Note :-

- when the javaScript event is run is sequential.

## Events :-

- it is directly don't used in html documents.

# `onClick()` :

- The `onclick()` event is a mouse event.
- When a user clicks with the mouse, a function is executed.
- It is primarily used with buttons and interactive elements.

# Used of onClick events

- Button
- Image
- Div
- Link
- Icon

## ` AttachEvent()` :

- `attachEvent()` was an event handling method.
- It was used to attach events in Internet Explorer (IE 8 and earlier).
- It added an event listener to a DOM element.

## `appendChild()` :

- `appendChild()` is a DOM method.
- It appends an existing or newly created element to the end of a parent element.
- It is primarily used to create dynamic user interfaces.

## proEvent Propagation :-

- When an event is triggered (such as a click), it travels through the DOM elements in a specific order.

1. Event Propagation is occure in three phase:

| Phase           | Meaning        |
| --------------- | -------------- |
| Capturing Phase | parent → child |
| Target Phase    | actual element |
| Bubbling Phase  | child → parent |

# these work in two phase

1. Event Bubbling :

- In event bubbling, the event travels from the child to the parent.

2. Event Capturing :

- In event capturing, the event travels from the parent to the child.
- To enable this, the third parameter of `addEventListener` must be set to `true`.

# Common event Object attributes :

- timestamp
- defaultPrevent
- target
- toElement
- srcElement
- currantTarget
- clientX
- clientY
- screenX
- screenY
- altKey
- ctrlKey
- shiftKey
- keyCode

## setTimeOut() :-

- `setTimeout()` is a timer function.
- It executes a function after a specified delay in milliseconds.
- It executes only once.

1.  Syntax :

```
setTimeout(function, delay);
```

| Part       | Meaning                   |
| ---------- | ------------------------- |
| `function` | jo function run karna hai |
| `delay`    | time in milliseconds      |

```
 setTimeout(function (){
  console.log("Hello Rahul");
}, 2000);
```

## Promise() :-

- A promise is a javaScript object that represent of future result of an asynchronous operation.
- this indicates wather the operation will succed or fail in the future.
- promise are primarily used for asynchronous task such as API call, file loading, and timers.

# its contain two parameters :-

1. Resolve function :-
   -when call resolve(), the promise return a seccessful result and send datas.

2. Reject function :-

- when call reject(), the promise return a fail result and send error.

# Three type of promise() states :-

1. Pending :-

- promises is not complate operation are working.

2. Fullfilled :-

- promise are seccessful complate, and return result.

3. Rejected :-

- promise are fail and return error.

# syntax:

```
const myPromise = new promise(function(resolve, reject){
   setTimeOut(function(){
      console.log("hello")
   }, 1000)
})

myPromise
.then((result)=>{console.log(result)})
.catch((error)=>{console.log(error)})
```

## fetch() :-

- `fetch() `is a build-in javaScript function used to send network request.
- its primarily used for fetching or sending data via APIs.
- fetch is an asynchronous and return promises.
- The response is handled using `.then()` or `async/await`.

```
fetch("https://jsonplaceholder.typicode.com/users")
.then((responce)=>{return responce.json()})
.then((data)=>{console.log(data)})
.catch((error)=>{console.log(error)})
```

## Object literal :-

- `object literal` are the simplest and most direct way to create object in javaScript.
- in this, an object is define using of curly braces '{}'.
- object contain key-value pairs that represent properties and methods.

```
const person = {}
```

## this. :-

- `this` is a special keyword in JavaScript that refers to the current object.
- This indicates the context of the object within which the function is being executed.
- The value of 'this' depends on the execution context.
- If a function is called inside an object, `this` refers to that object.

## Constructor Function :-

- A constructor function in JavaScript is a special function used to create objects.
- The purpose of this is to create multiple objects with the same structure.
- The 'new' keyword is used to create an object.

```
function Student(name, age) {
 this.name = name;
 this.age = age;
}

const s1 = new Student("Rahul", 20);
const s2 = new Student("Aman", 22);

console.log(s1.name);
console.log(s2.name);
```

# new :-
- Creates an empty object.
- Binds `this` to that object.
- Runs the constructor function.
- Returns the object.
