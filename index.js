const currMonthYear = document.querySelector('.currMonthYear');
const calendarDays = document.querySelector('.calendar__days');
const switchDatesBtns = document.querySelectorAll('header > button');

const date = new Date();
let currentYear = date.getFullYear();
let currentMonthInd = date.getMonth();
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const renderCalendar = (currentMonthInd, currentYear) => {
  const currentMonth = months[currentMonthInd];

  // assign current month and year
  currMonthYear.innerHTML = `${currentMonth} ${currentYear}`;

  // get days in month and render days in month
  const daysInMonth = new Date(currentYear, currentMonthInd + 1, 0).getDate(); // also last day of the month
  const firstDayOfMonth = new Date(currentYear, currentMonthInd, 1).getDay();

  calendarDays.innerHTML = '';

  // making sure whether the curr month is displayed and if so then color the day today
  const isCurrMonthDisplayed =
    new Date().getFullYear() === currentYear &&
    months[new Date().getMonth()] === currentMonth;

  // making empty days to display from which week day the month starts
  for (let emptyDays = 1; emptyDays < firstDayOfMonth; emptyDays++) {
    calendarDays.innerHTML += `<li></li>`;
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.innerHTML += `<li class=${
      isCurrMonthDisplayed && new Date().getDate() === day
        ? 'calendar__days_active'
        : ''
    }>${day}</li>`;
  }
};
renderCalendar(currentMonthInd, currentYear);

// listen for click on btns back and forward to switch dates
switchDatesBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    currentMonthInd =
      btn.className === 'btn_back' ? currentMonthInd - 1 : currentMonthInd + 1;
    if (currentMonthInd === -1) {
      currentMonthInd = 11;
      currentYear = currentYear - 1;
    }
    if (currentMonthInd === 12) {
      currentMonthInd = 0;
      currentYear = currentYear + 1;
    }

    renderCalendar(currentMonthInd, currentYear);
  });
});
