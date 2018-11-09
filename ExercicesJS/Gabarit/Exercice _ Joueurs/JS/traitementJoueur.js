var NonJoueur, NbPoint, cpt = 0, saisi, points;
var TabJoueur = new Array(4);
var TabPoints = new Array(4);

function btnAjouter_onclick()
{
;
    NonJoueur = (document.getElementById("txtNom").value);
    NbPoint = parseFloat(document.getElementById("txtPoints").value);
    TabJoueur[cpt]= NonJoueur;
    TabPoints[cpt]= NbPoint;
    cpt++;
    document.getElementById("lblNbreJoueur") .innerHTML = ("Numéro du joueur " + cpt);



    if (cpt > 3)
    {
        document.getElementById("btnAjouter").disabled = true;
        document.getElementById("btnTrouverMoy").disabled = false;
        document.getElementById("btnTrouverMeilleur").disabled = false;
        document.getElementById("btnTrouverPire").disabled = false;
    }

}


function btnTrouverMoy_onclick()
{
    var moyen = 0;
    var tot = 0;
    for (var  i = 0; i < TabPoints.length; i++)
    {
        tot += TabPoints[i];
    }
    moyen = tot/4;
    document.getElementById("lblReponse").innerHTML= ("Reponse " + moyen);
}



