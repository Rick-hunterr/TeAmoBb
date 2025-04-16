// Función para crear y animar corazones
function createHearts() {
    const heartContainer = document.getElementById('heart-container');
    
    // Crear 15 corazones
    for (let i = 0; i < 9000; i++) {
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
//inicio autoplay

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-audio');
    const playButton = document.getElementById('play-music');
    const musicWaves = document.getElementById('music-waves');
    const musicTitle = document.querySelector('.music-title');
    let isPlaying = false;

    // Función para actualizar la interfaz cuando se reproduce música
    function updateUIPlaying() {
        playButton.classList.add('playing');
        musicWaves.classList.add('active');
        musicTitle.classList.add('active');
        isPlaying = true;
    }

    // Función para actualizar la interfaz cuando se pausa la música
    function updateUIPaused() {
        playButton.classList.remove('playing');
        musicWaves.classList.remove('active');
        musicTitle.classList.remove('active');
        isPlaying = false;
    }

    // Intento de reproducción automática con diferentes estrategias
    function attemptAutoplay() {
        // 1. Intento directo
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log('Reproducción automática exitosa');
                updateUIPlaying();
            }).catch(error => {
                console.log('Autoplay fue bloqueado:', error);
                // 2. Plan B: Intentar con audio silenciado primero
                audio.muted = true;
                audio.play().then(() => {
                    // Mostrar un mensaje visual indicando que deben hacer clic para escuchar
                    playButton.style.animation = 'pulse 1.5s infinite';
                    // Crear notificación
                    showMusicNotification();
                }).catch(e => {
                    console.log('Incluso reproducción silenciosa fue bloqueada:', e);
                });
            });
        }
    }

    // Mostrar notificación para activar sonido
    function showMusicNotification() {
        const notification = document.createElement('div');
        notification.className = 'music-notification';
        notification.innerHTML = 'Haz clic para escuchar la música ♥';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: rgba(255, 245, 230, 0.95);
            border: 1px solid #d4a76a;
            border-radius: 20px;
            padding: 10px 20px;
            box-shadow: 0 2px 10px rgba(139, 69, 19, 0.3);
            font-family: 'Times New Roman', serif;
            color: #8b4513;
            font-size: 16px;
            z-index: 1000;
            animation: fadeInOut 5s forwards;
        `;
        document.body.appendChild(notification);
        
        // Definir la animación
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeInOut {
                0%, 100% { opacity: 0; }
                10%, 90% { opacity: 1; }
            }
        `;
        document.head.appendChild(style);
        
        // Eliminar la notificación después de 5 segundos
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }

    // Intento de autoplay al cargar la página
    attemptAutoplay();

    // Manejar clic en el botón de música
    playButton.addEventListener('click', function() {
        if (isPlaying) {
            audio.pause();
            updateUIPaused();
        } else {
            audio.muted = false; // Asegurarse de que no esté silenciado
            audio.play().then(() => {
                updateUIPlaying();
            }).catch(error => {
                console.error("Error al reproducir audio:", error);
            });
        }
    });

    // Evento global para activar sonido con cualquier clic en la página
    document.addEventListener('click', function globalClickHandler() {
        if (audio.muted) {
            audio.muted = false;
            if (!isPlaying) {
                audio.play().then(() => {
                    updateUIPlaying();
                }).catch(e => console.error(e));
            }
            document.removeEventListener('click', globalClickHandler);
        }
    });

    // Detectar cuando el usuario cambia de pestaña
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'visible') {
            // Si la música no está sonando cuando regresa, intentar reanudarla
            if (!audio.paused) {
                updateUIPlaying();
            }
        }
    });

    // Si la música se detiene por alguna razón, actualizar UI
    audio.addEventListener('pause', updateUIPaused);
    audio.addEventListener('play', updateUIPlaying);
});

// Función para crear y animar flores
document.addEventListener('DOMContentLoaded', function() {
    const flowersContainer = document.getElementById('flowers-container');
    
    function createFlowers() {
        const container = document.getElementById('flowers-container');
        const flowerTypes = ['flower1', 'flower3', 'flower4'];
        
        setInterval(() => {
            const flower = document.createElement('div');
            const type = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
            flower.className = `flower ${type}`;
            
            // Posición aleatoria en el eje X
            const posX = Math.random() * window.innerWidth;
            flower.style.left = `${posX}px`;
            
            // Duración aleatoria
            const duration = 5 + Math.random() * 5;
            flower.style.animationDuration = `${duration}s`;
            
            container.appendChild(flower);
            
            // Eliminar la flor después de la animación
            setTimeout(() => {
                flower.remove();
            }, duration * 1000);
        }, 300);
    }
    
    // Iniciar la creación de flores cuando se cargue la página
    window.addEventListener('load', createFlowers);
});


/* JavaScript para manejar el clic en el Principito */
/* Script para manejar la interacción */
document.addEventListener('DOMContentLoaded', function() {
    const principitoContainer = document.querySelector('.principito-container');
    const quoteBubble = document.querySelector('.quote-bubble');
    
    // Agregar la rosa al diseño
    const rose = document.createElement('div');
    rose.className = 'rose';
    principitoContainer.querySelector('.principito-scene').appendChild(rose);
    
    // Actualizar el texto de la cita
    quoteBubble.querySelector('p').textContent = "Mi rosa no es cualquier rosa, es mi rosa";
    
    // Mostrar/ocultar la burbuja de cita al hacer clic
    principitoContainer.addEventListener('click', function() {
        quoteBubble.classList.toggle('show');
    });
});


//hacer fotos grandes
document.addEventListener('DOMContentLoaded', function() {
  // Get the modal
  const modal = document.getElementById('imageModal');
  
  // Get the modal image and title elements
  const modalImg = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalImageTitle');
  
  // Get all gallery items
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  // Get the close button
  const closeButton = document.querySelector('.close-button');
  
  // Add click event to all gallery items
  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      // Get image source and title from data attributes
      const imgSrc = this.getAttribute('data-image');
      const imgTitle = this.getAttribute('data-title');
      
      // Set the modal image source and title
      modalImg.src = imgSrc;
      modalTitle.textContent = imgTitle;
      
      // Display the modal
      modal.classList.add('active');
      
      // Prevent scrolling of background content
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Close the modal when clicking the close button
  closeButton.addEventListener('click', function() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
  
  // Close the modal when clicking outside the image
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    const modal = document.getElementById('imageModal');
    
    // Get the modal image and title elements
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalImageTitle');
    
    // Get all gallery items
    const galleryItems = document.querySelectorAll('.vintage-gallery .gallery-item');
    
    // Get the close button
    const closeButton = document.querySelector('.close-button');
    
    // Add click event to all gallery items
    galleryItems.forEach(item => {
      item.addEventListener('click', function() {
        // Find the image within this gallery item
        const img = this.querySelector('img');
        
        // Get image source and alt text (for title)
        const imgSrc = img.src;
        const imgAlt = img.alt || 'Vintage Memory';
        
        // Set the modal image source and title
        modalImg.src = imgSrc;
        modalTitle.textContent = imgAlt;
        
        // Display the modal
        modal.classList.add('active');
        
        // Prevent scrolling of background content
        document.body.style.overflow = 'hidden';
      });
    });
    
    // Close the modal when clicking the close button
    closeButton.addEventListener('click', function() {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
    
    // Close the modal when clicking outside the image
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
    
    // Add keyboard support (ESC key to close)
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  });