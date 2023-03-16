// Задача про обчислення різниці часу
// Напишіть функцію яка буде буде приймати 3 параметри - початкову дату (string)- кінцеву дату (string)- розмірність ('days', 'hours', 'minutes', seconds)
// Функція повертатиме часовий період між цими датами згідно розмірності.
// Також вкажіть значення по замовчуванню для всіх цих параметрів (на ваш вибір).
// Функція має коректно працювати навіть якщо початкова дата пізніше ніж кінцева дата.
// Приклади:durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds') // поверне '86400 seconds'
// durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days') // поверне '362 days'


function durationBetweenDates(currentDateStr='02 Aug 1985', endDateStr='15 Sep 1985', dimension='days') {
  
  const currentDate = Date.parse(currentDateStr); 
  const endDate = Date.parse(endDateStr); 

  if (dimension === 'days') {
    const one_day = 1000 * 60 * 60 * 24
    return (Math.round(endDate - currentDate) / one_day).toString() + ' days'
  } else if (dimension === 'hours') {
    const one_hour = 1000 * 60 * 60
    return (Math.round(endDate - currentDate) / one_hour).toString() + ' hours'
  } else if (dimension === 'minutes') {
    const one_minut = 1000 * 60
    return (Math.round(endDate - currentDate) / one_minut).toString() + ' minutes'
  } else if (dimension === 'seconds') {
    const one_second = 1000
    return (Math.round(Math.abs(endDate - currentDate)) / one_second).toString() + ' seconds'
  }
  else { return 'Error' }
}
const res = durationBetweenDates('14 Nov 1992', '9 Mar 1993', 'days')
console.log(res)

