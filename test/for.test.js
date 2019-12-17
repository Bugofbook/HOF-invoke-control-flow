const { invokeFor } = require("../index.js")
const ftime = e => e * 2;
const fporc = e => e + 2;

describe('while', () => {
  it('if-3-parameter', () => {
    expect(invokeFor(ftime,fporc,3)).toBe(15)
  });
  it('if-2-1-parameter', () => {
    expect(invokeFor(ftime,fporc)(3)).toBe(15)
  });
  it('if-1-2-parameter', () => {
    expect(invokeFor(ftime)(fporc,3)).toBe(15)
  });
  it('if-1-1-1-parameter', () => {
    expect(invokeFor(ftime)(fporc)(3)).toBe(15)
  });
});