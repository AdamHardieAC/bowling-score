const calculateScore = (frames) => {
  const flattedFrames = frames.flat();
  //[6,6,6,6]
  //[3,3,3,3,3,3,3]

  //NEXTTIME - Refactor previous/next score fetching
  return flattedFrames.reduce((total, currentThrow, currIdx) => {
    // console.log(currIdx);
    const prevThrow = flattedFrames[currIdx - 1];
    const nextThrow = flattedFrames[currIdx + 1];
    const isLastThrowOfFrame = currIdx % 2 != 0;
    const isLastFrame = currIdx >= 18;
    const isStrike = !isLastThrowOfFrame && currentThrow === 10 && !isLastFrame;
    const isSpare =
      prevThrow + currentThrow === 10 && prevThrow !== 10 && !isLastFrame;

    //fix perfect game
    //test consecutive spares
    if (isStrike) {
      let nextFrameTotal = [
        flattedFrames[currIdx + 2],
        flattedFrames[currIdx + 3],
      ].reduce((frameTotal, current) => {
        return (frameTotal += current);
      }, 0);
      console.log({
        currentThrow,
        currIdx,
        isStrike,
        isSpare,
        nextFrameTotal,
        total: total + currentThrow + nextFrameTotal,
      });
      return total + currentThrow + nextFrameTotal;
    }

    console.log({
      currentThrow,
      isStrike,
      isSpare,
      total:
        total + currentThrow + (isLastThrowOfFrame && isSpare ? nextThrow : 0),
    });
    return (
      total + currentThrow + (isLastThrowOfFrame && isSpare ? nextThrow : 0)
    );
  }, 0);
};

module.exports = calculateScore;
