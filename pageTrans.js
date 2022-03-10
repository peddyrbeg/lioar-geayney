gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function(event) {

gsap.utils.toArray(".panel").forEach((panel, i) => {
	ScrollTrigger.create({
		trigger: panel,
		start: "top top",
		pin: true,
		pinSpacing: false,
		snap: 1
	});
});

})