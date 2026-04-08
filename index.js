const calculateScore = (frames) => {
  const flattedFrames = frames.flat();
  //[6,6,6,6]
  //[3,3,3,3,3,3,3]

  //NEXTTIME - Refactor previous/next score fetching
  return flattedFrames.reduce((total, currentThrow, currIdx) => {
    // console.log(currIdx);
    const prevThrow = flattedFrames[currIdx - 1];
    const nextThrow = flattedFrames[currIdx + 1];
    const isSpare = prevThrow + currentThrow === 10;
    const isStrike = currentThrow === 10;
    const isLastThrowOfFrame = currIdx % 2 != 0;
    // const isLastFrame = currIdx > 16;

    // console.log({
    //   throw: currIdx + 1,
    //   currentThrow,
    //   total,
    // });
    //Working on strikes
    // Might need to consider that flatting frames isn't the best
    if (isStrike) {
      let nextFrame;
      if (isLastThrowOfFrame) {
        nextFrame = [flattedFrames[currIdx + 1], flattedFrames[currIdx + 2]];
      } else {
        nextFrame = [flattedFrames[currIdx + 2], flattedFrames[currIdx + 3]];
      }
      console.log(nextFrame);
    }
    // spare on last frame
    if (currIdx === 20) return total;
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
