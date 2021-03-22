const nosotros = document.getElementById("nosotros");
const servicios = document.getElementById("servicios");
const contacto = document.getElementById("contacto");

const about = document.querySelector('#about');
const services = document.querySelector('#services');
const contact = document.querySelector('#contact');

const options = {
    threshold: 0.5
}

const options1 = {
    threshold: 0.95
}

const observerAbout = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
		nosotros.style.color = "silver";
	} else {
		nosotros.style.color = "ivory";
	}
}, options);

observerAbout.observe(about);


const observerServices = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
		servicios.style.color = "silver";
	} else {
		servicios.style.color = "ivory";
	}
}, options);

observerServices.observe(services);


const observerContact = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
		contacto.style.color = "silver";
	} else {
		contacto.style.color = "ivory";
	}
}, options1);

observerContact.observe(contact);