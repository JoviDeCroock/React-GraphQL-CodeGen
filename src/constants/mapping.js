const { Kind } = require('graphql/language');

const tsTypeMapping = {
  [Kind.STRING]: 'String',
  [Kind.INT]: 'Number',
  [Kind.BOOLEAN]: 'Boolean',
  [Kind.FLOAT]: 'Number',
  Float: 'Number',
  Int: 'Number',
  'ID': 'String'
}

module.exports = { tsTypeMapping };
