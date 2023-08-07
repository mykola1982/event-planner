export const combineDateTime = (date, time) => {
  try {
    const [year, month, day] = date.split("-").map(Number);

    const [hour, minute] = time.split(":").map(Number);

    const combinedDateTime = new Date(year, month - 1, day, hour, minute);

    const unixTime = combinedDateTime.getTime();

    return unixTime;
  } catch (error) {
    return null;
  }
};
