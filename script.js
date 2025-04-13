console.log("Global Music Official");

function scrollLeft() {
    const container = document.getElementById('winnerContainer');
    container.scrollBy({
        left: -300, 
        behavior: 'smooth' 
    });
}

function scrollRight() {
    const container = document.getElementById('winnerContainer');
    container.scrollBy({
        left: 300, 
        behavior: 'smooth' 
    });
}

function centerFirstWinner() {
    const container = document.getElementById('winnerContainer');
    const firstWinner = container.querySelector('.winner-box'); 
    if (firstWinner) {
        const containerWidth = container.offsetWidth;
        const winnerWidth = firstWinner.offsetWidth;
        const scrollPosition = (winnerWidth / 2) - (containerWidth / 2);
        container.scrollTo({
            left: scrollPosition,
            behavior: 'auto' 
        });
    }
}

window.onload = centerFirstWinner;


//Register and login 
// Check authentication status and update header
function updateAuthHeader() {
    fetch('php/check_auth.php')
        .then(response => response.json())
        .then(data => {
            const authButtons = document.querySelector('.auth-buttons');
            const userProfile = document.querySelector('.user-profile');
            const usernameSpan = document.querySelector('.username');
            
            if (data.authenticated) {
                authButtons.style.display = 'none';
                userProfile.style.display = 'flex';
                usernameSpan.textContent = data.username;
            } else {
                authButtons.style.display = 'flex';
                userProfile.style.display = 'none';
            }
        });
}




// Slider Animation

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

setInterval(nextSlide, 3000);

showSlide(slideIndex);

// Add this to your existing script.js
function handleResize() {
    const navbar = document.getElementById('navbar');
    const header = document.querySelector('.header');
    
    if (window.innerWidth < 768) {
        // Mobile-specific adjustments
        if (window.scrollY > 50) {
            header.style.padding = '5px';
        } else {
            header.style.padding = '10px';
        }
    } else {
        // Desktop styles
        header.style.padding = '3px 8px';
    }
}

// Initialize and add resize listener
window.addEventListener('load', function() {
    handleResize();
    centerFirstWinner();
});

window.addEventListener('resize', function() {
    handleResize();
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const navBar = document.querySelector('.nav-bar');
    const checkBox = document.getElementById('check');
    
    // Scroll effect for navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navBar.classList.add('scrolled');
        } else {
            navBar.classList.remove('scrolled');
        }
    });
    
    // Close menu when clicking on a link (for mobile)
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                checkBox.checked = false;
                document.querySelector('.menu').style.right = '-100%';
                resetMenuItems();
            }
        });
    });
    
    // Animation for menu items when closing
    checkBox.addEventListener('change', function() {
        if (!this.checked) {
            resetMenuItems();
        }
    });
    
    function resetMenuItems() {
        const menuItems = document.querySelectorAll('.menu li');
        menuItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(20px)';
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});



// Main initialization function
function initializePage() {
    // Initialize i18next
    i18next.init({
        lng: 'en',
        resources: {
            en: {
                translation: {
                    "nav.home": "Home",
                    "nav.products": "Video",
                    "nav.services": "About",
                    "nav.about": "Participant",
                   "nav.winner": "Winner",
                    "nav.contact": "Contact",
                    "welcome": "Hi, Welcome to My Page",
                    "intro": "Hello friends, My Name is SANJAT KUMAR. Welcome to Global Music Official, your ultimate destination for discovering and celebrating the rich tapestry of music from around the world!🎶 Our channel is dedicated to bringing you the best in global sounds—from chart-topping hits and timeless classics to hidden gems and emerging artists.",
                    "subscribe": "Subscribe",
                    "follow": "Follow Me",
                    "latest_song": "Watch Our Latest Song",
                    "meet_owner": "Meet To Owner",
                    "participant_title": "Know About Participant",
                    "participant_heading": "Title Of Participant",
                    "participant_subtitle": "Brief About Participant and Prize Details",
                    "participant_text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque leo a magna aliquet, nec fermentum ligula tincidunt.",
                    "form.name": "User Name",
                    "form.name_placeholder": "Enter your full name",
                    "form.mobile": "User Mobile No.",
                    "form.mobile_placeholder": "Enter your mobile number",
                    "form.email": "User Email",
                    "form.email_placeholder": "Enter your email address",
                    "form.address": "User Address",
                    "form.address_placeholder": "Enter your full address",
                    "form.upload": "Upload File",
                    "form.terms": "Accept Term & Condition",
                    "form.submit": "Submit",
                    "contact.title": "Contact & Send Your Feedback",
                    "contact.info": "Contact Information",
                    "contact.description": "Feel free to contact us through any of the methods below:",
                    "contact.resume": "Subcribe Now 🔔",
                    "contact.form_name": "Enter Your Name",
                    "contact.form_email": "Enter Your Email",
                    "contact.form_phone": "Enter Your Phone",
                    "contact.form_subject": "Enter About Your Subject",
                    "contact.form_message": "Enter Your Message",
                    "contact.send": "Send Message",
                    "language.choose": "Choose Language:",
                    "footer.follow": "Follow On",
                    "footer.copyright": "© 2025 Global Music Official. All Rights Reserved."
                }
            },
            hi: {
                translation: {
                    "nav.home": "होम",
                    "nav.products": "उत्पाद",
                    "nav.services": "सेवाएं",
                    "nav.about": "हमारे बारे में",
                    "nav.contact": "संपर्क करें",
                    "welcome": "नमस्ते, मेरे पृष्ठ पर आपका स्वागत है",
                    "intro": "नमस्ते दोस्तों, मेरा नाम संजत कुमार है। ग्लोबल म्यूजिक ऑफिशियल में आपका स्वागत है, दुनिया भर के संगीत की खोज और उत्सव मनाने के लिए आपका अंतिम गंतव्य!🎶 हमारा चैनल आपके लिए वैश्विक ध्वनियों में सर्वश्रेष्ठ लाने के लिए समर्पित है - चार्ट-टॉपिंग हिट्स और कालातीत क्लासिक्स से लेकर छिपे हुए रत्न और उभरते कलाकारों तक।",
                    "subscribe": "सदस्यता लें",
                    "follow": "मुझे फॉलो करें",
                    "latest_song": "हमारा नवीनतम गाना देखें",
                    "meet_owner": "मालिक से मिलें",
                    "participant_title": "प्रतिभागी के बारे में जानें",
                    "participant_heading": "प्रतिभागी का शीर्षक",
                    "participant_subtitle": "प्रतिभागी के बारे में संक्षिप्त जानकारी और पुरस्कार विवरण",
                    "form.name": "उपयोगकर्ता नाम",
                    "form.name_placeholder": "अपना पूरा नाम दर्ज करें",
                    "form.mobile": "उपयोगकर्ता मोबाइल नंबर",
                    "form.mobile_placeholder": "अपना मोबाइल नंबर दर्ज करें",
                    "form.email": "उपयोगकर्ता ईमेल",
                    "form.email_placeholder": "अपना ईमेल पता दर्ज करें",
                    "form.address": "उपयोगकर्ता पता",
                    "form.address_placeholder": "अपना पूरा पता दर्ज करें",
                    "form.upload": "फ़ाइल अपलोड करें",
                    "form.terms": "नियम और शर्तें स्वीकार करें",
                    "form.submit": "जमा करें",
                    "contact.title": "संपर्क करें और अपनी प्रतिक्रिया भेजें",
                    "contact.info": "संपर्क जानकारी",
                    "contact.description": "किसी भी निम्नलिखित विधि के माध्यम से हमसे संपर्क करने में संकोच न करें:",
                    "contact.resume": "Channel क्लिक करें 🔔",
                    "contact.form_name": "अपना नाम दर्ज करें",
                    "contact.form_email": "अपना ईमेल दर्ज करें",
                    "contact.form_phone": "अपना फोन दर्ज करें",
                    "contact.form_subject": "अपना विषय दर्ज करें",
                    "contact.form_message": "अपना संदेश दर्ज करें",
                    "contact.send": "संदेश भेजें",
                    "language.choose": "भाषा चुनें:",
                    "footer.follow": "फॉलो करें",
                    "footer.copyright": "© 2025 ग्लोबल म्यूजिक ऑफिशियल। सर्वाधिकार सुरक्षित।"
                }
            },
            es: {
                translation: {
                    "nav.home": "Inicio",
                    "nav.products": "Productos",
                    "nav.services": "Servicios",
                    "nav.about": "Acerca de",
                    "nav.contact": "Contacto",
                    "welcome": "Hola, Bienvenido a Mi Página",
                    "intro": "Hola amigos, mi nombre es SANJAT KUMAR. Bienvenido a Global Music Official, tu destino definitivo para descubrir y celebrar el rico tapiz de música de todo el mundo!🎶 Nuestro canal está dedicado a brindarte lo mejor en sonidos globales, desde éxitos populares y clásicos atemporales hasta joyas ocultas y artistas emergentes.",
                    "subscribe": "Suscribirse",
                    "follow": "Sígueme",
                    "latest_song": "Mira nuestra última canción",
                    "meet_owner": "Conoce al Propietario",
                    "participant_title": "Conoce al Participante",
                    "participant_heading": "Título del Participante",
                    "participant_subtitle": "Breve información sobre el participante y detalles del premio",
                    "form.name": "Nombre de usuario",
                    "form.name_placeholder": "Ingrese su nombre completo",
                    "form.mobile": "Número de móvil del usuario",
                    "form.mobile_placeholder": "Ingrese su número de móvil",
                    "form.email": "Correo electrónico del usuario",
                    "form.email_placeholder": "Ingrese su dirección de correo electrónico",
                    "form.address": "Dirección del usuario",
                    "form.address_placeholder": "Ingrese su dirección completa",
                    "form.upload": "Subir archivo",
                    "form.terms": "Aceptar términos y condiciones",
                    "form.submit": "Enviar",
                    "contact.title": "Contacto y Envíe Sus Comentarios",
                    "contact.info": "Información de contacto",
                    "contact.description": "No dude en contactarnos a través de cualquiera de los siguientes métodos:",
                    "contact.resume": "Haga clic aquí para ver mi currículum",
                    "contact.form_name": "Ingrese su nombre",
                    "contact.form_email": "Ingrese su correo electrónico",
                    "contact.form_phone": "Ingrese su teléfono",
                    "contact.form_subject": "Ingrese sobre su asunto",
                    "contact.form_message": "Ingrese su mensaje",
                    "contact.send": "Enviar mensaje",
                    "language.choose": "Elige idioma:",
                    "footer.follow": "Seguir en",
                    "footer.copyright": "© 2025 Global Music Official. Todos los derechos reservados."
                }
            },
            fr: {
                translation: {
                    "nav.home": "Accueil",
                    "nav.products": "Produits",
                    "nav.services": "Services",
                    "nav.about": "À propos",
                    "nav.contact": "Contact",
                    "welcome": "Salut, Bienvenue sur Ma Page",
                    "intro": "Bonjour les amis, je m'appelle SANJAT KUMAR. Bienvenue sur Global Music Official, votre destination ultime pour découvrir et célébrer la riche tapisserie musicale du monde entier !🎶 Notre chaîne est dédiée à vous apporter le meilleur des sons du monde - des tubes populaires et des classiques intemporels aux pépites cachées et aux artistes émergents.",
                    "subscribe": "S'abonner",
                    "follow": "Suivez-moi",
                    "latest_song": "Regardez notre dernière chanson",
                    "meet_owner": "Rencontrez le propriétaire",
                    "participant_title": "En savoir plus sur le participant",
                    "participant_heading": "Titre du participant",
                    "participant_subtitle": "Brève description du participant et détails des prix",
                    "form.name": "Nom d'utilisateur",
                    "form.name_placeholder": "Entrez votre nom complet",
                    "form.mobile": "Numéro de portable de l'utilisateur",
                    "form.mobile_placeholder": "Entrez votre numéro de portable",
                    "form.email": "E-mail de l'utilisateur",
                    "form.email_placeholder": "Entrez votre adresse e-mail",
                    "form.address": "Adresse de l'utilisateur",
                    "form.address_placeholder": "Entrez votre adresse complète",
                    "form.upload": "Télécharger le fichier",
                    "form.terms": "Accepter les termes et conditions",
                    "form.submit": "Soumettre",
                    "contact.title": "Contact et Envoyez Vos Commentaires",
                    "contact.info": "Coordonnées",
                    "contact.description": "N'hésitez pas à nous contacter par l'un des moyens suivants :",
                    "contact.resume": "Cliquez ici pour voir mon CV",
                    "contact.form_name": "Entrez votre nom",
                    "contact.form_email": "Entrez votre e-mail",
                    "contact.form_phone": "Entrez votre téléphone",
                    "contact.form_subject": "Entrez votre sujet",
                    "contact.form_message": "Entrez votre message",
                    "contact.send": "Envoyer le message",
                    "language.choose": "Choisir la langue:",
                    "footer.follow": "Suivre sur",
                    "footer.copyright": "© 2025 Global Music Official. Tous droits réservés."
                }
            }
        }
    }).then(function() {
        // Initial translation
        updateContent();
        
        // Language selector event
        document.getElementById('language-select').addEventListener('change', function() {
            i18next.changeLanguage(this.value).then(updateContent);
        });
    });

    function updateContent() {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            el.textContent = i18next.t(el.getAttribute('data-i18n'));
        });
        
        // Update all placeholder elements
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            el.setAttribute('placeholder', i18next.t(el.getAttribute('data-i18n-placeholder')));
        });
    }

    // Image slider functionality
    let currentSlide = 0;
    const imageSlides = document.querySelectorAll('.slider .slide');
    const totalSlides = imageSlides.length;

    function showSlide(index) {
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }
        
        const slideWidth = imageSlides[0]?.clientWidth || 0;
        const slider = document.querySelector('.slider');
        if (slider) {
            slider.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
        }
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Initialize slider if slides exist
    if (totalSlides > 0) {
        // Auto slide change
        setInterval(nextSlide, 3000);
        showSlide(0);
    }

    // Navigation and responsive behavior
    function handleResize() {
        const header = document.querySelector('header');
        
        if (window.innerWidth < 768) {
            // Mobile-specific adjustments
            if (window.scrollY > 50) {
                header.style.padding = '5px';
            } else {
                header.style.padding = '10px';
            }
        } else {
            // Desktop styles
            header.style.padding = '3px 8px';
        }
    }

    // Navigation menu functionality
    const navBar = document.querySelector('.nav-bar');
    const checkBox = document.getElementById('check');
    
    // Scroll effect for navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navBar?.classList.add('scrolled');
        } else {
            navBar?.classList.remove('scrolled');
        }
    });
    
    // Close menu when clicking on a link (for mobile)
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768 && checkBox) {
                checkBox.checked = false;
                document.querySelector('.menu').style.right = '-100%';
                resetMenuItems();
            }
        });
    });
    
    // Animation for menu items when closing
    if (checkBox) {
        checkBox.addEventListener('change', function() {
            if (!this.checked) {
                resetMenuItems();
            }
        });
    }
    
    function resetMenuItems() {
        const menuItems = document.querySelectorAll('.menu li');
        menuItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(20px)';
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize winner container
    centerFirstWinner();
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    
    // Initialize resize handler
    window.addEventListener('resize', function() {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
});

// Term & Condition 

     const termsCheckbox = document.getElementById('accept-terms');
     const submitBtn = document.getElementById('submit-btn');
     
     termsCheckbox.addEventListener('change', function() {
         submitBtn.disabled = !this.checked;
     });
     

     document.getElementById('terms-link').addEventListener('click', function(e) {
         e.preventDefault();
         alert('This Will be appear as soon as possible.');
     });
     
     document.getElementById('privacy-link').addEventListener('click', function(e) {
         e.preventDefault();
         alert('Privacy policy this will be appear as soon as possible.');
     });
