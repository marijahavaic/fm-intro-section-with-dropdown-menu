const dropdownBtn = document.querySelector(".dropbtn");
const arrowUp = document.getElementById("arrowUp");
const arrowDown = document.getElementById("arrowDown");

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function setArrowUp() {
    arrowDown.classList.remove("show");
    arrowUp.classList.add("show");
}

function setArrowDown() {
    arrowDown.classList.add("show");
    arrowUp.classList.remove("show");
}

dropdownBtn.addEventListener("mouseover", setArrowUp);
dropdownBtn.addEventListener("mouseout", setArrowDown);

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
};
