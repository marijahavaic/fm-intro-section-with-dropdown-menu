const featuresDropBtn = document.getElementById("featuresDropBtn");
const companyDropBtn = document.getElementById("companyDropBtn");
const arrowUp = document.getElementById("arrowUp");
const arrowDown = document.getElementById("arrowDown");
const featuresArrowUp = document.getElementById("featuresArrowUp");
const featuresArrowDown = document.getElementById("featuresArrowDown");
const overlay = document.getElementById("overlay");
var dropdown = document.getElementsByClassName("dropbtn");
var i;

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function setArrowUp() {
    arrowDown.classList.remove("show");
    arrowUp.classList.add("show");
    featuresArrowDown.classList.remove("show");
    featuresArrowUp.classList.add("show");
}

function setArrowDown() {
    arrowDown.classList.add("show");
    arrowUp.classList.remove("show");
    featuresArrowDown.classList.add("show");
    featuresArrowUp.classList.remove("show");
}

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("sidepanel").style.width = "250px";
    overlay.style.visibility = "visible";
    overlay.style.opacity = 1;
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("sidepanel").style.width = "0";
    overlay.style.visibility = "hidden";
    overlay.style.opacity = 0;
}

// Check the screen sizes for different mouse events
if (window.screen.width > 600) {
    featuresDropBtn.addEventListener("mouseover", setArrowUp);
    featuresDropBtn.addEventListener("mouseout", setArrowDown);
    companyDropBtn.addEventListener("mouseover", setArrowUp);
    companyDropBtn.addEventListener("mouseout", setArrowDown);
    window.addEventListener("click", closeDropdown);
} else {
    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    }
}

// Close the dropdown menu if the user clicks outside of it
function closeDropdown(event) {
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
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleResponsiveness() {
    var x = document.getElementById("sidepanel");
    var y = document.querySelectorAll(".dropdown");
    var z = document.getElementById("navbar");
    var overlay = document.getElementsByClassName("overlay");
    if (x.className === "sidepanel") {
        x.className += " responsive";
        y.className += " responsive";
        z.className += " responsive";
        overlay.className = " active";
    } else {
        x.className = "sidepanel";
        y.className = "dropdown";
        z.className += "navbar";
        overlay.className = "overlay";
    }
}
