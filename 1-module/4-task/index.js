/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  console.log(str);

  if (str.includes('xxx') == true || str.includes('1XbeT') == true) {
    console.log('Спам');
    return false;
  } else {
    return true;
  }
}

checkSpam('dfsadfasd xxx');
