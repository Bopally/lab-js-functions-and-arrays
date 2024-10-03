// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else if (num1 === num2) {
    return num1 && num2;
  }
}

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(words) {
  if (words.length === 0) return null; // should return null when called with an empty array
  let longestWord = words[0]; // start the check with the 1st word, assuming the 1st word = the longest, after we have to compare
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  // Reduce method is used to iterate over each element in the numbers array and accumulate a total sum

  const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue, // accumulator is running the total, starting at 0
    0
  );
  return sum / numbers.length;
}
// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(arr, word) {
  if (arr.length === 0) {
    return null;
  }
  return arr.includes(word); // when we have an array we can use the includes () method
}

//console.log(doesWordExist(words2, "truth")); // True
//console.log(doesWordExist(words2, "hello")); // False
//console.log(doesWordExist([], "truth")); // Null
