import isPrimeNumber from "../primeNumbers";

describe("Given a number", () => {
  test("it's a prime number", () => {
    const numbers = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
      71, 73, 79, 83, 89, 97,
    ];
    numbers.map((val) => {
      expect(isPrimeNumber(val)).toBeTruthy();
    });
  });
  test("it's not a primer number", () => {
    const numbers = [1, 4, 6, 8, 10, 12, 14, 16, 18];
    numbers.map((number) => expect(isPrimeNumber(number)).toBeFalsy());
  });
  test("it's a decimal number", () => {
    const numbers = [1.3, 4.5, 6.5, 8.5, -10, -12, -14, -16, -18];
    numbers.map((number) => expect(isPrimeNumber(number)).toBeFalsy());
  });
  test("it's not a number", () => {
    const numbers = [1.3, 4.5, "xs", 8.5, -10, -12, -14, -16, -18];
    numbers.map((number) =>
      expect(isPrimeNumber(number as number)).toBeFalsy()
    );
  });
});
