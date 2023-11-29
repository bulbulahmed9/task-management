import moment from "moment";

export const getCurrentDate = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDate = new Date();
  const dayOfWeek = days[currentDate.getDay()];
  const dayOfMonth = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  return `${dayOfWeek} || ${dayOfMonth} ${month}, ${year}`;
};

export const getStatusColor = (status) => {
  let color = "";

  if (status === "To Do") {
    color = "#9b59b6";
  } else if (status === "In Progress") {
    color = "#2db7f5";
  } else if (status === "Done") {
    color = "#0a8080";
  }

  return color;
};

export const colorPrimary = "#0a8080";
export const bg = {
  backgroundColor: colorPrimary,
};

export const dateFormatter = (date) => {
  return date.format("YYYY-MM-DD");
};
