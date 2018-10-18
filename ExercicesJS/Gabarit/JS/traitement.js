function btnCalculer_onclick()
{ 
 	var poidsLivre, Kg;
 	poidsLivre = parseFloat(document.getElementById("txtChiffre").value);
 	Kg = (poidsLivre)/2.2;


 	console.log("Convertion de livre en KG et " +Kg);

}