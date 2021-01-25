/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  if (str) {
    let newString = str[0].toUpperCase()+str.slice(1);
    str = newString;
    return str;
  }
  else if (str=='') {
    return str;
  }

  else {
    return false;
  }
}

ucFirst('');
