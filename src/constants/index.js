const { Kind } = require('graphql/language');

const NAME = Kind.NAME;
const OBJECT = Kind.OBJECT_TYPE_DEFINITION;
const NON_NULLABLE = Kind.NON_NULL_TYPE;
const NAMED_TYPE = Kind.NAMED_TYPE;
const LIST_TYPE = Kind.LIST_TYPE;
const INPUT_TYPE = Kind.INPUT_OBJECT_TYPE_DEFINITION;

module.exports = {
  NAME,
  OBJECT,
  NON_NULLABLE,
  LIST_TYPE,
  NAMED_TYPE,
  INPUT_TYPE,
}
