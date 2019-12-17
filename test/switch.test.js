const { invokeSwitch } = require("../index.js")

let fCond = e => `${e}${e}`;
let fCase1 = () => "成績為A";
let fCase2 = () => "成績為B";
let fCase3 = () => "成績為C";
let fCase4 = () => "成績為D";
let CaseObj = [
  ["aa", fCase1],
  ["bb", fCase2],
  ["cc", fCase3],
  ["dd", fCase4]
];

describe('Switch', () => {
  it('if-3-parameter', () => {
    expect(invokeSwitch(fCond,CaseObj,'a')).toBe("成績為A")
  });
  it('if-2-1-parameter', () => {
    expect(invokeSwitch(fCond,CaseObj)('b')).toBe("成績為B")
  });
  it('if-1-2-parameter', () => {
    expect(invokeSwitch(fCond)(CaseObj,'c')).toBe("成績為C")
  });
  it('if-1-1-1-parameter', () => {
    expect(invokeSwitch(fCond)(CaseObj)('d')).toBe("成績為D")
  });
});