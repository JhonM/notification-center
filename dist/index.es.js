/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,i,o,n){return new(o||(o=Promise))((function(e,s){function c(t){try{a(n.next(t))}catch(t){s(t)}}function l(t){try{a(n.throw(t))}catch(t){s(t)}}function a(t){var i;t.done?e(t.value):(i=t.value,i instanceof o?i:new o((function(t){t(i)}))).then(c,l)}a((n=n.apply(t,i||[])).next())}))}const i=[];var o=(n,e)=>t(void 0,void 0,void 0,(function*(){const t=yield fetch("http://goodup-demo.localhost:4200/api/hooks/latest",{method:"GET",headers:{"Content-Type":"application/json"}});if(console.log("sub..."),502===t.status)yield o(n,e);else if(t.ok){const s=yield t.json();if(!i.includes(s.data.id)){i.push(s.data.id);const t=s.included[0].attributes;console.log(t,"sub... inside"),e(t)}setTimeout((()=>{o(n,e)}),1e3)}}));class n{constructor(t){this.selector=t,this.notifications=[],this.init()}init(){o(this.selector,this.addNotification.bind(this)),this.loadNotifications()}addNotification(t){const{title:i}=t,o={title:i,isViewed:!1};console.log(this.notifications,"add notification"),this.notifications.push(o),console.log(this.notifications,"add notification"),this.loadNotifications()}deleteNotification(t,i){console.log("remove.s..."),t.preventDefault()}loadNotifications(){localStorage.setItem("NOTIFICATIONS",JSON.stringify(this.notifications)),this.selector.innerHTML="";const t=this.notifications.forEach(((t,i)=>{this.selector.appendChild(((t,i)=>{var o;const{title:n,isViewed:e}=t,s=document.createElement("div");return s.tabIndex=0,s.innerHTML=((t,i,o)=>`\n    <div>${t}</div>\n    <div>${i}</div>\n    <div>${o}</div>\n    <button class="delete-button">Delete ${o}</button>\n  `)(n,e,i),null===(o=null==s?void 0:s.querySelector(".delete-button"))||void 0===o||o.addEventListener("click",(()=>{console.log("clicked")})),console.log(s),s})(t,i))}));console.log(t)}}const e=t=>new n(t);export{e as setup};
