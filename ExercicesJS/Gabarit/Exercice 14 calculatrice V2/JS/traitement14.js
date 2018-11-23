function btnCalculer_onclick()
{ 
    if(validChampsOblig()===true)
    {
        if (valideFormats()=== true)
        {
            resultat = traiterInfos();
        }
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
    var valide = true;
    var tabNomId = new Array("txtNbre1","txtNbre2","txtOperateur");

    for (i = 0; i < tabNomId.length; i ++)
    {
        if (valideExist(tabNomId[i])=== false)
        {
            valide = false;
        }
    }
    return valide;
}

function valideFormats()
{
    var valide = true;
    if (valideNo(document.getElementById("txtNbre1").value) == false)
    {
        valide = false;
        document.getElementById("txtNbre1").style.backgroundColor = "red";
    }
    if (valideNo(document.getElementById("txtNbre2").value) == false)
    {
        valide = false;
        document.getElementById("txtNbre2").style.backgroundColor = "red";
    }
    if (valideOperateur(document.getElementById("txtOperateur").value) == false)
    {
        valide = false;
        document.getElementById("txtOperateur").style.backgroundColor = "red";
    }
    return valide;
}


function valideNo(chaine)
{
    return /^[0-9]+$/.test(chaine);
}

function valideOperateur(chaine)
{
    return /^(\+|\-|\*|\/)?$/.test(chaine);
}










