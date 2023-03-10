// more detail you can see [mdn reg](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)
function removeEmpty(str) {
  const reg = /\s*/;
  return str.replace(reg, "");
}

function testNumber(str) {
  const reg = /\d*/;
  // const reg = /[0-9]*/;
  return reg.test(str);
}

function testNumbers(str) {
  const reg = /[0-9]*/;
  return reg.test(str);
}

console.log(testNumbers("  abc123445"));

module.exports = {
  removeEmpty,
  testNumber,
  testNumbers,
};
