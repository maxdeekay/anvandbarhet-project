"use strict";

window.onload = () => {
    const mobileNav = document.getElementById("mobile-menu");

    document.getElementById("open-menu").onclick = () => {
        mobileNav.style.display = "flex";
    }

    document.getElementById("close-menu").onclick = () => {
        mobileNav.style.display = "none";
    }

    const returnForm = document.getElementById("return-form-info");
    const returnButton = document.getElementById("form-login");
    const style = window.getComputedStyle(returnForm);

    returnButton.onclick = () => {
        if (style.display === "none") {
            returnForm.style.display = "flex";
            returnButton.innerHTML = "TA BORT RETUR";
        } else {
            returnForm.style = "none";
            returnButton.innerHTML = "LÄGG TILL RETUR";
        }
    }
}