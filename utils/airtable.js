const Airtable = require("airtable");

const table = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
});

export const base = table.base(process.env.AIRTABLE_BASE_ID);
