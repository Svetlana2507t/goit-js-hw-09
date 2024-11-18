let formData = {
  email: "",
  message: "",
};

localStorage.setItem("formData", JSON.stringify(formData));
const form = document.querySelector(".feedback-form");

const savedData = localStorage.getItem("feedback-form-state");
if (savedData) {
  const parsedData = JSON.parse(savedData);
  //console.log("Data exists:", parsedData);

  formData = parsedData;
  // if (localStorage.getItem("formData")) {
  //   const savedData = JSON.parse(localStorage.getItem("formData"));
  //   console.log("Data exists:", savedData);
  //   formData = savedData;

  const form = document.querySelector(".feedback-form");

  if (form) {
    form.elements.email.value = formData.email || "";
    form.elements.message.value = formData.message || "";
  }
} else {
  console.log("No data found in Local Storage.");
}

if (!form) {
  console.log("Form not found!");
} else {
  const emailInput = form.elements.email;
  const textInput = form.elements.message;

  form.addEventListener("input", event => {
    const { name, value } = event.target;
    if (name) {
      formData[name] = value.trim();
    }
    localStorage.setItem("formData", JSON.stringify(formData));
    //console.log("Updated formData:", formData);
  });

  form.addEventListener("submit", event => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
      alert("Please fill in all fields");
      return;
    }

    console.log("Form data:", formData);

    form.reset();
    localStorage.removeItem("formData");
  });
}

export { formData };
