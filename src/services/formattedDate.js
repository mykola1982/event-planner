export const formattedDate = (unixTimestamp) => {
  const dateObject = new Date(unixTimestamp * 1000);

  const day = ("0" + dateObject.getDate()).slice(-2);
  const month = ("0" + (dateObject.getMonth() + 1)).slice(-2);

  const hours = ("0" + dateObject.getHours()).slice(-2);
  const minutes = ("0" + dateObject.getMinutes()).slice(-2);

  const formattedDate = `${day}.${month}  at ${hours}:${minutes}`;
  return formattedDate;
};
