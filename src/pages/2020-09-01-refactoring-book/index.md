---
title: Martin Fowler «Refactoring» book overview
description: The best time for refactoring is just before you need to add a new feature to the code base. If you need to add a feature to a program first of all you should prepare the code, make it easy to add a feature and only then add the feature itself. Before you start refactoring you need to have solid test coverage. Refactoring is about making small changes. Therefore tests will make sure you will find where the bug is. After small changes to the codebase - commit the changes to version control.
date: "2020-09-01"
path: "/refactoring-book"
tags: ["Book review"]
---

I think every software developer should read this great book. It has all necessary answers to refactoring related questions. Below, I'm sharing with you what I've learned after reading the book.

## When we should refactor?

The best time for refactoring is just before you need to add a new feature to the code base. If you need to add a feature to a program first of all you should prepare the code, make it easy to add a feature and only then add the feature itself. Before you start refactoring you need to have solid test coverage. Refactoring is about making small changes. Therefore tests will make sure you will find where the bug is. After small changes to the codebase - commit the changes to version control.

Refactoring is always about making code "easier to understand and cheaper to modify". Rather than start refactoring by the plan you better should do refactoring as part of adding a feature or fixing a bug. Most of refactoring should happen while doing other things. Refactoring is not about adding future flexibility and currently unnecessary functionality(YAGNI), but about writing code that excellently solves current visible needs. The main reason for refactoring is economic benefits: refactor because it makes you faster—faster to add features, faster to fix bugs.

Do refactoring when you are adding a new feature of fixing a bug.
Do not refactor when you see a code mess but you don't need to modify it and when it’s easier to rewrite code than to refactor it.

Good software design is about modularity — the ability to make most modifications to a program while only having to understand a small part of it.

## What and how to refactor

### Mysterious names

Naming is one of the two hard things in writing code (second is cache invalidation). Naming things well is the heart of clear programming. Rename variable because variables can do a lot.

```javascript
const s = b * koef
const salary = base * gradeKoefficient
```

If you choose a suitable name for a function, you mostly won’t need to look at its body. Here is the tip: a good way to choose a name is to write a comment that describes the function’s purpose, then turn that comment into a name.

```javascript
const cache = getCache() // no idea from where we get the cache
const cache = getCacheFromLocalStorage()
```

### Duplicated code

Duplication means that every time you read the same code in different places, you need to read them carefully to see if there’s any difference. And if you need to change the duplicated code, you have to find and catch each duplication.

### Long function

The longer a function is, the more difficult it is to understand. Extract function. Look at a fragment of code, understand what it is doing, then extract it into its own function named after its purpose. Whenever you feel the need to comment something - write a function instead.

### Long parameter list

```javascript
const salary = calculateSalary(10000, 1.15, 2000, true)
```

To improve such a smelling code you can replace the parameter with a query or introduce a parameter object. Groups of data items that regularly travel together, appearing in function after function and replace it with a single data structure:

```javascript
const salary = calculateSalary({
  base: 10000,
  gradeKoefficient: 1.15,
  bonus: 2000,
  loyalEmployee: true,
})
```

Especially remove flag argument because they make harder understanding of what will change in function behavior if you change the flag to the opposite.

### Global data

The main problem with global data is that it can be changed from anywhere and it is hard to track the source of the problem.

### Mutable data

Mutable data leads to unexpected behavior and tricky bugs that hard to discover. Encapsulate variable. Data is more awkward to manipulate than functions.

### Feature envy

Feature envy occurs when a function in a module spends time on communication with data in another module. To solve this problem you can extract and move the function to another module.

### Data clumps

Data is more awkward to manipulate than functions. Encapsulate variables. The greater the scope of the data, the more important it is to encapsulate.

### Loops

Loops are anachronisms. Most modern languages provide a better alternative for them. For example, we can replace the loop with the pipeline. At least we can split loops because often loops are doing two different things at once just because they can do it:

```javascript
let averageAge = 0
let totalSalary = 0
for (const person of persons) {
  averageAge += person.age
  totalSalary += person.salary
}
averageAge = averageAge / persons.length
```

```javascript
let averageAge = 0
for (const person of persons) {
  averageAge += person.age
}
averageAge = averageAge / persons.length

let totalSalary = 0
for (const person of persons) {
  averageAge += person.age
}
```

Many programmers are uncomfortable with this refactoring, as it forces you to execute the loop twice. But we should separate refactoring from optimization. Finish refactoring first and do performance tuning afterward.

### Comments

The author does not call upon stop commenting. He only advises stopping commenting if the reason is that the code is bad. In situations when you need a comment to explain what a block of code does just extract the block into a separate function with a suitable name.

### Dead code

Remove dead code. Unused code is still a significant burden when trying to understand how the software works. The version control system will do the work for you.

### Large class

When code dealing with different things, look for a way to split it.

### Conditionals

One of the most common sources of complexity in a program is complex conditional logic. Extract them into functions.

```javascript
if (age >= 18 && age <= 27 && position === "defender") {
  score = baseKoef * defenderKoef + youthBonus
} else {
  score = baseKoef * regularKoef
}
```

```javascript
if (youngDefender()) {
  score = youngDefenderScore()
} else {
  score = regularScore()
}
```

Second approach is to replace conditional with polymorphism. First of all we need to combine functions into a class:

```javascript
switch(player.role) {
  case "Goalkeeper":
return "low";
  case "Striker":
return "high";
  case "Midfielder":
return player.age > 30 ? "low" : "average";
  default:
return "average";
```

```javascript
class Goalkeeper {
  get speed() {
    return "low"
  }
}

class Striker {
  get speed() {
    return "high"
  }
}

class Midfielder {
  get speed() {
    return this.age > 30 ? "low" : "average"
  }
}
```
