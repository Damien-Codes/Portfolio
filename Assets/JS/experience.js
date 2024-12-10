const boutons = document.getElementById('boutons');
const conteneurCartes = document.getElementById('conteneur-cartes');

const cartes = [
    // Ecole
    { type: "Ecole", title: "2024 - 2025 | Bachelor CDA (bac+3)", description: "En tant que qu'alternant à CESI, je maîtrise l'intégralité du cycle de vie d'un projet, de la conception à la mise en production. Je suis capable de créer des projet web sur mesure, alliant design et performances optimales.", image: "Images/Experience/CESI.png" },
    { type: "Ecole", title: "2022 - 2024 | BTS SIO (bac+2)", description: "Diplômé du BTS SIO, je suis sensibilisé aux enjeux de la sécurité informatique. Mes connaissances en administration systèmes et réseaux, associées à ma formation en développement, me permettent de mettre en place des solutions sécurisées tout au long du cycle de vie d'une application.", image: "Images/Experience/Vilgenis.png" },
    { type: "Ecole", title: "2019 - 2022 |  Baccalauréat Pro Système Numérique", description: "Diplômé du BTS SIO, je suis sensibilisé aux enjeux de la sécurité informatique. Mes connaissances en administration systèmes et réseaux, associées à ma formation en développement, me permettent de mettre en place des solutions sécurisées tout au long du cycle de vie d'une application.", image: "Images/Experience/Vilgenis.png" },
    // ExperiencePro
    { type: "ExperiencePro", title: "2024 - 2025 (2 mois) | Développeur Web Chez Techfizz", description: "En tant que développeur, j'ai conçu et développé un service de formation en ligne en PHP.", image: "Images/Experience/logo-techfizz.png" },
    { type: "ExperiencePro", title: "2023 (2 mois) | Développeur Web Chez TipTop Telecom", description: "En tant que développeur, j'ai conçu des modèles d'e-mails personnalisés en HTML/CSS sur Autotask PSA et mis en place un système d'affiliation sur WordPress.", image: "Images/Experience/tiptop_logo.svg" },
    { type: "ExperiencePro", title: "2021 - 2022 (2 mois) | Technicien support informatique Chez TipTop Telecom", description: "En tant qu'informaticien j'ai piloté la gestion de projets et le traitement des tickets incidents en utilisant Zammad et Trello comme outils. J'ai défini des priorités, suivi l'avancement des tâches et assuré une communication efficace avec les équipes.", image: "Images/Experience/tiptop_logo.svg" },
    
];

function creerCarte(carte) {
const carteElement = document.createElement('div');
carteElement.classList.add('carte');

carteElement.innerHTML =
        `<img src="${carte.image}" alt="${carte.title}><span>"${carte.span}"</span></a>
        <h2>${carte.title}</h2>
        <h3>${carte.description}</h3>
    `;

conteneurCartes.appendChild(carteElement);
}

function afficherCartes(type) {
conteneurCartes.innerHTML = '';

cartes.forEach(carte => {
if (type === 'tous' || carte.type === type) {
    creerCarte(carte);
}
});
}

boutons.addEventListener('click', (event) => {
const boutonClique = event.target;
const type = boutonClique.id.replace('btn-', '');
afficherCartes(type);
});

afficherCartes('tous');
