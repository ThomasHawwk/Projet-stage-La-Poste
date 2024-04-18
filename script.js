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
    const interetBoxes = document.querySelectorAll(".interet-box");

    interetBoxes.forEach(interetBox => {
        const interetDescription = interetBox.querySelector(".interet-description");

        interetDescription.style.display = "none";

        interetBox.addEventListener("mouseover", function() {
            interetDescription.style.display = "block";
        });

        interetBox.addEventListener("mouseout", function() {
            interetDescription.style.display = "none";

        });

        
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const serviceLogos = document.querySelectorAll(".service-logo");

    serviceLogos.forEach(logo => {
        logo.addEventListener("click", function() {
            const description = this.parentNode.querySelector(".service-description");
            if (description.style.display === "none") {
                description.style.display = "block";
            } else {
                description.style.display = "none";
            }
        });
    });
});