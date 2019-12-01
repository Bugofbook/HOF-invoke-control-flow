const ifFunction = require("./if");

const ifElseIfFunction = ([[currentFnCon,currentFnTrue], ...otherProcessfns] = [[]] ) => arg => {
  return ((currentFnCon === undefined) || (currentFnTrue === undefined))
    ? arg
    : ifFunction(currentFnCon)([currentFnTrue,ifElseIfFunction([...otherProcessfns])])(arg);
};

module.exports = ifElseIfFunction