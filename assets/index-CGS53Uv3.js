(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const d=document.getElementById("nav-toggle"),w=document.getElementById("nav-menu");d&&d.addEventListener("click",()=>{w.classList.toggle("active"),d.classList.toggle("active")});const O=document.querySelectorAll(".nav-link");O.forEach(e=>{e.addEventListener("click",()=>{w.classList.remove("active"),d.classList.remove("active")})});const v=document.getElementById("header");window.addEventListener("scroll",()=>{window.pageYOffset>100?v.classList.add("scrolled"):v.classList.remove("scrolled")});const T=document.querySelectorAll("section[id]");function B(){const e=window.pageYOffset;T.forEach(t=>{const n=t.offsetHeight,s=t.offsetTop-100,o=t.getAttribute("id"),i=document.querySelector(`.nav-link[href="#${o}"]`);i&&(e>s&&e<=s+n?i.classList.add("active"):i.classList.remove("active"))})}window.addEventListener("scroll",B);document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const n=document.querySelector(this.getAttribute("href"));if(n){const i=n.offsetTop-80;window.scrollTo({top:i,behavior:"smooth"})}})});const l=document.getElementById("contactForm");l&&l.addEventListener("submit",async e=>{e.preventDefault();const t=new FormData(l);Object.fromEntries(t);const n=l.querySelector(".btn-submit"),s=n.innerHTML;n.innerHTML='<i class="fas fa-spinner fa-spin"></i> Sending...',n.disabled=!0;try{await new Promise(o=>setTimeout(o,1500)),y("Message sent successfully! We'll get back to you soon.","success"),l.reset()}catch{y("Oops! Something went wrong. Please try again.","error")}finally{n.innerHTML=s,n.disabled=!1}});function y(e,t="success"){const n=document.querySelector(".notification");n&&n.remove();const s=document.createElement("div");s.className=`notification notification-${t}`,s.innerHTML=`
        <i class="fas fa-${t==="success"?"check-circle":"exclamation-circle"}"></i>
        <span>${e}</span>
        <button class="notification-close">&times;</button>
    `,s.style.cssText=`
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${t==="success"?"#10b981":"#ef4444"};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 12px;
        max-width: 400px;
        animation: slideIn 0.3s ease-out;
    `,document.body.appendChild(s);const o=s.querySelector(".notification-close");o.style.cssText=`
        background: none;
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
        padding: 0;
        margin-left: 10px;
    `,o.addEventListener("click",()=>{s.remove()}),setTimeout(()=>{s.style.animation="slideOut 0.3s ease-out",setTimeout(()=>s.remove(),300)},5e3)}const S=document.createElement("style");S.textContent=`
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;document.head.appendChild(S);const C={threshold:.1,rootMargin:"0px 0px -50px 0px"},I=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("fade-in-up"),I.unobserve(t.target))})},C);document.querySelectorAll(".service-card, .stat-item, .about-text, .about-image").forEach(e=>{I.observe(e)});function P(){const e=document.querySelector(".footer-bottom-content p");if(e){const t=new Date().getFullYear();e.innerHTML=`&copy; ${t} Spano Fuels. All rights reserved.`}}document.addEventListener("DOMContentLoaded",P);const u=document.querySelectorAll(".map-tab"),M=document.querySelectorAll(".map-link-btn"),m=document.getElementById("locationMap"),g={warehouse:{url:"https://maps.app.goo.gl/CwZV6z9kGXuPxCA8A",embed:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d115375.08101179777!2d55.4644395!3d25.355517!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f593483214af3%3A0x957ebfa2e1ff5d38!2sSpano%20Fuel%20Supply%20Services%20LLC!5e0!3m2!1sen!2s!4v1760511087255!5m2!1sen!2s"},office:{url:"https://maps.app.goo.gl/nmGX1AqdLcgBtmKs9",embed:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d115412.06746799707!2d55.3164674!3d25.3167295!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d44934a8563%3A0xd90f42421629e676!2sSpano%20Fuel%20Supply%20Services%20LLC!5e0!3m2!1sen!2s!4v1760511110277!5m2!1sen!2s"}};m&&(m.src=g.warehouse.embed);u.length>0&&u.forEach(e=>{e.addEventListener("click",function(){const t=this.getAttribute("data-location");u.forEach(n=>n.classList.remove("active")),this.classList.add("active"),M.forEach(n=>{n.classList.remove("active"),n.classList.contains(`${t}-link`)&&n.classList.add("active")}),m&&g[t]&&(m.src=g[t].embed)})});console.log("%c Welcome to Spano Fuels! ","background: #c41e3a; color: white; font-size: 16px; padding: 10px;");console.log("%c Premier Fuel Supply Services in UAE ","background: #1a472a; color: white; font-size: 14px; padding: 8px;");const a=document.getElementById("lightbox"),b=document.getElementById("lightbox-img"),F=document.getElementById("lightbox-counter"),x=document.getElementById("lightbox-close"),L=document.getElementById("lightbox-prev"),E=document.getElementById("lightbox-next"),k=document.querySelectorAll(".gallery-item");let c=0;const r=Array.from(k).map(e=>({src:e.querySelector("img").src,alt:e.querySelector("img").alt}));function $(e){c=e,h(),a.classList.add("active"),document.body.style.overflow="hidden"}function p(){a.classList.remove("active"),document.body.style.overflow=""}function h(){r[c]&&(b.src=r[c].src,b.alt=r[c].alt,F.textContent=`${c+1} / ${r.length}`)}function A(){c=(c+1)%r.length,h()}function q(){c=(c-1+r.length)%r.length,h()}k.forEach((e,t)=>{e.addEventListener("click",()=>$(t))});x&&x.addEventListener("click",p);E&&E.addEventListener("click",A);L&&L.addEventListener("click",q);a&&a.addEventListener("click",e=>{e.target===a&&p()});document.addEventListener("keydown",e=>{a.classList.contains("active")&&(e.key==="Escape"?p():e.key==="ArrowRight"?A():e.key==="ArrowLeft"&&q())});
