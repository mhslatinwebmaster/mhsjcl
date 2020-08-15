import MobileCheck from "./MobileCheck";
import * as routes from "./Routes";

export default function()
{
    routes.TRANSPARENT.forEach(function(route) {
        let start;
        var navbar = document.querySelectorAll(".navbar")[0];
        var arrow = document.querySelectorAll(".arrow-container")[0];
        if (!MobileCheck()) start = navbar.height * 2;

        if (MobileCheck()) {
            // if on mobile, then set dark
            navbar.classList.remove("navbar-light");
            navbar.classList.add("navbar-dark");
            navbar.classList.add("bg-dark");
        } else if (!MobileCheck() && (window.location.hash === route || window.location.hash === "#" + route) && (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop < start) {
            // if using desktop, on home page, and no scroll, then set light
            navbar.classList.remove("navbar-dark");
            navbar.classList.remove("bg-dark");
            navbar.classList.add("navbar-light");
        }

        if (((window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop > start && !navbar.classList.contains("scrolled"))) {
            // if scrolled and haven't already done this, continue
            if (arrow !== undefined) {
                // arrow fade out
                arrow.classList.remove("fade-in");
                arrow.classList.add("fade-out");
            }

            if (!MobileCheck() && (window.location.hash === route || window.location.hash === "#" + route)) {
                // if using desktop and on home page, then set dark
                navbar.classList.add("scrolled");
                navbar.classList.remove("navbar-light");
                navbar.classList.add("navbar-dark");
                navbar.classList.add("bg-dark");
            }
        } else {
            // if haven't scrolled
            if (arrow !== undefined) {
                // arrow fade in
                arrow.classList.remove("fade-out");
                arrow.classList.add("fade-in");
            }

            if (!MobileCheck() && (window.location.hash === route || window.location.hash === "#" + route)) {
                // if using desktop and on home page, then set light
                navbar.classList.remove("scrolled");
                navbar.classList.remove("navbar-dark");
                navbar.classList.remove("bg-dark");
                navbar.classList.add("navbar-light");
            }
        }
    });
}
