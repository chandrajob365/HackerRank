let arr = [1, 3, 2, 6, 1, 2]

const divisibleSumPairs = (arr, k, count) => {
  if (arr.length < 2) return count
  count = getCountPerIteration(arr, k, count)
  return divisibleSumPairs(arr.slice(1), k, count)
}

const getCountPerIteration = (arr, k, count) => {
  let initial = arr[0]
  arr.slice(1).forEach(elm => {
    if ((elm + initial) % k === 0) count++
  })
  return count
}
console.log(divisibleSumPairs(arr, 3, 0))
