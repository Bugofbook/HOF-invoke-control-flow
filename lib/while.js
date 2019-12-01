const whileFunction = fnCondition => fnProcess => arg => {
  return fnCondition(arg)
    ? whileFunction(fnCondition)(fnProcess)(fnProcess(arg))
    : arg;
};

module.exports = whileFunction