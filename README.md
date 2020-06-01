# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @bobby-brice/lotide`

**Require it:**

`const _ = require('@bobby-brice/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(...)`: Returns the first element from an array.
- `tail(...)`: Returns the last element from an array.
- `middle(...)`: Returns the middle of an array element
- `countLetters(...)`: Returns an object with the count of each letter in a string.
- `countOnly(...)`: Returns an object containing counts of everything that the input object listed and how many instances.
- `findKey(...)`: Return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
- `findKeyByValue(...)`: Returns the key of an object if the value exists in the object.
- `letterPositions(...)`: Returns an object of each letter and index at which it occurs in a string.
- `map(...)`: Receives an array and a callback function to return a new array with the specified callback implementation.
- `takeUntil(...)`: Return a slice of the array with elements taken from the beginning until the callback finds a truthy value.
- `eqArrays(...)`: Compares two arrays by there length and index to return true or false if they are ===.
- `eqObjects(...)`: Compares two objects to determine whether they have identical key/values and returns a boolean.
- `without(...)`: Return a subset of a given array, removing unwanted elements
