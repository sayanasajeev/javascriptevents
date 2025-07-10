function isFirstElementPrime(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Input is not a valid array or it's empty.";
  }

  const num = arr[0];

  // Check if it's a number
  if (typeof num !== 'number' || !Number.isInteger(num)) {
    return "The first element is not a valid integer.";
  }

  if (num < 2) return `${num} is not a prime number.`;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return `${num} is not a prime number.`;
    }
  }

  return `${num} is a prime number.`;
}

// Example usage:
console.log(isFirstElementPrime([7, 12, 18])); // 7 is a prime number.
console.log(isFirstElementPrime([10, 5, 3]));  // 10 is
