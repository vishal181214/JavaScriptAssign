
// Q1. Remove all the duplicate occurrences of characters in the string 

function removeDuplicate(string) 
{
    return string.split('').filter(function(item, pos, self) {
    return self.indexOf(item) == pos;}).join('');
}
console.log(removeDuplicate('abcadeecfb'));

//Output => abcdef


// Print the count of all alphabet 

function countChars(text) 
{
    return text.split('').reduce((map, char) => {
     map[char] = (map[char] || 0) + 1;
    return map;}, {});
}
console.log(countChars('abcadeecfb'));

//Output => {a: 2, b: 2, c: 2, d: 1, e: 2, …}
