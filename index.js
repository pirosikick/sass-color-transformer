const { parse, stringify } = require("scss-parser");
const createQueryWrapper = require("query-ast");

const transform = source => {
  const ast = parse(source);
  const $ = createQueryWrapper(ast);

  $("color_hex").replace(path => {
    if (path.node.value === "ccc") {
      return {
        type: "identifier",
        value: "black"
      };
    }
    return node;
  });

  return stringify($().get(0));
};

module.exports = { transform };
