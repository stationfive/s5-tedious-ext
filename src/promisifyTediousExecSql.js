const sql = require('tedious');
const mapReduceSqlRows = require('./mapReduceSqlRows');
const addSqlParamsToRequest = require('./addSqlParamsToRequest');

const promisifyTediousExecSql = (connection, query, params = null) =>
  new Promise(((resolve, reject) => {
    connection.on('connect', (error) => {
      if (error) {
        reject(error);
      }

      const sqlCallback = (err, rowCount, rows) => {
        if (err) {
          reject(err);
        } else {
          const results = mapReduceSqlRows(rows);
          resolve(results);
        }
      };

      const request = new sql.Request(
        query,
        sqlCallback,
      );

      if (params) {
        addSqlParamsToRequest(params, request);
      }

      connection.execSql(request);
    });
  }));

module.exports = promisifyTediousExecSql;
