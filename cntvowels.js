function cntvowels (s) {
  let cnt = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for (const v of s) {
    if (vowels.includes(v)) {
      (cnt++)
    }
  }
  console.log('no of vowels:', cnt)
}
const s = 'Bagalkot'
cntvowels(s)
