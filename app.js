// let regularExpression;

// regularExpression = /hello/;
// regularExpression = /hello/i; // i = case insensitive
// // regularExpression = /hello/g; // Global search and not only the first one it finds

// // console.log(regularExpression);
// // console.log(regularExpression.source);



// // exec () - Return the result in an array if there is a match or it will return null
// // const result = regularExpression.exec('hi world');
// // console.log(result);
// // console.log(result[0]);
// // console.log(result.index);
// // console.log(result.input);



// // test() - returns true or false
// // const result = regularExpression.test('Hello');
// // console.log(result);



// // match() - return result array or null
// // const str = 'Hello there';
// // const result = str.match(regularExpression);
// // console.log(result);




// // search() - returns index of the first match if not found returns -1
// // const str = 'Hello there';
// // const result = str.search(regularExpression);
// // console.log(result);


// // replace() - Return new string with some or all matches of a pattern
// const str = 'hello there';
// const newStr = str.replace(regularExpression, 'hi');
// console.log(newStr);



let re;

// literal Characters
re = /hello/;
re = /hello/i;

// metacharacter Symbols
re = /^h/i; // must start with
re = /d$/i; // must end with 
re = /^hello$/i; // must begin and end with 
re = /h.llo/i; // matches any character
re = /h*llo/i; // matches any character 0 or more times
re = /gre?a?y/i; // optional character
re = /gre?a?y\?/i; // escape character


// Brackets [] - Character sets
re = /gr[ae]y/i;  // must be an a or e
re = /[GF]ray/i;  // must be G or F
re = /[^GF]ray/i;  // match anything except a G or F
re = /^[GF]ray/i;  // must start with g or f
re = /[A-Z]ray/;  // match any uppercase character within a range
re = /[0-9]ray/;  // match any digit within a range

// braces {} - quantifiers
re = /Hel{2}o/i; // must occur exactly amount of times
re = /Hel{2,4}o/i; // must occur exactly amount of times specified within a range. So in this case, 2,3 or 4.
re = /Hel{2,}o/i; // must occur at least {m} amount of times

// Parentheses () - grouping
re = /([0-9])x{3}/;

// Shorthand Character Classes
re = /\w/; // word character - alphanumeric or _
re = /\w+/; // + = one or more
re = /\W/; // non-word Character
re = /\d/; // match any digit
re = /\d+/; // match any digit 0 or more times
re = /\D/; // match any non-digit
re = /\s/; // match whitespace
re = /\S/; // match non whitespace character
re = /hell\b/i; // word boundary 

// assertions
re = /x(?=y)/; // match x only if it's followed by y
re = /x(?!y)/; // match x only if it's NOT followed by y

// string to match
const str = 'x';

// log results
const result = re.exec(str);
console.log(result);

function reTest(re, str){
  if(re.test(str)){
    console.log(`${str} matched ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re,str);


