
// You should implement your task here.

module.exports = function towelSort (matrix) {
  //var array = [].concat.apply([], matrix);
  //return array;

    var arr = [];
    if (matrix !== undefined && (matrix.length > 0)) {
      for (var i = 0; i < matrix[0].length; i++) {
        if(i % 2){
          arr = [].concat.apply(arr, matrix[i].reverse());
        } else {
          arr = [].concat.apply(arr, matrix[i]);
        }    
      }
    }

    return arr;

}
