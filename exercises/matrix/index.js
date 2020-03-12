// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const cube = [];
  for (let i = 0; i < n; i++) {
    cube.push(Array(n));
  }
  let start = 0;
  let end = n - 1;
  let num = 1;
  while (num <= n * n) {
    let col = start;
    let row = start;
    while(col <= end){
      cube[row][col] = cube[row][col] || num++;
      if (col === end) row++;
      col++;
    }
    col--;
    while(row <= end) {
      cube[row][col] = cube[row][col] || num++;
      if(row === end) col--;
      row++;
    }
    row--;
    while(col >= start) {
      cube[row][col] = cube[row][col] || num++;
      if (col === start) row--;
      col--;
    }
    col++;
    while (row >= start) {
      cube[row][col] = cube[row][col] || num++;
      if(row === start) col++;
      row--;
    }
    start = start + 1;
    end = end - 1;
  }
  return cube;
}

console.log(matrix(4))

module.exports = matrix;
