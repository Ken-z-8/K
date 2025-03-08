// Fonction qui effectue le calcul en fonction de l'opérateur
        function calculer() {
            const left = document.getElementById('leftOperand').value;
            const right = document.getElementById('rightOperand').value;
            const operator = document.getElementById('operator').value;

            // Vérification que les entrées sont des entiers positifs
            if (isNaN(left) || isNaN(right) || left < 0 || right < 0) {
                alert('Error :(');
                return;
            }

            const numLeft = parseInt(left);
            const numRight = parseInt(right);
            let result;

            // Vérification de la division et du modulo par zéro
            if ((operator === '/' || operator === '%') && numRight === 0) {
                alert("It’s over 9000!");
                console.log("It’s over 9000!");
                return;
            }

            // Calcul en fonction de l'opérateur sélectionné
            switch (operator) {
                case '+':
                    result = numLeft + numRight;
                    break;
                case '-':
                    result = numLeft - numRight;
                    break;
                case '*':
                    result = numLeft * numRight;
                    break;
                case '/':
                    result = numLeft / numRight;
                    break;
                case '%':
                    result = numLeft % numRight;
                    break;
            }

            // Affichage du résultat dans une alerte et dans la console
            alert('Le résultat est : ' + result);
            console.log('Résultat : ' + result);
        }

        // Fonction qui affiche le message toutes les 30 secondes
        function alertMessage() {
            setInterval(() => {
                alert('Please, use me...');
            }, 30000);
        }

        // Lancer la fonction d'alerte à l'ouverture de la page
        window.onload = alertMessage;