function prevDay(year, month, date) {

    let today = new Date(year, month - 1, date);
    let yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    console.log(`${yesterday.getFullYear()}-${yesterday.getMonth() + 1}-${yesterday.getDate()}`);
}

prevDay(2016, 9, 30);
prevDay(2015, 5, 10);
prevDay(2023, 1, 1);