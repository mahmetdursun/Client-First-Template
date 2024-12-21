//Dark Mode
document.addEventListener("DOMContentLoaded", function () {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        html.setAttribute("data-bs-theme", savedTheme);

        if (savedTheme === "dark") {
            document.querySelector(".finsweet-project__navbar-logo-brand img").setAttribute("src", "/finsweet/images/logo-dark.png");

            let icon = document.querySelector("#darkModeToggle i");
            if (icon.classList.contains("fa-sun")) {
                icon.classList.remove("fa-sun");
                icon.classList.add("fa-moon");
            }
        }
    }
});

document.getElementById("darkModeToggle").addEventListener("click", function () {
    const html = document.documentElement;
    let newTheme = "light";

    if (html.getAttribute("data-bs-theme") === "dark") {
        newTheme = "light";
        document.querySelector(".finsweet-project__navbar-logo-brand img").setAttribute("src", "/finsweet/images/logo.png");
    } else {
        newTheme = "dark";
        document.querySelector(".finsweet-project__navbar-logo-brand img").setAttribute("src", "/finsweet/images/logo-dark.png");
    }

    html.setAttribute("data-bs-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    let icon = this.querySelector("i");
    if (icon.classList.contains("fa-sun")) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    } else {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
});



//ScrollButton
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  }

let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (window.pageYOffset > 30) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

document.addEventListener("DOMContentLoaded", function() {
    scrollFunction();
});


// Navbar
document.getElementById("menuToggle").addEventListener("click", function () {
    const navbar = document.querySelector(".finsweet-project__navbar-collapse");
    
    const isMenuActive = navbar.classList.contains("active");

    if (isMenuActive) {
        navbar.classList.remove("active");
        localStorage.setItem("menuOpen", "false");
    } else {
        navbar.classList.add("active");
        localStorage.setItem("menuOpen", "true");
    }
});

window.addEventListener("resize", function () {
    const navbar = document.querySelector(".finsweet-project__navbar-collapse");

    if (window.innerWidth > 991) {
        navbar.classList.remove("active");
        localStorage.setItem("menuOpen", "false");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".finsweet-project__navbar-collapse");

    const menuOpen = localStorage.getItem("menuOpen");

    if (menuOpen === "true") {
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }
});
