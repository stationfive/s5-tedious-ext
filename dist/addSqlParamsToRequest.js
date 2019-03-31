"use strict";

var addSqlParamsToRequest = function addSqlParamsToRequest(sqlParams, request) {
  sqlParams.forEach(function (_ref) {
    var name = _ref.name,
        type = _ref.type,
        value = _ref.value,
        _ref$options = _ref.options;
    _ref$options = _ref$options === undefined ? {
      precision: undefined,
      scale: undefined
    } : _ref$options;
    var _ref$options$precisio = _ref$options.precision,
        precision = _ref$options$precisio === undefined ? 10 : _ref$options$precisio,
        _ref$options$scale = _ref$options.scale,
        scale = _ref$options$scale === undefined ? 2 : _ref$options$scale;

    request.addParameter(name, type, value, { precision: precision, scale: scale });
  });
};

module.exports = addSqlParamsToRequest;
//# sourceMappingURL=addSqlParamsToRequest.js.map