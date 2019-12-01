const blockFunction = require("./lib/block");
const ifFunction = require('./lib/if')
const ifElseIfFunction = require('./lib/ifelseif')
const switchFunction = require('./lib/switch')
const whileFunction = require('./lib/while')
const doWhileFunction = require('./lib/doWhile')
const forFunction = require('./lib/for')

const invokeBlock = (fnStatements, data) => {
	if (data !== undefined) {
		return blockFunction(fnStatements)(data)
	}
	else if (fnStatements !== undefined) {
		return blockFunction(fnStatements)
	}
	else
		return console.error(`the number of parameters for invokeBlock are illegal`)
}

const invokeBlockLazy = function ([...fnStatements] = []) {
	let saveFns = [...fnStatements];
	let addFn = function (fn) {
		saveFns = [...saveFns, fn]
		return this
	}
	let setData = function (data) {
		return (saveFns.length === 0) ? data : blockFunction(saveFns)(data)
	}
	let setFns = function ([...fns]) {
		saveFns = [...fns]
		return this
	}
	return {
		addFn,
		setFns,
		setData,
	}
}

const ifFunction1 = (fnCondition, [fnTrue, fnFalse]) => (data) => {
	return ifFunction(fnCondition)([fnTrue, fnFalse])(data)
}
const ifFunction2 = (fnCondition) => ([fnTrue, fnFalse], data) => {
	return (data !== undefined) ? ifFunction(fnCondition)([fnTrue, fnFalse])(data) : ifFunction1(fnCondition, [fnTrue, fnFalse])
}
const invokeIf = (fnCondition, [fnTrue, fnFalse], data) => {
	if (data !== undefined)
		return ifFunction(fnCondition)([fnTrue, fnFalse])(data)
	else if (fnTrue !== undefined)
		return ifFunction1(fnCondition, [fnTrue, fnFalse])
	else if (fnCondition !== undefined)
		return ifFunction2(fnCondition)
}

const ifElseIfFunction1 = ([[currentFnCon, currentFnTrue], ...otherProcessfns] = [[]]) => (data) => {
	return ifElseIfFunction([[currentFnCon, currentFnTrue], ...otherProcessfns])(data)
}
const invokeIfElseIf = ([[currentFnCon, currentFnTrue], ...otherProcessfns] = [[]], data) => {
	if (currentFnCon === undefined || currentFnTrue === undefined)
		return console.error(`you do not set any condition and statement into  invokeIfElseIf`)
	else if (data !== undefined)
		return ifElseIfFunction([[currentFnCon, currentFnTrue], ...otherProcessfns])(data)
	else
		return ifElseIfFunction1([[currentFnCon, currentFnTrue], ...otherProcessfns])
}

const switchFunction0 = (fnCondition) => ([[currentFnCon, currentFnTrue], ...otherProcessfns] = [[]]) => (data) => {
	return (currentFnCon === undefined || currentFnTrue === undefined) ? console.error(`you do not set any case and statement into  invokeSwitch`) : switchFunction(fnCondition)([[currentFnCon, currentFnTrue], ...otherProcessfns])(data)
}
const switchFunction1 = (fnCondition,[[currentFnCon, currentFnTrue], ...otherProcessfns] = [[]]) => (data) => {
	return (currentFnCon === undefined || currentFnTrue === undefined) ? console.error(`you do not set any case and statement into  invokeSwitch`) : switchFunction(fnCondition)([[currentFnCon, currentFnTrue], ...otherProcessfns])(data)
}
const switchFunction2 = (fnCondition) => (fnCaseValueMap,data) => {
	return (data !== undefined) ? switchFunction0(fnCondition)(fnCaseValueMap)(data) : switchFunction1(fnCondition,fnCaseValueMap)
}
const invokeSwitch = (fnCondition,fnCaseValueMap,data) => {
	if (data !== undefined)
		return switchFunction0(fnCondition)(fnCaseValueMap)(data)
	else if (fnCaseValueMap !== undefined)
		return switchFunction1(fnCondition,fnCaseValueMap)
	else if (fnCondition !== undefined)
		return switchFunction2(fnCondition)
	else
		return console.error(`the number of parameters for invokeSwitch are illegal`)
}

const whileFunction1 = (fnCondition,fnProcess) => (data) => {
	return whileFunction(fnCondition)(fnProcess)(data)
}
const whileFunction2 = (fnCondition) => (fnProcess,data) => {
	return (data === undefined) ? whileFunction1(fnCondition,fnProcess) : whileFunction(fnCondition)(fnProcess)(data)
}
const invokeWhile = (fnCondition,fnProcess,data) => {
	if (data !== undefined)
		return whileFunction(fnCondition)(fnProcess)(data)
	else if (fnProcess !== undefined)
		return whileFunction1(fnCondition)(fnProcess)
	else if (fnCondition !== undefined)
		return whileFunction2(fnCondition)
	else
		return console.error(`the number of parameters for invokeWhile are illegal`)
}

const doWhileFunction1 = (fnCondition, fnProcess) => (data) => {
	return doWhileFunction(fnCondition)(fnProcess)(data)
}
const doWhileFunction2 = (fnCondition) => (fnProcess, data) => {
	return (data === undefined) ? doWhileFunction1(fnCondition, fnProcess) : doWhileFunction(fnCondition)(fnProcess)(data)
}
const invokeDoWhile = (fnCondition, fnProcess, data) => {
	if (data !== undefined)
		return doWhileFunction(fnCondition)(fnProcess)(data)
	else if (fnProcess !== undefined)
		return doWhileFunction1(fnCondition, fnProcess)
	else if (fnCondition !== undefined)
		return doWhileFunction2(fnCondition)
	else
		return console.error(`the number of parameters for invokeDoWhile are illegal`)
}

const forFunction2 = (doTime = 1) => (fnProcess, data) => {
  return (data === undefined )? forFunction(doTime)(fnProcess) : forFunction(doTime)(fnProcess)(data);
};
/**
 * the HOF for invoke "For"
 * @param {(data: U) => U} doTimefn
 * a function control how many time we call fnProcess. it may callback "Naturn Number"
 * @param {(data: U) => U} fnProcess
 * a callback function.
 * @param {U} data
 * a argments for fnProcess and " final  return" . it will change when every time we call fnProcess
 */
const forFunction0 = (doTimefn) => (fnProcess) => (data) => {
	let doTime = doTimefn(data)
	return (Number.isInteger(doTime) && doTime >= 0) ? forFunction(doTime)(fnProcess)(data) : console.error(`the number of iterations in invokeFor is not Nature number`)
}
const forFunction1 = (doTimefn,fnProcess) => (data) => {
	return forFunction0(doTimefn)(fnProcess)(data)
}
const forFunction2 = (doTimefn) => (fnProcess,data) => {
	return (data === undefined) ? forFunction1(doTimefn,fnProcess) : forFunction0(doTimefn)(fnProcess)(data)
}
const invokeFor = (doTimefn, fnProcess, data) => {
	if (data !== undefined)
		return forFunction0(doTimefn)(fnProcess)(data)
	else if (fnProcess !== undefined)
	 return forFunction1(doTimefn)(fnProcess)
  else if (doTimefn !== undefined)
    return forFunction2(doTimefn)
  else
    return console.error(`the number of arguments for invokeFor are illegal`);
};

module.exports = {
	invokeBlock,
	invokeIf,
	invokeIfElseIf,
	invokeSwitch,
	invokeWhile,
	invokeDoWhile,
	invokeFor,
}