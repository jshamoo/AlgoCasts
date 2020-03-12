// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  // calculate the length of final layer
  const maxLen = 1 + 2 * (n - 1);

  // iterate from 1 to n
  for (let i = 1; i <= n; i++) {
    // create a new starting point of brick
    let brick = '#'
    // create the series of bricks for this layer
    brick = brick.repeat(i + i - 1);
    // calculate the space needed to the left based on the length of the bricks
    let spaceLeft = (maxLen - brick.length) / 2;
    // add the space to the left
    brick = ' '.repeat(spaceLeft) + brick;
    // pad the remaining space to the right
    brick = brick.padEnd(maxLen);
    console.log(brick);
  }
}
// pyramid(1);

module.exports = pyramid;
