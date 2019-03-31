const sql = require('tedious');
const mapReduceSqlRows = require('./mapReduceSqlRows');
const addSqlParamsToRequest = require('./addSqlParamsToRequest');

function callback(connection, resolve, reject) {
  return (err, rowCount, rows) => {
    if (err) {
      reject(err);
    } else {
      resolve(mapReduceSqlRows(rows));
    }

    connection.release();
  };
}

function promisifyTediousExecSql(pool, query, params = null) {
  return new Promise((resolve, reject) => {
    pool.on('error', err => reject(err));

    pool.acquire((err, connection) => {
      if (err) {
        reject(err);
        connection.release();
      }

      const request = new sql.Request(
        query,
        callback(connection, resolve, reject),
      );

      if (params) {
        addSqlParamsToRequest(params, request);
      }

      connection.execSql(request);
    });
  });
}

module.exports = promisifyTediousExecSql;
