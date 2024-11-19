let formData = {
  email: "",
  message: "",
};

const localStorageKey = "feedback-form-state";
const form = document.querySelector(".feedback-form");

if (!form) {
  console.error("Form not found!");
} else {
  const savedData = localStorage.getItem(localStorageKey);

  if (savedData) {
    //let parsedData = JSON.parse(savedData);
    //console.log("parsed savedData", parsedData);
    formData = JSON.parse(savedData);
    //console.log("formData get from parsed", formData);

    form.elements.email.value = formData.email || "";
    form.elements.message.value = formData.message || "";
  }

  form.addEventListener("input", event => {
    const { name, value } = event.target;
    if (name && value.trim() !== "") {
      // console.log("Event target name:", event.target.name);
      // console.log("Event target value:", event.target.value);
      formData[name] = value.trim(); // update formData
      //console.log("Updated formData:", JSON.stringify(formData, null, 2));

      //console.log("formData Updated:", formData);

      localStorage.setItem(localStorageKey, JSON.stringify(formData)); // save to localStorage
    }
  });

  form.addEventListener("submit", event => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    console.log("formData:", formData);

    formData = {
      email: "",
      message: "",
    };
    form.reset();
    localStorage.removeItem(localStorageKey);

    console.log("FormData cleared:", formData);
  });
}
