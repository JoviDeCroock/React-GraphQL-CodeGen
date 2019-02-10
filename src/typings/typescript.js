const { NAME, OBJECT, NON_NULLABLE, LIST_TYPE, INPUT_TYPE } = require('../constants');
const { tsTypeMapping } = require('../constants/mapping');

const currentMapping = {};

function generateTypes(fieldDefinitions) {
  let types = ``;
  fieldDefinitions.forEach((def) => {
    const notNullable = def.type.kind === NON_NULLABLE;
    let listType = def.type.kind === LIST_TYPE;
    if (notNullable) {
      listType = def.type.type.kind === LIST_TYPE;
      if (listType) {
        types = `${types}\n  ${def.name.value}: Array<${tsTypeMapping[def.type.type.type.name.value] || def.type.type.type.name.value}>;`;
        console.log(def.type.type.type.name.value)
      } else {
        types = `${types}\n  ${def.name.value}: ${tsTypeMapping[def.type.type.name.value] || def.type.type.name.value};`;
        console.log(def.type.type.name.value)
      }
    } else if (listType) {
      types = `${types}\n  ${def.name.value}: Array<${tsTypeMapping[def.type.type.name.value] || def.type.type.name.value}>;`;
      console.log(def.type.type.name.value)
    }else {
      types = `${types}\n  ${def.name.value}?: ${tsTypeMapping[def.type.name.value] || def.type.name.value};`;
      console.log(def.type.name.value)
    }
  });
  return `${types}\n`;
}

function generateTSTypes(documentDefinitions) {
  let types = ``;
  documentDefinitions.forEach((def) => {
    switch(def.kind) {
      case OBJECT: {
        if (!currentMapping[def.name.value]) {
          types = `${types}interface ${def.name.value} {${generateTypes(def.fields)}}\n\n`;
          currentMapping[def.name.value] = true;
        }
        // TODO: else expand this.
        break;
      }
      case INPUT_TYPE: {
        // TODO: input types
        // console.log(def);
      }
      default: console.error('unsupported type ', def.kind);
    }
  });
  return types;
}

module.exports = generateTSTypes;
