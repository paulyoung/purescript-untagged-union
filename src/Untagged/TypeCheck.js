export const isInt = function (x) {
  return typeof(x) == "number" && ((x|0) === x);
};

export const getProperty = function (name) {
  return function (x) {
    return x[name];
  };
};
