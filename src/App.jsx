import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, Code, Globe, Database, GitBranch, Cpu, Calendar, Download, Music, Palette, MapPin, Mail, Linkedin, ExternalLink, Briefcase, GraduationCap, Award, FileText, Heart, Sparkles } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('profil');
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRefs = useRef({});

  // Navigation items
  const navItems = [
    { id: 'profil', label: 'Profil', icon: <Heart className="w-4 h-4" /> },
    { id: 'formation', label: 'Formation', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'competences', label: 'Compétences', icon: <Code className="w-4 h-4" /> },
    { id: 'experience', label: 'Expérience', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'projets', label: 'Projets', icon: <Award className="w-4 h-4" /> },
    { id: 'interets', label: 'Centres d\'intérêt', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'documents', label: 'Documents', icon: <FileText className="w-4 h-4" /> },
    { id: 'avenir', label: 'Et après ?', icon: <MapPin className="w-4 h-4" /> }
  ];

  // Formations data
  const formations = [
    {
      id: 1,
      title: "Semestre d'études Erasmus",
      school: "TU Dublin",
      image: "images/tu.jpg",
      details: [
        "Semestre 3 du Bachelor (BSc) d'informatique",
        "Advanced Database technologies",
        "Client-side web development",
        "Discrete Mathematics",
        "Network fundamentals",
        "Software Development",
        "Software Quality Assurance and Testing"
      ]
    },
    {
      id: 2,
      title: "BUT Informatique",
      school: "IUT de Vannes",
      image: "images/iut.jpg",
      details: [
        "Parcours A : Réalisation d'applications",
        "Coloration locale : Intelligence Artificielle"
      ]
    },
    {
      id: 3,
      title: "Baccalauréat",
      school: "Lycée Saint-Sauveur",
      image: "images/lycee.jpg",
      details: [
        "Spécialités Mathématiques et Anglais Monde Contemporain",
        "Option Maths Expertes",
        "Section européenne",
        "Mention Très Bien"
      ]
    }
  ];

  // Skills data
  const skills = [
    { category: "Programmation", items: ["Java", "Kotlin", "Python", "PL/SQL", "PHP"], icon: <Code className="w-6 h-6" /> },
    { category: "Web", items: ["HTML", "CSS", "Bootstrap", "JavaScript", "Django", "Vue.js", "Node.js"], icon: <Globe className="w-6 h-6" /> },
    { category: "Base de données", items: ["Oracle SQL", "MySQL", "NoSQL"], icon: <Database className="w-6 h-6" /> },
    { category: "DevOps", items: ["Git", "GitHub", "GitLab", "MS Azure", "Docker"], icon: <GitBranch className="w-6 h-6" /> },
    { category: "IA & ML", items: ["Machine Learning", "Deep Learning", "PyTorch"], icon: <Cpu className="w-6 h-6" /> },
    { category: "Gestion de projet", items: ["Méthodes agiles", "SCRUM"], icon: <Calendar className="w-6 h-6" /> }
  ];

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Communes bretonnes",
      description: "Application JavaFX",
      image: "images/app.png",
      details: "Développement d'une application JavaFX en architecture MVC, intégrant des fonctionnalités CRUD pour la valorisation et exploitation de données publiques.",
      tech: ["JavaFX", "MVC", "Base de données"]
    },
    {
      id: 2,
      title: "Initiation informatique",
      description: "Animation pédagogique",
      image: "images/ecole.png",
      details: "Animation de séances d'initiation à l'informatique et robotique pour des élèves de CM1/CM2.",
      tech: ["Pédagogie", "Robotique", "Programmation"],
      link: "https://drive.google.com/file/d/14WzwtKeyDDicblLjs-7BuFScc8aG5_MD/view?usp=sharing"
    },
    {
      id: 3,
      title: "CTF 2023",
      description: "Compétition cybersécurité",
      image: "images/ctf.png",
      details: "Participation à une compétition de cybersécurité organisée par le BDE informatique.",
      tech: ["Cybersécurité", "Analyse", "Résolution de problèmes"],
      link: "https://www.ouest-france.fr/societe/cyberattaque/les-cyberattaques-deviennent-un-jeu-a-liut-de-vannes-1fe8a3d8-a01d-11ee-bd2f-c995ab88b3c3"
    },
    {
      id: 4,
      title: "Site WordPress",
      description: "Site web pour Saint-Gilles",
      image: "images/wordpress.png",
      details: "Conception d'un site WordPress complet avec boutique et blog pour la ville de Saint-Gilles-Croix-de-Vie (client fictif).",
      tech: ["WordPress", "Design", "E-commerce"],
      link: "https://youtu.be/KGwULzNjZzc"
    },
    {
      id: 5,
      title: "AudioStore",
      description: "Site e-commerce Django",
      image: "images/audiostore.png",
      details: "Développement d'un site e-commerce complet avec panier, paiement et système d'avis.",
      tech: ["Django", "Python", "JavaScript", "Bootstrap"]
    },
    {
      id: 6,
      title: "ToDoApp",
      description: "Application web Vue.js de gestion de tâches",
      image: "images/todo.png",
      details: "Développement d'un site permettant de créer, modifier, trier, et filtrer des tâches",
      tech: ["Vue.js", "HTML", "CSS (Tailwind)", "JavaScript"],
      link: "https://ay3tte.github.io/ToDoApp/"
    }
  ];

  // Documents data
  const documents = [
    { name: "CV", file: "docs/CV_alternance_Ayette.pdf", icon: <FileText /> },
    { name: "Relevé Bac", file: "docs/releve_bac.pdf", icon: <Award /> },
    { name: "Relevé S1", file: "docs/releve_but_s1.pdf", icon: <FileText /> },
    { name: "Relevé S2", file: "docs/releve_but_s2.pdf", icon: <FileText /> },
    { name: "TOEIC", file: "docs/toeic.pdf", icon: <Award /> }
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    sectionRefs.current[sectionId]?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-6 h-6 text-purple-600" />
              <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Ayette
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-1
                    ${activeSection === item.id 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105' 
                      : 'text-gray-700 hover:bg-purple-100'
                    }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-purple-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden bg-white/95 backdrop-blur-md`}>
          <div className="px-4 py-2 space-y-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-purple-100 transition-colors flex items-center space-x-2"
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="profil" 
        ref={el => sectionRefs.current.profil = el}
        className="min-h-screen flex items-center justify-center pt-16"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            visibleSections.has('profil') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Ayette El homadi-Leveque
                </span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Étudiante en 2ème année de BUT informatique, passionnée par les mathématiques, 
                la programmation, et l'intelligence artificielle.
              </p>
              <p className="text-lg text-gray-600">
                Je recherche une alternance pour l'année 2025-2026 afin de renforcer mes 
                compétences tout en contribuant à des projets numériques innovants.
              </p>
              <div className="flex space-x-4">
                <a href="mailto:ayetteelhomadi@yahoo.com" 
                   className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg transform hover:scale-110 transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/ayette-el-homadi-leveque" 
                   target="_blank" rel="noopener noreferrer"
                   className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full hover:shadow-lg transform hover:scale-110 transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <img 
                src="images/ayette.jpeg" 
                alt="Ayette" 
                className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="text-center mt-12 animate-bounce">
            <ChevronDown className="w-8 h-8 text-purple-600 mx-auto" />
          </div>
        </div>
      </section>

      {/* Formation Section */}
      <section 
        id="formation" 
        ref={el => sectionRefs.current.formation = el}
        className="py-20 bg-white/50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Formation
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {formations.map((formation, index) => (
              <div 
                key={formation.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 ${
                  visibleSections.has('formation') 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 relative overflow-hidden">
                  <img 
                    src={formation.image} 
                    alt={formation.school}
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{formation.title}</h3>
                  <p className="text-gray-600 mb-4">{formation.school}</p>
                  <details className="group">
                    <summary className="cursor-pointer text-purple-600 hover:text-purple-700 transition-colors font-medium">
                      Voir plus
                    </summary>
                    <ul className="mt-3 space-y-1 text-sm text-gray-600">
                      {formation.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-pink-500 mr-2">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compétences Section */}
      <section 
        id="competences" 
        ref={el => sectionRefs.current.competences = el}
        className="py-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Compétences
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.category}
                className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${
                  visibleSections.has('competences') 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg mr-3">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-bold">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map(item => (
                    <span 
                      key={item}
                      className="px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-gray-700 rounded-full text-sm hover:from-purple-100 hover:to-pink-100 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section 
        id="experience" 
        ref={el => sectionRefs.current.experience = el}
        className="py-20 bg-white/50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Expérience professionnelle
          </h2>
          <div className={`bg-white rounded-xl shadow-xl p-8 transition-all duration-1000 ${
            visibleSections.has('experience') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
                <Briefcase className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Stage - Conseil départemental du Morbihan</h3>
                <p className="text-gray-600 mb-4">Janvier 2025 - Mars 2025 | Projet BalaBox</p>
                <p className="text-gray-700 mb-4">
                  Modernisation de l'interface, amélioration de l'expérience utilisateur, 
                  ajout de fonctionnalités, sécurisation du site, rédaction de documentation, 
                  création de tests (manuels et automatiques).
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Vue.js", "Node.js", "HTML/CSS", "JavaScript", "SQLite", "API REST", "GitLab"].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href="https://drive.google.com/file/d/1ysvF49rOUUta6pDkBSQSAdopMen4Nx8n/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Voir le support de soutenance</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projets" 
        ref={el => sectionRefs.current.projets = el}
        className="py-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Projets
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-500 ${
                  visibleSections.has('projets') 
                    ? 'opacity-100 rotate-0' 
                    : 'opacity-0 rotate-3'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map(tech => (
                      <span key={tech} className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
             onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
               onClick={e => e.stopPropagation()}>
            <div className="relative h-64 bg-gradient-to-br from-purple-400 to-pink-400">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-full object-cover opacity-80"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
              <p className="text-gray-700 mb-6">{selectedProject.details}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              {selectedProject.link && (
                <a 
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-shadow"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Voir plus</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Interests Section */}
      <section 
        id="interets" 
        ref={el => sectionRefs.current.interets = el}
        className="py-20 bg-white/50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Centres d'intérêt
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-1000 ${
              visibleSections.has('interets') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 relative overflow-hidden">
                <img 
                  src="images/piano.jpg" 
                  alt="Musique"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Music className="w-6 h-6 text-purple-600 mr-2" />
                  <h3 className="text-xl font-bold">Musique</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Cours de clarinette et de violon en conservatoire pendant 5 ans et pratique du piano en autodidacte
                </p>
                <audio controls className="w-full">
                  <source src="media/piano.mp3" type="audio/mpeg" />
                </audio>
              </div>
            </div>
            
            <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-1000 ${
              visibleSections.has('interets') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 relative overflow-hidden">
                <img 
                  src="images/dessin.jpg" 
                  alt="Dessin"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Palette className="w-6 h-6 text-purple-600 mr-2" />
                  <h3 className="text-xl font-bold">Dessin</h3>
                </div>
                <p className="text-gray-700">
                  Suivi de l'option et spécialité Arts Plastiques au lycée
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section 
        id="documents" 
        ref={el => sectionRefs.current.documents = el}
        className="py-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Documents
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {documents.map((doc, index) => (
              <a
                key={doc.name}
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transform hover:-translate-y-1 transition-all duration-500 ${
                  visibleSections.has('documents') 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-90'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="text-purple-600 mb-3 flex justify-center">
                  {React.cloneElement(doc.icon, { className: "w-8 h-8" })}
                </div>
                <p className="text-sm font-medium text-gray-700">{doc.name}</p>
                <Download className="w-4 h-4 text-gray-400 mx-auto mt-2" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section 
        id="avenir" 
        ref={el => sectionRefs.current.avenir = el}
        className="py-20 bg-gradient-to-br from-purple-100 to-pink-100"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Et après ?
          </h2>
          <div className={`bg-white rounded-2xl shadow-xl p-8 md:p-12 transition-all duration-1000 ${
            visibleSections.has('avenir') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-lg text-gray-700 leading-relaxed">
              Après mon BUT, j'envisage d'intégrer une école d'ingénieur spécialisée en génie logiciel 
              ou en intelligence artificielle. Mon ambition est de continuer à innover dans le domaine 
              du numérique en contribuant à des projets innovants et utiles pour la société, 
              potentiellement dans les secteurs du service public ou de la santé.
            </p>
            <div className="mt-8 flex justify-center">
              <MapPin className="w-6 h-6 text-purple-600 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="mb-4">&copy; 2025 Ayette El homadi-Leveque</p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:ayetteelhomadi@yahoo.com" className="hover:text-purple-300 transition-colors">
              ayetteelhomadi@yahoo.com
            </a>
            <a href="https://www.linkedin.com/in/ayette-el-homadi-leveque" 
               target="_blank" 
               rel="noopener noreferrer"
               className="hover:text-purple-300 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
