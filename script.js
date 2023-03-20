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
    disabled: true,
    cursor: "move",
    placeholder: "sortable-placeholder"
});
let groupeB = $("#groupeB");
groupeB.sortable({
    disabled: true,
    cursor: "move",
    placeholder: "sortable-placeholder"
});
let groupeC = $("#groupeC");
groupeC.sortable({
    disabled: true,
    cursor: "move",
    placeholder: "sortable-placeholder"
});
let groupeD = $("#groupeD");
groupeD.sortable({
    disabled: true,
    cursor: "move",
    placeholder: "sortable-placeholder"
});
let modeModification = false;

// Boutons pour la modification
const btnModifierPoule = document.getElementById('btn-modifier-poule');
if(btnModifierPoule){
    btnModifierPoule.addEventListener('click', modifierPoule);
}

const btnModifierFinale = document.getElementById('btn-modifier-finale');
if(btnModifierFinale){
    btnModifierFinale.addEventListener('click', modifierFinale);
}

const btnModifierBonus = document.getElementById('btn-modifier-bonus');
if(btnModifierBonus){
    btnModifierBonus.addEventListener('click', modifierBonus);
}

// Fonctions pour la modification
function modifierPoule(){
    if (modeModification === false) {
        modeModification = true;
        // Affichage
        const pays = document.getElementsByClassName("pays");
        for (let index = 0; index < pays.length; index++) {

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

function modifierFinale() {
    if (modeModification === false) {
        modeModification = true;
        // Affichage
        document.getElementById('btn-text').innerHTML = 'Valider';
        document.getElementById('btn-icon').classList.add("hidden");
        document.getElementById("darken").classList.remove("hidden");
        const score = document.getElementsByClassName("score");
        for (let index = 0; index < score.length; index++) {
            score[index].disabled = false;
            score[index].style.backgroundColor = "#FFFFFF";
            score[index].style.border = "solid 1px #d0d0d0";
        }
    }
    else if (modeModification === true) {
        modeModification = false;
        // Affichage
        document.getElementById('btn-text').innerHTML = 'Modifier';
        document.getElementById("darken").classList.add("hidden");
        document.getElementById('btn-icon').classList.remove("hidden");
        const score = document.getElementsByClassName("score");
        for (let index = 0; index < score.length; index++) {
            score[index].disabled = true;
            score[index].style.backgroundColor = "#d0d0d0";
            score[index].style.border = "none";
        }
    }
}

function modifierBonus() {
    if (modeModification === false) {
        modeModification = true;
        // Affichage
        document.getElementById('btn-text').innerHTML = 'Valider';
        document.getElementById('btn-icon').classList.add("hidden");
        document.getElementById("darken").classList.remove("hidden");
        const bonus = document.getElementsByClassName("bonus");
        for (let index = 0; index < bonus.length; index++) {
            bonus[index].disabled = false;
        }
    }
    else if (modeModification === true) {
        modeModification = false;
        // Affichage
        document.getElementById('btn-text').innerHTML = 'Modifier';
        document.getElementById("darken").classList.add("hidden");
        document.getElementById('btn-icon').classList.remove("hidden");
        const bonus = document.getElementsByClassName("bonus");
        for (let index = 0; index < bonus.length; index++) {
            bonus[index].disabled = true;
        }
    }
}

// Fonction pour l'affichage des résultats finaux
let resultatPoules = document.getElementById("btn-resultat-poules");
let resultatFinale = document.getElementById("btn-resultat-finale");
resultatPoules.addEventListener("click", afficheResultatsPoules);
resultatFinale.addEventListener("click", afficheResultatsFinale);

function afficheResultatsPoules(){
    resultatPoules.classList.add("font-bold");
    resultatPoules.classList.add("underline");
    resultatFinale.classList.remove("font-bold");
    resultatFinale.classList.remove("underline");
    document.getElementById("resultat-poules").classList.remove("hidden");
    document.getElementById("resultat-finale").classList.add("hidden");
    resultatFinale.classList.remove("text-red-500");
    resultatPoules.classList.add("text-red-500");
}

function afficheResultatsFinale(){
    resultatPoules.classList.remove("font-bold");
    resultatPoules.classList.remove("text-red-500");
    resultatFinale.classList.add("text-red-500");
    resultatPoules.classList.remove("underline");
    resultatFinale.classList.add("font-bold");
    resultatFinale.classList.add("underline");
    document.getElementById("resultat-poules").classList.add("hidden");
    document.getElementById("resultat-finale").classList.remove("hidden");
}

// Selection de 4 équipes maximum pour le bonus demi-finale
const bonusDemi = document.getElementById("bonus-demi");
console.log(bonusDemi);

bonusDemi.addEventListener('change', (event) => {
    const selectedOptions = Array.from(bonusDemi.selectedOptions);
    if (selectedOptions.length > 4) {
        // prevent the selection of additional options
        alert("test");
        this.value = ""; // reset the selected options
    }
});
