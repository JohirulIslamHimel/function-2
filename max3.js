const jim = 77;
const kim = 66;
const david = 78;
if (jim > kim && jim > david) {
  console.log("Jim get highest number");
} else if (kim > jim && kim > david) {
  console.log("Kim get highest number");
} else {
  console.log("David get highest number");
}

//using function

function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}
const max = maxOfThree(53, 59, 57);
console.log("Max number of three is: ", max);

//using Math.max() method
const max1 = Math.max(61, 48, 12, 95, 15, 76, 89, 36);
console.log("Max using Math.max() method:", max1);
