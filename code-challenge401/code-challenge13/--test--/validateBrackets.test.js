const validateBrackets = require("../index");

describe("fuctionallity of validate brackets", () => {
  it("return true if the inputs are closed brackets", () => {
    expect(validateBrackets("()")).toBe(true);
  });
  it("return true if the inputs are closed brackets even if theres are characters inside the brackets", () => {
    expect(validateBrackets("(hello)")).toBe(true);
  });
  it("return false if the inputs arent closed brackets ", () => {
    expect(validateBrackets("(}")).toBe(false);
  });
  it("return false if the inputs arent closed brackets even if there are some closed brackets", () => {
    expect(validateBrackets("()[]}")).toBe(false);
  });
});
