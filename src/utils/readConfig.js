var fs = require('fs');

const getSchemaUrl = async () => {
  const result = await fs.readFileSync(`${process.cwd()}/gqlCodegen.config.js`, 'utf8');
  const { schema: { url } } = eval(result);
  return url;
}
 
module.exports = { getSchemaUrl };
