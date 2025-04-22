function isSameType(value1, value2) {
  //your js code here
	 // First, check if both are NaN using Number.isNaN()
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }
  // Check if both have the same type
  return typeof value1 === typeof value2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

value1 = value1 === "NaN" ? NaN : isNaN(Number(value1)) ? value1 : Number(value1);
value2 = value2 === "NaN" ? NaN : isNaN(Number(value2)) ? value2 : Number(value2);
alert(isSameType(value1, value2));
