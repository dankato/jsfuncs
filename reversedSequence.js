// Reversed Sequence

// Get the number n to return the reversed sequence from n to 1.

// Example : n=5 >> [5,4,3,2,1]

const reverseSeq = n => {
  let array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }
  return array.reverse();
};

reverseSeq(5); // [5, 4, 3, 2, 1]
