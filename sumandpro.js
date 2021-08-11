// Write a JavaScript program to compute the sum and product of an array of integers
const arr = [10, 20, 3, 40, 5]
let sum = 0
let product = 1
for (const i in arr) {
  sum = sum + arr[i]
  product = product * arr[i]
}
console.log('The sum of array elements is :', sum)
console.log('The product of array elements is :', product)
