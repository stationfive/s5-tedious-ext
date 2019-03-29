'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sql = require('tedious');
var mapReduceSqlRows = require('./mapReduceSqlRows');
var addSqlParamsToRequest = require('./addSqlParamsToRequest');

var promisifyTediousExecSql = function promisifyTediousExecSql(connection, query) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return new _promise2.default(function (resolve, reject) {
    connection.on('connect', function (error) {
      if (error) {
        reject(error);
      }

      var sqlCallback = function sqlCallback(err, rowCount, rows) {
        if (err) {
          reject(err);
        } else {
          var results = mapReduceSqlRows(rows);
          resolve(results);
        }
      };

      var request = new sql.Request(query, sqlCallback);

      if (params) {
        addSqlParamsToRequest(params, request);
      }

      connection.execSql(request);
    });
  });
};

module.exports = promisifyTediousExecSql;
//# sourceMappingURL=promisifyTediousExecSql.js.map