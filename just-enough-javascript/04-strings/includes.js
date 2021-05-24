console.log('-- using .includes for case-sensitive searching --');

// examples
console.log('JavaScript'.includes('script')); // false
console.log('JavaScript'.includes('Script')); // true
console.log('JavaScript'.includes('vaSc')); // true
console.log('JavaScript'.includes('VAsC')); // false

// exercises
console.log('HackYourFuture'.includes('Hack')); // true
console.log('HackYourFuture'.includes('Your')); // true
console.log('HackYourFuture'.includes('Future')); // true

console.log('HackYourFuture'.includes('hack')); // false
console.log('HackYourFuture'.includes('Your ')); // false
console.log('HackYourFuture'.includes('Futute')); // false

console.log('so Bye'.includes(' Bye')); // true
console.log('Object with c. Car'.includes('. Car')); // true
console.log('1+2'.includes('+')); // true

console.log('Hi'.includes('hi')); // false
console.log('Road'.includes('road')); // false
console.log('ima'.includes('Ima')); // false
