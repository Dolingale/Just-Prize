// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix');
let error = document.querySelector("small");
let form = document.querySelector("#formulaire");
let button = document.querySelector('button');

// Etape 2 - Cacher l'erreur
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire
let aleaNumber = Math.floor(Math.random() * 1001);
console.log(aleaNumber);
let hits = 0;
let chooseNumber = '';

// Etape 6 - Créer la fonction vérifier
function verify(number){
    let instruction = document.createElement('div');

    if (number < aleaNumber) {
        instruction.textContent = "#" + hits + " (" + chooseNumber + ")" + " C'est plus !";
        instruction.classList.add('instruction','plus');
    } else if (number > aleaNumber) {
        instruction.textContent = "#" + hits + " (" + chooseNumber + ")" + " C'est moins !";
        instruction.classList.add("instruction", "moins");
    } else {
        instruction.textContent =
          "#" + hits + " (" + chooseNumber + ")" + " Félicitations vous avez trouvé le juste prix !";
        instruction.classList.add("instruction", "fini");
        input.disabled = true;
        button.disabled = true;
    }
    document.querySelector("#instructions").prepend(instruction);
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener("keyup", () => { 
  if (isNaN(input.value)) {
    error.style.display = "inline";
    input.style.borderColor = "red";
    button.disabled = true;
  } else {
    error.style.display = "none";
    input.style.borderColor = "silver";
    button.disabled = false;
  } 
});

// Etape 5 - Agir à l'envoi du formulaire
form.addEventListener('submit', (e) =>{
    e.preventDefault();

    if (isNaN(input.value) || input.value == '') {
      input.style.borderColor = "red";
    } else{
        hits++;
        input.style.borderColor = "silver";
        chooseNumber = input.value;
        input.value = '';
        verify(chooseNumber);
    }
});




