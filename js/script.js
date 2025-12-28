document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking a link
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // Smooth Scrolling for anchor links (polyfill for older browsers if needed, but CSS scroll-behavior handles most)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
            } else {
                header.style.boxShadow = 'none';
            }
        });
    }

    /* --- GESTION DES PROJETS SECONDAIRES --- */

    const moreProjects = document.getElementById('more-projects');
    const showMoreBtn = document.getElementById('show-more-btn');

    if (moreProjects && showMoreBtn) {
        showMoreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            moreProjects.classList.toggle('visible');

            if (moreProjects.classList.contains('visible')) {
                showMoreBtn.innerHTML = '<i class="fas fa-minus"></i> Voir moins';
            } else {
                showMoreBtn.innerHTML = '<i class="fas fa-plus"></i> Voir plus de projets';
            }
        });
    }

    /* --- GESTION DES CERTIFICATIONS SECONDAIRES --- */

    const allCertsSection = document.getElementById('all-certs');
    const toggleCertsButton = document.getElementById('toggle-certs-button');

    // 1. Masquer la section des certifications secondaires au chargement
    if (allCertsSection) {
        allCertsSection.classList.add('hidden');
    }

    // 2. Écouteur d'événement sur le bouton "Voir Plus de Certifications"
    if (toggleCertsButton && allCertsSection) {
        toggleCertsButton.addEventListener('click', (e) => {
            e.preventDefault();

            // Si la section est cachée, on l'affiche
            if (allCertsSection.classList.contains('hidden')) {
                allCertsSection.classList.remove('hidden');
                toggleCertsButton.textContent = 'Masquer les certifications supplémentaires'; // Changement de texte

                // Défiler pour montrer les certifications
                allCertsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                // Si la section est visible, on la cache
                allCertsSection.classList.add('hidden');
                toggleCertsButton.textContent = 'Voir 1+ autres Certifications'; // Rétablissement du texte
            }
        });
    }

    /* --- GESTION DU PARCOURS (SWITCH) --- */
    const timelineToggle = document.getElementById('timeline-toggle');
    const timelinePro = document.getElementById('timeline-pro');
    const timelineAcademic = document.getElementById('timeline-academic');
    const labelPro = document.getElementById('label-pro');
    const labelAcademic = document.getElementById('label-academic');

    // Fonction pour changer manuellement via les labels
    window.setTimeline = (type) => { // Attached to window for HTML onclick access
        if (type === 'pro') {
            if (timelineToggle) timelineToggle.checked = false;
            updateTimelineDisplay(false);
        } else {
            if (timelineToggle) timelineToggle.checked = true;
            updateTimelineDisplay(true);
        }
    };

    // Fonction pour le switch
    window.toggleTimeline = () => {
        // managed by label/input connection or change event
    };

    if (timelineToggle) {
        timelineToggle.addEventListener('change', (e) => {
            updateTimelineDisplay(e.target.checked);
        });
    }

    function updateTimelineDisplay(isAcademic) {
        if (isAcademic) {
            // Afficher Académique
            if (timelinePro) timelinePro.classList.add('hidden');
            if (timelineAcademic) timelineAcademic.classList.remove('hidden');

            if (labelPro) labelPro.classList.remove('active');
            if (labelAcademic) labelAcademic.classList.add('active');
        } else {
            // Afficher Professionnel
            if (timelineAcademic) timelineAcademic.classList.add('hidden');
            if (timelinePro) timelinePro.classList.remove('hidden');

            if (labelAcademic) labelAcademic.classList.remove('active');
            if (labelPro) labelPro.classList.add('active');
        }
    }

    /* --- GESTION DU THEME (LIGHT/DARK) --- */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved user preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            body.classList.toggle('light-mode');

            // Save preference
            if (body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light');
            } else {
                localStorage.setItem('theme', 'dark');
            }
        });
    }
    // --- DÉBUT LOGIQUE TRADUCTION ---

    // Les traductions sont maintenant dans le fichier translations.js
    // Assurez-vous que translations.js est chargé avant script.js dans le HTML

    // Récupérer la langue sauvegardée ou utiliser 'fr' par défaut
    let currentLang = localStorage.getItem('lang') || 'fr';

    /**
     * Met à jour le contenu de la page avec la langue spécifiée.
     * @param {string} lang La langue cible ('fr' ou 'en').
     */
    function setLanguage(lang) {
        // 1. Traduire tous les éléments avec un attribut data-key
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[key] && translations[key][lang]) {
                const translation = translations[key][lang];

                // Vérifier si l'élément a une icône FontAwesome
                const icon = element.querySelector('i.fas, i.fab, i.fa');
                if (icon) {
                    // Garder l'icône et mettre à jour le texte
                    element.innerHTML = icon.outerHTML + ' ' + translation;
                } else if (translation.includes('<')) {
                    // Si la traduction contient du HTML, utiliser innerHTML
                    element.innerHTML = translation;
                } else {
                    // Sinon, utiliser textContent (plus sûr)
                    element.textContent = translation;
                }
            }
        });

        // 2. Mettre à jour l'attribut lang de la balise <html>
        document.documentElement.setAttribute('lang', lang);

        // Mettre à jour le label du dropdown avec la langue actuelle
        const currentLangLabel = document.getElementById('current-lang-label');
        if (currentLangLabel && translations.current_lang_label) {
            currentLangLabel.textContent = translations.current_lang_label[lang];
        }

        // 3. Mettre à jour le texte du bouton "Voir Plus/Moins" des projets
        const showMoreBtn = document.getElementById('show-more-btn');
        const moreProjects = document.getElementById('more-projects');
        if (showMoreBtn && moreProjects) {
            if (moreProjects.classList.contains('visible')) {
                showMoreBtn.innerHTML = '<i class="fas fa-minus"></i> ' + translations.show_less_btn[lang];
            } else {
                showMoreBtn.innerHTML = '<i class="fas fa-plus"></i> ' + translations.show_more_btn[lang];
            }
        }

        // 5. Sauvegarder la nouvelle langue et mettre à jour l'état
        localStorage.setItem('lang', lang);
        currentLang = lang;
    }

    /**
     * Événement pour le menu déroulant de langue (Ouverture au survol)
     */
    const langDropdownBtn = document.getElementById('lang-dropdown-btn');
    const langDropdownMenu = document.getElementById('lang-dropdown-menu');
    const langDropdownContainer = document.querySelector('.lang-dropdown-container');
    const currentLangLabel = document.getElementById('current-lang-label');
    const langOptions = document.querySelectorAll('.lang-option');

    let closeTimeout;

    if (langDropdownBtn && langDropdownMenu && langDropdownContainer) {
        // Ouvrir le menu au survol du bouton
        langDropdownBtn.addEventListener('mouseenter', () => {
            clearTimeout(closeTimeout);
            langDropdownMenu.classList.add('show');
            langDropdownBtn.classList.add('active');
        });

        // Garder le menu ouvert quand on survole le menu lui-même
        langDropdownMenu.addEventListener('mouseenter', () => {
            clearTimeout(closeTimeout);
        });

        // Fermer le menu quand on quitte le conteneur (avec délai)
        langDropdownContainer.addEventListener('mouseleave', () => {
            closeTimeout = setTimeout(() => {
                langDropdownMenu.classList.remove('show');
                langDropdownBtn.classList.remove('active');
            }, 200);
        });

        // Sélection de langue
        langOptions.forEach(option => {
            option.addEventListener('click', () => {
                const selectedLang = option.getAttribute('data-lang');

                // Mettre à jour l'état actif
                langOptions.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');

                // Changer la langue
                setLanguage(selectedLang);

                // Fermer le menu
                langDropdownMenu.classList.remove('show');
                langDropdownBtn.classList.remove('active');

                // Sauvegarder dans localStorage
                localStorage.setItem('lang', selectedLang);
                currentLang = selectedLang;
            });
        });

        // Définir l'option active initiale
        langOptions.forEach(option => {
            if (option.getAttribute('data-lang') === currentLang) {
                option.classList.add('active');
            }
        });
    }

    // Appliquer la langue sauvegardée au chargement de la page
    setLanguage(currentLang);

    // --- FIN LOGIQUE TRADUCTION ---

});
