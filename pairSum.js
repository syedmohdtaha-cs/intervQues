// https://www.greatfrontend.com/questions/algo/pair-sum?practice=practice&tab=coding

// function pairSum(numbers, target) {
//   for (let i = 0; i < numbers.length - 1; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

function pairSum(numbers, target) {
  const map = new Map(); // number -> index

  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];

    // check first
    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    // store after checking
    map.set(numbers[i], i);
  }

  return [];
}

console.log(pairSum([3, 2, 4], 6)); // Output: [1, 2]
