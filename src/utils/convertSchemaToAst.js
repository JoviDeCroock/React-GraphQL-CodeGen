const recast = require('recast');

function convertToAst(schema) {
  return recast.parse(schema);
}