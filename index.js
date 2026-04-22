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
    const isStrike = !isLastThrowOfFrame && currentThrow === 10;
    const isSpare = prevThrow + currentThrow === 10 && prevThrow !== 10;
    const isStrikeOrSpare = () => {
      if (isLastThrowOfFrame && currentThrow === 10) return "spare";
      if (!isLastThrowOfFrame && currentThrow === 10) return "strike";
    };

    // spare on last frame
    if (currIdx === 20) return total;
    // strike
    if (isStrikeOrSpare() === "strike") {
      let nextFrameTotal = [
        flattedFrames[currIdx + 2],
        flattedFrames[currIdx + 3],
      ].reduce((frameTotal, current) => {
        return (frameTotal += current);
      }, 0);
      console.log({
        currentThrow,
        isStrike,
        isSpare,
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
