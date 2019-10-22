javascript:

var tribal = [""]; // wpisz nick gracza, badz skrot plemienia(dowolna ilosc)
var ally = [""];
var enemy = [""];
var except = [""];

if ((window.location.href.match("overview_villages") != null) && (window.location.href.match("away_detail") != null)) {



  var unitVillage = $("table#units_table>tbody>tr").length;
  var i, j;
  message = false;

  for (i = 0; i < unitVillage - 1; i++) {
    var village = $("table#units_table>tbody>tr")[i].getElementsByTagName("td")[0];
    var nameVillage = village.innerText.toLowerCase();

    // enemy
    for (j = 0; j < enemy.length; j++) {

      if (nameVillage.indexOf(enemy[j].toLowerCase()) > 1) {
        village.style.backgroundColor = "#F40000";
        console.log("Village " + nameVillage + "enemy: " + enemy[j]);
        message = true;
      }
    }
    // except
    for (j = 0; j < except.length; j++) {

      if (nameVillage.indexOf(except[j].toLowerCase()) > 1) {
        village.style.backgroundColor = "#0C8382";
        console.log("Village " + nameVillage + "except: " + except[j]);
      }
    }

    // tribal
    for (j = 0; j < tribal.length; j++) {

      if (nameVillage.indexOf(tribal[j].toLowerCase()) > 1) {
        village.style.backgroundColor = "#228B22";
        console.log("Village " + nameVillage + "tribal: " + tribal[j]);

      }
    }
    // ally
    for (j = 0; j < ally.length; j++) {

      if (nameVillage.indexOf(ally[j].toLowerCase()) > 1) {
        village.style.backgroundColor = "#00A0F4";
        console.log("Village " + nameVillage + "ally: " + ally[j]);

      }
    }



  }




  if (message) {
    UI.InfoMessage('UWAGA! Posiadasz defa u gracza spoza plemienia!', 5000, 'error')
  } else {
    UI.InfoMessage('Brawo! Nie posiadasz defa u wroga :)', 5000, 'success')
  }


} else {
  UI.InfoMessage('Przejdz do Przegladu -> Wojska -> Pomoc', 5000, 'error')
}
