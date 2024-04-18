document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form'); // selection du formulaire
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // attente remplissage avant envoi

        try {
            const name = document.getElementById('name').value;
            const email = document.getElementById('mail').value;
            const message = document.getElementById('msg').value;

            if (name === '' || email === '' || message === '') {
                throw new Error('Veuillez remplir tous les champs.'); // erreur si champ vide
            }

            if (!email.includes('@')) {
                throw new Error('Veuillez saisir une adresse e-mail valide.');
            } // obligation @ dans le mail 


            successMessage.textContent = 'Le formulaire de "' + name + '" a bien été transmis.'; // message ok si le formulaire est transmis
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none'; // cache le message d'erreur s'il est affiché
            form.reset(); // reset du formulaire si transmis
            } catch (error) {
            errorMessage.textContent = error.message; // affichage du message d'erreur
            errorMessage.style.display = 'block'; // affiche le message d'erreur
            successMessage.style.display = 'none'; // cache le message succès
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
