function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function solve(area, vol, input) {

    let output = [];
    input = JSON.parse(input);

    for (let obj of input) {
        let x = Number(obj.x);
        let y = Number(obj.y);
        let z = Number(obj.z);

        let resultArea = area.call(obj, x, y);
        let resultVol = vol.call(obj, x, y, z);

        output.push({ 'area': resultArea, 'volume': resultVol });
    }
    return output;
}


// solve(area, vol, `[
//     {"x":"1","y":"2","z":"10"},
//     {"x":"7","y":"7","z":"10"},
//     {"x":"5","y":"2","z":"10"}
//     ]`
// );

solve(area, vol, `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`
    )