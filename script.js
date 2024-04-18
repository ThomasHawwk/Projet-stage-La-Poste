fetch("/donnees.json")
  .then(response => {
    return response.json();
  })
  .then(data => {
    const hobbies = data.hobbies;

    hobbies.forEach((hobby, index) => {
      const interetName = document.querySelectorAll(".interet-name")[index];
      const interetDescription = document.querySelectorAll(".interet-description")[index];

      interetName.textContent = hobby.name;
      interetDescription.textContent = hobby.description;
    });
  })
  .catch(error => {
    console.error('Une erreur s\'est produite lors de la récupération des données JSON :', error);
  });




document.addEventListener("DOMContentLoaded", function() {
    const interetBoxes = document.querySelectorAll(".interet-box"); // selectionne tout les elements ayant classe interet-box

    interetBoxes.forEach(interetBox => {
        const interetDescription = interetBox.querySelector(".interet-description"); // pour chaque element box on selectionne interet-description

        interetDescription.style.display = "none"; // on le masque initialement

        interetBox.addEventListener("mouseover", function() {
            interetDescription.style.display = "block";
        }); // si la souris est dessus on affiche la description

        interetBox.addEventListener("mouseout", function() {
            interetDescription.style.display = "none";

        }); // au contraire on l'enleve ca masque la description

        
    });
});


document.addEventListener("DOMContentLoaded", function() {
  const serviceBtns = document.querySelectorAll(".service-btn"); // selectionne tout les boutons de service

  serviceBtns.forEach(btn => {
      btn.addEventListener("click", function() { // pour chaque boutonon ajoute un evenement click
          const description = this.parentNode.querySelector(".service-description"); //selectionne la description associé
          const computedStyle = window.getComputedStyle(description);//la recupere

          if (computedStyle.display === "none") { // verifie si la descrition est actuellement caché
              description.style.display = "block";// cliqué on affiche donc la description
          } else {
              description.style.display = "none"; // sinon cache la
          }
      });
  });
});