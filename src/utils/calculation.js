export const calculateMean = (arr) => {
  const filteredArr = arr.filter(value => !isNaN(parseFloat(value))); // Filter out non-numeric values
  const sum = filteredArr.reduce((acc, val) => acc + parseFloat(val), 0);
  return filteredArr.length > 0 ? parseFloat((sum / filteredArr.length).toFixed(3)) : 0; // Calculate mean and round to three decimal places
};

export const calculateMedian = (arr) => {
  const sortedArr = arr.slice().sort((a, b) => parseFloat(a) - parseFloat(b)); // Sort array numerically
  const middle = Math.floor(sortedArr.length / 2);
  const median = sortedArr.length % 2 === 0 ? (parseFloat(sortedArr[middle - 1]) + parseFloat(sortedArr[middle])) / 2 : parseFloat(sortedArr[middle]);
  return parseFloat(median.toFixed(3)); // Round the median to three decimal places
};

export const calculateMode = (arr) => {
  const countMap = {};
  arr.forEach((num) => {
    const roundedNum = parseFloat(num).toFixed(3);
    countMap[roundedNum] = (countMap[roundedNum] || 0) + 1; // Increment the frequency count for each rounded number
  });

  let maxCount = 0;
  let modes = [];
  for (const num in countMap) {
    const count = countMap[num];
    if (count > maxCount) {
      maxCount = count;
      modes = [num];
    } else if (count === maxCount) {
      modes.push(num);
    }
  }
  if (modes.length > 1) {
    modes.sort((a, b) => parseFloat(a) - parseFloat(b)); // Sort modes if frequencies are equal
  }

  return modes.map(mode => parseFloat(mode)); // Convert modes back to floating-point numbers
};
