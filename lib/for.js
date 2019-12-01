const forFunction = (doTime = 1) => fnProcess => arg => {
    return doTime === 0
      ? arg
      : forFunction(--doTime)(fnProcess)(fnProcess(arg));
};
module.exports = forFunction