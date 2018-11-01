function btnCalculer_onclick()
{ 
 	var age, Categorie;

 	age=parseFloat(document.getElementById("txtAge").value);

 	if( (age >= 6) && (age <= 8))
    {
        Categorie = "Poussin";
    }

    else if( (age >= 9) && (age <= 10))
    {
        Categorie = "Pupille";
    }

    else if ( (age >= 11) && (age <= 12))
    {
        Categorie = "Minime";
    }

    else if (age >= 13)
    {
        Categorie = "Cadet";
    }

    console.log("Votre enfant a " + age + " il appartient a la categorie " + Categorie);

}