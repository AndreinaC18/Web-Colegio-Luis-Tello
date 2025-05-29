// Animación para las tarjetas
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.level-card');

    cards.forEach((card, index) => {
        // Pequeño retraso para animación escalonada
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * index);
    });
});

// Mobile menu toggle
document.getElementById('mobile-menu').addEventListener('click', function () {
    const menu = document.getElementById('main-menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column';
        menu.style.position = 'absolute';
        menu.style.top = '80px';
        menu.style.right = '20px';
        menu.style.backgroundColor = 'white';
        menu.style.padding = '20px';
        menu.style.borderRadius = '10px';
        menu.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Close mobile menu if open
        const menu = document.getElementById('main-menu');
        if (window.innerWidth <= 992 && menu.style.display === 'flex') {
            menu.style.display = 'none';
        }
    });
});

// Sticky header on scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Form submission handler
document.getElementById('admissionForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        level: document.getElementById('level').value,
        message: document.getElementById('message').value
    };

    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);

    // Show success message
    alert('¡Gracias por su interés! Hemos recibido su solicitud y nos pondremos en contacto con usted pronto.');

    // Reset form
    this.reset();
});

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.mission-card, .level-card');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
            element.classList.add('visible');
        }
    });
}

// Set initial state for animated elements
document.querySelectorAll('.mission-card, .level-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Add scroll event listener
window.addEventListener('scroll', animateOnScroll);
// Trigger once on load
animateOnScroll();

// Chatbot functionality
const chatbotButton = document.querySelector('.chatbot-button');
const chatbotContainer = document.querySelector('.chatbot-container');
const closeChatbot = document.querySelector('.close-chatbot');

chatbotButton.addEventListener('click', function () {
    chatbotContainer.style.display = chatbotContainer.style.display === 'block' ? 'none' : 'block';
});

closeChatbot.addEventListener('click', function () {
    chatbotContainer.style.display = 'none';
});

// Quick questions functionality
const quickQuestions = document.querySelectorAll('.quick-question');
const chatMessages = document.querySelector('.chatbot-messages');

quickQuestions.forEach(question => {
    question.addEventListener('click', function () {
        const questionText = this.textContent;

        // Add user question
        const userMessage = document.createElement('div');
        userMessage.className = 'chatbot-message';
        userMessage.style.marginLeft = 'auto';
        userMessage.style.backgroundColor = '#e3f2fd';
        userMessage.innerHTML = `<p style="margin: 0;">${questionText}</p>`;
        chatMessages.appendChild(userMessage);

        // Add bot response (simplified)
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.className = 'chatbot-message';

            let response = '';
            switch (questionText) {
                case '¿Cómo me inscribo?':
                    response = 'El proceso de admisión es gratuito. Visite nuestra sección de <a href="#admisiones" style="color: var(--primary); font-weight: 600;">admisiones</a> para conocer los pasos.';
                    break;
                case '¿Es realmente gratuito?':
                    response = 'Sí, somos un colegio público 100% gratuito. El único costo es el uniforme escolar ($50).';
                    break;
                case 'Especialidades técnicas':
                    response = 'Ofrecemos 4 especialidades: Informática, Contabilidad, Industrial y Servicios Turísticos. Más info en <a href="#academico" style="color: var(--primary); font-weight: 600;">oferta académica</a>.';
                    break;
                default:
                    response = `Para información sobre ${questionText.toLowerCase()}, por favor contáctenos al 06-2721234 o info@colegioluistello.edu.ec`;
            }

            botMessage.innerHTML = `<p style="margin: 0;">${response}</p>`;
            chatMessages.appendChild(botMessage);

            // Scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 500);

        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    });
});