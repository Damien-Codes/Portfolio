var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true
    },
    spaceBetween: 90,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});

const boutons = document.getElementById('boutons');
const conteneurCartes = document.getElementById('conteneur-cartes');

const cartes = [
    // App
    { type: 'app', title: 'Coffee shop', description: 'Description du projet', image: 'Images/Projets/Coffee shop.jpg', lien: 'Projets/Starducks/index.html' },
    // Web
    { type: 'web', title: 'Clock', description: 'Description du projet', image: 'Images/Projets/Horloge.png', lien: 'Projets/Horloges/index.html' },
    { type: 'web', title: 'Memory card', description: 'Description du projet', image: 'Images/Projets/Memory card.png', lien: 'Projets/Memory card/index.html' },
    { type: 'web', title: 'Bill', description: 'Description du projet', image: 'Images/Projets/Facture.jpg', lien: 'Projets/Facture/index.html'},
    { type: 'web', title: 'Locations', description: 'Description du projet', image: 'Images/Projets/Locations.jpg', lien: 'Projets/Location/index.html"' },
    { type: 'web', title: 'Zoo', description: 'Description du projet', image: 'Images/Projets/Zoo.jpg', lien: 'Projets/Zoo/index.html', span: 'ZOO' },
];

function creerCarte(carte) {
const carteElement = document.createElement('div');
carteElement.classList.add('carte');

carteElement.innerHTML =
        `<a href="${carte.lien}">
        <img src="${carte.image}" alt="${carte.title}><span>"${carte.span}"</span></a>
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