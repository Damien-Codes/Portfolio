const boutons = document.getElementById('boutons');
const conteneurCartes = document.getElementById('conteneur-cartes');

const cartes = [
    // Veille
    { type: "Veille", title: "La Blockchain sur Ethereum (ETH)", description: "Ethereum est une plateforme décentralisée et open-sources qui utilise la blockchain. Cette plateforme ouverte permet le éventail d'applications dans divers domaines (DeFi, NFTs ...).", image: "Images/Veille/img2-ETH.jpg" },
    { type: "Veille", title: "Applications qui utilise la blockchain", description: "La blockchain est principalement utilisée pour les transactions financières décentralisées (DEFI) ainsi que dans d'autres domaines comme les jeux vidéo (Axie Infinity), les NFTs (Art Numérique) OpenSea.", image: "Images/Veille/img1-ETH.jpg" },
    { type: "Veille", title: "Le 13 Mars 2024 - Dencun", description: "Elle va permettre au protoding sharding d'avoir un nouvel espace de stockage sur le réseau ETH (de quelque semaines) qui va permettre le stockage des données nécessaires au fonctionnement des Layer 2 le temps de pouvoir valider les transactions passer. Cela a pour but de réduire les frais de transactions.", image: "Images/Veille/crypto.jpg" },
    { type: "Veille", title: "12 Avril - 2023 Shanghai et Capella (Shapella)", description: "Shapella permet aux utilisateurs qui le souhaitent de retirer leurs ETH placer en staking. Cela met fin à une longue période auparavant indéterminée pendant laquelle les stakers étaient bloqués par le réseau. Après les mises à jour, les intérêts générés par le staking d’ETH seront crédités directement.", image: "Images/Veille/crypto.jpg" },
    { type: "Veille", title: "Le 15 sept. 2022 - The Merge", description: "La plus grosses mise à jour de l'histoire d'Ethereum, depuis sa création. Ce qui va permettre un changement d'un consensus de Proof Of Work (PoW) a un consensus de Proof OF Stake (PoS). Ainsi elle permetra de géré un nombre de + 100 000 transactions dans le futur et consomera 99,95% d'énergie en moins. Cette mise a jour est un ensemble d'amélioration", image: "Images/Veille/crypto.jpg" },
    
    // Phase
    { type: "Veille", title: "Phase 1 : Transition de la Beacon Chain - Terminé -", description: "La Beacon Chain est une blockchain qui va fonctionner parallèlement aux réseaux d'Ethereum qui aura 2 fonctions, coordonnées et gérer les réseaux basé sur la (PoS) et gérer la synchronisation entre les Shards.", image: "Images/Veille/BeaconChain.png" },
    { type: "Veille", title: "Phase 2 : Protocole The Surge (La Poussée) - Terminé -", description: "The Surge c'est l'implémentation du SHARDING au réseau (c'est un concepte informatique qui consiste a divisé une base de données en plein de sous-partie qu'ont appelé des Shards) permet l'augmentation de la décentralisation et la scalabilité.", image: "Images/Veille/crypto.jpg" },
    { type: "Veille", title: "Phase 3 : implémentation The Verge (La Poussée) - En cours de développement -", description: "C'est une étape d'implementation des VERKLES TREES qui est une évolutions des arbres de Merkles pour créer une preuve moins lourd qui va optimiser le stockage et réduire la taille des nœuds (c'est un systèmes qui permet de vérifier la validité des données qui sont crypter en utilisant des hash et en reliant des transactions).", image: "Images/Veille/crypto.jpg" },
    { type: "Veille", title: "Phase 4 : The Purges (La Purge) - En cours de développement -", description: "Cela permettra de réduire l'espace de stockage, supprimer les données inutiles, stocker que les données inférieur à 1 an. Cela va donc créer des nouveaux canaux de stockage.", image: "Images/Veille/crypto.jpg" },
    { type: "Veille", title: "Phase 5 : The Splurge (Les Folies) - En cours de conception -", description: "The Splurges est plein de petite série de mise a jour qui servira a améliorés les différente facettes (Problèmes de DDOS...).", image: "Images/Veille/crypto.jpg" },
    // Veille
    
    { type: "Veille", title: "Le 6 sept. 2022 - Bellatrix -", description: "La mise à jour Bellatrix d'Ethereum a permis de renforcer la sécurité et la stabilité de la Beacon Chain et a préparé la plus grosse mise à jour sur Ethereum appelée The Merge.", image: "Images/Veille/crypto.jpg" },
    
];

function creerCarte(carte) {
const carteElement = document.createElement('div');
carteElement.classList.add('carte');

carteElement.innerHTML =
        `<img src="${carte.image}"></a>
        <h2>${carte.title}</h2>
        <h3>${carte.description}</h3>
    `;

conteneurCartes.appendChild(carteElement);
}

function afficherCartes(type) {
conteneurCartes.innerHTML = '';

cartes.forEach(carte => {
if (type === 'Veille' || carte.type === type) {
    creerCarte(carte);
}
});
}

boutons.addEventListener('click', (event) => {
const boutonClique = event.target;
const type = boutonClique.id.replace('btn-', '');
afficherCartes(type);
});

afficherCartes('Veille');