const switchFunction = fnCondition => fnCaseValueMap => arg => {
  let currentfrag = fnCondition(arg);
  let currentMap = new Map(fnCaseValueMap);
  return  (currentMap.has(currentfrag)) ? currentMap.get(currentfrag)(arg) : arg
};

module.exports = switchFunction

