
var Animaux, NbJours, Tarif, Montant, Veterinaire, With, Service, Taxe, TauxHoaraires, Rabais, ServiceToilettage;


function btnCalculer_onclick()
{
    saisirInfos();
    calculerPrix();
}
function calculerPrix()
 {
     determinerHoraire();
     rabai();
     calcul();
     affichage();
 }

function radChien_onclick()
{

    document.getElementById("imgChien-Chat").src = "img/chien.jpg";
}
function radChat_onclick()
{
    document.getElementById("imgChien-Chat").src = "img/chat-siamois.jpg";
}
function saisirInfos()
{
    Veterinaire = (document.getElementById("lstVeterinaire").value);
    NbJours = parseFloat(document.getElementById("txtNbreJours").value);
    TauxHoraires = parseFloat(document.getElementById("txtTauxHoraires").value);
}

function determinerHoraire()
{
    switch(Veterinaire)
    {
        case "Audrey Bouchard":
            TauxHoaraires = 25;
            break;

        case "Stephanie Tramblay":
            TauxHoaraires = 35;
            break;

        case "Maxime Simard":
            TauxHoaraires = 40;
            break;

        case "Mélissa Caron":
            TauxHoaraires = 45;
            break;
    }

}

function rabai()
{
    if(NbJours >= 1 && NbJours <= 5)
    {
        Rabais = 0;
    }
    else
    {
        if (NbJours >= 5 && NbJours <=10)
        {
            Rabais = 0.05;
        }
        else
        {
            if(NbJours >=30)
            {
                Rabais = 0.015;
            }
        }
    }
}

function calcul()
{
    if (document.getElementById("chkServ").checked == true)
    {
        (Service = 5)
        With = "Avec toilettage";
    }
    else
    {
        (Service = 0)
        With = "Sans toilettage";
    }
    if (document.getElementById("radChien").checked == true)
    {
        Tarif = 18.50;
        Animaux = "Chien";
    }
    else
    {
        Tarif = 16.95;
        Animaux = "Chat";
    }
    Montant = (((NbJours*(Tarif*TauxHoaraires/24))+ Service )- Rabais);
    Taxe = (Montant * 0.05) + (Montant * 0.09975)
    Montant = (Montant + Taxe)- Rabais;
}

function affichage()
{
    document.getElementById("lblMessage").innerHTML = "Le montant sera de " + Montant + " et votre Veterinaire sera " + Veterinaire + " pour la garde de votre " + Animaux ;
}