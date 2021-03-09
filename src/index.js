
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newMatrix = []
  if( matrix === undefined || matrix.length === 0){
    return []
  } else{
    for (let i = 0;i<matrix.length;i++){
      if (i % 2 !== 0){
      let reverseMatrix = matrix[i].reverse()
      newMatrix = newMatrix.concat(reverseMatrix)
      } else {
        newMatrix = newMatrix.concat(matrix[i])
      }         
    }
    return newMatrix
    
  }
}


