var NonJoueur, NbPoint, cpt = 0, saisi, points, moyen;
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
   res = calculerMoy();
}

function calculerMoy()
{
    var moyen = 0;
    var tot = 0;
    var res;
    for (var  i = 0; i < TabPoints.length; i++)
    {
        tot += TabPoints[i];
    }
    moyen = tot/4;
    res = document.getElementById("lblReponse").innerHTML= ("Reponse " + moyen);

    return res;
}


function btnMeilleure_onclick()
{
    result = Meilleure();
}

function Meilleure()
{
    var result;
    var max = TabPoints[0];
    var nomMeilleure = TabJoueur[0];
    for(var i = 0; i < TabPoints.length; i ++)
    {
        if(max < TabPoints[i])
        {
            max = TabPoints[i];
            nomMeilleure = TabJoueur[i];
        }

    }
    result = document.getElementById("lblReponse").innerHTML= "Reponse " + max + " Joueur " + nomMeilleure;
    return result;
}





function btnTrouverPire_onclick()

{
    resultat = Pire();
}

function Pire()
{
    var resultat;
    var min = TabPoints[0];
    var nomPire = TabJoueur[0];
    for(var i = 0; i < TabPoints.length; i ++)
    {
        if(min > TabPoints[i])
        {
            min = TabPoints[i];
            nomPire = TabJoueur[i];
        }

    }
   resultat = document.getElementById("lblReponse").innerHTML= "Reponse " + min + " Joueur " + nomPire;
    return resultat;
}



function btnRechercher_onclick()
{
    cpt = 0;
    var recherche = TabJoueur[0];
    var score = TabPoints[0];
    do
    {
        cpt = -1;
        cpt++;


        if (recherche == TabJoueur[cpt] && recherche == TabJoueur[cpt] && recherche == TabJoueur[cpt] && recherche == TabJoueur[cpt])
        {
            document.getElementById("lblReponse").innerHTML = "Reponse " + score + " Joueur " + recherche;
        }
    }while(recherche != TabJoueur[cpt] && recherche != TabJoueur[cpt] && recherche != TabJoueur[cpt] && recherche != TabJoueur[cpt])

}




