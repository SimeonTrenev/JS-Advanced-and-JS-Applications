function solve(area, vol, input) {
    
let allFigures = JSON.parse(input)
let array = []

allFigures.map(figure => {
    let newArea = area.call(figure)
    let newVolume = vol.call(figure)
    
    let object = {
        area: Math.abs(newArea),
        volume: Math.abs(newVolume)
    }
    array.push(object)
});
    
    return array
}
console.log(solve(area, vol, `[
    {"x":"10","y":"-22","z":"10"},
{"x":"47","y":"7","z":"-5"},
{"x":"55","y":"8","z":"0"},
{"x":"100","y":"100","z":"100"},
{"x":"55","y":"80","z":"250"}

    ]`    ))

    function area() {
        return this.x * this.y;
    };

    function vol() {
        return this.x * this.y * this.z;
    };