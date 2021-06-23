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

/* 
  If you have two arrays, 
  and you want to get the indices of elements of array 1 in the array 2, 
  Then this function will get the indices in a new array for you.
  
  Parameter - This function takes the two one-dimensional arrays as parameters. 
  Result - This function returns one single-dimensional array which contains indices of elements of array1 in array 2.
  
  Note: If an element in array1 is not included in array2, this function does not throw an error. 
  This function returns indices of elements that exist in both arrays.
*/

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
