export const millisecondsToMinutesAndSeconds = (milliseconds: number) => {
  const seconds = 1000 * Math.round(milliseconds / 1000); // round to nearest second
  const date = new Date(seconds);

  return date.getUTCMinutes() + ":" + date.getUTCSeconds();
};
