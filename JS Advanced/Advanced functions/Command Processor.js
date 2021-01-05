function solution () {
        let text = '';

        return {
            append : function (string) {
                return text += string
            },
            removeStart : function (n) {
                return text = text.substring(n)
            },
            removeEnd : function (n) {
                return text = text.substring(0,text.length - n)
            },
            print : function () {
                console.log(text)
            }
        }
    
}

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

