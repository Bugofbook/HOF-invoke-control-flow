const { invokeIf, invokeIfElseIf } = require("../index.js")
const ifElseIfFunction = require('../lib/ifelseif')

describe('If', () => {
  const fcon = e => e > 10;
  const ftr = e => "isbig:" + e;
  const ffa = e => "issmall:" + e;
  it('if-3-parameter', () => {
    expect(invokeIf(fcon,[ftr, ffa],3)).toBe('issmall:3')
  });
  it('if-2-1-parameter', () => {
    expect(invokeIf(fcon,[ftr, ffa])(11)).toBe('isbig:11')
  });
  it('if-1-2-parameter', () => {
    expect(invokeIf(fcon)([ftr, ffa],4)).toBe('issmall:4')
  });
  it('if-1-1-1-parameter', () => {
    expect(invokeIf(fcon)([ftr, ffa])(15)).toBe('isbig:15')
  });
});

describe('IfElseIf', () => {
  const fbig1000 = e => e > 1000;
  const fbig100 = e => e > 100;
  const fbig10 = e => e > 10;
  const ftr1 = e => "isbig1000:" + e;
  const ftr2 = e => "isbig100:" + e;
  const ftr3 = e => "isbig10:" + e;
  const ffa = e => "issmall:" + e;
  const ConditionFn = [
    [fbig1000,ftr1],
    [fbig100,ftr2],
    [fbig10,ftr3],
    [()=>true,ffa]
  ]
  it('ifelseif-2-parameter', () => {
    expect(invokeIfElseIf(ConditionFn,3)).toBe('issmall:3')
  });
  it('ifelseif-1-1-parameter', () => {
    expect(invokeIfElseIf(ConditionFn)(3)).toBe('issmall:3')
  });
});