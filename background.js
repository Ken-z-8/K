 
        // Fonction pour générer une couleur aléatoire
        function genererCouleurAleatoire() {
            const lettres = '0123456789ABCDEF';
            let couleur = '#';
            for (let i = 0; i < 6; i++) {
                couleur += lettres[Math.floor(Math.random() * 16)];
            }
            return couleur;
        }

        // Fonction pour changer la couleur de fond de la page
        function changerCouleur() {
            document.body.style.backgroundColor = genererCouleurAleatoire();
        }
   