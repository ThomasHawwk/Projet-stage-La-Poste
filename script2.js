document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form'); // Utilisation de querySelector pour sélectionner le formulaire
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire par défaut

        try {
            const name = document.getElementById('name').value;
            const email = document.getElementById('mail').value;
            const message = document.getElementById('msg').value;

            if (name === '' || email === '' || message === '') {
                throw new Error('Veuillez remplir tous les champs.'); // Lance une erreur si un champ est vide
            }

            if (!email.includes('@')) {
                throw new Error('Veuillez saisir une adresse e-mail valide.');
            }

            // Si tous les champs sont remplis et l'adresse e-mail est valide, soumettre le formulaire
            // Ici, vous pouvez également ajouter le code Ajax pour envoyer les données à votre backend

            // Affiche un message de confirmation
            successMessage.textContent = 'Le formulaire de "' + name + '" a bien été transmis.';
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none'; // Cache le message d'erreur s'il est affiché
            form.reset(); // Réinitialise le formulaire après la soumission
            } catch (error) {
            errorMessage.textContent = error.message; // Affiche le message d'erreur
            errorMessage.style.display = 'block'; // Affiche le message d'erreur
            successMessage.style.display = 'none'; // Cache le message de succès s'il est affiché
        }
    });
});

// Define the data we want to send
const button = document.querySelector("submit-btn");

button.addEventListener("click", (event) => {
  });

const data = {
    nom: 'test',
    email: document.getElementById('mail').value,
    message : document.getElementById('msg').value,
  };
  console.log(nom)



  // Send the POST request using fetch
  fetch("https://api.example.com/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then((data) => console.log("Success:", data))
    .catch((error) => console.error("Error:", error));
