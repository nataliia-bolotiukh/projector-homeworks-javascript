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

  let time_dim = {
    days: 86400000,
    hours: 3600000, 
    minutes: 60000,
    seconds: 1000
  }
  
  if (dimension === 'days') {
    return (Math.round(endDate - currentDate) / time_dim.days).toString() + ' days'
  } else if (dimension === 'hours') {
    return (Math.round(endDate - currentDate) / time_dim.hours).toString() + ' hours'
  } else if (dimension === 'minutes') {
    return (Math.round(endDate - currentDate) / time_dim.minutes).toString() + ' minutes'
  } else if (dimension === 'seconds') {
    return (Math.round(Math.abs(endDate - currentDate)) / time_dim.seconds).toString() + ' seconds'
  } else { return 'Error' }
}

const res = durationBetweenDates('14 Nov 1992', '9 Mar 1993', 'days')
console.log(res)

