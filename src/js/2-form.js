export const formData = {
  email: " ",
  message: " ",
};

const form = document.querySelector("feedback-form");
form.addEventListener("input", handleInput);
const email = form.elements.email;
console.log(email);
const textarea = form.elements.message;
console.log(textarea);

const messageInput = function handleInput(event) {
  formData.email = email.value;
  formData.message = message.value;
  localStorage.add(formData);
  console.log(formData);

  return formData;
};
