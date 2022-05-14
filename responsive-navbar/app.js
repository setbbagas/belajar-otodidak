const toggleBtn = document.querySelector(".toggle-btn"),
	navbarMobileOverlay = document.querySelector(".navbar__mobile__overlay"),
	closeBtn = document.querySelector(".close-btn");

// open navbar link
toggleBtn.addEventListener("click", () => {
	navbarMobileOverlay.classList.toggle("show-nav");
	navbarMobileOverlay.classList.remove("hide-nav");
});

// close navbar link
closeBtn.addEventListener("click", () => {
	navbarMobileOverlay.classList.toggle("hide-nav");
	navbarMobileOverlay.classList.remove("show-nav");
});
