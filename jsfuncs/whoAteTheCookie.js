// Who ate the cookie?

// For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

function cookie(x) {
  let name = "";
  if (typeof x === "string" || x instanceof String) {
    name = "Zach";
  } else if (
    (typeof x === "number" && isFinite(x) && Math.floor(x)) ||
    !!(x % 1)
  ) {
    name = "Monica";
  } else {
    name = "the dog";
  }
  return `Who ate the last cookie? It was ${name}!`;
}

cookie("watch"); // "Who ate the last cookie? It was Zach!"
cookie(12); // "Who ate the last cookie? It was Monica!"
cookie(12.4); // "Who ate the last cookie? It was Monica!"
cookie(true); // "Who ate the last cookie? It was the dog!"
