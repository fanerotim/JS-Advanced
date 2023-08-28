function cityRecord(name, population, treasury) {
    
    let myObj = {
        name,
        population,
        treasury,
    }
    
    myObj['taxRate'] = 10;
    
    myObj['collectTaxes'] = function() {
        myObj.treasury += myObj.population * myObj.taxRate;    
    }

    myObj['applyGrowth'] = (x) => {
        myObj.population += myObj.population * (x / 100);    
    }
    
    myObj['applyRecession'] = (x) => {
        myObj.treasury -= myObj.treasury * (x / 100);
    } 

    return myObj;  
}

cityRecord(
    'Tortuga',
    7000,
    15000);