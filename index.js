const fromTimeZone = document.getElementById("fromTimeZone");
const targetTimeZone = document.getElementById("targetTimeZone");
const monthName = document.getElementById("month-name");
const day = document.getElementById("day");
const year = document.getElementById("year");
const inputTime = document.getElementById("input-time");
const timeFormat = document.getElementById("timeFormat");
const amPm = document.getElementById("amPm");
const output = document.getElementById("output");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function convertTime(time, fromTZ, targetTZ) {
  let convertedTime = new Date(time);
  let offset = targetTZ - fromTZ;
  convertedTime.setHours(convertedTime.getHours() + offset);
  return convertedTime;
}

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + " " + ampm;
  return date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + " " + strTime;
}

function handleConversion() {
  let time = new Date(year.value + "-" + (months.indexOf(monthName.value) + 1) + "-" + day.value + " " + inputTime.value + " " + amPm.value);
  if (timeFormat.value === "24") {
    time.setHours(time.getHours() + (time.getHours() < 12 ? 12 : -12));
  }
  let initialTime = formatDate(time);
  let convertedTime = formatDate(convertTime(time, parseInt(fromTimeZone.value.slice(3)), parseInt(targetTimeZone.value.slice(3))));
  output.innerHTML = "Initial Time: " + initialTime + "<br>" + "Converted Time: " + convertedTime;
}

fromTimeZone.addEventListener("change", handleConversion);
targetTimeZone.addEventListener("change", handleConversion);
monthName.addEventListener("change", handleConversion);
day.addEventListener("input", handleConversion);
year.addEventListener("input", handleConversion);
inputTime.addEventListener("input", handleConversion);
timeFormat.addEventListener("change", handleConversion);
amPm.addEventListener("change", handleConversion);
