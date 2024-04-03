// Write a JavaScript function that accepts a string as a parameter and counts the
// number of vowels within the string

function countVowel(str) {
  // // approach
  // first you have to take a string let you have taken nitingautam now you have to take a string of vowel list  then start a loop till the lenght of string given and check indexof vowellist contains the characterr of string it  ==-1 the do not exist !==-1 then it exist

  let vowel_list = 'aeiouAEIOU'
  let count = 0
  console.log(vowel_list.indexOf('u'))

  for (i = 0; i < str.length; i++) {

    if (vowel_list.indexOf(str[i]) !== -1) {
      count++
    }

  }
  console.log(count)

}

console.log(countVowel('nitingautam'))


// second Method

function countTotalVowel(strg) {
  let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  let count = 0
  for (let char of strg.toLowerCase()) {
    if (vowel.includes(char)) {
      count++
    }
  }
  console.log(count)

}
countTotalVowel('nitingautamjiii')