(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const v of i.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&s(v)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();document.getElementById("current-year").textContent=new Date().getFullYear();const g=document.getElementById("nav-toggle"),C=document.getElementById("nav-menu");g&&g.addEventListener("click",()=>{C.classList.toggle("active"),g.classList.toggle("active")});const Y=document.querySelectorAll(".nav-link");Y.forEach(e=>{e.addEventListener("click",()=>{C.classList.remove("active"),g.classList.remove("active")})});const S=document.getElementById("header");window.addEventListener("scroll",()=>{window.pageYOffset>100?S.classList.add("scrolled"):S.classList.remove("scrolled")});const X=document.querySelectorAll("section[id]");function z(){const e=window.pageYOffset;X.forEach(t=>{const n=t.offsetHeight,s=t.offsetTop-100,o=t.getAttribute("id"),i=document.querySelector(`.nav-link[href="#${o}"]`);i&&(e>s&&e<=s+n?i.classList.add("active"):i.classList.remove("active"))})}window.addEventListener("scroll",z);document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const n=document.querySelector(this.getAttribute("href"));if(n){const i=n.offsetTop-80;window.scrollTo({top:i,behavior:"smooth"})}})});const d=document.getElementById("contactForm");d&&d.addEventListener("submit",async e=>{e.preventDefault();const t=new FormData(d);Object.fromEntries(t);const n=d.querySelector(".btn-submit"),s=n.innerHTML;n.innerHTML='<i class="fas fa-spinner fa-spin"></i> Sending...',n.disabled=!0;try{await new Promise(o=>setTimeout(o,1500)),I("Message sent successfully! We'll get back to you soon.","success"),d.reset()}catch{I("Oops! Something went wrong. Please try again.","error")}finally{n.innerHTML=s,n.disabled=!1}});function I(e,t="success"){const n=document.querySelector(".notification");n&&n.remove();const s=document.createElement("div");s.className=`notification notification-${t}`,s.innerHTML=`
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
    `,o.addEventListener("click",()=>{s.remove()}),setTimeout(()=>{s.style.animation="slideOut 0.3s ease-out",setTimeout(()=>s.remove(),300)},5e3)}const P=document.createElement("style");P.textContent=`
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
`;document.head.appendChild(P);const G={threshold:.1,rootMargin:"0px 0px -50px 0px"},F=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("fade-in-up"),F.unobserve(t.target))})},G);document.querySelectorAll(".service-card, .stat-item, .about-text, .about-image").forEach(e=>{F.observe(e)});function K(){const e=document.querySelector(".footer-bottom-content p");if(e){const t=new Date().getFullYear();e.innerHTML=`&copy; ${t} Spano Fuel Supply Services LLC. All rights reserved.`}}document.addEventListener("DOMContentLoaded",K);const y=document.querySelectorAll(".map-tab"),W=document.querySelectorAll(".map-link-btn"),h=document.getElementById("locationMap"),b={warehouse:{url:"https://maps.app.goo.gl/CwZV6z9kGXuPxCA8A",embed:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d115375.08101179777!2d55.4644395!3d25.355517!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f593483214af3%3A0x957ebfa2e1ff5d38!2sSpano%20Fuel%20Supply%20Services%20LLC!5e0!3m2!1sen!2s!4v1760511087255!5m2!1sen!2s"},office:{url:"https://maps.app.goo.gl/nmGX1AqdLcgBtmKs9",embed:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d115412.06746799707!2d55.3164674!3d25.3167295!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d44934a8563%3A0xd90f42421629e676!2sSpano%20Fuel%20Supply%20Services%20LLC!5e0!3m2!1sen!2s!4v1760511110277!5m2!1sen!2s"}};h&&(h.src=b.warehouse.embed);y.length>0&&y.forEach(e=>{e.addEventListener("click",function(){const t=this.getAttribute("data-location");y.forEach(n=>n.classList.remove("active")),this.classList.add("active"),W.forEach(n=>{n.classList.remove("active"),n.classList.contains(`${t}-link`)&&n.classList.add("active")}),h&&b[t]&&(h.src=b[t].embed)})});console.log("%c Welcome to Spano Fuel! ","background: #c41e3a; color: white; font-size: 16px; padding: 10px;");console.log("%c Premium Fuel Distribution in UAE ","background: #1a472a; color: white; font-size: 14px; padding: 8px;");const l=document.getElementById("lightbox"),k=document.getElementById("lightbox-img"),j=document.getElementById("lightbox-counter"),A=document.getElementById("lightbox-close"),q=document.getElementById("lightbox-prev"),B=document.getElementById("lightbox-next"),M=document.querySelectorAll(".gallery-item");let c=0;const a=Array.from(M).map(e=>({src:e.querySelector("img").src,alt:e.querySelector("img").alt}));function R(e){c=e,E(),l.classList.add("active"),document.body.style.overflow="hidden"}function x(){l.classList.remove("active"),document.body.style.overflow=""}function E(){a[c]&&(k.src=a[c].src,k.alt=a[c].alt,j.textContent=`${c+1} / ${a.length}`)}function $(){c=(c+1)%a.length,E()}function D(){c=(c-1+a.length)%a.length,E()}M.forEach((e,t)=>{e.addEventListener("click",()=>R(t))});A&&A.addEventListener("click",x);B&&B.addEventListener("click",$);q&&q.addEventListener("click",D);l&&l.addEventListener("click",e=>{e.target===l&&x()});document.addEventListener("keydown",e=>{l.classList.contains("active")&&(e.key==="Escape"?x():e.key==="ArrowRight"?$():e.key==="ArrowLeft"&&D())});const u=document.querySelectorAll(".about-image-slideshow .slide"),p=document.querySelectorAll(".about-image-slideshow .dot"),T=document.getElementById("slideshow-prev"),O=document.getElementById("slideshow-next");let r=0;const L=u.length;let H;function w(e){u.forEach(t=>t.classList.remove("active")),p.forEach(t=>t.classList.remove("active")),u[e]&&u[e].classList.add("active"),p[e]&&p[e].classList.add("active")}function N(){r=(r+1)%L,w(r)}function U(){r=(r-1+L)%L,w(r)}function V(e){r=e,w(r)}function m(){H=setInterval(N,4e3)}function f(){clearInterval(H)}if(u.length>0){T&&T.addEventListener("click",()=>{U(),f(),m()}),O&&O.addEventListener("click",()=>{N(),f(),m()}),p.forEach((t,n)=>{t.addEventListener("click",()=>{V(n),f(),m()})});const e=document.querySelector(".about-image-slideshow");e&&(e.addEventListener("mouseenter",f),e.addEventListener("mouseleave",m)),m()}
