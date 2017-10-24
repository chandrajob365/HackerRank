let chocoPies = [1, 2, 1, 3, 2]
const solve = (arr, m, d, count) => {
  if (arr.length < m) return count
  if ((arr[0] <= d) && isValidSubSeq(arr.slice(0, m), d)) {
    count++
  }
  return solve(arr.slice(1), m, d, count)
}

const isValidSubSeq = (arr, d) => {
  return (arr.reduce((acc, elm) => acc + elm) === d)
}

console.log(solve(chocoPies, 2, 3, 0))
