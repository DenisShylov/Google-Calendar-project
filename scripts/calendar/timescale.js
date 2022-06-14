import { createNumbersArray } from '../common/createNumbersArray.js';

export const renderTimescale = () => {
  // ф-ция должна генерировать разметку для боковой шкалы времени (24 часа)
  // полученную разметку вставьте на страницу с помощью innerHTML в .calendar__time-scale
  const timeScaleElem = document.querySelector('.calendar__time-scale');

  return createNumbersArray(0, 23).map((time) => {
    const formatTime =
      time === 0
        ? `0${time}:00`
        : time > 0 && time <= 9
        ? `0${time}:00`
        : `${time}:00`;

    timeScaleElem.innerHTML += `<span class="calendar__time-scale-slot__time">${formatTime}</span>`;
  });
};
