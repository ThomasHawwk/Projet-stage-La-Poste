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


//Test caroussel 

// Ceci est une fonction auto - exécutable.Les fonctions auto - exécutables
// sont des fonctions qui s'exécutent immédiatement après leur déclaration,
// sans avoir besoin d'être appelées.Les accolades immédiatement après la 
// déclaration de la fonction et les parenthèses à la fin de la déclaration 
// définissent la fonction et permettent de l'exécuter immédiatement.
(function () {
  // Utilisation de la directive "use strict" pour activer le mode strict en JavaScript
  // Cela implique une meilleure gestion des erreurs et une syntaxe plus stricte pour le code
  "use stict"
  // Déclare la constante pour la durée de chaque slide
  const slideTimeout = 5000;
  // Récupère les boutons de navigation
  const prev = document.querySelector('#prev');
  const next = document.querySelector('#next');
  // Récupère tous les éléments de type "slide"
  const $slides = document.querySelectorAll('.slide');
  // Initialisation de la variable pour les "dots"
  let $dots;
  // Initialisation de la variable pour l'intervalle d'affichage des slides
  let intervalId;
  // Initialisation du slide courant à 1
  let currentSlide = 1;
  // Fonction pour afficher un slide spécifique en utilisant un index
  function slideTo(index) {
      // Vérifie si l'index est valide (compris entre 0 et le nombre de slides - 1)
      currentSlide = index >= $slides.length || index < 1 ? 0 : index;
      // Boucle sur tous les éléments de type "slide" pour les déplacer
      $slides.forEach($elt => $elt.style.transform = `translateX(-${currentSlide * 100}%)`);
      // Boucle sur tous les "dots" pour mettre à jour la couleur par la classe "active" ou "inactive"
      $dots.forEach(($elt, key) => $elt.classList = `dot ${key === currentSlide? 'active': 'inactive'}`);
  }
  // Fonction pour afficher le prochain slide
  function showSlide() {
      slideTo(currentSlide);
      currentSlide++;
  }
  // Boucle pour créer les "dots" en fonction du nombre de slides
  for (let i = 1; i <= $slides.length; i++) {
      let dotClass = i == currentSlide ? 'active' : 'inactive';
      let $dot = `<span data-slidId="${i}" class="dot ${dotClass}"></span>`;
      document.querySelector('.carousel-dots').innerHTML += $dot;
  }
  // Récupère tous les "dots"
  $dots = document.querySelectorAll('.dot');
  // Boucle pour ajouter des écouteurs d'événement "click" sur chaque "dot"
  $dots.forEach(($elt, key) => $elt.addEventListener('click', () => slideTo(key)));
  // Ajout d'un écouteur d'événement "click" sur le bouton "prev" pour afficher le slide précédent
  prev.addEventListener('click', () => slideTo(--currentSlide))
  // Ajout d'un écouteur d'événement "click" sur le bouton "next" pour afficher le slide suivant
  next.addEventListener('click', () => slideTo(++currentSlide))
  // Initialisation de l'intervalle pour afficher les slides
  intervalId = setInterval(showSlide, slideTimeout)
  // Boucle sur tous les éléments de type "slide" pour ajouter des écouteurs d'événement pour les interactions avec la souris et le toucher
  $slides.forEach($elt => {
      let startX;
      let endX;
      // Efface l'intervalle d'affichage des slides lorsque la souris passe sur un slide
      $elt.addEventListener('mouseover', () => {
          clearInterval(intervalId);
      }, false)
      // Réinitialise l'intervalle d'affichage des slides lorsque la souris sort d'un slide
      $elt.addEventListener('mouseout', () => {
          intervalId = setInterval(showSlide, slideTimeout);
      }, false);
      // Enregistre la position initiale du toucher lorsque l'utilisateur touche un slide
      $elt.addEventListener('touchstart', (event) => {
          startX = event.touches[0].clientX;
      });
      // Enregistre la position finale du toucher lorsque l'utilisateur relâche son doigt
      $elt.addEventListener('touchend', (event) => {
          endX = event.changedTouches[0].clientX;
          // Si la position initiale est plus grande que la position finale, affiche le prochain slide
          if (startX > endX) {
              slideTo(currentSlide + 1);
              // Si la position initiale est plus petite que la position finale, affiche le slide précédent
          } else if (startX < endX) {
              slideTo(currentSlide - 1);
          }
      });
  })
})()