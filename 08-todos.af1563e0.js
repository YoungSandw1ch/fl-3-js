const e="https://633d710af2b0e623dc73e57a.mockapi.io/api/v1/todos/";function t(t){return fetch(`${e}${t}`,{method:"DELETE"})}function n(t,n){return fetch(`${e}${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})}let i=[];const o={list:document.querySelector(".list"),form:document.querySelector(".form"),loader:document.querySelector(".loader")};function s(){const e=i.map(c).join("");o.list.innerHTML="",o.list.insertAdjacentHTML("afterbegin",e)}function c({name:e,isCheked:t,id:n}){return`\n  <li class='item ${t?"item--changeBg":""}' id='${n}'>\n    <label class='label'>\n      <input type="checkbox" ${t?"checked":""}>\n      <span class='list__text ${t?"done":""}'>${e}</span>\n    </label>\n    <button class='close'>x</button>\n  </li>\n  `}function a(){o.loader.classList.add("show")}function l(){o.loader.classList.remove("show")}function r(){o.form.reset()}a(),fetch(e).then((e=>e.json())).then((e=>{i=e})).then(s).finally(l),o.list.addEventListener("click",(function(e){if(e.target===e.currentTarget)return;const o=e.target.closest("li"),c=o.id;"BUTTON"===e.target.nodeName&&(a(),t(c).then(function(e){i=i.filter((t=>t.id!==e))}(c)).then(s).finally(l));if("INPUT"===e.target.nodeName){const t=function(e){const t={};return i.map((n=>{n.id===e&&(n.isCheked=!n.isCheked,t.isCheked=n.isCheked)})),t}(c);n(c,t);e.target.nextElementSibling.classList.toggle("done"),o.classList.toggle("item--changeBg")}})),o.form.addEventListener("submit",(function(t){t.preventDefault();const n=o.form.elements.text.value;if(!n)return;const c={name:n,isCheked:!1};a(),(d=c,fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)}).then((e=>e.json()))).then((e=>{i.push(e)})).then(s).then(r).finally(l);var d}));
//# sourceMappingURL=08-todos.af1563e0.js.map
