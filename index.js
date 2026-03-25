const calculateScore = (frames) => {
  const flattedFrames = frames.flat();
  //[6,6,6,6]
  //[3,3,3,3,3,3,3]
  return flattedFrames.reduce((total, currentThrow, currIdx) => {
    console.log(currIdx);
    const prevThrow = flattedFrames[currIdx - 1];
    const nextThrow = flattedFrames[currIdx + 1];
    const isSpare = prevThrow + currentThrow === 10;
    const isLastThrowOfFrame = currIdx % 2 != 0;
    // total += currentThrow
    // total = total + currentThrow
    return (
      total + currentThrow + (isLastThrowOfFrame && isSpare ? nextThrow : 0)
    );
    // return isLastThrowOfFrame && isSpare
    //   ? (total += currentThrow + nextThrow)
    //   : (total += currentThrow);

    // if (isLastThrowOfFrame && isSpare) {
    //   return (total += currentThrow + nextThrow);
    // }
    // return (total += currentThrow);
  }, 0);
  // return frames.reduce((total, currentframe) => {
  //   return currentframe.reduce((singleFrameScore, currentScore) => {
  //     return (singleFrameScore += currentScore);
  //   }, total);
  // }, 0);
};

module.exports = calculateScore;
