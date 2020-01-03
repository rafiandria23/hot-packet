function checkPalindrome(str) {
  let temp = str.split('').reverse().join('');
  return str === temp;
}
/**
 * Carilah palindrome terpanjang dari sebuah string input.
 *
 * Demo:
 * Case 1
 * Input: 'banana'
 * Output: 'anana'
 *
 * Case 2
 * Input: 'ana'
 * Output: 'ana'
 *
 * Case3
 * Input: 'duyabbcsscbbauyd'
 * Output: 'abbcsscbba'
 *
 * @param {*} str = string input untuk dicari palindrome terpanjangnya
 */

function longestPalindrome(str) {
  // kode disini
  
  let result = '';
  let resultLength = 0;

  for (let i = 0; i < str.length; i++) {
    subOut = str.substr(i, str.length);
    for (let j = subOut.length; j >= 0; j--) {
      let subIn = subOut.substr(0, j);
      
      if (checkPalindrome(subIn)) {
        if (subIn.length > resultLength) {
          resultLength = subIn.length;
          result = subIn;
        }
      }
    }
  }

  console.log(result);
}

// Test Case
longestPalindrome('banana') // 'anana'
longestPalindrome('ana') // 'ana'
longestPalindrome('duyabbcsscbbauyd') // 'abbcsscbba'