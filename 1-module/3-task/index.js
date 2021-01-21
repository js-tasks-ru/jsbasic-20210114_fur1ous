/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  if(str.length != 0){
    let newString = str[0].toUpperCase()+str.slice(1);
    alert(newString);
    return newString;
  } else {
    alert('строка пустая');
    return false;
  }
}

ucFirst('обрпал имсьрп');
