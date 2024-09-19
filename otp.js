const phoneButton = document.querySelector("#phone-section button"),
      phoneNumberInput = document.getElementById("phone-number"),
      codeInputs = document.querySelectorAll("#code-section input"),
      codeButton = document.querySelector(".verify-code"),
      phoneSection = document.getElementById("phone-section"),
      codeSection = document.getElementById("code-section"),
      countryCodeSelect = document.getElementById("country-code");

// Function to convert Arabic numbers to English
function convertArabicToEnglish(input) {
  return input.replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));
}

// Function to handle phone number input (convert Arabic to English)
phoneNumberInput.addEventListener("input", (e) => {
  let value = phoneNumberInput.value;
  phoneNumberInput.value = convertArabicToEnglish(value);
});

// Function to handle OTP inputs (convert Arabic to English)
codeInputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    // Convert Arabic to English
    input.value = convertArabicToEnglish(input.value);
    
    // Allow only single digit input
    if (input.value.length > 1) {
      input.value = input.value.slice(0, 1);
    }

    // Move to the next input field if a digit is entered
    const nextInput = input.nextElementSibling;
    if (nextInput && input.value !== "") {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    // Check if all OTP inputs are filled to enable the verify button
    let allFilled = true;
    codeInputs.forEach((otpInput) => {
      if (otpInput.value === "") {
        allFilled = false;
      }
    });

    if (allFilled) {
      codeButton.removeAttribute("disabled"); // Enable the button when all inputs are filled
    } else {
      codeButton.setAttribute("disabled", "true"); // Disable the button if not all inputs are filled
    }
  });

  input.addEventListener("keydown", (e) => {
    // If Backspace is pressed, move to the previous input field
    if (e.key === "Backspace" && input.value === "") {
      const prevInput = input.previousElementSibling;
      if (prevInput) {
        prevInput.focus();
      }
    }
  });
});

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

// Focus the first phone input on window load
window.addEventListener("load", () => phoneNumberInput.focus());