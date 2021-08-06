function revfun (number) {
  let rev = 0
  while (number > 0) {
    rev = (rev * 10) + (number % 10)
    number = Math.floor(number / 10)
  }
  return rev
}
const z = revfun(2345)
console.log(z)
