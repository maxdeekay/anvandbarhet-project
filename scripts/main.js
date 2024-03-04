"use strict";

window.onload = () => {
    const mobileNav = document.getElementById("mobile-menu");

    document.getElementById("open-menu").onclick = () => {
        mobileNav.style.display = "flex";
    }

    document.getElementById("close-menu").onclick = () => {
        mobileNav.style.display = "none";
    }
}