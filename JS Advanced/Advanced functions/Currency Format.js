
function currencyFormatter(currencyFormatter) {
    
    return  function (value) {
        return currencyFormatter(',', '$', true, value)
    }
}




