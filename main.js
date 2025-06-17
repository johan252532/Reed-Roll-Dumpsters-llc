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


const serviceAreaZips = [
        "77002", "77003", "77004", "77005", "77006", "77007", "77008", "77009", "77010",
        "77011", "77012", "77013", "77014", "77015", "77016", "77017", "77018", "77019",
        "77020", "77021", "77022", "77023", "77024", "77025", "77026", "77027", "77028",
        "77029", "77030", "77031", "77032", "77033", "77034", "77035", "77036", "77037",
        "77038", "77039", "77040", "77041", "77042", "77043", "77044", "77045", "77046",
        "77047", "77048", "77049", "77050", "77051", "77053", "77054", "77055", "77056",
        "77057", "77058", "77059", "77060", "77061", "77062", "77063", "77064", "77065",
        "77066", "77067", "77068", "77069", "77070", "77071", "77072", "77073", "77074",
        "77075", "77076", "77077", "77078", "77079", "77080", "77081", "77082", "77083",
        "77084", "77085", "77086", "77087", "77088", "77089", "77090", "77091", "77092",
        "77093", "77094", "77095", "77096", "77098", "77099"
    ];

    const zipInput = document.getElementById('zip');
    const checkButton = document.getElementById('check-zip-btn');
    const messageDiv = document.getElementById('zip-message');

    checkButton.addEventListener('click', function() {
        const userZip = zipInput.value.trim();

        if (userZip === "") {
            messageDiv.textContent = "";
            return;
        }

        if (serviceAreaZips.includes(userZip)) {
            // --- NUEVA ALERTA DE ÉXITO ---
            Swal.fire({
                icon: 'success',
                title: '¡Excelente!',
                text: 'Sí tenemos servicio en tu área (' + userZip + '). ¡Contáctanos por WhatsApp para rentar!',
                confirmButtonText: '¡Genial!',
                confirmButtonColor: '#ff6b00' // Usamos el color primario de tu marca
            });
            // También actualizamos el mensaje en la página (opcional)
            messageDiv.textContent = "✅ Great! We have service in your area. / ¡Sí tenemos servicio en tu área!";
            messageDiv.className = "success";

        } else {
            // --- NUEVA ALERTA DE ERROR ---
            Swal.fire({
                icon: 'error',
                title: 'Lo Sentimos...',
                text: 'Actualmente no cubrimos el área ' + userZip + '. Llámanos para verificar si podemos hacer una excepción.',
                confirmButtonText: 'Entendido',
                confirmButtonColor: '#ff6b00',
                footer: '<a href="https://wa.me/1XXXXXXXXXX?text=Hola,%20mi%20código%20postal%20es%20' + userZip + '%20y%20quería%20saber%20si%20pueden%20hacer%20una%20excepción." target="_blank" style="color:#007bff; text-decoration:none;">¿Preguntar por una excepción por WhatsApp?</a>'
            });
             // También actualizamos el mensaje en la página (opcional)
            messageDiv.textContent = "❌ Sorry, we don't cover your area yet. / Lo sentimos, aún no cubrimos tu área.";
            messageDiv.className = "error";
        }
    });