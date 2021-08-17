let number = 1111;
const b = 1111;
let rev = 0;
while (number > 0) {
  rev = rev * 10 + number % 10;
  number = Math.floor(number / 10);
}
console.log(rev);
const c = parseInt(number);
if (b === c) {
  console.log('No is palindrome');
} else {
  console.log('No is not a palindrome');
}
