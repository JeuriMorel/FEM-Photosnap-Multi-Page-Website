// DOM

const hamBtn = document.querySelector("#hamburger");
const mobileNav = document.querySelector("#mobileNav");
const body = document.querySelector("body");
const labels = document.querySelectorAll("label");
const form = document.querySelector("form");
const radioBtns = document.querySelectorAll('input[type="radio"]');
const plans = document.querySelector('.plans')
const spans = document.querySelectorAll('[data-plan]')

const hamImg = {
    true: "./assets/shared/mobile/close.svg",
    false: "./assets/shared/mobile/menu.svg",
};

// FUNCTIONS
function handleHam() {
    hamBtn.classList.toggle("open");
    body.classList.toggle("open");
    let hamIsOpen = hamBtn.classList.contains("open");
    hamBtn.src = hamImg[hamIsOpen];
}
function handleRadios() {
    let radio = form.querySelector('input[type="radio"]:checked');

    if(radio.id === 'yearly'){
        plans.classList.add('yearly')
    } else {
        plans.classList.remove('yearly')
    }


    labels.forEach((label) => {
        if (label.htmlFor === radio.id) {
            label.classList.add("picked");
        } else {
            label.classList.remove("picked");
        }
    });

    spans.forEach((span) => {
        if (span.dataset.plan === radio.id) {
            span.classList.add("checked");
        } else {
            span.classList.remove("checked");
        }
    });

    
}

//EVENT LISTENERS

hamBtn.addEventListener("click", handleHam);
form?.addEventListener("change", handleRadios);