// Récupérer l'élément ballon
const ballon = document.getElementById('ballon');

// Tableau des couleurs du ballon
const couleurs = ['red', 'green', 'blue'];
let couleurIndex = 0;

// Fonction pour changer la couleur du ballon
function changerCouleur() {
    couleurIndex = (couleurIndex + 1) % couleurs.length;
    ballon.style.backgroundColor = couleurs[couleurIndex];
}

// Fonction pour augmenter la taille du ballon
function augmenterTaille() {
    let currentSize = parseInt(window.getComputedStyle(ballon).width);
    
    // Si la taille du ballon dépasse 420px, il "explose"
    if (currentSize >= 420) {
        explosion(); // Appeler l'effet d'explosion ici
    } else {
        // Augmenter la taille de 10px
        ballon.style.width = (currentSize + 10) + 'px';
        ballon.style.height = (currentSize + 10) + 'px';
        changerCouleur(); // Changer la couleur à chaque clic
    }
}

// Fonction pour diminuer la taille du ballon et changer la couleur dans l'ordre inverse
function diminuerTaille() {
    let currentSize = parseInt(window.getComputedStyle(ballon).width);
    
    if (currentSize > 200) {
        // Diminue la taille de 5px
        ballon.style.width = (currentSize - 5) + 'px';
        ballon.style.height = (currentSize - 5) + 'px';
    }
    
    // Changer la couleur dans l'ordre inverse
    couleurIndex = (couleurIndex - 1 + couleurs.length) % couleurs.length;
    ballon.style.backgroundColor = couleurs[couleurIndex];
}

// Fonction pour l'effet d'explosion avec Particles.js
function explosion() {
    // Ajouter la classe 'explose' pour activer l'animation du ballon
    ballon.classList.add('explose');

    // Initialiser Particles.js pour créer des particules à l'explosion
    initExplosionParticles();

    // Réinitialiser la taille et la couleur du ballon après l'explosion
    setTimeout(() => {
        // Réinitialiser la taille du ballon
        ballon.classList.remove('explose'); // Supprimer l'animation
        ballon.style.width = '200px'; // Réinitialiser la taille
        ballon.style.height = '200px'; // Réinitialiser la taille
        couleurIndex = 0;
        ballon.style.backgroundColor = couleurs[couleurIndex]; // Revenir à la couleur initiale

        // Arrêter les particules après l'explosion
        stopParticles();

    }, 2000); // Temps de durée de l'animation (2000ms)
}

// Fonction pour initialiser les particules avec Particles.js
function initExplosionParticles() {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 100, // Nombre de particules
            },
            size: {
                value: 3, // Taille des particules
            },
            move: {
                speed: 6, // Vitesse de déplacement des particules
            },
            color: {
                value: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"], // Couleurs des particules
            },
            opacity: {
                anim: {
                    enable: true,
                    speed: 1,
                }
            }
        },
        interactivity: {
            events: {
                onhover: {
                    enable: false,
                }
            }
        }
    });
}

// Fonction pour arrêter les particules (après l'explosion)
function stopParticles() {
    // Utiliser particlesJS('particles-js', {...}) pour "arrêter" les particules
    // L'une des façons les plus simples d'arrêter est de vider les particules
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 0, // Aucun particule active
            }
        }
    });
}

// Événements sur le ballon
ballon.addEventListener('click', augmenterTaille); // Augmenter la taille du ballon au clic
ballon.addEventListener('mouseenter', diminuerTaille);  // Diminuer la taille au survol
ballon.addEventListener('mouseleave', diminuerTaille);  // Diminuer la taille lorsque la souris quitte
