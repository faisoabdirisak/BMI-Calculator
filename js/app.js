const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const calculate = document.querySelector("#calculate");
const yourBMI = document.querySelector("#yourBMI");

calculate.addEventListener("click" , ()=>{
//BMI stand for: Body mass index

    if(height.value !="" && weight.value !=""){
        let bmiValue = weight.value / (height.value*height.value) * 10000;
        yourBMI.innerHTML= "Your IBM Is : " +bmiValue.toFixed(2);
    }
    else {
        yourBMI.innerHTML = "please Enter correct value"
    }
});