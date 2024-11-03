//etsado del menu
let menuVisible = false;

//para mostrar y ocultar le menu
const mostrarOcultarMenu = () => {
    const nav = document.getElementById("nav");
    menuVisible = !menuVisible;
    nav.classList.toggle("responsive", menuVisible);
};

//funcion para el menus sea nav
const seleccionar = () => {
    const nav = document.getElementById("nav");
    nav.classList.remove("responsive");
    menuVisible = false;
};

//fucnion para las animaciones de skills 
const animateSkills = () => {
    const skills = document.getElementById("skills");
    if (!skills) return;

    const distanceToSkills = skills.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    
    //para que se activen las skills cuando sean visibles
    if (distanceToSkills < screenHeight - 300) {
        
        
        const skillBars = document.querySelectorAll(".progreso");
        const skillClasses = [
            'javascript',
            'htmlcss',
            'photoshop',
            'comunicacion',
            'trabajo',
            'creatividad'
        ];

        skillBars.forEach((bar, index) => {
            if (skillClasses[index]) {
                bar.classList.add(skillClasses[index]);
            }
        });
    }
};


document.addEventListener('DOMContentLoaded', () => {
    //para que la animacion se vea cuando se cargue la pagina
    animateSkills();
    
    window.addEventListener('scroll', animateSkills);
});


const initializeEventListeners = () => {
    const menuLinks = document.querySelectorAll('#nav a');
    menuLinks.forEach(link => {
        link.addEventListener('click', seleccionar);
    });

    const menuButton = document.querySelector('.nav-responsive');
    if (menuButton) {
        menuButton.addEventListener('click', mostrarOcultarMenu);
    }

    window.addEventListener('scroll', animateSkills);
};


window.mostrarOcultarMenu = mostrarOcultarMenu;
window.seleccionar = seleccionar;

//empezar cuando el dom este listo
document.addEventListener('DOMContentLoaded', initializeEventListeners);


export {
    mostrarOcultarMenu,
    seleccionar,
    animateSkills
};