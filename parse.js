// parse 10 to other
function parse10ToOther(value, num) {
  return value.toString(num);
}

// parse other to 10
function parseTo10(str, num) {
  return parseInt(String(str), num);
}

// parse 2 to 10
console.log(parseTo10("101", 2));
console.log(parseTo10(101, 2));

// parse 8 to 10
console.log(parseTo10("110", 8));
console.log(parseTo10(110, 8));

// parse 16 to 10
console.log(parseTo10("AA", 16));

// parse 10 to 2
console.log(parse10ToOther(6, 2));

// parse 10 to 8
console.log(parse10ToOther(17, 8));

// parse 10 to 16
console.log(parse10ToOther(33, 16));
