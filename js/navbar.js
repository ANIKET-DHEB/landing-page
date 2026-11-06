
document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    console.log("Navbar JS loaded:", !!menuToggle, !!navLinks);

    if (!menuToggle || !navLinks) {
        console.error("Navbar elements not found!");
        return;
    }
    menuToggle.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.classList.toggle("active", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));

        console.log("Hamburger clicked:", isOpen);

    });
    navLinks.querySelectorAll("a, button").forEach(function (item) {

        item.addEventListener("click", function () {

            navLinks.classList.remove("active");
            menuToggle.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

});
