const switchFunction = fnCondition => fnCaseValueMap => arg => {
  let currentfrag = fnCondition(arg);
  let currentMap = new Map(fnCaseValueMap);
  let result = arg;
  currentMap.forEach((currentvalue, currentcase) => {
    if (typeof currentcase === "function" && currentcase(arg) === currentfrag)
      result = currentvalue(arg);
    else if (currentcase === currentfrag) result = currentvalue(arg);
  });
  return result;
};

module.exports = switchFunction