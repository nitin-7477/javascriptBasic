//Write a javascript function that return a passed string with letters in alphabetical order
//example string = 'gautam'
//output string = 'aagmtu'


function alphabetical_Order(str) {

  //sort is used here to arrange in alphabetical order

  return x = str.split('').sort().join('')

}
console.log(alphabetical_Order('gautam'))