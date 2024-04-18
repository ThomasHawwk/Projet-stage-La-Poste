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

