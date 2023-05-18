let celciusInput =document.querySelector('celcius>input')
let fahrenhietInput =document.querySelector('fahrenhiet>input')
let kelvinInput =document.querySelector('kelvin>input')


function roundNumber (Number){
    return Mathround(number*100)/100
}

/*celcius to fahrenhiet to kelvin*/
celciusInput.addEventListener('Input', function() {
    let cTemp=parseFloat(celciusInput.value)
    let fTemp=(cTemp*(9/5))+32
    let kTemp=cTemp+273.15

    fahrenhietInput.value=roundNumber(fTemp)
    kelvinInput.value=roundNumber(kTemp)
})


/*fahrenhiet to celcius to kelvin*/
fahrenheitInput .addEventListener('Input',function() {
    let fTemp = parseFloat(fahrenhietInput.value)
    let cTemp = (fTemp - 32) * (5 / 9)
    let kTemp = (fTemp - 32) + 273.15

    celciusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)
})


/*Kelvin to Celcius and Fahrenhiet*/
kelvinInput.addEventListener('Input',function() {
    let kTemp=parseFloat(kelvinInput.value)
    let cTemp=kTemp-273.15
    let fTemp=(kTemp-273.15)*(9/5)+32

    celciusInput.value=roundNumber(cTemp)
    fahrenhietInput.value=roundNumber(fTemp)
})
