function btnCalculer_onclick()
{ 
    if(validChampsOblig()===true) {
        resultat = traiterInfos();
    }
}


function traiterInfos()
{
    var Note1, Note2, Operateur, Resultat;

    Note1 = parseFloat(document.getElementById("txtNbre1").value);
    Note2 = parseFloat(document.getElementById("txtNbre2").value);
    Operateur = (document.getElementById("txtOperateur").value);
    Resultat = calcul(Note1, Note2, Operateur);
    document.getElementById("lblMessage").innerHTML = "Le resultat est " + Resultat;
}




function calcul(Note1, Note2, Operateur,)
{

    switch (Operateur)
    {
        case "-":
            Resultat = Note1 - Note2;
            break;
        case "*":
            Resultat = Note1 * Note2;
            break;
        case "+":
            Resultat = Note1 + Note2;
            break;
        case "/":
            Resultat = Note1 / Note2;
            break;
    }


    return Resultat;
}

function valideExist(nomId)
{
    var valide = true;
    if (document.getElementById(nomId).value === "")
    {
        valide = false;
        document.getElementById(nomId).style.backgroundColor = "red";
    }
    else
    {
        valide = true;
        document.getElementById(nomId).style.backgroundColor = "white";
    }
    return valide;
}

function validChampsOblig()
{
    var valide = false;

    if ((valideExist("txtNbre1") === true) && (valideExist("txtNbre2") === true) && (valideExist("txtOperateur") === true))
    {
        valide = true;
    }
    else
    {
        valide = false;
    }
    return valide;
}













