const convertToAst = require('./utils/convertSchemaToAst');
const getSchema = require('./utils/getSchema');
const generateTSTypings = require('./typings/typescript');

async function initialize() {
  try {
    const parsedSchema = await getSchema();
    const typings = generateTSTypings(parsedSchema.definitions);
    console.log(typings);
  } catch (e) {
    console.log(e);
  }

}

initialize();
