function durationBetweenDates(currentDateStr = '02 Aug 1985', endDateStr = '15 Sep 1985', dimension = 'days') {
  
  const currentDate = Date.parse(currentDateStr);
  const endDate = Date.parse(endDateStr);

  let timeDim = {
    days: 86400000,
    hours: 3600000,
    minutes: 60000,
    seconds: 1000
  }

  return (Math.round(endDate - currentDate) / timeDim[dimension]).toString() + ' ' + dimension
}

const res = durationBetweenDates('14 Nov 1992', '9 Mar 1993', 'hours')
console.log(res)

