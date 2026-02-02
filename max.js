const john = 56;
const gill = 95;
if (john > gill) {
  console.log("John will get Strawberry");
} else {
  console.log("Gill will get Strawberry");
}

//using function

function getMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
const max = getMax(56, 95);
console.log("Max of two number is: ", max);
