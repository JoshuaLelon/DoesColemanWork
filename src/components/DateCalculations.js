function getDaysFromAprilEleventhToInputDate(futureDate) {
    const lastDayWorked = new Date('April 11, 2017 00:00:00');
    // format date into something usable:
    const numMilSecInADay = 86400000;
    const daysSinceLastWorked = Math.floor((futureDate - lastDayWorked) / numMilSecInADay);
    return daysSinceLastWorked;
}

function getDaysSinceLastWorked() {
    const today = new Date();
    return getDaysFromAprilEleventhToInputDate(today);
}

export function getTodaysWorkInfoText() {
    const daysSinceLastWorked = getDaysSinceLastWorked();
    let todaysWorkInfoText = '';
    if (daysSinceLastWorked % 3 === 0) {
        todaysWorkInfoText = 'Works today.';
    } else if (daysSinceLastWorked % 3 === 1) {
        todaysWorkInfoText = 'Off today and tomorrow.';
    } else if (daysSinceLastWorked % 3 === 2) {
        todaysWorkInfoText = 'Off today, works tomorrow.';
    } else {
        todaysWorkInfoText = 'Error.';
    }
    return todaysWorkInfoText;
}

export function getFutureWorkInfo(futureDate) {
    const daysSinceLastWorked = getDaysFromAprilEleventhToInputDate(futureDate);
    let todaysWorkInfoText = '';
    if (daysSinceLastWorked % 3 === 0) {
        todaysWorkInfoText = 'Works that day.';
    } else if (daysSinceLastWorked % 3 === 1) {
        todaysWorkInfoText = 'Off that day and the next.';
    } else if (daysSinceLastWorked % 3 === 2) {
        todaysWorkInfoText = 'Off that day, works the next.';
    } else {
        todaysWorkInfoText = 'Error. You can\'t (reliably) look before April 11th yet.';
    }
    return todaysWorkInfoText;
}

