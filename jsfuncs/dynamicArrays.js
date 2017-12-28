// Dynamic Arrays

// elements of an array occupy a contiguous block of memory.
// A contiguity is a series of things in contact or in proximity.

// consequences:
// 1. once created, array can not grow (adjacent memory might be taken)
// 2. arrays can be randomly accessed

function ArrayList(initialLength) {
  this.length = 0;
  console.log("length", length);
  this.array = new Array(initialLength);
  console.log("array", array);

  this.add = function(value) {
    if (this.length == this.array.length) {
      this.grow();
    }
    this.array[this.length++] = value;
  };
  this.grow = function() {
    var original = this.array;
    this.array = new Array(this.length * 2);
    for (var i = 0; i < this.length; ++i) {
      this.array[i] = original[i];
    }
  };
}

var array = new ArrayList(1);
array.add(2);
array.add(9);
array.add(4);
console.log(array);
