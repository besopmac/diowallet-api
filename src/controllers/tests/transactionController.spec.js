// DESCRIBE --> Block of tests suits
// IT or TEST --> Declare an only test case
// EXPECT --> Assertation about how we expect the test to behave

function sum(a, b) {
  return a + b;
}

describe('Transaction Controller', () => {
  it("First unit tests", () => {
    const firstArgument = 1;
    const secondArgument = 6;

    let result = sum(firstArgument, secondArgument);

    expect(result).toEqual(firstArgument + secondArgument);
  })
});
