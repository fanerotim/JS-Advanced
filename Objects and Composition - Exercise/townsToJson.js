function townToJson(arr) {

    let myArr = [];

    for (let i = 1; i < arr.length; i++) {
        let [town, latitude, longitude] = arr[i].split(' |');
        latitude = Number(latitude)
        latitude = Math.round((latitude + Number.EPSILON) * 100) / 100;
        longitude = Number(longitude)
        longitude = Math.round((longitude + Number.EPSILON) * 100) / 100;
        town = town.split('| ').join('');
        
        let myObj = {
            Town: town,
            Latitude: latitude,
            Longitude: longitude,
        }
        myArr.push(myObj);
    }
    console.log(JSON.stringify(myArr));
}   

townToJson([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);