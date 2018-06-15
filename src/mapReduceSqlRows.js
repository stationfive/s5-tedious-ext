const _ = require('lodash');

const mapReduceSqlRows = rows => rows.map(row =>
  row.reduce((prev, curr) => ({
    ...prev, [_.camelCase(curr.metadata.colName)]: curr.value,
  }), {}));
module.exports = mapReduceSqlRows;
