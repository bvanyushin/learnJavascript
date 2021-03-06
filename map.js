var methods = ['map', 'forEach', 'filter', 'reduce'];

function funcLength(elem, i , array) {
    return elem.length;
};

function mapFunc(arr, func) {
  if (Array.isArray(arr) && (typeof func === 'function')) {
    var arrayCopy = arr.slice();
    var arrayLength = [];
    for (var i = 0; i < arrayCopy.length; i++) { 
      arrayLength.push(func(arrayCopy[i], i , arrayCopy));  
    }
    return arrayLength;
  }
    console.log('Не подходящий тип аргументов');
}

console.log(mapFunc(methods, funcLength));
var newArrayLength = methods.map(funcLength);
console.log(newArrayLength);
