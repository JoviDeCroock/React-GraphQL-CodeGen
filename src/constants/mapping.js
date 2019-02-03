import { Kind } from 'graphql/language';

const tsTypeMapping = {
  [Kind.STRING]: 'string',
  [Kind.INT]: 'number',
  [Kind.BOOLEAN]: 'boolean',
  [Kind.FLOAT]: 'number',
  'ID': 'string'
}

module.exports = { tsTypeMapping };
