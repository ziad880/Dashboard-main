const phoneInputs = document.querySelectorAll("#phone-section input"),
      phoneButton = document.querySelector("#phone-section button"),
      codeInputs = document.querySelectorAll("#code-section input"),
      codeButton = document.querySelector("#code-section button"),
      phoneSection = document.getElementById("phone-section"),
      codeSection = document.getElementById("code-section");

// Function to handle phone input
phoneInputs.forEach((input, index1) => {
  input.addEventListener("keyup", (e) => {
    const currentInput = input,
          nextInput = input.nextElementSibling,
          prevInput = input.previousElementSibling;

    // Check if the value length is more than 1
    if (currentInput.value.length > 1) {
      currentInput.value = "";
      return;
    }

    // Move focus to next input
    if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    // Move focus to previous input on Backspace
    if (e.key === "Backspace") {
      if (prevInput) {
        prevInput.removeAttribute("disabled");
        prevInput.focus();
        currentInput.value = "";
      }
    }

    // Check if all phone inputs are filled
    if (!phoneInputs[10].disabled && phoneInputs[10].value !== "") {
      phoneButton.classList.add("active");
      return;
    }
    phoneButton.classList.remove("active");
  });
});

// Function to handle phone button click
phoneButton.addEventListener("click", (e) => {
  e.preventDefault();
  // Hide phone section and show code section
  phoneSection.style.display = "none";
  codeSection.style.display = "block";
  codeInputs[0].focus();  // Focus the first code input field
});

// Function to handle code input
codeInputs.forEach((input, index1) => {
  input.addEventListener("keyup", (e) => {
    const currentInput = input,
          nextInput = input.nextElementSibling,
          prevInput = input.previousElementSibling;

    // Check if the value length is more than 1
    if (currentInput.value.length > 1) {
      currentInput.value = "";
      return;
    }

    // Move focus to next input
    if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    // Move focus to previous input on Backspace
    if (e.key === "Backspace") {
      if (prevInput) {
        prevInput.removeAttribute("disabled");
        prevInput.focus();
        currentInput.value = "";
      }
    }

    // Check if all code inputs are filled
    if (!codeInputs[3].disabled && codeInputs[3].value !== "") {
      codeButton.classList.add("active");
      return;
    }
    codeButton.classList.remove("active");
  });
});

// Focus the first phone input on window load
window.addEventListener("load", () => phoneInputs[0].focus());

// Function to check if all inputs are filled
const checkInputsFilled = (inputs) => {
  return Array.from(inputs).every(input => input.value !== "" && !input.disabled);
}

// Function to update button state
const updateButtonState = (button, inputs) => {
  const allInputsFilled = checkInputsFilled(inputs);
  button.disabled = !allInputsFilled;
  button.classList.toggle("active", allInputsFilled);
  button.style.backgroundColor = allInputsFilled ? "#494949" : "#d0d0d0"; // Change background color based on state
}

// Function to handle phone input
phoneInputs.forEach((input) => {
  input.addEventListener("keyup", () => {
    // Check if all phone inputs are filled
    updateButtonState(phoneButton, phoneInputs);
  });
});

// Function to handle phone button click
phoneButton.addEventListener("click", (e) => {
  if (phoneButton.disabled) {
    e.preventDefault();
    return; // Prevent any action if the button is disabled
  }

  e.preventDefault();
  // Hide phone section and show code section
  phoneSection.style.display = "none";
  codeSection.style.display = "block";
  codeInputs[0].focus();  // Focus the first code input field
});

// Function to handle code input
codeInputs.forEach((input) => {
  input.addEventListener("keyup", () => {
    // Check if all code inputs are filled
    updateButtonState(codeButton, codeInputs);
  });
});

// Function to handle code button click
codeButton.addEventListener("click", (e) => {
  if (codeButton.disabled) {
    e.preventDefault();
    return; // Prevent any action if the button is disabled
  }

  // Add your code verification logic here
  e.preventDefault(); // Prevent default form submission if needed
});

// Focus the first phone input on window load
window.addEventListener("load", () => phoneInputs[0].focus());