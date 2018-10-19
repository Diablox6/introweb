function btnCalculer_onclick() //Exercice 3 Kilometre
{
    var Rev, Loyer, Nourri, Deplac, Reste;
    Rev = parseFloat(document.getElementById("txtRev").value);
    Loyer = parseFloat(document.getElementById("txtLoyer").value);
    Nourri = parseFloat(document.getElementById("txtNourri").value);
    Deplac = parseFloat(document.getElementById("txtDeplac").value);
    Reste = (Rev-Loyer-Nourri-Deplac)*12/50;


    console.log("Pour vos depense personnelles en fin de semaine il vous reste " +Reste);
}