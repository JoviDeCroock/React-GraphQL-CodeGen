const { introspectionQuery, buildClientSchema, printSchema } = require('graphql/utilities/introspectionQuery');
const fetch = require('node-fetch');
const fs = require('fs');
const util = require('util');

const ENDPOINT = 'http://localhost:3001/graphql';

const defaultRequest = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: introspectionQuery }),
}

function handleResult(status) {
  switch (status) {
    case 404: throw new Error('The endpoint you have provided is invalid.'); break;
    default: return;
  }
}

async function getSchema() {
  const result = await fetch(ENDPOINT, defaultRequest);
  handleResult(result.status);
  const { data: schema, errors } = await result.json();
  if (errors) { throw new Error('Something went wrong ', errors) }
  const rawSchema = buildClientSchema(schema)
  const clientSchema = printSchema(rawSchema);
  return { raw: rawSchema, pretty: clientSchema };
}

module.exports = getSchema;
