export const convertTimeFormat = (date: Date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const period = +hours >= 12 ? "PM" : "AM";
  const convertedHours = +hours % 12 || 12;
  return `${convertedHours}:${minutes} ${period}`;
};
