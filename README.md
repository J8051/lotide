# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @j8051/lotide`

**Require it:**

`const _ = require('@j8051/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: returns the first element in an array. 
* `tail`: returns every element in an array except the first one.
* `middle`: returns the middle elements of an array.
* `assertArrayEqual`: compares arrays for an exact match then logs a message to the console with the results
* `assertEqual`: a manual test to compare expected vs actual results. 
* `assertObjectEqual`: comapres objects for an exact match and logs the results to the console.
* `countLetters`: a function that counts the number of times each letter appears in a string.
* `countOnly`: a function that can count selected string items from a list. 
* `eqArrays`: manual test to comapre arrays for an exact match. 
* `eqObjects`: a function that comapres objects and returns true or false based on an exact match.
* `findKey`: scans an object and returns the first key for which the callback returns a truthy value. 
* `findKeyByValue`: a function that takes in an object and a value and returns the first key containing that value.  
* `flatten`: will "flatten" a nested array into a single array. 
* `letterPositions`: returns an object containing the index of each letter in a string. 
* `map`: a custom map function that returns a new array based on the callback. 
* `takeUntil`: collects items from an array until the provided callback returns a truthy value. 
* `without`: removes unwanted elements from an array. 
