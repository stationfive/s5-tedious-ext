const addSqlParamsToRequest = (sqlParams, request) => {
  sqlParams.forEach(({
    name,
    type,
    value,
    options: {
      precision = 10,
      scale = 2,
    } = {
      precision: undefined,
      scale: undefined,
    },
  }) => {
    request.addParameter(
      name,
      type,
      value,
      { precision, scale },
    );
  });
};

module.exports = addSqlParamsToRequest;
