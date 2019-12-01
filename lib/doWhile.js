const doWhileFunction = fnCondition => fnProcess => arg => {
  return fnCondition(arg)
    ? doWhileFunction(fnCondition)(fnProcess)(fnProcess(arg))
    : fnProcess(arg);
};
module.exports = doWhileFunction