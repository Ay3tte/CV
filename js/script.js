// Basculer entre le thème clair et sombre
document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// Basculer entre le français et l'anglais
const translations = {
    en: {
        profilTitle: "Profile",
        profileText: "Second-year IT student, passionate about mathematics, programming, and AI. Always eager to learn new things.",
        contact: "Contact",
        formation: "Education",
        projects: "Projects",
        interests: "Interests",
        documents: "Documents"
    },
    fr: {
        profilTitle: "Profil",
        profileText: "Étudiante en 2ème année de BUT informatique, passionnée par les mathématiques, la programmation et l'IA. Toujours curieuse d'apprendre de nouvelles choses.",
        contact: "Contact",
        formation: "Formation",
        projects: "Projets",
        interests: "Centres d'intérêt",
        documents: "Documents"
    }
};

let currentLanguage = 'fr';
document.getElementById('language-toggle').addEventListener('click', function () {
    currentLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
    document.getElementById('profilTitle').textContent = translations[currentLanguage].profilTitle;
    document.getElementById('profileText').textContent = translations[currentLanguage].profileText;
    document.getElementById('contactTitle').textContent = translations[currentLanguage].contact;
    document.getElementById('formation').textContent = translations[currentLanguage].formation;
    document.getElementById('projects').textContent = translations[currentLanguage].projects;
    document.getElementById('interests').textContent = translations[currentLanguage].interests;
    document.getElementById('documents').textContent = translations[currentLanguage].documents;
});
