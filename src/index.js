
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];
    if (matrix !== undefined && (matrix.length > 0)) {

      matrix.forEach(function(item, i){
        if(i % 2){
          arr = arr.concat(item.reverse());
        } else {
          arr = arr.concat(item);
        } 
      });
        
    }
    return arr;
}
