const { introspectionQuery } = require('graphql/utilities/introspectionQuery')
const { buildClientSchema } = require('graphql/utilities/buildClientSchema')
const { printSchema } = require('graphql/utilities/schemaPrinter')
const fetch = require('node-fetch');
const fs = require('fs');
const util = require('util');

const ENDPOINT = 'http://localhost:3001/graphql';

const defaultRequest = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: introspectionQuery }),
}

async function getSchema() {
  const result = await fetch(ENDPOINT, defaultRequest);
  switch (result.status) {
    case 404: throw new Error('The endpoint you have provided is invalid.'); break;
    default: return true;
  }
  const { data: schema, errors } = await result.json();
  if (errors) {
    throw new Error('Something went wrong ', errors);
  }
  const clientSchema = printSchema(buildClientSchema(schema));
  console.log(clientSchema);
  return clientSchema;
}

getSchema();

module.exports = getSchema;