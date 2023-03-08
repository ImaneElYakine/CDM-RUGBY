// Gestion du menu toggle en mode smartphone
let toggleBtn = document.querySelector("#navbar-toggle");
let collapse = document.querySelector("#navbar-collapse");
toggleBtn.onclick = () => {
    collapse.classList.toggle("hidden");
    collapse.classList.toggle("flex");
};

// Elements et création des listes
const groupeA = document.getElementById('groupeA');
const sortableA = new Sortable(groupeA, { disabled: true});
const groupeB = document.getElementById('groupeB');
const sortableB = new Sortable(groupeB, { disabled: true});
const groupeC = document.getElementById('groupeC');
const sortableC = new Sortable(groupeC, { disabled: true});
const groupeD = document.getElementById('groupeD');
const sortableD = new Sortable(groupeD, { disabled: true});
let modeModification = false;

// Boutons pour la modification
const btnModifier = document.getElementById('btn-modifier');
btnModifier.addEventListener('click', modifier);

// Fonction pour l'ordre des poules
function modifier(){
    if (modeModification === false) {
        modeModification = true;
        // Affichage
        const pays = document.getElementsByClassName("pays");
        for (let index = 0; index < pays.length; index++) {
            pays[index].classList.add('hover:bg-gray-200');
            pays[index].classList.add('move-pointer');
        }
        document.getElementById('btn-text').innerHTML = 'Valider';
        document.getElementById('btn-icon').classList.add("hidden");
        document.getElementById("darken").classList.remove("hidden");
        // On active le tri par drag and drop
        sortableA.option("disabled", false);
        sortableB.option("disabled", false);
        sortableC.option("disabled", false);
        sortableD.option("disabled", false);
    }

    else if (modeModification === true) {
        modeModification = false;
        // Affichage
        const pays = document.getElementsByClassName("pays");
        for (let index = 0; index < pays.length; index++) {
            pays[index].classList.remove('hover:bg-gray-200');
            pays[index].classList.remove('move-pointer');
        }
        document.getElementById('btn-text').innerHTML = 'Modifier';
        document.getElementById("darken").classList.add("hidden");
        document.getElementById('btn-icon').classList.remove("hidden");
        // On désactive le tri par drag and drop
        sortableA.option("disabled", true);
        sortableB.option("disabled", true);
        sortableC.option("disabled", true);
        sortableD.option("disabled", true);
    }
}

// Fonction animation validation des modifications
function animationModification(){

}