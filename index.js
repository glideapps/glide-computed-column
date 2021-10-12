(()=>{var v=Object.defineProperty,h=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var f=(e,n,t)=>n in e?v(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))L.call(n,t)&&f(e,t,n[t]);if(d)for(var t of d(n))x.call(n,t)&&f(e,t,n[t]);return e},g=(e,n)=>h(e,w(n));var m=(e,n,t)=>new Promise((u,r)=>{var o=i=>{try{a(t.next(i))}catch(l){r(l)}},s=i=>{try{a(t.throw(i))}catch(l){r(l)}},a=i=>i.done?u(i.value):Promise.resolve(i.value).then(o,s);a((t=t.apply(e,n)).next())});function c(e){return e instanceof Date?e.toISOString():Array.isArray(e)?e.map(c):e}function M(e,n){return m(this,null,function*(){var a;let{data:{key:t,params:u}}=e,r,o;try{r=yield n(...u)}catch(i){r=void 0;try{o=i.toString()}catch(l){o="Exception can't be stringified."}}let s={key:t};r!==void 0&&(r=c(r),s.result={type:"string",value:r}),o!==void 0&&(s.error=o),((a=e.source)==null?void 0:a.postMessage).call(a,s,"*")})}function y(e){return typeof window!="undefined"&&window.addEventListener("message",n=>M(n,e.run)),g(p({},e),{json:JSON.stringify(b(e),null,2)})}var P=`
        <svg
          width="48"
          height="48"
          viewBox="0 0 26 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 14.85L14.3 0V7.29C14.3 11.4653 11.0406 14.85 7.02 14.85H0Z"
            fill="currentColor"
          />
          <path
            d="M11.7 19.71C11.7 15.5347 14.9594 12.15 18.98 12.15H26L11.7 27V19.71Z"
            fill="currentColor"
          />
        </svg>
    `,T=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function b(e){let{name:n,description:t,author:u,result:r,params:o,about:s,video:a}=e,{icon:i=T}=e;return i==="glide"&&(i=P),{name:n,description:t,author:u,result:r,about:s,icon:i,video:a,params:Object.entries(o).map(([l,C])=>p({name:l},C))}}var O=y({name:"GitHub Profile",description:"Echo what you send to it.",author:"David Siegel <david@glideapps.com>",params:{message:{displayName:"Username",type:"primitive"}},result:{type:"string"},run(e){return m(this,null,function*(){return e.value===void 0?void 0:yield fetch(`https://api.github.com/users/${e.value}`).then(t=>t.text())})}});})();
//# sourceMappingURL=index.js.map
