function frmMembre_onsubmit()
{
    var valide = false;
    if (valideChampsOblig() === true)
    {
        if (valideFormat() === true)
        {
            afficherTarif();
            valide = true;
        }
    }
    else
    {
        document.getElementById("lblMessageErreur").innerHTML = "Les champs avec * sont obligatoire ";
    }
    return valide;
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
    document.getElementById("res").innerHTML = "Le resulta sera de " + resultat + " $";
}

function valideChampsOblig()
{
    var valide = true;

    var tabValide = new Array("txtNom","txtPrenom","txtAdresse","txtVille","txtTel");
    for (i = 0; i < tabValide.length; i ++)
    {
        if (validExist(tabValide[i])=== false)
        {
            valide = false;
        }
    }
    return valide;
}

function validExist(nomID)
{
    var valide = true;
    if (document.getElementById(nomID).value === "")
    {
        valide = false;
        document.getElementById(nomID).style.borderColor = "red";
    }
    else
    {
        valide = true;
        document.getElementById(nomID).style.borderColor = "white";
    }
    return valide;
}


function valideFormat()
{
    var valide = true;

    if (valideNom(document.getElementById("txtNom").value) === false)
    {
        valide = false;
        document.getElementById("txtNom").style.borderColor = "red";
    }
    if (valideNom(document.getElementById("txtPrenom").value) === false)
    {
        valide = false;
        document.getElementById("txtPrenom").style.borderColor = "red";
    }
    if (valideNom(document.getElementById("txtVille").value) === false)
    {
        valide = false;
        document.getElementById("txtVille").style.borderColor = "red";
    }
    if (valideNum(document.getElementById("txtTel").value) === false)
    {
        valide = false;
        document.getElementById("txtTel").style.borderColor = "red";
    }
    if ((validePost(document.getElementById("txtCodePostal").value) === false) && (document.getElementById("txtCodePostal").value !== ""))
    {
        valide = false;
        document.getElementById("txtCodePostal").style.borderColor = "red";
    }
    else
    {
        document.getElementById("txtCodePostal").style.borderColor = "white";
    }
    if ((validePerm(document.getElementById("txtCodePerm").value) === false) && (document.getElementById("txtCodePerm").value !== ""))
    {
        valide = false;
        document.getElementById("txtCodePerm").style.borderColor = "red";
    }
    else
    {
        document.getElementById("txtCodePerm").style.borderColor = "white";
    }

    return valide;
}


function valideNom(chaine)
{
    return /^[A-Z]{1}[a-z]+|[\-?[A-Z|a-z]]+$/.test(chaine)
}

function valideNum(chaine)
{
    return /^([0-9]{3}-{1}[0-9]{3}-{1}[0-9]{4}){1}| (\([0-9]\) [0-9]{3}-{1}[0-9]{4}){1}$/.test(chaine)
}

function validePost(chaine)
{
    return /^[A-z][0-9][A-z] [0-9][A-z][0-9]$/.test(chaine)
}

function validePerm(chaine)
{
    return /^[A-z]{4}(\d{8})$/.test(chaine)
}