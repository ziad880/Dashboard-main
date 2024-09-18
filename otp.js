const phoneButton = document.querySelector("#phone-section button"),
      codeInputs = document.querySelectorAll("#code-section input"),
      codeButton = document.querySelector("#code-section button"),
      phoneSection = document.getElementById("phone-section"),
      codeSection = document.getElementById("code-section"),
      countryCodeSelect = document.getElementById("country-code"),
      phoneNumberInput = document.getElementById("phone-number");

// Function to handle phone button click
phoneButton.addEventListener("click", (e) => {
  e.preventDefault();
  
  const countryCode = countryCodeSelect.value;  // Get the selected country code
  let phoneNumber = phoneNumberInput.value.trim();  // Get the entered phone number

  // Remove any spaces or non-digit characters
  phoneNumber = phoneNumber.replace(/\D/g, '');

  // Check if the user included the country code in the phone number
  if (phoneNumber.startsWith(countryCode.replace("+", ""))) {
    alert(`يرجى عدم إدخال كود الدولة مع الرقم. تم بالفعل اختيار كود الدولة: ${countryCode}`);
    return;
  }

  // Check if the phone number is valid (at least 10 digits)
  if (phoneNumber.length >= 10) {
    // Display the phone number with country code
    console.log(`تم إرسال الكود إلى: ${countryCode}${phoneNumber}`);

    // Hide phone section and show code section
    phoneSection.style.display = "none";
    codeSection.style.display = "block";
    codeInputs[0].focus();  // Focus the first code input field
  } else {
    alert("يرجى إدخال رقم هاتف صحيح مكون من 10 أرقام على الأقل.");
  }
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