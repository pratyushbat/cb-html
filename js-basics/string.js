let str='this is \n a very \ ok'
console.log(str);

let s='this is have some data here';
let s2='ab aab abbcd ba aab';
console.log(s.indexOf('is',1))
console.log(s.lastIndexOf('is'))

console.log(s2.indexOf('ab',1))
console.log(s2.lastIndexOf('ab'))

let mainStr='this is a long string';
let smallStr=mainStr.slice(2,6);
let smallStrslice=mainStr.slice(-6,-4);
let smallSubStr=mainStr.substring(2,6);
let smallSubStr2=mainStr.substr(2,6);
console.log(smallStr)
console.log(smallStrslice) //start counting from right side in negative
console.log(smallSubStr)
console.log(smallSubStr2)