(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();class H{constructor(){this.placeId="ChIJBfgNeN__AToRKJF5n5n5n5n",this.apiKey="YOUR_GOOGLE_API_KEY",this.reviews=[],this.currentReviewIndex=0,this.init()}async init(){await this.loadGoogleReviews(),this.renderUnifiedReviewsSection(),this.startAutoRotation(),this.setupEventListeners()}async loadGoogleReviews(){try{const e=await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${this.placeId}&fields=reviews,rating,user_ratings_total&key=${this.apiKey}`);if(e.ok){const i=await e.json();i.result&&i.result.reviews&&(this.reviews=i.result.reviews.slice(0,10),this.overallRating=i.result.rating,this.totalReviews=i.result.user_ratings_total)}}catch{console.log("Using fallback reviews due to API limitation"),this.loadFallbackReviews()}}loadFallbackReviews(){this.reviews=[{author_name:"Ahmed Al-Rashid",rating:5,text:"Excellent fuel delivery service! Always on time and professional. Spano Fuel Supply Services has been our trusted partner for over 2 years.",time:Date.now()/1e3-86400*7,profile_photo_url:"https://via.placeholder.com/40x40?text=AR"},{author_name:"Fatima Mohammed",rating:5,text:"Very reliable company for diesel delivery in Dubai. Their team is professional and pricing is competitive. Highly recommended!",time:Date.now()/1e3-86400*14,profile_photo_url:"https://via.placeholder.com/40x40?text=FM"},{author_name:"Mohammed Hassan",rating:4,text:"Good service quality and timely delivery. We use them for our construction site fuel needs. Professional staff and fair prices.",time:Date.now()/1e3-86400*21,profile_photo_url:"https://via.placeholder.com/40x40?text=MH"}],this.overallRating=4.7,this.totalReviews=127}getCombinedReviews(){const e=this.reviews.map(n=>({name:n.author_name,role:"Google Customer",content:n.text,rating:n.rating,location:"Verified Google Review",avatar:n.profile_photo_url||`https://via.placeholder.com/60x60?text=${n.author_name.charAt(0)}`,date:this.formatDate(n.time),source:"google"}));return[...[{name:"Emirates Construction LLC",role:"Project Manager",content:"Spano Fuel Supply Services has been instrumental in keeping our construction projects running smoothly. Their reliable diesel delivery service ensures our equipment never stops working.",rating:5,location:"Dubai Marina",avatar:"https://via.placeholder.com/60x60?text=EC",date:"Regular Customer",source:"testimonial"},{name:"Al-Noor Transportation",role:"Fleet Manager",content:"We rely on Spano for our entire fleet's fuel needs. Their competitive pricing and 24/7 availability makes them our preferred fuel supplier in UAE.",rating:5,location:"Ajman Industrial Area",avatar:"https://via.placeholder.com/60x60?text=AN",date:"Long-term Client",source:"testimonial"},{name:"Ahmed Al-Rashid",role:"Construction Manager",content:"Excellent fuel delivery service! Always on time and professional. Spano Fuel Supply Services has been our trusted partner for over 2 years.",rating:5,location:"Dubai Industrial City",avatar:"https://via.placeholder.com/60x60?text=AR",date:"2+ Years Client",source:"testimonial"}],...e.slice(0,2)]}renderUnifiedReviewsSection(){const e=this.getCombinedReviews(),i=`
            <section class="customer-reviews-section" id="customer-reviews">
                <div class="container">
                    <div class="section-header">
                        <h2>What Our Customers Say</h2>
                        <p class="section-subtitle">Trusted by leading businesses across UAE</p>
                        <div class="overall-rating">
                            <span class="rating-number">${this.overallRating||"4.8"}</span>
                            <div class="rating-stars">
                                ${this.generateStarRating(this.overallRating||4.8)}
                            </div>
                            <span class="reviews-count">(${this.totalReviews||"150+"} reviews)</span>
                        </div>
                    </div>
                    
                    <div class="reviews-slider-container">
                        <div class="reviews-slider" id="reviewsSlider">
                            ${e.map((s,o)=>`
                                <div class="review-slide ${o===0?"active":""}" data-index="${o}">
                                    <div class="review-content">
                                        <div class="quote-icon">
                                            <i class="fas fa-quote-left"></i>
                                        </div>
                                        <p class="review-text">${s.content}</p>
                                        <div class="review-rating">
                                            ${this.generateStarRating(s.rating)}
                                        </div>
                                    </div>
                                    <div class="review-author">
                                        <img src="${s.avatar}" alt="${s.name}" class="author-avatar">
                                        <div class="author-info">
                                            <h4 class="author-name">${s.name}</h4>
                                            <p class="author-role">${s.role}</p>
                                            <p class="author-location">
                                                <i class="fas fa-map-marker-alt"></i> ${s.location}
                                            </p>
                                            ${s.source==="google"?'<span class="google-badge"><i class="fab fa-google"></i> Google</span>':'<span class="verified-badge"><i class="fas fa-check-circle"></i> Verified</span>'}
                                        </div>
                                    </div>
                                </div>
                            `).join("")}
                        </div>
                        
                        <div class="reviews-controls">
                            <button class="review-btn prev-btn" id="prevReview">
                                <i class="fas fa-chevron-left"></i>
                            </button>
                            <div class="review-dots">
                                ${e.map((s,o)=>`
                                    <span class="dot ${o===0?"active":""}" data-index="${o}"></span>
                                `).join("")}
                            </div>
                            <button class="review-btn next-btn" id="nextReview">
                                <i class="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>

                    <div class="reviews-actions">
                        <a href="https://g.page/r/YOUR_GOOGLE_BUSINESS_URL/review" target="_blank" class="write-review-btn">
                            <i class="fab fa-google"></i> Write a Google Review
                        </a>
                        <a href="tel:+971501234567" class="contact-btn">
                            <i class="fas fa-phone"></i> Contact Us
                        </a>
                    </div>
                </div>
            </section>
        `;document.querySelector("footer").insertAdjacentHTML("beforebegin",i)}generateStarRating(e){const i=Math.floor(e),n=e%1!==0,s=5-i-(n?1:0);let o="";for(let a=0;a<i;a++)o+='<i class="fas fa-star"></i>';n&&(o+='<i class="fas fa-star-half-alt"></i>');for(let a=0;a<s;a++)o+='<i class="far fa-star"></i>';return o}formatDate(e){const i=new Date(e*1e3),s=Math.abs(new Date-i),o=Math.ceil(s/(1e3*60*60*24));return o===1?"1 day ago":o<7?`${o} days ago`:o<30?`${Math.floor(o/7)} weeks ago`:o<365?`${Math.floor(o/30)} months ago`:`${Math.floor(o/365)} years ago`}setupEventListeners(){const e=document.getElementById("prevReview"),i=document.getElementById("nextReview"),n=document.querySelectorAll(".review-dots .dot");e?.addEventListener("click",()=>this.previousReview()),i?.addEventListener("click",()=>this.nextReview()),n.forEach(s=>{s.addEventListener("click",o=>{const a=parseInt(o.target.dataset.index);this.showReview(a)})})}nextReview(){const e=this.getCombinedReviews();this.currentReviewIndex=(this.currentReviewIndex+1)%e.length,this.showReview(this.currentReviewIndex)}previousReview(){const e=this.getCombinedReviews();this.currentReviewIndex=this.currentReviewIndex===0?e.length-1:this.currentReviewIndex-1,this.showReview(this.currentReviewIndex)}showReview(e){const i=document.querySelectorAll(".review-slide"),n=document.querySelectorAll(".review-dots .dot");i.forEach((s,o)=>{s.classList.toggle("active",o===e)}),n.forEach((s,o)=>{s.classList.toggle("active",o===e)}),this.currentReviewIndex=e}startAutoRotation(){setInterval(()=>{this.nextReview()},8e3)}}document.addEventListener("DOMContentLoaded",()=>{new H});document.getElementById("current-year").textContent=new Date().getFullYear();const h=document.getElementById("nav-toggle"),T=document.getElementById("nav-menu");h&&h.addEventListener("click",()=>{T.classList.toggle("active"),h.classList.toggle("active")});const G=document.querySelectorAll(".nav-link");G.forEach(t=>{t.addEventListener("click",()=>{T.classList.remove("active"),h.classList.remove("active")})});const S=document.getElementById("header");window.addEventListener("scroll",()=>{window.pageYOffset>100?S.classList.add("scrolled"):S.classList.remove("scrolled")});const N=document.querySelectorAll("section[id]");function U(){const t=window.pageYOffset;N.forEach(e=>{const i=e.offsetHeight,n=e.offsetTop-100,s=e.getAttribute("id"),o=document.querySelector(`.nav-link[href="#${s}"]`);o&&(t>n&&t<=n+i?o.classList.add("active"):o.classList.remove("active"))})}window.addEventListener("scroll",U);document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(e){e.preventDefault();const i=document.querySelector(this.getAttribute("href"));if(i){const o=i.offsetTop-80;window.scrollTo({top:o,behavior:"smooth"})}})});const u=document.getElementById("contactForm");u&&u.addEventListener("submit",async t=>{t.preventDefault();const e=new FormData(u);Object.fromEntries(e);const i=u.querySelector(".btn-submit"),n=i.innerHTML;i.innerHTML='<i class="fas fa-spinner fa-spin"></i> Sending...',i.disabled=!0;try{await new Promise(s=>setTimeout(s,1500)),R("Message sent successfully! We'll get back to you soon.","success"),u.reset()}catch{R("Oops! Something went wrong. Please try again.","error")}finally{i.innerHTML=n,i.disabled=!1}});function R(t,e="success"){const i=document.querySelector(".notification");i&&i.remove();const n=document.createElement("div");n.className=`notification notification-${e}`,n.innerHTML=`
        <i class="fas fa-${e==="success"?"check-circle":"exclamation-circle"}"></i>
        <span>${t}</span>
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
    `,document.body.appendChild(n);const s=n.querySelector(".notification-close");s.style.cssText=`
        background: none;
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
        padding: 0;
        margin-left: 10px;
    `,s.addEventListener("click",()=>{n.remove()}),setTimeout(()=>{n.style.animation="slideOut 0.3s ease-out",setTimeout(()=>n.remove(),300)},5e3)}const q=document.createElement("style");q.textContent=`
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
`;document.head.appendChild(q);const Y={threshold:.1,rootMargin:"0px 0px -50px 0px"},_=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&(e.target.classList.add("fade-in-up"),_.unobserve(e.target))})},Y);document.querySelectorAll(".service-card, .stat-item, .about-text, .about-image").forEach(t=>{_.observe(t)});function j(){const t=document.querySelector(".footer-bottom-content p");if(t){const e=new Date().getFullYear();t.innerHTML=`&copy; ${e} Spano Fuel Supply Services LLC. All rights reserved.`}}document.addEventListener("DOMContentLoaded",j);const w=document.querySelectorAll(".map-tab"),K=document.querySelectorAll(".map-link-btn"),g=document.getElementById("locationMap"),y={warehouse:{url:"https://maps.app.goo.gl/CwZV6z9kGXuPxCA8A",embed:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d115375.08101179777!2d55.4644395!3d25.355517!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f593483214af3%3A0x957ebfa2e1ff5d38!2sSpano%20Fuel%20Supply%20Services%20LLC!5e0!3m2!1sen!2s!4v1760511087255!5m2!1sen!2s"},office:{url:"https://maps.app.goo.gl/nmGX1AqdLcgBtmKs9",embed:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d115412.06746799707!2d55.3164674!3d25.3167295!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d44934a8563%3A0xd90f42421629e676!2sSpano%20Fuel%20Supply%20Services%20LLC!5e0!3m2!1sen!2s!4v1760511110277!5m2!1sen!2s"}};g&&(g.src=y.warehouse.embed);w.length>0&&w.forEach(t=>{t.addEventListener("click",function(){const e=this.getAttribute("data-location");w.forEach(i=>i.classList.remove("active")),this.classList.add("active"),K.forEach(i=>{i.classList.remove("active"),i.classList.contains(`${e}-link`)&&i.classList.add("active")}),g&&y[e]&&(g.src=y[e].embed)})});console.log("%c Welcome to Spano Fuel! ","background: #c41e3a; color: white; font-size: 16px; padding: 10px;");console.log("%c Premium Fuel Distribution in UAE ","background: #1a472a; color: white; font-size: 14px; padding: 8px;");const d=document.getElementById("lightbox"),I=document.getElementById("lightbox-img"),W=document.getElementById("lightbox-counter"),A=document.getElementById("lightbox-close"),k=document.getElementById("lightbox-prev"),$=document.getElementById("lightbox-next"),B=document.querySelectorAll(".gallery-item");let r=0;const l=Array.from(B).map(t=>({src:t.querySelector("img").src,alt:t.querySelector("img").alt}));function X(t){r=t,L(),d.classList.add("active"),document.body.style.overflow="hidden"}function x(){d.classList.remove("active"),document.body.style.overflow=""}function L(){l[r]&&(I.src=l[r].src,I.alt=l[r].alt,W.textContent=`${r+1} / ${l.length}`)}function O(){r=(r+1)%l.length,L()}function D(){r=(r-1+l.length)%l.length,L()}B.forEach((t,e)=>{t.addEventListener("click",()=>X(e))});A&&A.addEventListener("click",x);$&&$.addEventListener("click",O);k&&k.addEventListener("click",D);d&&d.addEventListener("click",t=>{t.target===d&&x()});document.addEventListener("keydown",t=>{d.classList.contains("active")&&(t.key==="Escape"?x():t.key==="ArrowRight"?O():t.key==="ArrowLeft"&&D())});const f=document.querySelectorAll(".about-image-slideshow .slide"),p=document.querySelectorAll(".about-image-slideshow .dot"),C=document.getElementById("slideshow-prev"),M=document.getElementById("slideshow-next");let c=0;const b=f.length;let F;function E(t){f.forEach(e=>e.classList.remove("active")),p.forEach(e=>e.classList.remove("active")),f[t]&&f[t].classList.add("active"),p[t]&&p[t].classList.add("active")}function P(){c=(c+1)%b,E(c)}function z(){c=(c-1+b)%b,E(c)}function V(t){c=t,E(c)}function m(){F=setInterval(P,4e3)}function v(){clearInterval(F)}if(f.length>0){C&&C.addEventListener("click",()=>{z(),v(),m()}),M&&M.addEventListener("click",()=>{P(),v(),m()}),p.forEach((e,i)=>{e.addEventListener("click",()=>{V(i),v(),m()})});const t=document.querySelector(".about-image-slideshow");t&&(t.addEventListener("mouseenter",v),t.addEventListener("mouseleave",m)),m()}
