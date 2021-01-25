/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {

  if(str.length>maxlength) {
    let newStr = str.substring(0,19) + '...';

    return newStr;
  }
}

truncate('Вот, что мне хотелось бы сказать на эту тему:', 20);