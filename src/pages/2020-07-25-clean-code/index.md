---
title: Book review of «Clean code» by Robert C. Martin
description: Sloppy code leads to a reduction of development speed in geometric progression. First of all, it is a source of many bugs. Bugs, in turn, are unpredictable work. Second of all, it is difficult to add new cool features to the old rotting code. Thus, keep the code clean as possible is the only way to go fast and make the deadline.
date: "2020-07-25"
path: "/clean-code-review"
tags: ["Book review"]
---

## Intro

I read this book a few years ago. I was an inexperienced young man. Now It's time to brush up memory and look through this great book again. The book is still in effect today. Universality is the main advantage of it.

## Why we should write clean code

Sloppy code leads to a reduction of development speed in geometric progression. First of all, it is a source of many bugs. Bugs, in turn, are unpredictable work. Second of all, it is difficult to add new cool features to the old rotting code. Thus, keep the code clean as possible is the only way to go fast and make the deadline. Be professional - write code that others can understand. How to write clean code? First of all, you should write dirty code. Then clean it. Most programmers believe that the primary goal is to get program work. But it is only a fraction of what we need.

## Clean code has a clean structure

Clean code is like well-written prose: everything in its place and you can find things where you expect them to find. Small files are usually easier to understand than large files are. Variables should be declared as close to their usage as possible. When you read a newspaper you expect to see the most important information to come first without undue details. Therefore if one function calls another, they should be vertically close and the caller function should be above the callee.

## Naming

Names should be intention-revealing. They should tell why they exist, what they do, and how to use them. As R.Martin says - clarity is a king. Therefore words like info, data, a, an and the are noisy indistinct words and should be avoided. Names should be searchable. The length of the variable should be as long as the size of it's scope. You should avoid prefixes and avoid type encoding names - they are simply impediments.

## Functions

First of all, the should be small. Second of all, they should be even smaller than that. The function should do only one thing and be at most 20 lines long.
Functions should do something or answer. If you see the boolean flag argument then it is clear that the function does more than one thing. Furthermore, it is hard to understand what such an argument does. Therefore flag arguments should be eliminated.

## Comments

Comments always lie. Not always, and not intentionally, but too often. A lack of comments is better than inaccurate misleading comments. Instead of wasting time writing comments explaining something you should write code that needs no explanation.

Allowed comments: header of the source file, regular expression description, explanation of decision, warnings, todos, amplification.

Bad comments: mumbling, redundant, misleading, mandated, journaling, noise, commented-out code, Javadoc for non-public API.

A long descriptive name is better than a long descriptive comment: use function or variable instead of a comment.
Short function with a well-chosen name that one thing is usually better than a comment header. Avoid commented-out code. Nobody knows how old it is. Nobody will need it. Leave that job for the source code control system. Rule: when you see commented-out - delete it.

## Objects and data structures

Developers often treat data structures as if they were objects by putting business rule methods in them. This is awkward because it creates a hybrid between a data structure and an object. Difference between objects and data structures in what they hide and expose. Objects hide their data behind abstractions and expose functions that operate on that data. Data structure expose their data and have no meaningful functions. The things that are hard to solve with objects easy to solve with data structures and the things that are hard for data structures are easy for objects.

## Error handling

It is better to use exception instead of error codes. Wrap third-party libraries to minimize dependencies on them. Then you would be able to move to a different library in the future without pain.

Use special case patterns instead of raising an exception or null return. The main idea is to create a class or configure an object so that it handles a special case for you.

## Unit tests

Code, without tests, is not clean even if it is readable and accessible. The moral is simple: test code is just as important as production code. The best approach is to write unit tests just before the production code that makes them pass.

## Classes

Classes are that they should be small. Not number of lines, but a number of responsibilities. The class should have a brief description in about 25 words without using the words "if", "and", "or". Split the class if it loses cohesion.

## Code design

According to Kent, a design is “simple” if it follows these rules:

- Runs all the tests
- Contains no duplication
- Expresses the intent of the programmer
- Minimizes the number of classes and methods

The more tests you write, the more you push toward things that are simpler to test. Therefore fully testable code helps create better designs. When you have tests you can incrementally refactor the code.

Duplication is the primary enemy of a well-designed system. It represents additional work, additional risk, and add unnecessary complexity.
