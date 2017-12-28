// find a number in array

function findNumber(arr, k) {
  let result = "not found";
  arr.forEach(item => {
    if (k === item) {
      return (result = "found it");
    }
  });
  return result;
}

findNumber([1, 2, 3, 4, 5, 6], 6);
// found it

findNumber([1, 2, 3, 4, 5, 6], 7);
// not found
