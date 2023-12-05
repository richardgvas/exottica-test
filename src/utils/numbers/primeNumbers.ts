const isPrimeNumber = (num: number) => {
  if (!Number.isInteger(num)) {
    return false;
  }
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

export default isPrimeNumber;
