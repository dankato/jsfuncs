// Odd Numbers!

// Given two integers, l and r, print all the odd numbers between l and r.

let oddNum = function(startValue, endValue) {
  for (var i = startValue; i < endValue + 1; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
};

oddNum(1, 7);
// 1, 3, 5, 7

