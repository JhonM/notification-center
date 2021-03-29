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
function t(t,n,e,o){return new(e||(e=Promise))((function(i,c){function s(t){try{d(o.next(t))}catch(t){c(t)}}function a(t){try{d(o.throw(t))}catch(t){c(t)}}function d(t){var n;t.done?i(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(s,a)}d((o=o.apply(t,n||[])).next())}))}const n=[];var e=o=>t(void 0,void 0,void 0,(function*(){const t=yield fetch("http://goodup-demo.localhost:4200/api/hooks/latest",{method:"GET",headers:{"Content-Type":"application/json"}});if(502===t.status)yield e(o);else if(t.ok){const e=yield t.json();if(!n.includes(e.data.id)){n.push(e.data.id);!function(t,n){const e=document.createElement("div");e.append(t),n.append(e)}(e.included[0].attributes.title,o)}setTimeout((()=>{}),1e3)}}));class o{constructor(t){this.selector=t,e(t)}}const i=t=>new o(t);export{i as setup};
