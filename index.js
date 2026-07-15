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
    // console.log(total);
    //[10, 0]
    // console.log(currentFrame);
    let frameTotal = currentFrame.reduce((acc, curr, idx) => acc + curr, 0);

    const isFinalFrame = currIdx === 9;
    const isStrike = currentFrame[0] === 10 && !isFinalFrame;
    const isSpare = !isStrike && frameTotal === 10 && !isFinalFrame;

    if (isStrike) {
      const nextFrameTotal = frames[currIdx + 1].reduce(
        (acc, curr, idx) => acc + curr,
        0,
      );
      frameTotal += nextFrameTotal;
      // if nextNextFrame is a strike, do the same again
      if (
        frames[currIdx + 1][0] === 10 &&
        !isFinalFrame &&
        frames[currIdx + 2]
      ) {
        let nextNextFrame = frames[currIdx + 2][0];
        // const nextNextFrameTotal = frames[currIdx + 2].reduce(
        //   (acc, curr, idx) => acc + curr,
        //   0,
        // );
        frameTotal += nextNextFrame;
      }
    }

    if (isSpare) {
      const firstOfNextFrame = frames[currIdx + 1][0];
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
// work on strikes
// - Continue to work on strikes, there's an issue with next(Next)Frames and
// adding to the total for the current frame
// e.g. going into frame 9 we've got the right total
// but we're adding 9 + all of frame 10 throws
