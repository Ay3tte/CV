// Initialisation des animations AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init(); // Initialisation des animations AOS
});

// Afficher la modal après le chargement de la page
window.onload = function() {
    var constructionModal = new bootstrap.Modal(document.getElementById('constructionModal'));
    constructionModal.show();
};

// Basculer entre le thème clair et sombre
document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// Basculer entre le français et l'anglais
const translations = {
    en: {
        profilTitle: "Profile",
        profileText: "Second-year IT student, passionate about mathematics, programming, and AI. Always eager to learn new things.",
        profileStageText: "Looking for an internship in January 2025.",
        formationTitle: "Education",
        projectsTitle: "Projects",
        interestsTitle: "Interests",
        contactTitle: "Contact"
    },
    fr: {
        profilTitle: "Profil",
        profileText: "Étudiante en 2ème année de BUT informatique, passionnée par les mathématiques, la programmation, et l'intelligence artificielle.",
        profileStageText: "Je recherche un stage pour janvier 2025.",
        formationTitle: "Formation",
        projectsTitle: "Projets",
        interestsTitle: "Centres d'intérêt",
        contactTitle: "Contact"
    }
};

let currentLanguage = 'fr';
document.getElementById('language-toggle').addEventListener('click', function () {
    currentLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
    document.getElementById('profilTitle').textContent = translations[currentLanguage].profilTitle;
    document.getElementById('profileText').textContent = translations[currentLanguage].profileText;
    document.getElementById('profileStageText').textContent = translations[currentLanguage].profileStageText;
    document.getElementById('formationTitle').textContent = translations[currentLanguage].formationTitle;
    document.getElementById('projectsTitle').textContent = translations[currentLanguage].projectsTitle;
    document.getElementById('interestsTitle').textContent = translations[currentLanguage].interestsTitle;
    document.getElementById('contactTitle').textContent = translations[currentLanguage].contactTitle;
});
