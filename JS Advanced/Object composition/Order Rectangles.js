function orderRectangles (input) {

 let result = input
 .map(([width, height]) => ({
    width,
    height,
    area: () => width * height,
    compareTo(rect) {
        let result = rect.area() - this.area()

        if(result === 0){
            return rect.width - this.width
        }

        return result
    }
 }));

//    rectangle.forEach(x => console.log(x.area()))

result.sort((a, b) =>  a.compareTo(b))

return result

}
orderRectangles([[10,5], [3,20], [5,12]])
