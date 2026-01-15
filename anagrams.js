// https://www.greatfrontend.com/questions/algo/string-anagram?practice=practice&tab=coding

/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */

function isStringAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const freq = new Array(26).fill(0);

  console.log(freq, "initial freq");
  for (let i = 0; i < str1.length; i++) {
    freq[str1.toUpperCase().charCodeAt(i) - 65]++;
    freq[str2.toUpperCase().charCodeAt(i) - 65]--;
    console.log(freq, `freq after processing index ${i}`);
  }

  return freq.every((count) => count === 0);
}

console.log(isStringAnagram("listen", "silent")); // true
// console.log(isStringAnagram("hello", "world")); // false/
