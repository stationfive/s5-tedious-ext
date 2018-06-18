'use strict';

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ = require('lodash');

var mapReduceSqlRows = function mapReduceSqlRows(rows) {
  return rows.map(function (row) {
    return row.reduce(function (prev, curr) {
      return (0, _extends4.default)({}, prev, (0, _defineProperty3.default)({}, _.camelCase(curr.metadata.colName), curr.value));
    }, {});
  });
};
module.exports = mapReduceSqlRows;
//# sourceMappingURL=mapReduceSqlRows.js.map