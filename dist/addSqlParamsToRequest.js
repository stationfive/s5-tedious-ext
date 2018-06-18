"use strict";

var addSqlParamsToRequest = function addSqlParamsToRequest(sqlParams, request) {
  sqlParams.forEach(function (param) {
    request.addParameter(param.name, param.type, param.value);
  });
};
module.exports = addSqlParamsToRequest;
//# sourceMappingURL=addSqlParamsToRequest.js.map