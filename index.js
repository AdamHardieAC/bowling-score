// const calculateScore = (frames) => {
//   const flattedFrames = frames.flat();
//   return flattedFrames.reduce((total, currentThrow, currIdx) => {
//     const prevThrow = flattedFrames[currIdx - 1];
//     const nextThrow = flattedFrames[currIdx + 1];
//     const isLastThrowOfFrame = currIdx % 2 != 0;
//     const isLastFrame = currIdx >= 18;
//     const isStrike = !isLastThrowOfFrame && currentThrow === 10 && !isLastFrame;
//     const isSpare =
//       prevThrow + currentThrow === 10 && prevThrow !== 10 && !isLastFrame;

//     if (isStrike) {
//       let nextFrameTotal =
//         flattedFrames[currIdx + 2] +
//         flattedFrames[currIdx + (flattedFrames[currIdx + 2] === 10 ? 4 : 3)];

//       console.log({
//         currIdx,
//         nextFrameTotal,
//         total: total + currentThrow + nextFrameTotal,
//       });
//       return total + currentThrow + nextFrameTotal;
//     }

//     return (
//       total + currentThrow + (isLastThrowOfFrame && isSpare ? nextThrow : 0)
//     );
//   }, 0);
// };
const calculateScore = (frames) => {
  const strikeValue = 10;
  const isStrike = (frameToCheck) => frameToCheck[0] === strikeValue;

  return frames.reduce((total, currentFrame, currIdx) => {
    let frameTotal = currentFrame.reduce((acc, curr, idx) => acc + curr, 0);

    const isFinalFrame = currIdx === frames.length - 1;
    const isSpare = frameTotal === strikeValue && !isStrike(currentFrame);

    const nextFrame = frames[currIdx + 1];
    const nextNextFrame = frames[currIdx + 2];

    if (isStrike(currentFrame) && !isFinalFrame) {
      const nextFrameTotal = (
        nextFrame.length === 3 ? [nextFrame[0], nextFrame[1]] : nextFrame
      ).reduce((acc, curr, idx) => acc + curr, 0);

      frameTotal += nextFrameTotal;

      // if nextFrame is a strike & nextNextFrame exists, do the same again
      if (isStrike(nextFrame) && nextNextFrame) {
        let firstThrowNextNext = nextNextFrame[0];
        frameTotal += firstThrowNextNext;

        console.log({
          totalBefore: total,
          frameTotal,
          currIdx,
          currentFrame,
        });
      }
    }

    if (isSpare && !isFinalFrame) {
      const firstOfNextFrame = nextFrame[0];
      frameTotal += firstOfNextFrame;
    }

    console.log({
      totalBefore: total,
      frameTotal,
      currIdx,
      currentFrame,
    });
    return total + frameTotal;
  }, 0);
};

module.exports = calculateScore;
//Continue refactoring
// Naming
// Any other refactoring
// Magic numbers -- nextNextFrame left, reusing it in a few areas
//
