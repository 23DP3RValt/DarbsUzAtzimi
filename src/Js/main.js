
let currentStep = 1;


function changeStep(direction) {
    const currentStepElement = document.getElementById("step" + currentStep);
    
    if (!currentStepElement) {
        console.error(`Step ${currentStep} element not found!`);
        return;
    }

    currentStepElement.classList.remove("active");

    currentStep += direction;

    if (currentStep < 1) {
        currentStep = 1;
    } else if (currentStep > 7) {
        currentStep = 7;
    }

    const newStepElement = document.getElementById("step" + currentStep);
    
    if (!newStepElement) {
        console.error(`Step ${currentStep} element not found!`);
        return;
    }

    newStepElement.classList.add("active");

    toggleButtons();
}


function toggleButtons() {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (!prevBtn || !nextBtn) {
        console.error("Buttons not found in the DOM");
        return;
    }

    if (currentStep === 1) {
        prevBtn.disabled = true;
    } else if (currentStep === 7) {
        nextBtn.disabled = true; 
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    toggleButtons();
});
