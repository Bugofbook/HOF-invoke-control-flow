const ifFunction = require("./if");

// const ifElseIfFunction = ([[currentFnCon,currentFnTrue], ...otherProcessfns] = [[undefined,undefined],undefined] ) => arg => {
//   return ((currentFnCon === undefined) || (currentFnTrue === undefined))
//     ? arg
//     : ifFunction(currentFnCon)([currentFnTrue,ifElseIfFunction([...otherProcessfns])])(arg);
// };
const ifElseIfFunction = (fns = [[]]) => arg => {
  let [[currentFnCon,currentFnTrue], ...otherProcessfns] = fns
  return ifFunction(currentFnCon)([currentFnTrue,ifElseIfFunction([...otherProcessfns])])(arg);
};

module.exports = ifElseIfFunction