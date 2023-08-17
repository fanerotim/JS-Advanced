function days(month, year) {
    let currentDate = new Date(year, month, 0).getDate();
    return currentDate;
}

days(1, 2012);
days(2, 2021);