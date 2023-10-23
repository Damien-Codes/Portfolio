let btnMenu = document.getElementById('btn-menu');
let Menu = document.querySelector('.nav-links');

btnMenu.onclick = function(){
    btnMenu.classList.toggle('fa-times');
    Menu.classList.toggle('active')
}

let header = document.querySelector('header');

window.onscroll = function(){
    if(this.scrollY >= 100){
        header.classList.add('active')
    }
    else{
        header.classList.remove('active')
    }
    btnMenu.classList.remove('fa-times')
    Menu.classList.remove('active')
}
function sendForm() {
    // Récupération des données du formulaire
    var name = document.querySelector('.contact-form-input[name="name"]').value;
    var email = document.querySelector('.contact-form-input[name="email"]').value;
    var message = document.querySelector('.contact-form-textarea[name="message"]').value;
  
    // Envoi des données dans une boîte mail
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'mailto:pinodamien@gmail.com', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('name=' + name + '&email=' + email + '&message=' + message);
  
    // Affichage d'un message de confirmation
    document.querySelector('.contact-form-message').innerHTML = 'Votre message a bien été envoyé.';
  }
  
  // Ajout d'un événement de clic au bouton de soumission
  document.querySelector('.contact-form-button').addEventListener('click', sendForm);
  