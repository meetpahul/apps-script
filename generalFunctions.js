/* 
  If you have an array which is two-dimensional, such as [[1], [5], [3], ........ [2]] 
  and you need to convert it into a one-dimensional array such as [1, 5, 3, ....... 2], 
  then you can use the following function. 
  
  Parameter - This function takes the two-dimensional array as a parameter. 
  Result - This function returns a single-dimensional array.

*/
function flattenArray(array){
  var flatArray = []
  for (var i = 0; i < array.length; i++) {
    flatArray.push(array[i][0])
  }
  return flatArray
}


// General Function
function index(array1, array2){
  // Returns an array of indices of array 1 elements in array 2
  var indices = []
  for (var i=0; i<array1.length; i++){
    if (array2.indexOf(array1[i])>-1){
      indices.push(array2.indexOf(array1[i]))
    }
  }
  return indices
}
