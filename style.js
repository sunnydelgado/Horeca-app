var totalfris = 0
var totalbier = 0
var totalwijn = 0
var totalsnack5 = 0
var totalsnack10 = 0
// De variabelen die bijhouden hoeveel er van iets is besteld.//

alert("Welcome bij de cafe Davinci")
alert("U kunt uit de volgende producten kiezen\nfris: € 1,50\nbier: € 2,00\nwijn: € 3,00\nsnack: € 5,00/ €10,00")

function order() {
  var bestelling = prompt('Welke bestelling wilt u toevoegen?\nfris\nbier\nwijn\nsnack');

  if (bestelling == "fris") {
    var fris = prompt('Hoeveel fris wilt u toevoegen?');
    alert('U heeft' + ' ' + fris + ' ' + 'fris toegevoegd');
    totalfris = Number(totalfris) + Number(fris)
    order();
    // dit zijn de acties die gebeuren als iemand fris in type.//
  } else if (bestelling == "bier") {
    var bier = prompt('Hoeveel bier wilt u toevoegen');
    alert('U heeft' + ' ' + bier + ' ' + 'bier toegevoegd');
    totalbier = Number(totalbier) + Number(bier)
    order();
  }
  // dit zijn acties die gebeuren als iemand bier in type.//
  else if (bestelling == "wijn") {
    var wijn = prompt('Hoeveel wijn wilt u toevoegen?');
    alert('U heeft' + ' ' + wijn + ' ' + 'wijn toegevoegd');
    totalwijn = Number(totalwijn) + Number(wijn)
    order();
    // dit zijn de acties die gebeuren als iemand wijn in type.//

  } else if (bestelling == "snack") {
    var snack= prompt("Hoeveel kaasballen wilt u toevoegen aan uw bestelling: (5 of 10)?");
    if (snack == 5) {
      var snack5 = prompt("Hoeveel schalen van 5 kaasbalschalen wilt u toevoegen?");
      alert("Er zijn" + " " + snack5 + " " + "kaasbalschalen van 5 stuks toegevoegd");
      totalsnack5 = Number(totalsnack5) + Number(snack5);
      order();

    } else if (snack == 10) {
      var snack10 = prompt("Hoeveel schalen van 10 kaasbalschalen wilt u toevoegen?");
      alert("Er zijn" + " " + snack10 + " " + "kaasbalschalen van 10 stuks toegevoegd");
      totalsnack10 = Number(totalsnack10) + Number(snack10);
      order();
      // Dit zijn de acties die gebeuren als iemand 10 type voor snacks.//

    } else {
      alert('Wij hebben alleen kaasbalschalen van 5 en 10 stuks.');
      order();
      //Dit zijn de acties die gebeuren als iemand iets anders invuld dan 8 of 16.//
    }
  } else if (bestelling == "stop") {
    // Dit zijn de acties die gebeuren als iemand stop type.//

    const fris = 1.50;
    const bier = 2.00;
    const wijn = 3.00;
    const snack5 = 5.00;
    const snack10 = 10.00;
    // Prijzen van de producten.//

    var pricesfris = (fris * totalfris);
    var pricesbier = (bier * totalbier);
    var priceswijn = (wijn * totalwijn);
    var pricessnack5 = (snack5 * totalsnack5);
    var pricessnack10 = (snack10 * totalsnack10);
    //Deze code berekend de prijs van de producten.//
    document.write("U heeft" + " " + totalfris + " " + "fris besteld." + "<br>");
    document.write(totalfris + " " + "x €1,50" + " " + " = " + "€" + pricesfris + " " + "<br><br>");
    document.write("U heeft" + " " + totalbier + " " + "bier besteld." + "<br />");
    document.write(totalbier + " " + "x €2,00" + " " + " = " + "€" + pricesbier + " " + "<br><br>");
    document.write("U heeft" + " " + totalwijn + " " + "wijn besteld." + "<br />");
    document.write(totalwijn + " " + "x €3,00" + " " + " = " + "€" + priceswijn + " " + "<br><br>");
    document.write("U heeft" + " " + totalsnack5 + " " + "bitterbalschalen van 5 stuks besteld." + "<br>");
    document.write(totalsnack5 + " " + "x €5,00" + " " + " = " + "€" + pricessnack5 + " " + "<br><br>");
    document.write("U heeft" + " " + totalsnack10 + " " + "bitterbalschalen van 10 stuks besteld." + "<br>");
    document.write(totalsnack10 + " " + "x €10,00" + " " + " = " + "€" + pricessnack10 + " " + "<br><br>");
    document.write("totaal prijs: €" + " " + (pricesfris + pricesbier + priceswijn + pricessnack5 + pricessnack10) + " " + "<br><br><br><br>");
    document.write("Dank u wel voor het bestellen, u bent gehelopen door Sunny")
  } else {
    alert('Dit product hebben wij helaas niet wij hebben wel: fris, bier, wijn en bitterballen.');
    order();
  }
}

order();
