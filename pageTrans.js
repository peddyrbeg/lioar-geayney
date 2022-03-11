gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function(event) {

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
	xPercent: -100 * (sections.length - 1),
	ease: "none",
	scrollTrigger: {
		trigger: ".container-fluid",
		pin: true,
		scrub: 1,
		snap: 1 / (sections.length - 1),
		end: () => "+=" + document.querySelector(".container-fluid").offsetWidth
	}
})

})
