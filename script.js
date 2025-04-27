function isSameType(value1, value2) {
  //your js code here
  // Convert to numbers if possible
  let num1 = Number(value1);
  let num2 = Number(value2);

  // Check if both are NaN
  if (Number.isNaN(num1) && Number.isNaN(num2)) {
    return true;
  }

  // If both can be numbers (and not NaN), treat them as numbers
  if (!Number.isNaN(num1) && !Number.isNaN(num2)) {
    return true;
  }

  // Else, check original types
  return typeof value1 === typeof value2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");


alert(isSameType(value1, value2));
