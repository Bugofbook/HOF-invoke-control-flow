# HOF-invoke-control-flow

Use high-order-function to invoke control-flow in javascript.

infact, No every control-flow in javascript can be use High-order-function to invoke.

use function

- invokeBlock
- invokeIf
- invokeIfElseIf
- invokeWhile
- invokeDoWhile
- invokeSwitch
- invokeFor

## invokeBlock

the function are the copy from Redux.js. And invokeCompose is reverse to compose.there are no curry.

Use function:

```javascript
invokeBlock([fnProcess1,fnProcess2,...,fnProcessN])(data)
```

the expression statments are equal to...

```javascript
fnProcessN(...fnProcess2(fnProcess1(data)));
```

For example:

```javascript
const process1 = data => data + "1";
const process2 = data => data + "2";
const process3 = data => data + "3";
let data = "0";
let aaa = invokeBlock([process1, process2, process3])(data);
console.log(aaa); // '0123'
```

## invokeIf

the function is invoke "if". it have currying

Use function:

```javascript
invokeIf(fnCondition, [fnTrue, fnFalse], arg);
invokeIf(fnCondition)([fnTrue, fnFalse], arg);
invokeIf(fnCondition)([fnTrue, fnFalse], arg);
invokeIf(fnCondition)([fnTrue, fnFalse])(arg);
```

those expression statments are equal to...

```javascript
if (fnCondition(arg)) {
  return fnTrue(arg);
} else {
  return fnFalse(arg);
}
```

For example:

```javascript
const fcon = e => e > 10;
const ftr = e => "isbig:" + e;
const ffa = e => "issmall:" + e;

console.log(invokeIf(fcon,[ftr, ffa],3)); // issmall:3
console.log(invokeIf(fcon,[ftr, ffa])(11)); // isbig:11
console.log(invokeIf(fcon)([ftr, ffa],4)); // issmall:4
console.log(invokeIf(fcon)([ftr, ffa])(15)); // isbig:15
```

## invokeIfElseIf

the function is invoke if...elseif. it have currying

Use function:

```javascript
invokeIfElseIf(
  [
    [fnCondition1, fnResult1],
    [fnCondition2, fnResult2]
  ],
  data
);
invokeIfElseIf([
  [fnCondition1, fnResult1],
  [fnCondition2, fnResult2]
])(data);
```

both expression statments are equal to...

```javascript
if (fnCondition1(data)) {
  return fnResult1(data);
} else if (fnCondition2(data)) {
  return fnResult2(data);
} else {
  return data;
}
```

For example:

```javascript
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
  [()=>true,ffa] // if you invoke 'else',you can use '()=>true', it always return 'true'
]
console.log(invokeIfElseIf(ConditionFn,3)); // issmall:3
console.log(invokeIfElseIf(ConditionFn)(3)); // issmall:3
```

## invokeWhile and invokeDoWhile

the function is invoke "while" and "Do...while". it have currying.

Use function:

```javascript
invokeWhile(fnCondition, fnProcess, arg);
invokeWhile(fnCondition)(fnProcess, arg);
invokeWhile(fnCondition, fnProcess)(arg);
invokeWhile(fnCondition)(fnProcess)(arg);
invokeDoWhile(fnCondition, fnProcess, arg);
invokeDoWhile(fnCondition)(fnProcess, arg);
invokeDoWhile(fnCondition, fnProcess)(arg);
invokeDoWhile(fnCondition)(fnProcess)(arg);
```

those expression statments are equal to...

```javascript
While:

 while (fnCondition(arg)) {
  arg = fnProcess(arg);
}
return arg;

DoWhile:

arg = fnProcess(arg);
while (fnCondition(arg)) {
  arg = fnProcess(arg);
}
return arg;
```

For example:

```javascript
let fcon = e => e < 10;
let fporc = e => e + 2;
console.log(invokeWhile(fcon)(fporc)(3)); // 11
console.log(invokeWhile(fcon,fporc)(3)); // 11
console.log(invokeWhile(fcon)(fporc,3)); // 11
console.log(invokeWhile(fcon,fporc,3)); // 11
```

## invokeSwitch

the function is invoke "Switch",

Use function:

```javascript
let fnCases = [
  [fnCase1, fnProcess1],
  [fnCase2, fnProcess2]
]
invokeSwitch(fnCondition,fnCases,data);
invokeSwitch(fnCondition)(fnCases,data);
invokeSwitch(fnCondition,fnCases)(data);
invokeSwitch(fnCondition)(fnCases)(data);
```

those expression statments are equal to...

```javascript
switch (fnCondition(data)) {
  case:fnCase1 {
    return fnProcess1(data)
  }
  case:fnCase2 {
    return fnProcess2(data)
  }
  default:
    return data
}
```

For example:

```javascript
let fCond = e => `${e}${e}`;
let fCase1 = () => "成績為A";
let fCase2 = () => "成績為B";
let fCase3 = () => "成績為C";
let fCase4 = () => "成績為D";
let CaseObj = [
  ["aa", fCase1],
  ["bb", fCase2],
  ["cc", fCase3],
  ["dd", fCase4], // in fact, I can not invoke 'default'
];
console.log(invokeSwitch(fCond)(CaseObj)("a")); // 成績為A
console.log(invokeSwitch(fCond,CaseObj)("b")); // 成績為B
console.log(invokeSwitch(fCond)(CaseObj,"c")); // 成績為B
console.log(invokeSwitch(fCond,CaseObj,"d")); // 成績為D
```
