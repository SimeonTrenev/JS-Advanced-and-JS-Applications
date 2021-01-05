
        vectorObject = {
        add: ([x1, y1], [x2, y2]) => {
            return [x1 + x2, y1 + y2]
        },
        multiply: ([x1, x2], scalar) => {
            return [x1 * scalar, x2 * scalar]
        },
        length: ([x1, x2]) => {
            return Math.sqrt((x1 * x1) + (x2 * x2))
        },
        dot: ([x1, y1], [x2, y2]) => {
            return (x1 * x2) + (y1 * y2)
        },
        cross: ([x1, y1], [x2, y2]) => {
            return (x1 * y2) - (x2 * y1)
        }
    }
    



console.log(vectorObject.add([5.43, -1], [1, 31]));
// console.log(vectorObject.multiply([3.5, -2], 2));
// console.log(vectorObject.length([3, -4]));
// console.log(vectorObject.dot([2, 3], [2, -1]));
// console.log(vectorObject.cross([3, 7], [1, 0]));
