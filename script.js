const dropdownBtn = document.querySelector(".dropbtn");
const arrowUp = document.getElementById("arrowUp");
const arrowDown = document.getElementById("arrowDown");

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
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

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleResponsiveness() {
    var x = document.getElementById("navbar");
    var y = document.getElementById("dropdown");
    if (x.className === "navbar") {
        x.className += " responsive";
        y.className += "responsive";
    } else {
        x.className = "navbar";
    }
}
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
