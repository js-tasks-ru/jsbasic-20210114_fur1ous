/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
let inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';

function getMinMax(str) {
  const separators = [' ', ','];
  let arrNumb = str.split(new RegExp(separators.join('|'), 'g'));

  let arrMinMax = [];
  for (let numb of arrNumb) {
    if (!isNaN(numb) && numb != '') {
      arrMinMax.push(+numb);
    }
  }

  return {
    min: Math.min.apply( null, arrMinMax ),
    max: Math.max.apply( null, arrMinMax )
  };
}

//console.log(getMinMax(inputData));
