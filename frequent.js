function findMostFrequentItem(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Array is empty or invalid.";
  }

  const frequencyMap = {};
  let maxCount = 0;
  let mostFrequentItem = null;

  for (let item of arr) {
    frequencyMap[item] = (frequencyMap[item] || 0) + 1;

    if (frequencyMap[item] > maxCount) {
      maxCount = frequencyMap[item];
      mostFrequentItem = item;
    }
  }

  return `Most frequent item: ${mostFrequentItem} (appears ${maxCount} times)`;
}


console.log(findMostFrequentItem([3, "a", "b", "a", "a", 3, "a", 2, 3, "b"]));

