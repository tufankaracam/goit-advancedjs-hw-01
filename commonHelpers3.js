import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{_ as c}from"./assets/vendor-87dc97eb.js";const a=document.querySelector(".feedback-form"),o=document.querySelector('input[type="email"]'),n=document.querySelector("textarea"),e=localStorage.getItem("feedback-form-state")?JSON.parse(localStorage.getItem("feedback-form-state")):{email:"",message:""};document.addEventListener("DOMContentLoaded",()=>{o.value=e.email,n.value=e.message});const r=c.debounce(t=>{const{name:m,value:s}=t.target;e[m]=s,localStorage.setItem("feedback-form-state",JSON.stringify(e))},500),d=t=>{t.preventDefault(),console.log(e),a.reset(),localStorage.removeItem("feedback-form-state")};o.addEventListener("input",r);n.addEventListener("input",r);a.addEventListener("submit",d);
//# sourceMappingURL=commonHelpers3.js.map