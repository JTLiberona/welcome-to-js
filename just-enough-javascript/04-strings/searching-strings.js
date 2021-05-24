// combining .toUpperCase or .toLowerCase with .includes is helpful
//  you can now search strings without worrying about upper or lower case

console.log('-- case insensitive string searches --');

// examples
console.log('JavaScript'.toLowerCase().includes('script')); // true
console.log('JAVASCRIPT'.toLowerCase().includes('script')); // true
console.log('javascript'.toLowerCase().includes('script')); // true

console.log('JavaScript'.toUpperCase().includes('SCRIPT')); // true
console.log('JAVASCRIPT'.toUpperCase().includes('SCRIPT')); // true
console.log('javascript'.toUpperCase().includes('SCRIPT')); // true

// exercises
//  fill in the blanks with something that will evaluate to true
//  there's many different answers! how many can you find?

console.log('PassPort'.toLowerCase().includes('pass')); // true
console.log('hACK YouR FuTuRE'.toLowerCase().includes('hack')); // true
console.log('_Robin_Batman'.toLowerCase().includes('_batman')); // true

console.log('PassPort'.toUpperCase().includes('pAss')); // false
console.log('hACK YouR FuTuRE'.toUpperCase().includes('hack')); // false
console.log('_Robin_Batman'.toUpperCase().includes('baTMan')); // false

console.log('timoTy'.toLowerCase().includes('tim')); // true
console.log('Go winners!'.toLowerCase().includes('o w')); // true
console.log('here. empire!'.toLowerCase().includes('. e')); // true

console.log('tiMoty'.toUpperCase().includes('TIM')); // true
console.log('go winners!'.toUpperCase().includes('O W')); // true
console.log('here. E'.toUpperCase().includes('. E')); // true
