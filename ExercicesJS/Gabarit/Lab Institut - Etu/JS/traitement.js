function frmMembre_onclick()
{
    if (valideChampsOblig()=== true)
    {
        afficherTarif();
    }
}

function afficherTarif()
{
    var resultat = 0;
    var type = document.getElementById("type").value;

    switch (type)
    {
        case "adulte":
            resultat = 90;
            break;
        case "étudiant":
            resultat = 60;
            break;
        case "retraité"   :
            resultat = 80;
            break;
    }
    document.getElementById("res").innerHTML = "Le resulta sera " + resultat;
}

function valideChampsOblig()
{
    var valide = true;

    if (document.getElementById("txtNom").value === "")
    {
        valide = false;
        document.getElementById("txtNom").style.borderColor = "Red";
    }

    if (document.getElementById("txtPrenom").value === "")
    {
        valide = false;
        document.getElementById("txtPrenom").style.borderColor = "Red";
    }

    if (document.getElementById("txtAdresse").value === "")
    {
        valide = false;
        document.getElementById("txtAdresse").style.borderColor = "Red";
    }

    if (document.getElementById("txtVille").value === "")
    {
        valide = false;
        document.getElementById("txtVille").style.borderColor = "Red";
    }

    if (document.getElementById("tel").value === "")
    {
        valide = false;
        document.getElementById("tel").style.borderColor = "Red";
    }

    return valide;
}