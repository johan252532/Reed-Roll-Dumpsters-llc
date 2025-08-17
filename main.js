// --- Mobile Menu Toggle ---
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
    // Function to close the menu
    const closeMenu = () => navMenu.classList.remove('active');

    // Event listener for the hamburger icon to toggle the menu
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Event listener for clicks within the menu
    // This will close the menu when a link is clicked
    navMenu.addEventListener('click', (event) => {
        // We only want to close if a link that navigates within the page is clicked
        if (event.target.classList.contains('nav-link') && event.target.getAttribute('href').startsWith('#')) {
            closeMenu();
        }
    });
}


// --- Language Switcher ---
const translations = {
    es: {
        nav_logo: "Contenedores USA",
        nav_services: "Nuestra Promesa",
        nav_products: "Tamaños",
        nav_testimonials: "Testimonios",
        nav_contact: "Obtener Cotización",
        hero_title: "Renta de Contenedores en Todo EE. UU.",
        hero_subtitle: "Servicio de contenedores simple, confiable y asequible para cualquier proyecto, grande o pequeño. Obtén una cotización al instante y ordena en línea en minutos.",
        hero_button: "Obtener Cotización Instantánea",
        services_title: "El Servicio de Contenedores Más Confiable del País",
        services_subtitle: "Estamos comprometidos a proporcionar un servicio de clase mundial. Esta es nuestra promesa para ti.",
        service_1_title: "Entregado y Recogido Como se Prometió",
        service_1_text: "Prometemos que tu contenedor será entregado, recogido y facturado a tiempo, o una persona real lo solucionará.",
        service_2_title: "Servicio de Primera Clase en Estados Unidos",
        service_2_text: "Nuestro equipo de expertos en EE. UU. está aquí para responder tus preguntas, proporcionarte orientación y asegurar que tu proceso de renta sea impecable.",
        service_3_title: "Servicio Confiable a un Precio Justo",
        service_3_text: "Nuestra inversión en nuestro equipo y tecnología nos permite ofrecer un servicio excepcional manteniendo precios razonables.",
        service_4_title: "Servicios para Múltiples Obras",
        service_4_text: "Apoyamos cualquier servicio en múltiples ubicaciones, incluyendo soluciones de sanitarios portátiles, contenedores de almacenamiento y más.",
        service_5_title: "Facturación Transparente y Oportuna",
        service_5_text: "Facturas finales que llegan a tiempo, facilitando el cierre de proyectos y manteniendo a los clientes contentos.",
        service_6_title: "Red a Nivel Nacional",
        service_6_text: "Con una red nacional de socios, te aseguramos una amplia gama de opciones de servicio con tarifas competitivas.",
        products_title: "Encuentra el Tamaño Correcto para Tu Proyecto",
        products_subtitle: "Desde pequeñas limpiezas en el hogar hasta grandes obras de construcción, tenemos el tamaño de contenedor perfecto para tus necesidades. Los precios pueden variar según la ubicación.",
        yard_unit: "Yardas",
        price_unit: "/ semana",
        order_now_button: "Ordenar Ahora",
        testimonials_title: "Con la Confianza de Contratistas y Propietarios en Todo el País",
        testimonial_1_quote: '"El proceso completo fue impecable. Desde la cotización en línea hasta la entrega y recogida a tiempo, este es el servicio de contenedores más profesional que he usado para mi negocio de construcción."',
        testimonial_2_quote: '"Como propietaria de una casa haciendo una gran remodelación, me sentía intimidada por rentar un contenedor. Su equipo respondió todas mis preguntas y lo hizo increíblemente fácil. ¡Totalmente recomendado!"',
        testimonial_3_quote: '"Gestionamos proyectos en varios estados, y tener una compañía confiable para todas nuestras necesidades de gestión de residuos ha sido un cambio radical. Su facturación es clara y siempre a tiempo."',
        footer_title_areas: "Áreas de Servicio Destacadas",
        footer_title_dumpsters: "Contenedores Roll Off",
        footer_title_services: "Servicios",
        footer_title_support: "Soporte",
        nav_logo: "Contenedores USA",
        // ... (todas tus otras traducciones)
        footer_title_support: "Soporte",

        // --- LÍNEA A AÑADIR ---
        alert_close_button: "Entendido" 
    }
};

const langSwitcher = document.getElementById('lang-switcher');
let currentLang = 'en';

// Store original English texts on page load
const originalTexts = {};
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        originalTexts[key] = element.textContent;
    });
});

langSwitcher.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    updateTexts();
});

function updateTexts() {
    const targetLang = currentLang === 'es' ? translations.es : originalTexts;
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (targetLang[key]) {
            element.textContent = targetLang[key];
        }
    });

    langSwitcher.textContent = currentLang === 'en' ? 'ES' : 'EN';
    document.documentElement.lang = currentLang;
}


document.addEventListener('DOMContentLoaded', function() {

    // Obtener los elementos que necesitamos del HTML
    const checkButton = document.getElementById('check-zip-btn');
    const zipInput = document.getElementById('zip');
    const customAlert = document.getElementById('custom-alert');
    const closeAlertButton = document.getElementById('close-alert-btn');
    const alertMessage = document.getElementById('alert-message');

    // --- CAMBIO AQUÍ ---
    // 1. Creamos un objeto con los mensajes en español e inglés.
    // Usamos funciones para poder insertar el código postal (zipCode) fácilmente.
    const messages = {
        es: (zipCode) => `¡Claro que sí! Tenemos la mejor cobertura en el área ${zipCode}. Contáctanos para rentar.`,
        en: (zipCode) => `Of course! We have the best coverage in the ${zipCode} area. Contact us to rent.`
    };

    // Función para mostrar la alerta
    function showAlert(zipCode) {
        // --- CAMBIO AQUÍ ---
        // 2. Detectamos el idioma actual de la página.
        const lang = document.documentElement.lang;

        // 3. Seleccionamos la función del mensaje correcto (con inglés como respaldo).
        const messageFunction = messages[lang] || messages['en'];

        // 4. Generamos el mensaje final llamando a la función con el zipCode.
        alertMessage.textContent = messageFunction(zipCode);
        
        // El resto de la función se mantiene igual.
        customAlert.style.display = 'flex';
        setTimeout(() => customAlert.classList.add('visible'), 10); 
    }

    // Función para ocultar la alerta (sin cambios)
    function hideAlert() {
        customAlert.classList.remove('visible');
        setTimeout(() => customAlert.style.display = 'none', 300);
    }

    // El resto de los "oyentes" (event listeners) se mantienen igual.
    checkButton.addEventListener('click', function() {
        const userZip = zipInput.value.trim();
        if (userZip !== "") {
            showAlert(userZip);
        }
    });

    closeAlertButton.addEventListener('click', function() {
        hideAlert();
    });

    customAlert.addEventListener('click', function(event) {
        if (event.target === customAlert) {
            hideAlert();
        }
    });
});