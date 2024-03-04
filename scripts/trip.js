"use strict";

window.onload = () => {
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
