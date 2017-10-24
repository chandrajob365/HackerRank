function checkFactors (arr, num) {
  for (var i = 0; i < arr.length; i++) {
    if (num % arr[i] !== 0) {
      return false
    }
  }
  return true
}

function checkFactorsReverse (num, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % num !== 0) {
      return false
    }
  }
  return true
}

function getTotalX (setA, setB) {
  var count = 0
  for (var i = setA[setA.length - 1]; i <= setB[0]; i++) {
    if (checkFactors(setA, i) && checkFactorsReverse(i, setB)) {
      count++
    }
  }
  return count
}

let setA = [2, 4]
let setB = [16, 32, 96]
console.log(getTotalX(setA, setB))
