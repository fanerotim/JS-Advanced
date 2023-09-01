function rectangle(width, height, color) {

    color = color[0].toUpperCase() + color.substring(1);

    let myObj = {
        width,
        height,
        color,
        calcArea: () => {return myObj.width * myObj.height}
    }

    return myObj;
}

rectangle(4, 5, 'red');