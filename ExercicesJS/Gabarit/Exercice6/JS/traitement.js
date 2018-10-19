function btnCalculer_onclick() //Exercice 3 Kilometre
{
    var C1, C5, C10, C25, Total;
    C1 = parseFloat(document.getElementById("txtBillet1").value);
    C5 = parseFloat(document.getElementById("txtBillet5").value);
    C10 = parseFloat(document.getElementById("txtBillet10").value);
    C25 = parseFloat(document.getElementById("txtBillet25").value);
    Total = (C1*0.01)+(C5*0.05)+(C10*0.1)+(C25*0.25);


    console.log("Votre total d'argent CT est " +Total);
}