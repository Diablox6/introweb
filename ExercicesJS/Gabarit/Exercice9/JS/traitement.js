function btnCalculer_onclick()
{ 
 	var NbEtu, Nb65, NbAutre, NbBillet, Rab, Prix;

   NbEtu = parseFloat(document.getElementById("txtNbEtu").value);
   Nb65 = parseFloat(document.getElementById("txtNb65").value);
   NbAutre = parseFloat(document.getElementById("txtNbAutre").value);
   NbBillet = parseFloat(document.getElementById("txtNbBillet").value);
   Rab = parseFloat(document.getElementById("txtRab").value);

    NbBillet = NbEtu + Nb65 + NbAutre;

    if (NbBillet > 5)
        {
          Rab = 0.1
        }
     else
        {
            Rab = 0
        }
        Prix = (NbEtu *12) + (Nb65 *15) + (NbAutre *20);
    Prix = Prix - (Prix * Rab)
    console.log("Le prix de vos billet sera de " +Prix);
}