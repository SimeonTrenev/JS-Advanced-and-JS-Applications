function solve() {

    //add select options

    let selectElement = document.getElementById('selectMenuTo');
    let binaryOption = document.createElement('option');
    let hexaDecimalOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.textContent = 'Binary';
    hexaDecimalOption.value = 'hexadecimal';
    hexaDecimalOption.textContent = 'Hexadecimal';

    selectElement.appendChild(binaryOption);
    selectElement.appendChild(hexaDecimalOption);

    //add click event

    let button = document.querySelector('button');
    button.addEventListener('click', clickEvent)

    function clickEvent() {
        //get values

        let decimalNumber = Number(document.getElementById('input').value);
        let selectElement = document.getElementById('selectMenuTo');
        let convertTo = selectElement.options[selectElement.selectedIndex].textContent;

        //convert

        let result;
        switch(convertTo) {
            case 'Binary':
                result = decimalNumber.toString(2);
                break;
                case 'Hexadecimal':
                    result = decimalNumber.toString(16).toUpperCase();
                    break;
        }

        //append output
        document.querySelector('#result').value = result;


    }

    
}