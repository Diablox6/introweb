function btnCalculer_onclick()
{ 
 	var Animaux, NbJours, Tarif, Montant, Veterinaire, With, Service, Taxe;

   Veterinaire = (document.getElementById("lstVeterinaire").value);
    NbJours = parseFloat(document.getElementById("txtNbreJours").value);

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
    Montant = (NbJours * Tarif) + Service;
    Taxe = (Montant * 0.05) + (Montant * 0.09975)
    console.log("Votre veterinaire sera " +Veterinaire + ". Le prix pour la garde de votre " + Animaux + " pour " + NbJours + " jours " + With + " vous fera " + Montant);
}