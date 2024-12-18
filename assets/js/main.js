/*=============== SHOW SIDEBAR ===============*/
const   navMenu = document.getElementById('sidebar'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')
    


/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar')
    })
}

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}

/*=============== SKILLS TABS ===============*/


/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let  mixerPortfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
         duration: 300
    }
})

/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll('.work_item')

function activeWork() {
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener("click",activeWork))

/*===== Work Popup =====*/
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work_button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup(){
    document.querySelector(".portfolio_popup").classList.toggle("open");
}

document.querySelector(".portfolio_popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp_thumbnail img").src = portfolioItem.querySelector(".work_img").src;
    document.querySelector(".portfolio_popup-subtitle span").innerHTML = portfolioItem.querySelector(".work_title").innerHTML;
    document.querySelector(".portfolio_popup-body").innerHTML = portfolioItem.querySelector(".portfolio_item-details").innerHTML;
}
/*=============== SERVICES MODAL ===============*/


/*=============== SWIPER TESTIMONIAL ===============*/
let swiper = new Swiper(".testimonials_container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll(".input");

function focusfunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurfunc() {
    let parent = this.parentNode;
    if(this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusfunc);
    input.addEventListener("blur", blurfunc);
}
)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll",naviHighlighter);

function naviHighlighter (){

    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const   sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");


        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']' ).classList.add("active-link")
        }
        else
        {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']' ).classList.remove("active-link")
        }
    })
}


/*=============== SHOW SCROLL UP ===============*/







document.getElementById('myButton').addEventListener('click', function() {
    Swal.fire({
        title: 'Oops!',
        text: 'This is function currently not available!.',
        icon: 'error', // Options: 'success', 'error', 'warning', 'info', 'question'
        confirmButtonText: 'OK'
    });
});