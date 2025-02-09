function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let middle = array.length / 2;
  let sortedLeft = mergeSort(array.slice(0, middle));
  let sortedRight = mergeSort(array.slice(middle));
  let sorted = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < sortedLeft.length && rightIndex < sortedRight.length) {
    if (sortedLeft[leftIndex] < sortedRight[rightIndex]) {
      sorted.push(sortedLeft[leftIndex]);
      leftIndex++;
    } else {
      sorted.push(sortedRight[rightIndex]);
      rightIndex++;
    }
  }

  if (leftIndex < sortedLeft.length) {
    sorted = sorted.concat(sortedLeft.slice(leftIndex));
  } else if (rightIndex < sortedRight.length) {
    sorted = sorted.concat(sortedRight.slice(rightIndex));
  }

  return sorted;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // [ 0, 1, 1, 2, 3, 5, 8, 13 ]
console.log(mergeSort([105, 79, 100, 110])); // [ 79, 100, 105, 110 ]
