let e={email:"",message:""};localStorage.setItem("formData",JSON.stringify(e));const t=document.querySelector(".feedback-form"),l=localStorage.getItem("feedback-form-state");if(l){e=JSON.parse(l);const a=document.querySelector(".feedback-form");a&&(a.elements.email.value=e.email||"",a.elements.message.value=e.message||"")}else console.log("No data found in Local Storage.");t?(t.elements.email,t.elements.message,t.addEventListener("input",o=>{const{name:a,value:s}=o.target;a&&(e[a]=s.trim()),localStorage.setItem("formData",JSON.stringify(e))}),t.addEventListener("submit",o=>{if(o.preventDefault(),!e.email||!e.message){alert("Please fill in all fields");return}console.log("Form data:",e),t.reset(),localStorage.removeItem("formData")})):console.log("Form not found!");
//# sourceMappingURL=2-form-BOfzjcww.js.map
