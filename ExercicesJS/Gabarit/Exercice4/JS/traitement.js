function btnCalculer_onclick() //Exercice 3 Kilometre
{
    var Destination, Distance, Consom, Prix, cout;
    Destination = document.getElementById("txtDestination").value;
    Distance = parseFloat(document.getElementById("txtDistance").value);
    Consom = parseFloat(document.getElementById("txtConsom").value);
    Prix = parseFloat(document.getElementById("txtPrix").value);
    cout = ((Distance*Consom)/100)*1.349;


    console.log("Le cout de la destination sera de " +cout);
}