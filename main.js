var seccionesPagina = new fullpage('#fullpage', {
	autoScrolling: true,
	fitToSection: false,
	fitToSectionDelay: 300,
	easing: 'easeInOutCubic',
	scrollingSpeed: 700,
	css3: true,
	easingcss3: 'ease-out',
	loopBottom: false,
});

const nombre = document.querySelector("#form-name")
const rtaName= document.querySelector("#rta-name".value)
nombre.addEventListener("change", () => {
    rtaName.innerHTML= nombre
    console.log (nombre)
})