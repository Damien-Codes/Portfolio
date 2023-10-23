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
function submitForm() {
    // Récupérez les données du formulaire
    const name = document.querySelector("input[name='name']").value;
    const email = document.querySelector("input[name='email']").value;
    const texterra = document.querySelector("textarea[name='texterra']").value;
  
    // Envoyez les données à la page de traitement
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/submit");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({ name, email, texterra }));
  }
  
  // Écoutez le clic sur le bouton de soumission
  document.querySelector("input[type='submit']").addEventListener("click", submitForm)