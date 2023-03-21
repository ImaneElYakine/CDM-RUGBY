// Gestion du menu toggle en mode smartphone
let toggleBtn = document.querySelector("#navbar-toggle");
let collapse = document.querySelector("#navbar-collapse");
toggleBtn.onclick = () => {
    collapse.classList.toggle("hidden");
    collapse.classList.toggle("flex");
};

//
$("input:checkbox").click(function() {
    const bol = $("input:checkbox:checked").length >= 2;
    $("input:checkbox").not(":checked").attr("disabled",bol);
});

function getSelectValues(select) {
    const result = [];
    const options = select && select.options;
    let opt;

    let i = 0, iLen = options.length;
    for (; i<iLen; i++) {
        opt = options[i];

        if (opt.selected) {
            result.push(opt.value || opt.text);
        }
    }
    return result;
}


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

