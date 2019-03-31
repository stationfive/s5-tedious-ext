'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sql = require('tedious');
var mapReduceSqlRows = require('./mapReduceSqlRows');
var addSqlParamsToRequest = require('./addSqlParamsToRequest');

function callback(connection, resolve, reject) {
  return function (err, rowCount, rows) {
    if (err) {
      reject(err);
    } else {
      resolve(mapReduceSqlRows(rows));
    }

    connection.release();
  };
}

function promisifyTediousExecSql(pool, query) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  return new _promise2.default(function (resolve, reject) {
    pool.on('error', function (err) {
      return reject(err);
    });

    pool.acquire(function (err, connection) {
      if (err) {
        reject(err);
        connection.release();
      }

      var request = new sql.Request(query, callback(connection, resolve, reject));

      if (params) {
        addSqlParamsToRequest(params, request);
      }

      connection.execSql(request);
    });
  });
}

module.exports = promisifyTediousExecSql;
//# sourceMappingURL=promisifyTediousExecSql.js.map