/*
Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long,
do not begin with numbers, and have two consecutive digits.
*/

let sampleWord = "astronaut";
let pwRegex = /^(?!\d)(?=\w{5,})(?=\D*\d{2,})/;
let result = pwRegex.test(sampleWord);
