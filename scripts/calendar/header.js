import { getItem } from '../common/storage.js';
import { generateWeekRange } from '../common/time.utils.js';
import { openModal } from '../common/modal.js';

const getCurrentDay = (day, className) => {
  return new Date(new Date().toDateString()).getTime() === day.getTime()
    ? `${className} ${className}_active`
    : className;
};

export const renderHeader = () => {
  // на основе displayedWeekStart из storage с помощью generateWeekRange сформируйте массив дней текущей недели
  // на основе полученного массива сформируйте разметку в виде строки - 7 дней (день недели и число в месяце)
  // полученную разметку вставить на страницу с помощью innerHTML в .calendar__header
  // в дата атрибуте каждой ячейки должно хранить для какого часа эта ячейка

  const daysOfWeekArray = generateWeekRange(getItem('displayedWeekStart'));
  const headerElement = document.querySelector('.calendar__header');

  const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

  headerElement.innerHTML = '';

  daysOfWeekArray.map((day) => {
    return (headerElement.innerHTML += `<div class="calendar__day_label day-label">
      <span class="${getCurrentDay(day, 'day-label__day-name')}">${daysOfWeek[
      day.getDay()
    ].toUpperCase()}</span>
      <span class="${getCurrentDay(
        day,
        'day-label__day-number'
      )}">${day.getDate()}</span>
      </div>`);
  });
};

// при клике на кнопку "Create" открыть модальное окно с формой для создания события
// назначьте здесь обработчик
const createButton = document.querySelector('.create-event-btn');
createButton.addEventListener('click', openModal);
