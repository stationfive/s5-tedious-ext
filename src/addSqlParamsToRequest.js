const addSqlParamsToRequest = (sqlParams, request) => {
  sqlParams
    .forEach((param) => {
      request.addParameter(param.name, param.type, param.value);
    });
};
module.exports = addSqlParamsToRequest;

