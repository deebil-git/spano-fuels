(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();const r=document.getElementById("nav-toggle"),p=document.getElementById("nav-menu");r&&r.addEventListener("click",()=>{p.classList.toggle("active"),r.classList.toggle("active")});const h=document.querySelectorAll(".nav-link");h.forEach(o=>{o.addEventListener("click",()=>{p.classList.remove("active"),r.classList.remove("active")})});const f=document.getElementById("header");window.addEventListener("scroll",()=>{window.pageYOffset>100?f.classList.add("scrolled"):f.classList.remove("scrolled")});const y=document.querySelectorAll("section[id]");function b(){const o=window.pageYOffset;y.forEach(e=>{const s=e.offsetHeight,n=e.offsetTop-100,t=e.getAttribute("id"),i=document.querySelector(`.nav-link[href="#${t}"]`);i&&(o>n&&o<=n+s?i.classList.add("active"):i.classList.remove("active"))})}window.addEventListener("scroll",b);document.querySelectorAll('a[href^="#"]').forEach(o=>{o.addEventListener("click",function(e){e.preventDefault();const s=document.querySelector(this.getAttribute("href"));if(s){const i=s.offsetTop-80;window.scrollTo({top:i,behavior:"smooth"})}})});const c=document.getElementById("contactForm");c&&c.addEventListener("submit",async o=>{o.preventDefault();const e=new FormData(c);Object.fromEntries(e);const s=c.querySelector(".btn-submit"),n=s.innerHTML;s.innerHTML='<i class="fas fa-spinner fa-spin"></i> Sending...',s.disabled=!0;try{await new Promise(t=>setTimeout(t,1500)),u("Message sent successfully! We'll get back to you soon.","success"),c.reset()}catch{u("Oops! Something went wrong. Please try again.","error")}finally{s.innerHTML=n,s.disabled=!1}});function u(o,e="success"){const s=document.querySelector(".notification");s&&s.remove();const n=document.createElement("div");n.className=`notification notification-${e}`,n.innerHTML=`
        <i class="fas fa-${e==="success"?"check-circle":"exclamation-circle"}"></i>
        <span>${o}</span>
        <button class="notification-close">&times;</button>
    `,n.style.cssText=`
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${e==="success"?"#10b981":"#ef4444"};
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
    `,document.body.appendChild(n);const t=n.querySelector(".notification-close");t.style.cssText=`
        background: none;
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
        padding: 0;
        margin-left: 10px;
    `,t.addEventListener("click",()=>{n.remove()}),setTimeout(()=>{n.style.animation="slideOut 0.3s ease-out",setTimeout(()=>n.remove(),300)},5e3)}const g=document.createElement("style");g.textContent=`
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
`;document.head.appendChild(g);const L={threshold:.1,rootMargin:"0px 0px -50px 0px"},v=new IntersectionObserver(o=>{o.forEach(e=>{e.isIntersecting&&(e.target.classList.add("fade-in-up"),v.unobserve(e.target))})},L);document.querySelectorAll(".service-card, .stat-item, .about-text, .about-image").forEach(o=>{v.observe(o)});function x(){const o=document.querySelector(".footer-bottom-content p");if(o){const e=new Date().getFullYear();o.innerHTML=`&copy; ${e} Spano Fuels. All rights reserved.`}}document.addEventListener("DOMContentLoaded",x);const d=document.querySelectorAll(".map-tab"),w=document.querySelectorAll(".map-link-btn"),a=document.getElementById("locationMap"),m={warehouse:{url:"https://maps.app.goo.gl/CwZV6z9kGXuPxCA8A",embed:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d115375.08101179777!2d55.4644395!3d25.355517!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f593483214af3%3A0x957ebfa2e1ff5d38!2sSpano%20Fuel%20Supply%20Services%20LLC!5e0!3m2!1sen!2s!4v1760511087255!5m2!1sen!2s"},office:{url:"https://maps.app.goo.gl/nmGX1AqdLcgBtmKs9",embed:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d115412.06746799707!2d55.3164674!3d25.3167295!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d44934a8563%3A0xd90f42421629e676!2sSpano%20Fuel%20Supply%20Services%20LLC!5e0!3m2!1sen!2s!4v1760511110277!5m2!1sen!2s"}};a&&(a.src=m.warehouse.embed);d.length>0&&d.forEach(o=>{o.addEventListener("click",function(){const e=this.getAttribute("data-location");d.forEach(s=>s.classList.remove("active")),this.classList.add("active"),w.forEach(s=>{s.classList.remove("active"),s.classList.contains(`${e}-link`)&&s.classList.add("active")}),a&&m[e]&&(a.src=m[e].embed)})});console.log("%c Welcome to Spano Fuels! ","background: #c41e3a; color: white; font-size: 16px; padding: 10px;");console.log("%c Premier Fuel Supply Services in UAE ","background: #1a472a; color: white; font-size: 14px; padding: 8px;");
