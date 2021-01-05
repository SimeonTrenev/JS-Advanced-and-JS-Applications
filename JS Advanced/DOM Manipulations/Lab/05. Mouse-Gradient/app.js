function attachGradientEvents() {
    let gradient = document.getElementById('gradient')
    let result = document.getElementById('result')

    gradient.addEventListener('mousemove', gradientMove)
    gradient.addEventListener('mouseout', gradientOut)

    function gradientMove (e) {
        let power = e.offsetX / (e.target.clientWidth - 1)
        power = Math.trunc(power * 100)
        result.textContent = power + '%'
    }

    function gradientOut (e) {
        result.textContent = '';
    }
}