import Airtable from "airtable";

const fetchAirtableTable = async (tableName) => {
  const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.AIRTABLE_BASE
  );

  const records = await base(tableName).select({ view: "Grid view" }).all();

  const data = [];

  records.forEach((record) => {
    if (record.fields.published === "true") {
      data.push({
        ...record.fields,
        id: record.id,
      });
    }
  });

  return data;
};

export { fetchAirtableTable };
