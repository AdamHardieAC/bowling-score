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
  return frames.reduce((total, currentThrow, currIdx) => {
    let throwTotal = currentThrow.reduce((acc, curr, idx) => acc + curr, 0);

    const isFinalFrame = currIdx === 9;
    const isSpare = throwTotal === 10 && !isFinalFrame;

    if (isSpare) {
      const firstOfNextFrame = frames[currIdx + 1][0];
      throwTotal += firstOfNextFrame;
    }
    return total + throwTotal;
  }, 0);
};

module.exports = calculateScore;
//Continue refactoring
// work on strikes
