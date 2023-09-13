function attachEventsListeners() {

    let button = document.getElementById('convert');
    let inputUnits = Array.from(document.querySelectorAll('#inputUnits option'));
    let outputUnits = Array.from(document.querySelectorAll('#outputUnits option'));

    let inputDistanceInMeters = 0;
    let output = 0;

    button.addEventListener('click', () => {

        inputUnits.forEach(input => {
            if (input.selected === true) {
                let inputDistance = input.value;
                let inputDistanceNum = document.getElementById('inputDistance').value;
                inputDistanceNum = Number(inputDistanceNum);

                switch (inputDistance) {
                    case 'km':
                        inputDistanceInMeters = inputDistanceNum * 1000;
                        break;
                    case 'm':
                        inputDistanceInMeters = inputDistanceNum * 1;
                        break;
                    case 'cm':
                        inputDistanceInMeters = inputDistanceNum * 0.01;
                        break;
                    case 'mm':
                        inputDistanceInMeters = inputDistanceNum * 0.001;
                        break;
                    case 'mi':
                        inputDistanceInMeters = inputDistanceNum * 1609.34;
                        break;
                    case 'yrd':
                        inputDistanceInMeters = inputDistanceNum * 0.9144;
                        break;
                    case 'ft':
                        inputDistanceInMeters = inputDistanceNum * 0.3048;
                        break;
                    case 'in':
                        inputDistanceInMeters = inputDistanceNum * 0.0254;
                        break;
                }
            }
        });
 
        outputUnits.forEach(unit => {
            let outputDistance;
            if (unit.selected === true) {
                outputDistance = unit.value;
            }

            switch(outputDistance) {
                case 'km':
                    output = inputDistanceInMeters / 1000;
                    break;
                case 'm':
                    output = inputDistanceInMeters / 1;
                    break;
                case 'cm':
                    output = inputDistanceInMeters / 0.01;
                    break;
                case 'mm':
                    output = inputDistanceInMeters / 0.001;
                    break;
                case 'mi':
                    output = inputDistanceInMeters / 1609.34;
                    break;
                case 'yrd':
                    output = inputDistanceInMeters / 0.9144;
                    break;
                case 'ft':
                    output = inputDistanceInMeters / 0.3048;
                    break;
                case 'in':
                    output = inputDistanceInMeters / 0.0254;
                    break;
            }
        })

        let resultInput = document.getElementById('outputDistance');
        resultInput.value = output;
    })
}