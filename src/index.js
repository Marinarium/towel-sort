
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];
    if (matrix !== undefined && (matrix.length > 0)) {

      matrix.forEach(function(elem, i){
        if(i % 2){
          elem.reverse().forEach(item =>arr.push(item));
        } else {
          elem.forEach(item => arr.push(item));
        } 
      });
        
    }
    return arr;
}
