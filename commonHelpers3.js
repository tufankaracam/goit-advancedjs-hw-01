import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{_ as c}from"./assets/vendor-87dc97eb.js";const o=document.querySelector(".feedback-form"),a=document.querySelector('input[type="email"]'),n=document.querySelector("textarea"),e=localStorage.getItem("feedback-form-state")?JSON.parse(localStorage.getItem("feedback-form-state")):{email:"",message:""};document.addEventListener("DOMContentLoaded",()=>{console.log("DOM loaded"),console.log("formData:",e),a.value=e.email,n.value=e.message});const r=c.debounce(t=>{const{name:m,value:s}=t.target;e[m]=s,localStorage.setItem("feedback-form-state",JSON.stringify(e))},500),l=t=>{t.preventDefault(),console.log(e),o.reset(),localStorage.removeItem("feedback-form-state")};a.addEventListener("input",r);n.addEventListener("input",r);o.addEventListener("submit",l);
//# sourceMappingURL=commonHelpers3.js.map
