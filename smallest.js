const heights = [55, 61, 52, 78, 45, 53, 49];
function getMin(numbers) {
  let min = numbers[0];
  for (const num of numbers) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}
const min = getMin(heights);
console.log("Min value is: ", min);
