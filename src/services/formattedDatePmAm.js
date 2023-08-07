export const formattedDatePmAm = (unixTimestamp) => {
  const dateObject = new Date(unixTimestamp * 1000);

  const day = ("0" + dateObject.getDate()).slice(-2);
  const month = ("0" + (dateObject.getMonth() + 1)).slice(-2);

  let hours = dateObject.getHours();
  const minutes = ("0" + dateObject.getMinutes()).slice(-2);

  let amOrPm = "am";
  if (hours >= 12) {
    amOrPm = "pm";
  }

  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
  }

  const formattedDate = `${day}.${month}  at ${hours}:${minutes} ${amOrPm}`;
  return formattedDate;
};
