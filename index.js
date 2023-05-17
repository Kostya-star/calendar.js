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

const renderCalendar = (currentMonth, currentYear) => {
  const currMonthYear = document.querySelector('.currMonthYear');

  // assign current month and year
  currMonthYear.innerHTML = `${currentMonth} ${currentYear}`;
};
renderCalendar(months[currentMonthInd], currentYear);

const addListenersForSwitchDatesBtns = () => {
  const switchDatesBtns = document.querySelectorAll('header > button');
  // listen for click on btns back and forward to switch dates
  switchDatesBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      currentMonthInd =
        btn.className === 'btn_back'
          ? currentMonthInd - 1
          : currentMonthInd + 1;
        if(currentMonthInd === -1 || currentMonthInd === 12) {
            if(currentMonthInd === -1) {
                currentMonthInd = 11
                currentYear = currentYear - 1
            } else if(currentMonthInd === 12) {
                currentMonthInd = 0
                currentYear = currentYear + 1
            }
        }
      renderCalendar(months[currentMonthInd], currentYear);
    });
  });
};

addListenersForSwitchDatesBtns();
