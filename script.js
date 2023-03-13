// Gestion du menu toggle en mode smartphone
let toggleBtn = document.querySelector("#navbar-toggle");
let collapse = document.querySelector("#navbar-collapse");
toggleBtn.onclick = () => {
    collapse.classList.toggle("hidden");
    collapse.classList.toggle("flex");
};

// Création des listes de poules
let groupeA = $("#groupeA");
groupeA.sortable({
    disabled: true
});
let groupeB = $("#groupeB");
groupeB.sortable({
    disabled: true
});
let groupeC = $("#groupeC");
groupeC.sortable({
    disabled: true
});
let groupeD = $("#groupeD");
groupeD.sortable({
    disabled: true
});
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
        groupeA.sortable( "option", "disabled", false );
        groupeB.sortable( "option", "disabled", false );
        groupeC.sortable( "option", "disabled", false );
        groupeD.sortable( "option", "disabled", false );
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
        groupeA.sortable( "option", "disabled", true );
        groupeB.sortable( "option", "disabled", true );
        groupeC.sortable( "option", "disabled", true );
        groupeD.sortable( "option", "disabled", true );
    }
}

// Fonction animation validation des modifications
function animationModification(){

}