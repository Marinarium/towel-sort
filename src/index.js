
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];
    if (matrix) {

      matrix.forEach(function(item, i){
        (i % 2) ? arr = arr.concat(item.reverse()) : arr = arr.concat(item);
      });
        
    }
    return arr;
}
