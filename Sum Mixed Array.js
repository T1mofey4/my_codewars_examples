// Given an array of integers as strings and numbers, 
// return the sum of the array values as if all were numbers.

const sumMix = x => x.reduce((sum, elem) => sum + Number(elem), 0);