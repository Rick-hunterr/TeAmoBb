// Función para crear y animar corazones
function createHearts() {
    const heartContainer = document.getElementById('heart-container');
    
    // Crear 15 corazones
    for (let i = 0; i < 1000; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            
            // Posición inicial aleatoria en la parte inferior
            const startPosX = Math.random() * window.innerWidth;
            heart.style.left = `${startPosX}px`;
            heart.style.bottom = '0';
            
            // Tamaño aleatorio
            const size = Math.random() * 15 + 10;
            heart.style.width = `${size}px`;
            heart.style.height = `${size}px`;
            
            // Dirección aleatoria
            const translateX = Math.random() * 200 - 100;
            heart.style.setProperty('--translateX', `${translateX}px`);
            
            // Duración de la animación aleatoria
            const duration = Math.random() * 5 + 5;
            heart.style.animationDuration = `${duration}s`;
            
            // Añadir corazón al contenedor
            heartContainer.appendChild(heart);
            
            // Eliminar corazón después de completar la animación
            setTimeout(() => {
                heart.remove();
            }, duration * 1000);
            
        }, i * 300); // Escalonamiento temporal para la creación
    }
}

// Funcionalidad para los botones y modales
document.addEventListener('DOMContentLoaded', function() {
    // Botones de acción
    const heartBtn = document.getElementById('heartBtn');
    const starBtn = document.getElementById('starBtn');
    const messageBtn = document.getElementById('messageBtn');
    const guardarBtn = document.getElementById('guardarBtn');
    const compartirBtn = document.getElementById('compartirBtn');
    
    // Modales
    const guardarModal = document.getElementById('guardarModal');
    const compartirModal = document.getElementById('compartirModal');
    const mensajeModal = document.getElementById('mensajeModal');
    
    // Botones de cierre de modales
    const closeGuardar = document.getElementById('closeGuardar');
    const closeCompartir = document.getElementById('closeCompartir');
    const closeMensaje = document.getElementById('closeMensaje');
    
    // Evento para el botón de corazones
    heartBtn.addEventListener('click', function() {
        createHearts();
        // Efecto de latido en el botón
        this.classList.add('heartbeat');
        setTimeout(() => {
            this.classList.remove('heartbeat');
        }, 1500);
    });
    
    // Efecto para el botón de estrellas
    starBtn.addEventListener('click', function() {
        // Crear un efecto de brillo en todos los elementos elegantes
        const elegantElements = document.querySelectorAll('.elegant-text, .signature, .vintage-rose');
        elegantElements.forEach(el => {
            el.style.textShadow = '0 0 10px #ffeb99, 0 0 20px #ffeb99';
            setTimeout(() => {
                el.style.textShadow = '';
            }, 2000);
        });
    });
    
    // Evento para abrir el modal de mensaje
    messageBtn.addEventListener('click', function() {
        mensajeModal.classList.add('active');
    });
    
    // Evento para abrir el modal de guardar
    guardarBtn.addEventListener('click', function(e) {
        e.preventDefault();
        guardarModal.classList.add('active');
    });
    
    // Evento para abrir el modal de compartir
    compartirBtn.addEventListener('click', function(e) {
        e.preventDefault();
        compartirModal.classList.add('active');
    });
    
    // Eventos para cerrar los modales
    closeGuardar.addEventListener('click', function() {
        guardarModal.classList.remove('active');
    });
    
    closeCompartir.addEventListener('click', function() {
        compartirModal.classList.remove('active');
    });
    
    closeMensaje.addEventListener('click', function() {
        mensajeModal.classList.remove('active');
    });
    
    // Cerrar modales al hacer clic fuera de ellos
    window.addEventListener('click', function(event) {
        if (event.target === guardarModal) {
            guardarModal.classList.remove('active');
        }
        if (event.target === compartirModal) {
            compartirModal.classList.remove('active');
        }
        if (event.target === mensajeModal) {
            mensajeModal.classList.remove('active');
        }
    });
    
    // Efecto de entrada inicial
    setTimeout(() => {
        // Animación de aparición de las galerías y elementos
        const staggerItems = document.querySelectorAll('.stagger-item');
        staggerItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
            }, 200 * index);
        });
        
        // Crear algunos corazones al inicio para efecto visual
        createHearts();
    }, 1000);
    
    // Efecto de desplazamiento suave para los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efecto hover para elementos vintage
    const vintageElements = document.querySelectorAll('.vintage-rose, .elegant-text');
    vintageElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            this.style.color = '#d17f66';
        });
        el.addEventListener('mouseleave', function() {
            this.style.color = '';
        });
    });
});

// Función para cambiar dinámicamente la decoración de la página
function changeDecoration(theme) {
    const body = document.body;
    const frame = document.querySelector('.antique-frame');
    
    switch(theme) {
        case 'romantic':
            body.style.background = '#f9eee2 url("https://i.imgur.com/gP9A4kG.jpg") repeat';
            frame.style.borderColor = '#d3bfa0';
            break;
        case 'passionate':
            body.style.background = '#f9e2e2 url("https://i.imgur.com/gP9A4kG.jpg") repeat';
            frame.style.borderColor = '#d39090';
            break;
        case 'elegant':
            body.style.background = '#e2e6f9 url("https://i.imgur.com/gP9A4kG.jpg") repeat';
            frame.style.borderColor = '#a0aad3';
            break;
        default:
            body.style.background = '#f9eee2 url("https://i.imgur.com/gP9A4kG.jpg") repeat';
            frame.style.borderColor = '#d3bfa0';
    }
}

// Detector de orientación del dispositivo para adaptar el diseño en móviles
window.addEventListener('resize', function() {
    adjustLayoutForDevice();
});

function adjustLayoutForDevice() {
    const width = window.innerWidth;
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (width < 768) {
        // Ajuste para dispositivos móviles
        galleryItems.forEach(item => {
            item.style.flex = '0 0 calc(50% - 15px)';
            item.style.maxWidth = 'calc(50% - 15px)';
        });
    } else {
        // Ajuste para escritorio
        galleryItems.forEach(item => {
            item.style.flex = '0 0 calc(33.333% - 15px)';
            item.style.maxWidth = 'calc(33.333% - 15px)';
        });
    }
}

// Inicializar ajustes de diseño
adjustLayoutForDevice();
