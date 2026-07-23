
// document.addEventListener("DOMContentLoaded",()=>{

// const menu=document.querySelector(".menu-toggle");

// const nav=document.querySelector("nav");

// menu.addEventListener("click",()=>{

// nav.classList.toggle("active");

// });

// });

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");
    const overlay = document.querySelector(".nav-overlay");
    const navLinks = document.querySelectorAll("nav a");
    // console.log("Hiiii");
//  console.log(menuToggle);
//  console.log(nav);
//  console.log(overlay);
//  console.log(navLinks);
    const openMenu = () => {
        nav.classList.add("active");
        overlay.classList.add("active");
        document.body.style.overflow = "hidden"; // Block page scroll while menu is open
    };

    const closeMenu = () => {
        nav.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow = ""; // Immediately restore page scrolling
    };

    // Toggle menu button
    menuToggle.addEventListener("click", () => {
        if (nav.classList.contains("active")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close when backdrop is clicked
    overlay.addEventListener("click", closeMenu);

    // console.log(navLinks);
    // Handle Nav Links
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            console.log(link);
            const targetId = link.getAttribute("href");
   console.log(targetId.startsWith("#"));
            // Only run smooth scroll logic for internal anchor links (starting with #)
            if (targetId.startsWith("#")) {
                const targetElement = document.querySelector(targetId);
                console.log(targetElement);

                if (targetElement) {
                    // Close the drawer menu
                    closeMenu();

                    // Perform smooth scroll to the target section
                    targetElement.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});

// window.addEventListener("scroll",()=>{

//     const header=document.querySelector(".header");

//     if(window.scrollY>80){

//         header.classList.add("scrolled");

//     }else{

//         header.classList.remove("scrolled");

//     }

// });

document.addEventListener("DOMContentLoaded", () => {




/* ==========================================
        FLOOR PLAN TAB SWITCHING
========================================== */

const tabButtons = document.querySelectorAll(".tab-btn");
const planContents = document.querySelectorAll(".plan-content");

tabButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class
        tabButtons.forEach(btn => btn.classList.remove("active"));
        planContents.forEach(content => content.classList.remove("active"));

        // Add active class
        button.classList.add("active");

        const plan = document.getElementById(button.dataset.plan);

        plan.classList.add("active");

    });

});


/* ==========================================
        MASTER PLAN POPUP
========================================== */

const masterImage = document.getElementById("masterImage");

const popup = document.getElementById("popup");

const popupImage = document.getElementById("popupImage");

const closePopup = document.querySelector(".close-popup");


masterImage.addEventListener("click", () => {

    popup.style.display = "flex";

    popupImage.src = masterImage.src;

    document.body.style.overflow = "hidden";

});


closePopup.addEventListener("click", () => {

    popup.style.display = "none";

    document.body.style.overflow = "auto";

});



popup.addEventListener("click", (e) => {

    if (e.target === popup) {

        popup.style.display = "none";

        document.body.style.overflow = "auto";

    }

});


document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        popup.style.display = "none";

        document.body.style.overflow = "auto";

    }

});


/* ==========================================
        SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(

    ".section-title, .plan-content, .master-image"

);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {

        threshold: 0.2,

    }

);

revealElements.forEach((el) => observer.observe(el));



/* ==========================================
        STAGGER ANIMATION
========================================== */

const cards = document.querySelectorAll(".info-box");

const cardObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                cards.forEach((card, index) => {

                    setTimeout(() => {

                        card.classList.add("show-card");

                    }, index * 150);

                });

            }

        });

    },

    {

        threshold: 0.3,

    }

);

cards.forEach((card) => cardObserver.observe(card));


const highlightCards = document.querySelectorAll(".highlight-card");

const highlightObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

}, { threshold:0.2 });

highlightCards.forEach(card => highlightObserver.observe(card));



const galleryItems = document.querySelectorAll(".gallery-item");

const modal = document.querySelector(".gallery-modal");

const modalImage = document.getElementById("galleryImage");

const closeGallery = document.querySelector(".close-gallery");


galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        const image = item.querySelector("img");

        modal.style.display = "flex";

        galleryImage.src = image.src;

        document.body.style.overflow = "hidden";

    });

});


closeGallery.addEventListener("click",()=>{

    modal.style.display="none";

    document.body.style.overflow="auto";

});


modal.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.style.display="none";

        document.body.style.overflow="auto";

    }

});


document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        modal.style.display="none";

        document.body.style.overflow="auto";

    }

});

});



document.addEventListener("DOMContentLoaded",()=>{

const modal=document.getElementById("enquiryModal");

const openBtns=document.querySelectorAll(".open-modal");

const close=document.querySelector(".close-modal");

openBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

modal.style.display="flex";

// document.body.style.overflow="hidden";

});

});

close.addEventListener("click",()=>{

modal.style.display="none";

// document.body.style.overflow="auto";

});

modal.addEventListener("click",(e)=>{

if(e.target===modal){

modal.style.display="none";

document.body.style.overflow="auto";

}

});

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

modal.style.display="none";

document.body.style.overflow="auto";

}

});

});