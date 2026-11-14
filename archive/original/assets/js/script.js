'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// map unlock variables
const mapbox = document.querySelector("[data-mapbox]");
const mapUnlockBtn = document.querySelector("[data-mapbox-unlock-btn]");
const mapOverlay = document.querySelector("[data-mapbox-overlay]");
const mapModalContainer = document.querySelector("[data-map-modal-container]");
const mapModalCloseBtn = document.querySelector("[data-map-modal-close-btn]");
const mapModalOverlay = document.querySelector("[data-map-overlay]");

const mapUnlockForm = document.querySelector("[data-map-unlock-form]");
const nameInput = document.getElementById("unlock-name");
const emailInput = document.getElementById("unlock-email");
const phoneInput = document.getElementById("unlock-phone");

const nameError = document.getElementById("name-error-msg");
const emailError = document.getElementById("email-error-msg");
const phoneError = document.getElementById("phone-error-msg");
const formAlert = document.getElementById("form-general-error");

// Send email notification to owner using FormSubmit
const sendUnlockNotification = function (name, email, phone) {
  const payload = {
    _subject: "🔑 Portfolio Alert: Map Location Unlocked",
    _captcha: "false",
    "Visitor Name": name || "Not provided",
    "Visitor Email": email || "Not provided",
    "Visitor Mobile": phone || "Not provided",
    "Unlocked At": new Date().toLocaleString(),
    "User Agent": navigator.userAgent
  };

  fetch("https://formsubmit.co/ajax/abhranilpaul00@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(payload)
  })
  .then(response => response.json())
  .then(data => {
    console.log("Unlock notification email sent:", data);
  })
  .catch(error => {
    console.error("Error sending unlock notification email:", error);
  });
};

// check sessionStorage state on load
const checkMapUnlockState = function () {
  if (sessionStorage.getItem("mapUnlocked") === "true") {
    if (mapbox) mapbox.classList.add("unlocked");
    if (mapOverlay) mapOverlay.classList.add("hidden");
  }
};

// Toggle map modal functions
const toggleMapModal = function () {
  if (mapModalContainer) mapModalContainer.classList.toggle("active");
  if (mapModalOverlay) mapModalOverlay.classList.toggle("active");
  
  // reset form errors and inputs on close/open
  if (mapUnlockForm) {
    mapUnlockForm.reset();
    resetFormErrors();
  }
};

const resetFormErrors = function () {
  const inputs = [nameInput, emailInput, phoneInput];
  const errors = [nameError, emailError, phoneError];
  
  inputs.forEach(input => {
    if (input) input.classList.remove("invalid");
  });
  errors.forEach(err => {
    if (err) err.classList.remove("visible");
  });
  if (formAlert) formAlert.classList.remove("visible");
};

// Event listeners for opening and closing modal
if (mapUnlockBtn) mapUnlockBtn.addEventListener("click", toggleMapModal);
if (mapModalCloseBtn) mapModalCloseBtn.addEventListener("click", toggleMapModal);
if (mapModalOverlay) mapModalOverlay.addEventListener("click", toggleMapModal);

// Validation Regex
const nameRegex = /^[a-zA-Z\s]{2,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Phone validation: count actual digits to ensure at least 8 digits
const validatePhoneValue = function (val) {
  if (val.trim() === "") return true; // valid if empty (since optional)
  const digits = val.replace(/\D/g, "");
  return digits.length >= 8;
};

const validateNameValue = function (val) {
  if (val.trim() === "") return true;
  return nameRegex.test(val.trim());
};

const validateEmailValue = function (val) {
  if (val.trim() === "") return true;
  return emailRegex.test(val.trim());
};

// Input validation event handlers
const handleInputValidation = function (input, validator, errorEl) {
  const val = input.value;
  if (val.trim() === "") {
    input.classList.remove("invalid");
    errorEl.classList.remove("visible");
  } else {
    const isValid = validator(val);
    input.classList.toggle("invalid", !isValid);
    errorEl.classList.toggle("visible", !isValid);
  }
  if (formAlert) formAlert.classList.remove("visible");
};

if (nameInput) {
  nameInput.addEventListener("input", function () {
    handleInputValidation(nameInput, validateNameValue, nameError);
  });
  nameInput.addEventListener("blur", function () {
    handleInputValidation(nameInput, validateNameValue, nameError);
  });
}

if (emailInput) {
  emailInput.addEventListener("input", function () {
    handleInputValidation(emailInput, validateEmailValue, emailError);
  });
  emailInput.addEventListener("blur", function () {
    handleInputValidation(emailInput, validateEmailValue, emailError);
  });
}

if (phoneInput) {
  phoneInput.addEventListener("input", function () {
    handleInputValidation(phoneInput, validatePhoneValue, phoneError);
  });
  phoneInput.addEventListener("blur", function () {
    handleInputValidation(phoneInput, validatePhoneValue, phoneError);
  });
}

// Form Submission validation
if (mapUnlockForm) {
  mapUnlockForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const nameVal = nameInput ? nameInput.value.trim() : "";
    const emailVal = emailInput ? emailInput.value.trim() : "";
    const phoneVal = phoneInput ? phoneInput.value.trim() : "";
    
    // Check if everything is empty
    if (nameVal === "" && emailVal === "" && phoneVal === "") {
      if (formAlert) {
        formAlert.innerText = "❌ Please enter at least one contact detail to unlock the map.";
        formAlert.classList.add("visible");
      }
      return;
    }
    
    // Check individual fields validity
    const isNameValid = validateNameValue(nameVal);
    const isEmailValid = validateEmailValue(emailVal);
    const isPhoneValid = validatePhoneValue(phoneVal);
    
    // Update visual states
    if (nameInput) nameInput.classList.toggle("invalid", !isNameValid);
    if (nameError) nameError.classList.toggle("visible", !isNameValid);
    
    if (emailInput) emailInput.classList.toggle("invalid", !isEmailValid);
    if (emailError) emailError.classList.toggle("visible", !isEmailValid);
    
    if (phoneInput) phoneInput.classList.toggle("invalid", !isPhoneValid);
    if (phoneError) phoneError.classList.toggle("visible", !isPhoneValid);
    
    const hasInvalidField = !isNameValid || !isEmailValid || !isPhoneValid;
    
    if (hasInvalidField) {
      if (formAlert) {
        formAlert.innerText = "❌ Please correct the errors in the fields above.";
        formAlert.classList.add("visible");
      }
      return;
    }
    
    // All provided fields are valid, and at least one is provided!
    // Send email alert to owner
    sendUnlockNotification(nameVal, emailVal, phoneVal);

    // Unlock map
    sessionStorage.setItem("mapUnlocked", "true");
    checkMapUnlockState();
    toggleMapModal(); // close modal
  });
}

// Check state on load
checkMapUnlockState();



// page navigation variables & hash-based routing
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

const navigateToTab = () => {
  const hash = window.location.hash || '#about';
  const activePageName = hash.replace('#', '').toLowerCase();
  
  let pageFound = false;

  for (let i = 0; i < pages.length; i++) {
    const pageName = pages[i].dataset.page.toLowerCase();
    // Match nav link based on href hash or link text
    const linkHash = navigationLinks[i].getAttribute('href') || '';
    const linkPageName = linkHash.replace('#', '').toLowerCase();
    
    if (pageName === activePageName) {
      pages[i].classList.add("active");
      navigationLinks[i].classList.add("active");
      window.scrollTo({ top: 0, behavior: 'smooth' });
      pageFound = true;
    } else {
      pages[i].classList.remove("active");
      navigationLinks[i].classList.remove("active");
    }
  }

  // Fallback if hash doesn't match any page
  if (!pageFound && pages.length > 0) {
    window.location.hash = '#about';
  }
};

window.addEventListener('hashchange', navigateToTab);
window.addEventListener('load', navigateToTab);