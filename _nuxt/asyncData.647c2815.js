import{B as g,C as m,D as P,E as x,F as D,p as b,u as w,G as C,l as O}from"./entry.09307a11.js";const k=()=>null;function M(...o){var h;const u=typeof o[o.length-1]=="string"?o.pop():void 0;typeof o[0]!="string"&&o.unshift(u);let[t,l,e={}]=o;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof l!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");e.server=e.server??!0,e.default=e.default??k,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0;const a=g(),f=()=>a.isHydrating?a.payload.data[t]:a.static.data[t],d=()=>f()!==void 0;a._asyncData[t]||(a._asyncData[t]={data:m(f()??((h=e.default)==null?void 0:h.call(e))??null),pending:m(!d()),error:P(a.payload._errors,t)});const r={...a._asyncData[t]};r.refresh=r.execute=(s={})=>{if(a._asyncDataPromises[t]){if(s.dedupe===!1)return a._asyncDataPromises[t];a._asyncDataPromises[t].cancelled=!0}if(s._initial&&d())return f();r.pending.value=!0;const c=new Promise((n,i)=>{try{n(l(a))}catch(_){i(_)}}).then(n=>{if(c.cancelled)return a._asyncDataPromises[t];let i=n;e.transform&&(i=e.transform(n)),e.pick&&(i=B(i,e.pick)),r.data.value=i,r.error.value=null}).catch(n=>{var i;if(c.cancelled)return a._asyncDataPromises[t];r.error.value=n,r.data.value=w(((i=e.default)==null?void 0:i.call(e))??null)}).finally(()=>{c.cancelled||(r.pending.value=!1,a.payload.data[t]=r.data.value,r.error.value&&(a.payload._errors[t]=C(r.error.value)),delete a._asyncDataPromises[t])});return a._asyncDataPromises[t]=c,a._asyncDataPromises[t]};const y=()=>r.refresh({_initial:!0}),v=e.server!==!1&&a.payload.serverRendered;{const s=O();if(s&&!s._nuxtOnBeforeMountCbs){s._nuxtOnBeforeMountCbs=[];const n=s._nuxtOnBeforeMountCbs;s&&(x(()=>{n.forEach(i=>{i()}),n.splice(0,n.length)}),D(()=>n.splice(0,n.length)))}v&&a.isHydrating&&d()?r.pending.value=!1:s&&(a.payload.serverRendered&&a.isHydrating||e.lazy)&&e.immediate?s._nuxtOnBeforeMountCbs.push(y):e.immediate&&y(),e.watch&&b(e.watch,()=>r.refresh());const c=a.hook("app:data:refresh",n=>{if(!n||n.includes(t))return r.refresh()});s&&D(c)}const p=Promise.resolve(a._asyncDataPromises[t]).then(()=>r);return Object.assign(p,r),p}function B(o,u){const t={};for(const l of u)t[l]=o[l];return t}export{M as u};
