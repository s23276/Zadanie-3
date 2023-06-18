function findSecondMinMax(arr) {
  if (arr.length < 2) {
    return "Tablica powinna zawierać co najmniej 2 elementy.";
  }
  
  var sortedArr = arr.sort(function(a, b) {
    return a - b;
  });
  
  var secondMin = sortedArr[1];
  var secondMax = sortedArr[sortedArr.length - 2];
  
  return [secondMin, secondMax];
}

console.log(findSecondMinMax([5, 2, 9, 1, 7]));
console.log(findSecondMinMax([1, 2, 3, 4, 5]));
console.log(findSecondMinMax([5, 5, 5, 5]));