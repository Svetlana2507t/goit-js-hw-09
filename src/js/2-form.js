export const formData = {
  email: " ",
  message: " ",
};

const form = document.querySelector("feedback-form");
const emailInput = form.elements.email;
console.log(`emailInput: ${emailInput}`);
console.log(`emailInput.value: ${emailInput.value}`);
const textInput = form.elements.message;
console.log(`textInput.value: ${textInput.value}`);

form.addEventListener("input", handleInput);

function handleInput(event) {
  formData.email = emailInput.value;
  formData.message = textInput.value;
  localStorage.add(formData);
  console.log(`formData: ${formData}`);

  return formData;
}
