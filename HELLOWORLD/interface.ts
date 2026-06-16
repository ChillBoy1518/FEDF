interface Rectangle {
    height: number;
    width: number;
}


const rectangle: Rectangle = {
    height: 10,
    width: 5
};
console.log(rectangle);

interface colorRectangle extends Rectangle {
    color: string;
}

const coloredRectangle: colorRectangle = {
    height: 15,
    width: 10,
    color: "red"
};
console.log(coloredRectangle);