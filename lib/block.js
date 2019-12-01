const blockFunction = ([...fns]) => arg => fns.reduce((composed, f) => f(composed), arg);
	
module.exports = blockFunction