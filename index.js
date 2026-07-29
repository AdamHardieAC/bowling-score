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
  return frames.reduce((total, currentFrame, currIdx) => {
    let frameTotal = currentFrame.reduce((acc, curr, idx) => acc + curr, 0);

    const isFinalFrame = currIdx === 9;
    const isStrike = currentFrame[0] === 10 && !isFinalFrame;
    const isSpare = !isStrike && frameTotal === 10 && !isFinalFrame;
    const nextFrame = frames[currIdx + 1];
    const nextNextFrame = frames[currIdx + 2];

    if (isStrike) {
      // const isNextFrameFinal = currIdx + 1 === 9;

      // const nextFrameTotal = (
      //   isNextFrameFinal ? frames[currIdx + 1].slice(0, 2) : frames[currIdx + 1]
      // ).reduce((acc, curr, idx) => acc + curr, 0);
      const nextFrameTotal = nextFrame
        .slice(0, 2)
        .reduce((acc, curr, idx) => acc + curr, 0);
      frameTotal += nextFrameTotal;
      // if nextNextFrame is a strike, do the same again
      if (nextFrame[0] === 10 && nextNextFrame) {
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

    if (isSpare) {
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
// Magic numbers
