const { transform } = require("../");

test("transform", () => {
  const source = `h1 { color: #ccc; }`;
  const options = {
    black: ["#ccc"]
  };

  const newSource = transform(source, options);
  expect(newSource).toBe(`h1 { color: black; }`);
});
