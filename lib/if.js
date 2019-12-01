const ifFunction = fnCondition => ([fnTrue, fnFalse = f => f]) => arg => {
return fnCondition(arg) ? fnTrue(arg) : fnFalse(arg);
};

module.exports = ifFunction