
String.prototype.countVowels = function () {
    return this.split('').reduce(function (count, char) {
    if ('AEIOUaeiou'.indexOf(char) !== -1) {
        return count + 1;
    }
    return count;
    }, 0);
};

  
// Example usage:
const myString = "Hello, World!";
const vowelCount = myString.countVowels();
console.log(`Number of vowels: ${vowelCount}`);
  