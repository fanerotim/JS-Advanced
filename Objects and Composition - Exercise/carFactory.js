function carFactory(obj) {

    smallEngine = { power: 90, volume: 1800 }
    normalEngine = { power: 120, volume: 2400 }
    monsterEngine = { power: 200, volume: 3500 }
    hatchback = { type: 'hatchback', color: null }
    coupe = { type: 'coupe', color: null }

    let myObj = {};
    myObj['model'] = obj.model;

    let engine;

    if (obj.power <= 90) {
        engine = smallEngine;
    } else if (obj.power <= 120) {
        engine = normalEngine;
    } else if (obj.power > 120) {
        engine = monsterEngine;
    }
    myObj['engine'] = engine;
    myObj['carriage'] = { 'type': obj.carriage, 'color': obj.color };

    if (obj.wheelsize % 2 === 0) {
        obj.wheelsize--;
    }
    myObj['wheels'] = [obj.wheelsize, obj.wheelsize, obj.wheelsize, obj.wheelsize];

    return myObj;
}
    carFactory({
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    });