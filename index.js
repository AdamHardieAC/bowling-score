const calculateScore = (frames) => {
  //[6,6,6,6]
  //[3,3,3,3,3,3,3]
  return frames.flat().reduce((total, currentScore) => {
    return (total += currentScore);
  }, 0);
  // return frames.reduce((total, currentframe) => {
  //   return currentframe.reduce((singleFrameScore, currentScore) => {
  //     return (singleFrameScore += currentScore);
  //   }, total);
  // }, 0);
};

module.exports = calculateScore;
