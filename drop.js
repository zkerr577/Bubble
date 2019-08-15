function dropDown() { // Enable functioning dropdown.
    document.getElementById("myDrop").classList.toggle("show");
}

window.onclick = function (event) { // Disable dropdown when clicked outside.
    if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
}
