const slider = document.querySelector(".slider");

const rangeValue = document.querySelector(".rangeValue")
slider.addEventListener("change",()=>{
    rangeValue.innerText = slider.value
})