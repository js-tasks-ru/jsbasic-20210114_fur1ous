/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  if(str || !str){
    let newString = str[0].toUpperCase()+str.slice(1);
    return newString;
  } else {
    return false;
  }
}

ucFirst('обрпал имсьрп');
