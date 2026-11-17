const { differenceInBusinessDays } = require('date-fns');

function daysOfWork(start, end) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    let workDays = differenceInBusinessDays(endDate, startDate);
    holidaysFilter = holidays.filter((dd) =>{
        const datex = new Date(dd);
        const daysOfWork = datex.getDay(dd);
        return daysOfWork !== 0 && daysOfWork !== 6;
    });
    workDays = workDays - holidaysFilter.length;
    return workDays;
}

module.exports = daysOfWork;
