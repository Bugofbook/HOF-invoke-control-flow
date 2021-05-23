// const { invokeWhile, invokeDoWhile } = require("../index.js")
import { invokeWhile, invokeDoWhile } from "../index.js";
const fcon = e => e < 10;
const fporc = e => e + 2;

describe('while', () => {
  it('if-3-parameter', () => {
    expect(invokeWhile(fcon,fporc,3)).toBe(11)
  });
  it('if-2-1-parameter', () => {
    expect(invokeWhile(fcon,fporc)(3)).toBe(11)
  });
  it('if-1-2-parameter', () => {
    expect(invokeWhile(fcon)(fporc,3)).toBe(11)
  });
  it('if-1-1-1-parameter', () => {
    expect(invokeWhile(fcon)(fporc)(3)).toBe(11)
  });
});

describe('Dowhile', () => {
  it('if-3-parameter', () => {
    expect(invokeDoWhile(fcon,fporc,11)).toBe(13)
  });
  it('if-2-1-parameter', () => {
    expect(invokeDoWhile(fcon,fporc)(11)).toBe(13)
  });
  it('if-1-2-parameter', () => {
    expect(invokeDoWhile(fcon)(fporc,11)).toBe(13)
  });
  it('if-1-1-1-parameter', () => {
    expect(invokeDoWhile(fcon)(fporc)(11)).toBe(13)
  });
});