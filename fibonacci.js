function fibs(num) {
  let array = [];
  let temp1 = 0;
  let temp2 = 1;

  while (array.length < num) {
    if (temp1 < temp2) {
      array.push(temp1);
      temp1 = temp1 + temp2;
    } else {
      array.push(temp2);
      temp2 = temp2 + temp1;
    }
  }

  return array;
}

function fibsRec(num) {
  if (num < 1) {
    return [];
  } else if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0, 1];
  } else {
    let array = fibsRec(num - 1);
    let one = array[array.length - 2];
    let two = array[array.length - 1];
    array.push(one + two);
    return array;
  }
}

console.log(fibs(8)); // [ 0, 1, 1, 2, 3, 5, 8, 13 ]
console.log(fibsRec(8)); // [ 0, 1, 1, 2, 3, 5, 8, 13 ]
