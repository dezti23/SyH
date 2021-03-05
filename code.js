window.onload = function(){ 
    const us = document.getElementById("nosotros");
    const services = document.getElementById("servicios");
    const contact = document.getElementById("contacto");

    const aboutSection = () => {
        us.style.color = "silver";
        services.style.color = "ivory";
        contact.style.color = "ivory";
        if (window.matchMedia("(max-width: 799px)").matches) {
            document.getElementById("nav-toggle").checked = false;
        }
    }

    const servicesSection = () => {
        services.style.color = "silver";
        us.style.color = "ivory";
        contact.style.color = "ivory";
        if (window.matchMedia("(max-width: 799px)").matches) {
            document.getElementById("nav-toggle").checked = false;
        }
    }

    const contactSection = () => {
        contact.style.color = "silver";
        us.style.color = "ivory";
        services.style.color = "ivory";
        if (window.matchMedia("(max-width: 799px)").matches) {
            document.getElementById("nav-toggle").checked = false;
        }
    }

    document.querySelector(".logo").addEventListener("click", clickLogo => {
        us.style.color = "ivory";
        services.style.color = "ivory";
        contact.style.color = "ivory";
        if (window.matchMedia("(max-width: 799px)").matches) {
            document.getElementById("nav-toggle").checked = false;
        }
    })

    document.getElementById("services").addEventListener("wheel", servicesSection);
    document.getElementById("servicios").addEventListener("click", servicesSection);

    document.getElementById("about").addEventListener("wheel", aboutSection);
    document.getElementById("nosotros").addEventListener("click", aboutSection);

    document.getElementById("contact").addEventListener("wheel", contactSection);
    document.getElementById("contacto").addEventListener("click", contactSection);
}