


/*
===============================================
===============================================
*/

/* start aos */

window.addEventListener("load", () => {

    let preloader = document.querySelector(".js-preloader");
    preloader.classList.add("fade-out");

    setTimeout(() => {
        preloader.style.display = "none";
        AOS.init();
    }, 600);

});


/* end aos */

/*
===============================================
===============================================
*/

/* start header */

let headerBg = () => {
    let header = document.querySelector(".js-header");
    window.addEventListener("scroll", () => {
        if(this.scrollY > 0) {
            header.classList.add("bg-reveal");
        } else {
            header.classList.remove("bg-reveal");
        }
    });

    window.addEventListener("load", () => {
        if(this.scrollY > 0) {
            header.classList.add("bg-reveal");
        } else {
            header.classList.remove("bg-reveal");
        }
    });
}

headerBg();

/* nav */

let navigation = () => {
    let navToggler = document.querySelector(".js-nav-toggler");
    let nav = document.querySelector(".js-nav");
    let navItems = nav.querySelectorAll("li");


    let navToggle = () => {
        nav.classList.toggle("open");
        navToggler.classList.toggle("active");
    }

    navToggler.addEventListener("click", navToggle);


    navItems.forEach((li) => {
        li.querySelector("a").addEventListener("click", () => {
            if(window.innerWidth <= 767) {
                navToggle();
            }
        });
    });

}

navigation();

/* end header */

/*
===============================================
===============================================
*/

/*
===============================================
===============================================
*/

/*
===============================================
===============================================
*/

/*
===============================================
===============================================
*/

/*
===============================================
===============================================
*/

/* start footer */

let dateYear = document.querySelector(".footer .dateYear");
let newDate = new Date();

window.addEventListener("load", () => {
    dateYear.innerHTML = newDate.getFullYear();
});


/* end footer */

/*
===============================================
===============================================
*/




