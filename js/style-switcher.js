

/*
==============================================
==============================================
*/

/* start style switcher */

let styleSwitcherToggle = () => {
    let styleSwitcher = document.querySelector(".js-style-switcher");
    let styleSwitcherToggler = document.querySelector(".js-style-switcher-toggler");

    styleSwitcherToggler.addEventListener("click", function() {
        styleSwitcher.classList.toggle("open");
        this.querySelector("i").classList.toggle("fa-times");
        this.querySelector("i").classList.toggle("fa-cog");
    });
}
styleSwitcherToggle();


let themeColor = () => {
    let hueSlider = document.querySelector(".js-hue-slider");
    let html = document.querySelector("html");

    let setHue = (value) => {
        html.style.setProperty("--hue", value);
        document.querySelector(".js-hue").innerHTML = value;
    }

    hueSlider.addEventListener("input", function() {
        setHue(this.value);

        localStorage.setItem("--hue", this.value);
    });

    let slider = (value) => {
        hueSlider.value = value;
    }

    /* check for saves user perference, if any , on load of the website */
    if(localStorage.getItem("--hue") !== null) {
        setHue(localStorage.getItem("--hue"));
        slider(localStorage.getItem("--hue"));
    } else {
        let hue = getComputedStyle(html).getPropertyValue("--hue");
        setHue(hue);
        slider(hue.split(" ").join(""));
    }

}

themeColor();


/* theme light & dark mode*/

let themeLightDark = () => {
    let darkModeCheckbox = document.querySelector(".js-dark-mode");


    let themeMode = () => {
        if(localStorage.getItem("theme-dark") === "false") {
            document.body.classList.remove("t-dark");
        } else {
            document.body.classList.add("t-dark");
        }
    }

    darkModeCheckbox.addEventListener("click", function() {
        localStorage.setItem("theme-dark", this.checked);
        themeMode();
    });

    /* check for seved user preference */
    if(localStorage.getItem("theme-dark") !== null) {
        themeMode();
    } 

    if(document.body.classList.contains("t-dark")) {
        darkModeCheckbox.checked = true;
    }



}

themeLightDark();


/* end style switcher */

/*
==============================================
==============================================
*/











