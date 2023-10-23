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
    var mailjet = new Mailjet('YOUR_API_KEY', 'YOUR_API_SECRET');
    var message = {
      from: {
        email: 'YOUR_EMAIL_ADDRESS',
        name: 'YOUR_NAME'
      },
      to: [{
        email: 'cassandra.rose.pro@gmail.com',
        name: 'Cassandra Rose'
      }],
      subject: 'Nouveau message de contact',
      text: 'Nom : ' + name + '\nEmail : ' + email + '\nMessage : ' + message
    };
  
    mailjet.post(message).then(function(response) {
      // Affichage d'un message de confirmation
      document.querySelector('.contact-form-message').innerHTML = 'Votre message a bien été envoyé.';
    }, function(error) {
      // Affichage d'un message d'erreur
      document.querySelector('.contact-form-message').innerHTML = error.message;
    });
  }
  
  // Ajout d'un événement de clic au bouton de soumission
  document.querySelector('.contact-form-button').addEventListener('click', sendForm);
  