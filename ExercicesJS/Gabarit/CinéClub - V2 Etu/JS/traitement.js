function btnCalculer_onclick()
{ 
 	var Age, Horaire, Reduction, Prix;
   Prix = parseFloat(document.getElementById("txtBasePrix").value);
    Age = parseFloat(document.getElementById("txtAge").value);

    if(Age < 16)
    {
        Horaire = "Midi";
        Reduction = 0.6
    }
    else
    {
        Horaire = "Soir";
        Reduction = 0.4;
    }

}

function lstOptions_onchange()
{
    var film

    film = document.getElementById("imgFilm").value;

    document.getElementById("imgFilm").src = "img/" + film + " .jpg";
}