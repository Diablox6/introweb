function btnCalculer_onclick() //Exercice 2 Euro
{
    var ArgentCAN, TauxChangeEuro, Euro;
    ArgentCan = parseFloat(document.getElementById("txtCan").value);
    TauxChangeEuro = parseFloat(document.getElementById("txtEuro").value);
    Euro = (ArgentCAN*TauxChangeEuro);


    console.log("La convertion sera " + Euro);
}
