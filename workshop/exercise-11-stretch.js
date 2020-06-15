// Q11
// Write a program that creates a string that represents an 8×8 grid,
// using newline characters to separate lines. At each position of the grid
// there is either an "_" or a "#" character. The characters should form a chessboard.

let grid = "";

for (let row = 1; row <= 8; row++) {
  if (row % 2 === 0) {
    grid = grid + "_#_#_#_#\n";
  } else {
    grid = grid + "#_#_#_#_\n";
  }
}
console.log(grid);

// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
