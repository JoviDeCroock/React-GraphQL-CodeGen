import { Kind } from 'graphql/language';

const NAME = Kind.NAME;
const OBJECT = Kind.OBJECT_TYPE_DEFINITION;
const NON_NULLABLE = Kind.NON_NULL_TYPE;
const NAMED_TYPE = Kind.NAMED_TYPE;

module.exports = {
  NAME,
  OBJECT,
  NON_NULLABLE,
  NAMED_TYPE,
}
