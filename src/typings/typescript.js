const { NAME, OBJECT, NON_NULLABLE } = require('../constants');
const { tsTypeMapping } = require('../constants/mapping');

function generateTypes(fieldDefinitions) {
  let types = ``;
  console.dir(fieldDefinitions, { depth: 3 });
  fieldDefinitions.forEach((def) => {
    const notNullable = def.type.kind === NON_NULLABLE;
    if (notNullable) {
      types = `${types}\n  ${def.name.value}: ${tsTypeMapping[def.type.type.name.value] || def.type.type.name.value};`;
    } else {
      types = `${types}\n  ${def.name.value}?: ${tsTypeMapping[def.type.name.value] || def.type.name.value};`;
    }
  });
  return `${types}\n`;
}

function generateTSTypes(documentDefinitions) {
  let types = ``;
  documentDefinitions.forEach((def) => {
    switch(def.kind) {
      case OBJECT: {
        console.log(def.name.value)
        types = `${types}type ${def.name.value} {${generateTypes(def.fields)}}\n\n`;
        break;
      }
      default: console.error('unsupported type ', def.kind);
    }
  });
  return types;
}

module.exports = generateTSTypes;
