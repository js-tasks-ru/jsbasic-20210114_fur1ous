/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  let val = [];

  for(let i = 0; i< arr.length; i++) {

    if(arr[i]>= a && arr[i]<= b){
      val.push(arr[i]);
    }

  }

  return val;
}

let filtered = filterRange(arr, 1, 4);

// console.log( filtered ); // [3,1] (совпадающие значения)
// console.log( arr ); // [5,3,8,1] (без изменений)
