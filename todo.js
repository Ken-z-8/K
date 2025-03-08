 // Sélectionner les éléments HTML
        const taskInput = document.getElementById('taskInput');
        const addButton = document.getElementById('addButton');
        const newButton = document.getElementById('newButton');
        const ftList = document.getElementById('ft_list');


        // Fonction pour récupérer les tâches depuis les cookies
        function loadTasksFromCookies() {
            const tasks = getCookie("tasks");
            if (tasks) {
                const tasksArray = JSON.parse(tasks);
                tasksArray.forEach(task => {
                    addTaskToList(task);
                });
            }
        }

        // Fonction pour ajouter une tâche à la liste
        function addTaskToList(taskText) {
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('task');
            taskDiv.textContent = taskText;

            // Ajouter un événement de suppression à chaque tâche
            taskDiv.addEventListener('click', () => {
                if (confirm("Voulez-vous vraiment supprimer cette tâche ?")) {
                    taskDiv.remove(); // Supprimer la tâche du DOM
                    saveTasksToCookies(); // Sauvegarder les tâches après suppression
                }
            });

            // Ajouter la tâche en haut de la liste
            ftList.insertBefore(taskDiv, ftList.firstChild);
        }

        // Fonction pour ajouter une tâche via le prompt
        function addTask() {
            const taskText = prompt("Veuillez entrer votre tâche:");

            // Si la tâche n'est pas vide
            if (taskText && taskText.trim() !== "") {
                addTaskToList(taskText.trim());
                saveTasksToCookies(); // Sauvegarder les tâches après ajout
            }
        }

        

        // Fonction pour ajouter une tâche au DOM lorsque le bouton "Ajouter" est cliqué
        addButton.addEventListener('click', function() {
            if (taskInput.value.trim() !== "") {
                addTaskToList(taskInput.value.trim());
                taskInput.value = ''; // Réinitialiser le champ d'entrée
                saveTasksToCookies(); // Sauvegarder les tâches après ajout
            } else {
                alert("Veuillez entrer une tâche!");
            }
        });

        // Ajouter un événement pour vider la liste avec "Clear All"
clearButton.addEventListener('click', function() {
    if (confirm("Voulez-vous vraiment supprimer toutes les tâches ?")) {
        // Supprimer toutes les tâches du DOM
        const taskDivs = document.querySelectorAll('.task');
        taskDivs.forEach(taskDiv => {
            taskDiv.remove();
        });

        // Vider les cookies
        document.cookie = "tasks=; path=/; max-age=0"; // Supprimer le cookie des tâches
    }
});
        // Fonction pour sauvegarder les tâches dans les cookies
        function saveTasksToCookies() {
            const tasksArray = [];
            const taskDivs = document.querySelectorAll('.task');
            taskDivs.forEach(taskDiv => {
                tasksArray.push(taskDiv.textContent);
            });
            document.cookie = "tasks=" + JSON.stringify(tasksArray) + "; path=/; max-age=31536000"; // Valable pour un an
        }

        // Fonction pour obtenir les cookies
        function getCookie(name) {
            const decodedCookie = decodeURIComponent(document.cookie);
            const ca = decodedCookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i].trim();
                if (c.indexOf(name + "=") === 0) {
                    return c.substring(name.length + 1, c.length);
                }
            }
            return "";
        }

      

    
        // Ajouter une tâche via le bouton "New"
        newButton.addEventListener('click', addTask);

        // Charger les tâches depuis les cookies au chargement de la page
        window.onload = loadTasksFromCookies();
            
