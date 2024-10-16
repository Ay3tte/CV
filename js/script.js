// Initialisation des animations AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init(); // Initialisation des animations AOS
});

// Afficher la modal après le chargement de la page
window.onload = function() {
    var constructionModal = new bootstrap.Modal(document.getElementById('constructionModal'));
    constructionModal.show();
};
