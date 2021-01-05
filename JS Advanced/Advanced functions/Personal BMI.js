function bmi(name, age, weight, height){

    // kg / height in metres ** 2
    let bmsFactor = Math.round(weight / (height / 100) ** 2)

    let status = '';
    
    if(bmsFactor < 18.5){
        status = 'underweight'
    }else if(bmsFactor < 25){
        status = 'normal'
    }else if(bmsFactor < 30){
        status = 'overweight'
    }else{
        status = 'obese'
    }


    let person = {
        name,
        'personalInfo' : {
            age ,
            weight ,
            height 
        },
        BMI : bmsFactor,
        status,
    }

    if(person.status == 'obese'){
        person.recommendation = 'admission required'
    }
    
    return person

}
console.log(bmi('Honey Boo Boo', 9, 57, 137))