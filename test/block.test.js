const { invokeBlock } = require("../index.js")

describe('Block', () => {
  const process1 = data => data + "1";
  const process2 = data => data + "2";
  const process3 = data => data + "3";
  let data = "0";
  it('block', () => {
    expect(invokeBlock([process1, process2, process3])(data)).toBe('0123')
  });
});