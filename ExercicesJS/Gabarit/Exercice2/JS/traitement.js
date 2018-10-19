function btnCalculer_onclick() //Exercice 3 Kilometre
{
    var MoyenKmMois, TotKm;
    MoyenKmMois = parseFloat(document.getElementById("txtKm").value);
    TotKm = (MoyenKmMois*60);


    console.log("Les 5 prochainas annees il va parcourrir " +TotKm);
}