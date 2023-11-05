
let inputEl = document.getElementById("temperature");
let typeEl = document.getElementById("typeOfTemp");
let resultEl = document.getElementById("resultedValue");
let btnEl = document.getElementById("convertBtn");
let desiredEl = document.getElementById("typeOfDesiredTemp");

let data = {
    input:"",
    choice:"Celsius",
    desired:"Celsius"
}
let calculate = "";

inputEl.addEventListener("change",function(event)
{
    data.input = event.target.value;
})

typeEl.addEventListener("change",function(event)
{
    data.choice = event.target.value;
})

desiredEl.addEventListener("change",function(event)
{
    data.desired = event.target.value;
})

function converting(data)
{

    let {input,choice,desired} = data;
    input = parseInt(input);

    if(choice === "Celsius" && desired === "Fahrenheit")
    {
        calculate = (input*(9/5))+32;
        resultEl.textContent = calculate + "F";
    }
    if(choice === "Celsius" && desired === "Kelvin")
    {
        calculate = input+273.15;
        resultEl.textContent = calculate + "K";
    }

    if(choice === "Fahrenheit" && desired === "Celsius")
    {
        calculate = (input-32)*5/9;
        resultEl.textContent = calculate + "C";
    }
    if(choice === "Fahrenheit" && desired === "Kelvin")
    {
        calculate = (input-32)*5/9+273.15;
        resultEl.textContent = calculate + "K";
    }

    if(choice === "Kelvin" && desired === "Celsius")
    {
        calculate = input-273.15;
        resultEl.textContent = calculate + "C";
    }
    if(choice === "Kelvin" && desired === "Fahrenheit")
    {
        calculate = (input-273.15)*9/5+32;
        resultEl.textContent = calculate + "F";
    }
}
btnEl.addEventListener("click",function()
{
    converting(data);
})