//write a javascript program to reverse a number

function reverseNumber(num) {

  // approach
  // 1> First change the number in the string by num.toString()
  // 2> Then split the number by '' it will be converted in an array [1,2,3,4,]
  // 3>Then reverse the number it will be converted as an array [4,3,2,1]
  // 4>Then join it and convert it in number


  x = num.toString().split('').reverse().join('')
  console.log(typeof (x))
  console.log(typeof (parseInt(x)))
  return x

}

console.log(reverseNumber(2345))