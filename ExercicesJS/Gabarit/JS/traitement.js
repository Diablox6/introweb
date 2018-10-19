function btnCalculer_onclick()
{ 
 	var poidsLivre, Kg;
 	poidsLivre = parseFloat(document.getElementById("txtChiffre").value);
 	Kg = (poidsLivre)/2.2;


 	console.log("Convertion de livre en KG et " +Kg);

}
function btnCalculer_onclick()
{
    var ArgentCAN, TauxChangeEuro, Euro;
    TauxChangeEuro = parseFloat(document.getElementById("txtEuro").value);
    Euro = (ArgentCAN*TauxChangeEuro);


    console.log("La convertion sera " + Euro);
}
function btnCalculer_onclick()
{
    var MoyenKmMois, TotKm;
    MoyenKmMois = parseFloat(document.getElementById("txtKm").value);
    TotKm = (MoyenKmMois*60);


    console.log("Les 5 prochainas annees il va parcourrir " +TotKm);
}