/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  console.log(str, str.length);

  if(str.length>maxlength) {
    let newStr = str.substring(0,19) + '...'
    console.log(newStr);

    return str;
  }
}

truncate('Вот, что мне хотелось бы сказать на эту тему:', 20);
