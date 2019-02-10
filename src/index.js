const fs = require('fs');
const getSchema = require('./utils/getSchema');
const generateTSTypings = require('./typings/typescript');

async function initialize() {
  try {
    const parsedSchema = await getSchema();
    const typings = generateTSTypings(parsedSchema.definitions);
    // console.log(typings);
    fs.writeFile('./test.ts', typings, function(err) {
      if(err) {
          return console.log(err);
      }
      console.log("The file was saved!");
    }); 
  } catch (e) {
    console.log(e);
  }

}

initialize();
