// Fichier de traductions pour le portfolio
// Utilisation : importer ce fichier dans script.js

const translations = {
    // ============================================================
    // NAVIGATION
    // ============================================================
    nav_logo: { fr: "Portfolio", en: "Portfolio" },
    nav_about: { fr: "À Propos", en: "About" },
    nav_projects: { fr: "Projets", en: "Projects" },
    nav_experience: { fr: "Parcours", en: "Experience" },
    nav_certifications: { fr: "Certifications", en: "Certifications" },
    nav_contact: { fr: "Contact", en: "Contact" },

    // ============================================================
    // INDEX.HTML - HERO SECTION
    // ============================================================
    title_tag: { fr: "Portfolio Développeur", en: "Developer Portfolio" },
    hero_title: {
        fr: 'Développeur <span class="highlight">Full Stack</span>',
        en: '<span class="highlight">Full Stack</span> Developer'
    },
    hero_subtitle: {
        fr: "Passionné par le développement Web, Applicatif et Mobile, j'explore continuellement des technologies pour la conception de solutions digitales.",
        en: "Passionate about Web, Application, and Mobile development, I continually explore technologies for designing digital solutions."
    },
    hero_btn_projects: { fr: "Voir mes projets", en: "View my projects" },
    hero_btn_cv: { fr: "Télécharger CV", en: "Download CV" },

    // ============================================================
    // SECTION À PROPOS
    // ============================================================
    about_title: { fr: "À Propos", en: "About" },
    tech_title: { fr: "Technologies", en: "Technologies" },
    about_bio: {
        fr: "Développeur curieux et engagé, j'imagine et je créer des solutions digitales. Je m'efforce de suivre les évolutions de la tech, tout en m'inspirant simplement de mes intérêts personnels, comme les marchés financiers et le montage vidéo, qui me permettent d'avoir un équilibre entre analyse et créativité dans mes projets quotidiens. Chaque jour, je me réinvente personnellement en tirant des leçons de mes propres expériences, en adoptant une approche simple et efficace qui me permet de mieux structurer mes projets et de nouveaux défis qui me motivent de jour en jour.",
        en: "As a curious and committed developer, I imagine and create digital solutions. I strive to follow technological developments while drawing inspiration from my personal interests, such as financial markets and video editing, which allow me to maintain a balance between analysis and creativity in my daily projects. Every day, I reinvent myself personally by drawing lessons from my own experiences, adopting a simple and effective approach that helps me better structure my projects and take on new challenges that motivate me day by day."
    },

    // ============================================================
    // SECTION PROJETS
    // ============================================================
    projects_main_title: { fr: "✨ Mes Projets", en: "✨ My Projects" },

    // Projet 1 - Bouquet Customization
    project1_title: { fr: "Personnalisation de Bouquet", en: "Bouquet Customization" },
    project1_badge: { fr: "Bientôt", en: "Coming Soon" },
    project1_desc: {
        fr: "Développement d'une application dédiée à la personnalisation avancée de bouquets de fleurs pour une clientèle B2C et B2B, offrant également des options pour les bouquets de saison et d'événements. Le projet est axé sur l'intégration d'un configurateur visuel dynamique et 3D, permettant au client de composer son bouquet sur mesure en sélectionnant en temps réel les variétés, les couleurs et les accessoires. L'outil assure une gestion complète des contraintes de stock et un calcul de prix dynamique en fonction des choix, garantissant une expérience d'achat unique et sur mesure pour une satisfaction client maximale.",
        en: "Development of an application dedicated to advanced flower bouquet customization for B2C and B2B customers, also offering options for seasonal and event bouquets. The project focuses on integrating a dynamic 3D visual configurator, allowing the customer to compose their custom bouquet by selecting varieties, colors, and accessories in real-time. The tool ensures complete stock constraint management and dynamic price calculation based on choices, guaranteeing a unique and tailored shopping experience for maximum customer satisfaction."
    },

    // Projet 2 - YouTube PiP
    project2_title: { fr: "YouTube PiP", en: "YouTube PiP" },
    project2_desc: {
        fr: "Développement d'une extension Web pour optimiser le multitâche. Le projet est axé sur l'intégration d'un mécanisme de lecture vidéo flottant, permettant de détacher n'importe quelle vidéo d'une page Web dans une fenêtre redimensionnable et toujours visible. L'outil assure une gestion complète des contrôles de lecture, pause et son intégration non intrusive garantit une productivité maximale.",
        en: "Development of a Web extension to optimize multitasking. The project focuses on integrating a floating video playback mechanism, allowing any video to be detached from a web page into a resizable, always-visible window. The tool ensures complete playback control management, and its non-intrusive integration guarantees maximum productivity."
    },

    // Projet 3 - SpotyFusion
    project3_title: { fr: "SpotyFusion", en: "SpotyFusion" },
    project3_desc: {
        fr: "Développée pour enrichir l'engagement utilisateur de Spotify. Axé sur l'intégration front-end et l'exploitation de données tierces, utilise le flux OAuth 2.0 de l'API Spotify pour générer deux outils principaux : un Dashboard d'analyse musicale personnalisé et un Blind Test interactif.",
        en: "Developed to enhance Spotify user engagement. Focused on front-end integration and third-party data exploitation, uses Spotify API OAuth 2.0 flow to generate two main tools: a personalized music analytics Dashboard and an interactive Blind Test."
    },

    // Projet 4 - Doorception
    project4_title: { fr: "Doorception", en: "Doorception" },
    project4_desc: {
        fr: "Conception et développement d'un Escape Game immersif en 3D. Le projet se concentre sur l'intégration de mécanismes de jeu interactifs et la résolution d'énigmes. Gestion avancée des physiques, des animations environnementales et d'un système d'inventaire pour une expérience complète.",
        en: "Design and development of an immersive 3D Escape Game. The project focuses on integrating interactive game mechanics and puzzle solving. Advanced physics management, environmental animations, and an inventory system for a complete experience."
    },

    // Projet 5 - StarDucks
    project5_title: { fr: "StarDucks", en: "StarDucks" },
    project5_desc: {
        fr: "Conception et développement d'une application bureau pour la gestion des commandes de boissons. Le projet se concentre sur l'intégration d'une interface intuitive et de mécanismes de recherche et de filtrage.",
        en: "Design and development of a desktop application for beverage order management. The project focuses on integrating an intuitive interface and search/filtering mechanisms."
    },

    // Projet 6 - QuantScale
    project6_title: { fr: "QuantScale", en: "QuantScale" },
    project6_desc: {
        fr: "Conception et développement d'une extension Chrome dédiée au calcul contextuel de taille de position pour les marchés financiers (Forex, Crypto, Or). L'outil intègre un calculateur multi-actifs avec gestion avancée du risque, sauvegarde locale du capital et du pourcentage de risque, et affichage en temps réel du lot, du risque en cash, du profit potentiel et du ratio Risk/Reward.",
        en: "Design and development of a Chrome extension dedicated to contextual position size calculation for financial markets (Forex, Crypto, Gold). The tool integrates a multi-asset calculator with advanced risk management, local saving of capital and risk percentage, and real-time display of lot size, cash risk, potential profit, and Risk/Reward ratio."
    },

    // Boutons d'action projets
    link_code: { fr: "Voir le Code", en: "View Code" },
    link_view: { fr: "Voir le Projet", en: "View Project" },
    link_demo: { fr: "Démo", en: "Demo" },
    show_more_btn: { fr: "Voir plus de projets", en: "Show more projects" },
    show_less_btn: { fr: "Voir moins", en: "Show less" },

    // ============================================================
    // SECTION EXPERIENCE (PARCOURS)
    // ============================================================
    experience_title: { fr: "Mon Parcours", en: "Career" },
    label_pro: { fr: "Professionnel", en: "Professional" },
    label_academic: { fr: "Académique", en: "Academic" },

    // Expérience Professionnelle 1
    exp_pro1_year: { fr: "2023 jusqu'à ce jour", en: "2023 - Present" },
    exp_pro1_title: { fr: "Vendeur Polyvalent CDI (étudiant)", en: "Versatile Sales Associate (student)" },
    exp_pro1_company: { fr: "La Vie Claire - Massy", en: "La Vie Claire - Massy" },
    exp_pro1_desc: {
        fr: "En tant que Vendeur Polyvalent, je suis en charge de l'expérience client, assurant bon conseil et orientation pour maximiser la satisfaction client, soutenir les objectifs de vente et la garantie des normes d'hygiène, de sécurité.",
        en: "As a Versatile Sales Associate, I am in charge of customer experience, providing good advice and guidance to maximize customer satisfaction, support sales objectives and guarantee hygiene and safety standards."
    },

    // Expérience Professionnelle 2
    exp_pro2_year: { fr: "2023 - 2024", en: "2023 - 2024" },
    exp_pro2_title: { fr: "Développeur Web", en: "Web Developer" },
    exp_pro2_company: { fr: "Techfizz - Massy (Stage 8 semaines)", en: "Techfizz - Massy (8-week Internship)" },
    exp_pro2_desc: {
        fr: "Conception et développement complet d'un Outil de Formation, intégrant un système dédié aux formateurs pour la création, la gestion et la publication de leurs cours / modules ainsi que le module permettant aux utilisateurs finaux d'assister et de suivre les cours / modules.",
        en: "Complete design and development of a Training Tool, integrating a system dedicated to trainers for creating, managing and publishing their courses/modules as well as the module allowing end users to attend and follow courses/modules."
    },

    // Expérience Professionnelle 3
    exp_pro3_year: { fr: "2022 - 2023", en: "2022 - 2023" },
    exp_pro3_title: { fr: "Développeur Web", en: "Web Developer" },
    exp_pro3_company: { fr: "Tiptop - 75008 PARIS (Stage 8 semaines)", en: "Tiptop - 75008 PARIS (8-week Internship)" },
    exp_pro3_desc: {
        fr: "En tant que Développeur Web, j'ai développé des outils marketing et d'automatisation, en me concentrant sur la création d'e-mails stylisés intégrés dans la plateforme Autotask PSA. Mon rôle comprenait également le développement complet d'un système d'affiliation en utilisant WordPress, ainsi que l'intégration et la personnalisation des fonctionnalités du site d'affiliation.",
        en: "As a Web Developer, I developed marketing and automation tools, focusing on creating stylized emails integrated into the Autotask PSA platform. My role also included the complete development of an affiliate system using WordPress, as well as the integration and customization of affiliate site features."
    },

    // Expérience Professionnelle 4
    exp_pro4_year: { fr: "2021 - 2022", en: "2021 - 2022" },
    exp_pro4_title: { fr: "Technicien Support Informatique", en: "IT Support Technician" },
    exp_pro4_company: { fr: "Tiptop - PARIS (Stage 8 semaines)", en: "Tiptop - PARIS (8-week Internship)" },
    exp_pro4_desc: {
        fr: "En tant que Technicien Support Informatique, ma mission couvrait la gestion des incidents via Zammad et le suivi des projets informatiques via Trello. Mon rôle impliquait également l'assistance quotidienne à la maintenance du parc informatique de l'entreprise, ainsi que la sensibilisation des utilisateurs aux bonnes pratiques essentielles de sécurité informatique.",
        en: "As an IT Support Technician, my mission covered incident management via Zammad and IT project tracking via Trello. My role also involved daily assistance in maintaining the company's IT infrastructure, as well as raising user awareness of essential IT security best practices."
    },

    // Expérience Académique 1
    exp_acad1_year: { fr: "2025 - 2026", en: "2025 - 2026" },
    exp_acad1_title: { fr: "Développeur Solutions Web et Mobile", en: "Web and Mobile Solutions Developer" },
    exp_acad1_company: { fr: "Coding Factory by ESIEE-IT - 75015 PARIS (Bac +3)", en: "Coding Factory by ESIEE-IT - 75015 PARIS (Bachelor's Degree)" },
    exp_acad1_desc: {
        fr: "Cette formation en Alternance est axée sur trois piliers fondamentaux : la Sécurité des Applications et l'Architecture, la Conception de Solutions intégrant les Méthodes Agiles, et le Développement Multiplateforme.",
        en: "This work-study program focuses on three fundamental pillars: Application Security and Architecture, Solution Design integrating Agile Methods, and Cross-platform Development."
    },

    // Expérience Académique 2
    exp_acad2_year: { fr: "2024 - 2025", en: "2024 - 2025" },
    exp_acad2_title: { fr: "Concepteur Développeur d'Application", en: "Application Designer Developer" },
    exp_acad2_company: { fr: "CESI - École d'ingénieurs, Paris Nanterre (Bac +3)", en: "CESI - Engineering School, Paris Nanterre (Bachelor's Degree)" },
    exp_acad2_desc: {
        fr: "Le Bachelor Concepteur Développeur d'Application est une formation spécialisée dans l'ingénierie logicielle. Le programme se concentre sur la modélisation de l'architecture logicielle et la construction de cahiers des charges. Il met également l'accent sur l'optimisation des solutions applicatives objet et la maîtrise du Déploiement Continu.",
        en: "The Application Designer Developer Bachelor is a specialized training in software engineering. The program focuses on software architecture modeling and specifications document construction. It also emphasizes the optimization of object-oriented application solutions and mastery of Continuous Deployment."
    },

    // Expérience Académique 3
    exp_acad3_year: { fr: "2022 - 2024", en: "2022 - 2024" },
    exp_acad3_title: { fr: "BTS SIO - Option SLAM", en: "BTS SIO - SLAM Option" },
    exp_acad3_company: { fr: "Lycée Parc de Vilgénis - Massy (Bac +2)", en: "Lycée Parc de Vilgénis - Massy (2-year Degree)" },
    exp_acad3_desc: {
        fr: "Le BTS SIO Option SLAM est une formation axée sur la Conception et l'Administration de Bases de Données relationnelles, ainsi que sur la Création de Sites Web Dynamiques. Le programme couvre également la gestion de projet informatique et les besoins fonctionnels des organisations.",
        en: "The BTS SIO SLAM option is a training focused on relational Database Design and Administration, as well as Dynamic Website Creation. The program also covers IT project management and the functional needs of organizations."
    },

    // Expérience Académique 4
    exp_acad4_year: { fr: "2019 - 2022", en: "2019 - 2022" },
    exp_acad4_title: { fr: "BAC PRO SN", en: "BAC PRO SN" },
    exp_acad4_company: { fr: "Lycée Parc de Vilgénis - Massy", en: "Lycée Parc de Vilgénis - Massy" },
    exp_acad4_desc: {
        fr: "Le Bac Pro Systèmes Numériques est une formation complète centrée sur l'exploitation et la maintenance des systèmes informatiques et des réseaux. Le programme est axé sur l'installation et la configuration des infrastructures, le diagnostic de pannes matérielles et logicielles, ainsi que la sécurisation de l'environnement numérique des organisations.",
        en: "The Digital Systems Professional Baccalaureate is a comprehensive training centered on the operation and maintenance of computer systems and networks. The program focuses on infrastructure installation and configuration, hardware and software troubleshooting, as well as securing the digital environment of organizations."
    },

    // Tags communs
    tag_customer_service: { fr: "Conseil Client", en: "Customer Service" },
    tag_stock: { fr: "Gestion des Stocks", en: "Stock Management" },
    tag_teamwork: { fr: "Travail d'Équipe", en: "Teamwork" },

    // ============================================================
    // SECTION CERTIFICATIONS (index.html)
    // ============================================================
    certifications_title: { fr: "🎓 Mes Certifications", en: "🎓 My Certifications" },
    view_all_certs: { fr: "Voir mes certifications", en: "View my certifications" },
    cert1_title: { fr: "Bac Pro Systèmes Numériques", en: "Bac Pro Digital Systems" },
    cert1_desc: {
        fr: "Formation centrée sur l'exploitation et la maintenance des systèmes informatiques et des réseaux. De l'installation à la configuration des infrastructures, le diagnostic de pannes matérielles et logicielles, ainsi que la sécurisation de l'environnement numérique des organisations.",
        en: "Training focused on the operation and maintenance of computer systems and networks. From installation to configuration of infrastructure, diagnosis of hardware and software failures, and securing the digital environment of organizations."
    },
    cert2_title: { fr: "BTS SIO Option SLAM", en: "BTS SIO SLAM Option" },
    cert2_desc: {
        fr: "Formation axée sur la Conception et l'Administration de Bases de Données relationnelles, ainsi que sur la Création de Sites Web Dynamiques. Le programme couvre également la gestion de projet informatique et les besoins fonctionnels des organisations.",
        en: "Training focused on the design and administration of relational databases, as well as the creation of dynamic websites. The program also covers IT project management and the functional needs of organizations."
    },
    cert3_title: { fr: "Développeur Solutions Web et Mobile", en: "Web and Mobile Solutions Developer" },
    cert3_desc: {
        fr: "Formation axée sur la Conception et l'Administration de Bases de Données relationnelles, ainsi que sur la Création de Sites Web Dynamiques. Le programme couvre également la gestion de projet informatique et les besoins fonctionnels des organisations.",
        en: "Training focused on the design and administration of relational databases, as well as the creation of dynamic websites. The program also covers IT project management and the functional needs of organizations."
    },

    // ============================================================
    // SECTION CONTACT
    // ============================================================
    contact_badge: { fr: "Restons en contact", en: "Let's stay in touch" },
    contact_github_desc: { fr: "Découvrez mes projets open source", en: "Discover my open source projects" },
    contact_email_desc: { fr: "Contactez-moi directement par email", en: "Contact me directly by email" },
    contact_phone: { fr: "Téléphone", en: "Phone" },
    contact_phone_desc: { fr: "Appelez-moi directement", en: "Call me directly" },
    contact_linkedin_desc: { fr: "Connectez-vous professionnellement", en: "Connect professionally" },
    contact_fiverr_desc: { fr: "Suivez mes projets de Freelanceur", en: "Follow my Freelance projects" },
    contact_instagram_desc: {
        fr: "Contact direct pour les échanges professionnels ou collaborations.",
        en: "Direct contact for professional exchanges or collaborations."
    },

    // ============================================================
    // FOOTER
    // ============================================================
    footer_copyright: {
        fr: '© 2025 Portfolio. Développé par <span class="footer-name"><a href="https://github.com/Damien-Codes" rel="noopener noreferrer">Damien-Codes</a></span>',
        en: '© 2025 Portfolio. Developed by <span class="footer-name"><a href="https://github.com/Damien-Codes" rel="noopener noreferrer">Damien-Codes</a></span>'
    },

    // ============================================================
    // PAGE CERTIFICATIONS (certifications.html)
    // ============================================================
    cert_hero_title: {
        fr: '🎓 Toutes mes <span class="highlight">Certifications</span>',
        en: '🎓 All my <span class="highlight">Certifications</span>'
    },
    cert_hero_subtitle: {
        fr: "Découvrez l'ensemble de mon parcours académique et professionnel",
        en: "Discover my complete academic and professional journey"
    },
    // Python
    cert_python_school: {
        fr: "En ligne - Sololearn",
        en: "Online - Sololearn"
    },
    cert_python_desc: {
        fr: "Langage Python, réputé pour sa polyvalence en développement web, en scripting et en analyse de données (Data Science). Utile aussi bien pour l'IA, du scripting et de l'automatisation de tâches complexes.",
        en: "Python, a language renowned for its versatility in web development, scripting, and data analysis (Data Science). Useful for AI, scripting, and automating complex tasks."
    },
    //SQL
    cert_sql_school: {
        fr: "En ligne - Sololearn",
        en: "Online - Sololearn"
    },
    cert_sql_desc: {
        fr: "Langage SQL, réputé pour sa polyvalence en développement web, en scripting et en analyse de données (Data Science). Utile aussi bien pour l'IA, du scripting et de l'automatisation de tâches complexes.",
        en: "SQL, a language renowned for its versatility in web development, scripting, and data analysis (Data Science). Useful for AI, scripting, and automating complex tasks."
    },
    // PHP
    cert_php_school: {
        fr: "En ligne - Sololearn",
        en: "Online - Sololearn"
    },
    cert_php_desc: {
        fr: "Langage PHP, réputé pour sa polyvalence en développement web, en scripting et en analyse de données (Data Science). Utile aussi bien pour l'IA, du scripting et de l'automatisation de tâches complexes.",
        en: "PHP, a language renowned for its versatility in web development, scripting, and data analysis (Data Science). Useful for AI, scripting, and automating complex tasks."
    },
    // JavaScript
    cert_js_school: {
        fr: "En ligne - Sololearn",
        en: "Online - Sololearn"
    },
    cert_js_desc: {
        fr: "Langage JavaScript, réputé pour sa polyvalence en développement web, en scripting et en analyse de données (Data Science). Utile aussi bien pour l'IA, du scripting et de l'automatisation de tâches complexes.",
        en: "JavaScript, the language of the browser. It allows you to create dynamic and interactive web applications, master the application logic, and dynamize web application interfaces."
    },
    // C#
    cert_csharp_school: {
        fr: "En ligne - Sololearn",
        en: "Online - Sololearn"
    },
    cert_csharp_desc: {
        fr: "Langage C#, réputé pour sa polyvalence en développement web, en scripting et en analyse de données (Data Science). Utile aussi bien pour l'IA, du scripting et de l'automatisation de tâches complexes.",
        en: "C#, a language renowned for its versatility in web development, scripting, and data analysis (Data Science). Useful for AI, scripting, and automating complex tasks."
    },
    // Kotlin
    cert_kotlin_school: {
        fr: "En ligne - Udemy",
        en: "Online - Udemy"
    },
    cert_kotlin_desc: {
        fr: "Langage Kotlin, réputé pour sa polyvalence en développement web, en scripting et en analyse de données (Data Science). Utile aussi bien pour l'IA, du scripting et de l'automatisation de tâches complexes.",
        en: "Kotlin, a language renowned for its versatility in web development, scripting, and data analysis (Data Science). Useful for AI, scripting, and automating complex tasks."
    },
    // React
    cert_react_school: {
        fr: "En ligne - Udemy",
        en: "Online - Udemy"
    },
    cert_react_desc: {
        fr: "Langage React, réputé pour sa polyvalence en développement web, en scripting et en analyse de données (Data Science). Utile aussi bien pour l'IA, du scripting et de l'automatisation de tâches complexes.",
        en: "React, a language renowned for its versatility in web development, scripting, and data analysis (Data Science). Useful for AI, scripting, and automating complex tasks."
    },
    // Bootstrap
    cert_bootstrap_school: {
        fr: "En ligne - Udemy",
        en: "Online - Udemy"
    },
    cert_bootstrap_desc: {
        fr: "Bootstrap, le framework de développement web. Elle permet de créer des applications web dynamiques et interactives.",
        en: "Bootstrap, the web development framework. It allows you to create dynamic and interactive web applications."
    },
    // Responsive Web Design
    cert_responsive_school: {
        fr: "En ligne - Sololearn",
        en: "Online - Sololearn"
    },
    cert_responsive_desc: {
        fr: "Formation axée sur le Responsive Web Design, la pratique de la construction de sites web modernes et réactifs, capables de s'adapter à tous les appareils et tailles d'écran.",
        en: "Formation focused on Responsive Web Design, the practice of building modern and responsive websites, capable of adapting to all devices and screen sizes."
    },
    // Cybersecurity
    cert_cybersecurity_title: {
        fr: "Principes de Sécurité Numérique",
        en: "Principles of Cybersecurity"
    },
    cert_cybersecurity_school: {
        fr: "En ligne - Cisco Networking Academy",
        en: "Online - Cisco Networking Academy"
    },
    cert_cybersecurity_desc: {
        fr: "Formation sur les fondamentaux de la cybersécurité, de l'identification des menaces aux vulnérabilités, sur la protection des données et des systèmes via l'application des technologies de défense clés (authentification, chiffrement) et les bonnes pratiques de sécurité en ligne.",
        en: "Formation on the fundamentals of cybersecurity, from identifying threats to vulnerabilities, on protecting data and systems through the application of key defense technologies (authentication, encryption) and online security best practices."
    },
    // MOOC
    cert_mooc_school: {
        fr: "En ligne - SecnumAcademy",
        en: "Online - SecnumAcademy"
    },
    cert_mooc_desc: {
        fr: "Formation sur les fondamentaux de la cybersécurité, de l'identification des menaces aux vulnérabilités, sur la protection des données et des systèmes via l'application des technologies de défense clés (authentification, chiffrement) et les bonnes pratiques de sécurité en ligne.",
        en: "Formation on the fundamentals of cybersecurity, from identifying threats to vulnerabilities, on protecting data and systems through the application of key defense technologies (authentication, encryption) and online security best practices."
    },
    // Finance
    cert_finance_title: {
        fr: "Comprendre/Investir dans les NFT",
        en: "Understanding/Investing in NFTs"
    },
    cert_finance_school: {
        fr: "En ligne - Udemy",
        en: "Online - Udemy"
    },
    cert_finance_desc: {
        fr: "Formation approfondie sur la création, l'acquisition et l'investissement dans les jetons non fongibles (NFT). Couvre l'analyse du marché, les plateformes d'échange et les stratégies de portefeuille dans l'écosystème du Web3.",
        en: "Formation on the fundamentals of cybersecurity, from identifying threats to vulnerabilities, on protecting data and systems through the application of key defense technologies (authentication, encryption) and online security best practices."
    },
    // Filtres
    filter_all: { fr: "Tout Afficher", en: "Show All" },
    filter_languages: { fr: "Langages de Programmation", en: "Programming Languages" },
    filter_databases: { fr: "Bases de Données", en: "Databases" },
    filter_design: { fr: "Concepts & Design", en: "Concepts & Design" },
    filter_cybersecurity: { fr: "Cybersécurité", en: "Cybersecurity" },
    filter_finance: { fr: "Finance", en: "Finance" },
    results_count: { fr: "éléments trouvés", en: "items found" },

    // ============================================================
    // BOUTON DE LANGUE
    // ============================================================
    lang_french: { fr: "Français", en: "French" },
    lang_english: { fr: "Anglais", en: "English" },
    current_lang_label: { fr: "Français", en: "English" }
};
