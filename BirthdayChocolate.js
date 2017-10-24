let chocoPies = [4]
const solve = (arr, m, d, count) => {
  if (arr.length === 0) return count
  if ((arr[0] <= d) && isValidSubSeq(arr.slice(0, m), d)) {
    count++
  }
  return solve(arr.slice(1), m, d, count)
}

const isValidSubSeq = (arr, d) => {
  return (arr.reduce((acc, elm) => acc + elm) === d)
}

console.log(solve(chocoPies, 1, 4, 0))
