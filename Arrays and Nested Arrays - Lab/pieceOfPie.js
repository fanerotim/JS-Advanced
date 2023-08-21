function pieceOfPie(arr, targetOne, targetTwo) {

    let startIndex = arr.indexOf(targetOne);
    let endIndex = arr.indexOf(targetTwo);
    let result = arr.slice(startIndex, endIndex + 1);
    return result;
}

pieceOfPie([
    'Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie');

// pieceOfPie([
//     'Apple Crisp',
//     'Mississippi Mud Pie',
//     'Pot Pie',
//     'Steak and Cheese Pie',
//     'Butter Chicken Pie',
//     'Smoked Fish Pie'],
//     'Pot Pie',
//     'Smoked Fish Pie')