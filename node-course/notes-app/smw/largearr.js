const arr = [10, 70, 30, 60, 50];
let largest = arr[0];
for (const i in arr) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}
console.log('the largest no in array is:', largest);
