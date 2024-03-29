

// Gestion de la popup Cookie
const modal = document.getElementById("myModal");

//displayModal();

function displayModal() {
    modal.style.display = "block";
    document.body.style.overflow = 'hidden';
}

function hideModal() {
    modal.style.display = "none";
    document.body.style.overflow = 'visible';
}

// Selects et dropdowns pour la page bonus (librairie Select2)
$(document).ready(function() {
    $(".bonus-demi").select2({
        placeholder: "Sélectionner 4 équipes",
        allowClear: true,
        maximumSelectionLength: 4,
        templateResult: formatState,
        disabled : true,
        language: "fr",
        minimumResultsForSearch: -1
    });

    $('.bonus-demi').on('select2:opening select2:closing', function( event ) {
        const $searchfield = $(this).parent().find('.select2-search__field');
        $searchfield.prop('disabled', true);
    });

    $(".bonus-essai").select2({
        placeholder: "Sélectionner 1 équipe",
        allowClear: true,
        templateResult: formatState,
        disabled : true,
        language: "fr",
        minimumResultsForSearch: -1
    });

    $(".bonus-realisateur").select2({
        placeholder: "Sélectionner 1 équipe",
        allowClear: true,
        templateResult: formatState,
        disabled : true,
        language: "fr",
        minimumResultsForSearch: -1
    });

    $(".bonus-champion").select2({
        placeholder: "Sélectionner 1 équipe",
        allowClear: true,
        templateResult: formatState,
        disabled : true,
        language: "fr",
        minimumResultsForSearch: -1
    });

});

function formatState (state) {
    if (!state.id) {
        return state.text;
    }
    const baseUrl = "./img/drapeaux/";
    return $(
        '<span class="flex"><img class="mr-2 w-6 h-6 rounded-full" src="' + baseUrl + '/' + state.element.value + '.png" class="img-flag" /> ' + state.text + '</span>'
    );
}

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
    placeholder: "sortable-placeholder",
    axis: "y",
    containment: "#groupeA-container",
});
let groupeB = $("#groupeB");
groupeB.sortable({
    disabled: true,
    cursor: "move",
    placeholder: "sortable-placeholder",
    axis: "y",
    containment: "#groupeB-container",
});
let groupeC = $("#groupeC");
groupeC.sortable({
    disabled: true,
    cursor: "move",
    placeholder: "sortable-placeholder",
    axis: "y",
    containment: "#groupeC-container",
});
let groupeD = $("#groupeD");
groupeD.sortable({
    disabled: true,
    cursor: "move",
    placeholder: "sortable-placeholder",
    axis: "y",
    containment: "#groupeD-container",
});
let modeModification = false;

// Boutons pour la modification
const btnModifierPoule = document.getElementById('btn-modifier-poule');
if(btnModifierPoule){
    btnModifierPoule.addEventListener('click', modifierPoule);
}

const btnModifierBonus = document.getElementById('btn-modifier-bonus');
if(btnModifierBonus){
    btnModifierBonus.addEventListener('click', modifierBonus);
}

// Match final 1
if(document.getElementById('btn-modif-1')) {
    document.getElementById('btn-modif-1').addEventListener('click', function () {
        if (modeModification === false) {
            modeModification = true;
            document.getElementById("darken").classList.remove("hidden");
            document.getElementsByClassName("score1")[0].disabled = false;
            document.getElementsByClassName("score1")[1].disabled = false;
            document.getElementsByClassName("score1")[0].classList.remove("bg-gray-400");
            document.getElementsByClassName("score1")[1].classList.remove("bg-gray-400");
            document.getElementById('btn-modif-1').children[0].classList.add("hidden");
            document.getElementById('btn-modif-1').children[1].innerHTML = "Valider";
        } else if (modeModification === true) {
            modeModification = false;
            document.getElementById("darken").classList.add("hidden");
            document.getElementsByClassName("score1")[0].disabled = true;
            document.getElementsByClassName("score1")[1].disabled = true;
            document.getElementsByClassName("score1")[0].classList.add("bg-gray-400");
            document.getElementsByClassName("score1")[1].classList.add("bg-gray-400");
            document.getElementById('btn-modif-1').children[0].classList.remove("hidden");
            document.getElementById('btn-modif-1').children[1].innerHTML = "Modifier";
        }
    });
}

// Match final 2
if(document.getElementById('btn-modif-2')) {
    document.getElementById('btn-modif-2').addEventListener('click', function () {
        if (modeModification === false) {
            modeModification = true;
            document.getElementById("darken").classList.remove("hidden");
            document.getElementsByClassName("score2")[0].disabled = false;
            document.getElementsByClassName("score2")[1].disabled = false;
            document.getElementsByClassName("score2")[0].classList.remove("bg-gray-400");
            document.getElementsByClassName("score2")[1].classList.remove("bg-gray-400");
            document.getElementById('btn-modif-2').children[0].classList.add("hidden");
            document.getElementById('btn-modif-2').children[1].innerHTML = "Valider";
        } else if (modeModification === true) {
            modeModification = false;
            document.getElementById("darken").classList.add("hidden");
            document.getElementsByClassName("score2")[0].disabled = true;
            document.getElementsByClassName("score2")[1].disabled = true;
            document.getElementsByClassName("score2")[0].classList.add("bg-gray-400");
            document.getElementsByClassName("score2")[1].classList.add("bg-gray-400");
            document.getElementById('btn-modif-2').children[0].classList.remove("hidden");
            document.getElementById('btn-modif-2').children[1].innerHTML = "Modifier";
        }
    });
}

// Match final 3
if(document.getElementById('btn-modif-3')) {
    document.getElementById('btn-modif-3').addEventListener('click', function () {
        if (modeModification === false) {
            modeModification = true;
            document.getElementById("darken").classList.remove("hidden");
            document.getElementsByClassName("score3")[0].disabled = false;
            document.getElementsByClassName("score3")[1].disabled = false;
            document.getElementsByClassName("score3")[0].classList.remove("bg-gray-400");
            document.getElementsByClassName("score3")[1].classList.remove("bg-gray-400");
            document.getElementById('btn-modif-3').children[0].classList.add("hidden");
            document.getElementById('btn-modif-3').children[1].innerHTML = "Valider";
        } else if (modeModification === true) {
            modeModification = false;
            document.getElementById("darken").classList.add("hidden");
            document.getElementsByClassName("score3")[0].disabled = true;
            document.getElementsByClassName("score3")[1].disabled = true;
            document.getElementsByClassName("score3")[0].classList.add("bg-gray-400");
            document.getElementsByClassName("score3")[1].classList.add("bg-gray-400");
            document.getElementById('btn-modif-3').children[0].classList.remove("hidden");
            document.getElementById('btn-modif-3').children[1].innerHTML = "Modifier";
        }
    });
}

// Match final 4
if(document.getElementById('btn-modif-4')) {
    document.getElementById('btn-modif-4').addEventListener('click', function () {
        if (modeModification === false) {
            modeModification = true;
            document.getElementById("darken").classList.remove("hidden");
            document.getElementsByClassName("score4")[0].disabled = false;
            document.getElementsByClassName("score4")[1].disabled = false;
            document.getElementsByClassName("score4")[0].classList.remove("bg-gray-400");
            document.getElementsByClassName("score4")[1].classList.remove("bg-gray-400");
            document.getElementById('btn-modif-4').children[0].classList.add("hidden");
            document.getElementById('btn-modif-4').children[1].innerHTML = "Valider";
        } else if (modeModification === true) {
            modeModification = false;
            document.getElementById("darken").classList.add("hidden");
            document.getElementsByClassName("score4")[0].disabled = true;
            document.getElementsByClassName("score4")[1].disabled = true;
            document.getElementsByClassName("score4")[0].classList.add("bg-gray-400");
            document.getElementsByClassName("score4")[1].classList.add("bg-gray-400");
            document.getElementById('btn-modif-4').children[0].classList.remove("hidden");
            document.getElementById('btn-modif-4').children[1].innerHTML = "Modifier";
        }
    });
}

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

function modifierBonus() {
    if (modeModification === false) {
        modeModification = true;
        // Affichage
        document.getElementById('btn-text').innerHTML = 'Valider';
        document.getElementById('btn-icon').classList.add("hidden");
        document.getElementById("darken").classList.remove("hidden");
        const bonus = document.getElementsByClassName("bonus");
        $(".bonus-demi").prop("disabled", false);
        $(".bonus-essai").prop("disabled", false);
        $(".bonus-realisateur").prop("disabled", false);
        $(".bonus-champion").prop("disabled", false);
    }
    else if (modeModification === true) {
        modeModification = false;
        // Affichage
        document.getElementById('btn-text').innerHTML = 'Modifier';
        document.getElementById("darken").classList.add("hidden");
        document.getElementById('btn-icon').classList.remove("hidden");
        const bonus = document.getElementsByClassName("bonus");
        $(".bonus-demi").prop("disabled", true);
        $(".bonus-essai").prop("disabled", true);
        $(".bonus-realisateur").prop("disabled", true);
        $(".bonus-champion").prop("disabled", true);
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



