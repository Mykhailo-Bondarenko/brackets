module.exports = function check(str, bracketsConfig) {
  const array = str.split('');
  const result = [];
  const obj = {};
  for (let i = 0; i < bracketsConfig.length; i++) {
    obj[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]]) {
      if (obj[array[i]] !== result.pop()) return false;
    } else {
      result.push(array[i]);
    }
  }
  return result.length === 0;
}
