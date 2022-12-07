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
// function toggleResponsiveness() {
//     var x = document.getElementById("sidepanel");
//     var y = document.querySelectorAll(".dropdown");
//     var z = document.getElementById("navbar");
//     var overlay = document.getElementsByClassName("overlay");
//     if (x.className === "sidepanel") {
//         x.className += " responsive";
//         y.className += " responsive";
//         z.className += " responsive";
//         overlay.className = " active";
//     } else {
//         x.className = "sidepanel";
//         y.className = "dropdown";
//         z.className += "navbar";
//         overlay.className = "overlay";
//     }
// }
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

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("sidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("sidepanel").style.width = "0";
}
