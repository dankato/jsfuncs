// The prototype property is initially an empty object, and can have members added to it - as you would any other object.

var myObject = function(name) {
  this.name = name;
  return this;
};

console.log(typeof myObject.prototype); // object

myObject.prototype.getName = function() {
  return this.name;
};

// In the snippet above, we’ve created a function, but if we call myObject(), it will simply return the window object, because it was defined within the global scope. this will therefore return the global object, as it has not yet been instantiated (more on this later).

console.log(myObject() === window); // true

// All JavaScript objects inherit the properties and methods from their prototype.

// Objects created using an object literal, or with new Object(), inherit from a prototype called Object.prototype.

// Objects created with new Date() inherit the Date.prototype.

// The Object.prototype is on the top of the prototype chain.

// All JavaScript objects (Date, Array, RegExp, Function, ....) inherit from the Object.prototype.

