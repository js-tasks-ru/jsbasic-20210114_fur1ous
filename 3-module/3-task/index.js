/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str){
  let newStr = str
    .split('-')
    .map((word, index) => index != 0 ? word[0].toUpperCase()+word.slice(1) : word)
    .join('');

  return newStr;
}

camelize('background-color');
