function jarjestaNumerot() {
            var num1 = parseFloat(document.getElementById('num1').value);
            var num2 = parseFloat(document.getElementById('num2').value);
            var num3 = parseFloat(document.getElementById('num3').value);

            var numerot = [num1, num2, num3];
            numerot.sort(function(a, b) {
                return a - b;
            });

            document.getElementById('tulos').innerText = "Järjestetyt numerot: " + numerot.join(", ");
        }

        function etsiisoin() {
            var num11 = parseFloat(document.getElementById('num11').value);
            var num22 = parseFloat(document.getElementById('num22').value);
            var num33 = parseFloat(document.getElementById('num33').value);
            var num44 = parseFloat(document.getElementById('num44').value);
            var num55 = parseFloat(document.getElementById('num55').value);
        
            let largest = num11; 
        
            if (num22> largest) {
                largest = num22;
            }
            if (num33 > largest) {
                largest = num33;
            }
            if (num44 > largest) {
                largest = num44;
            }
            if (num55 > largest) {
                largest = num55;
            }
        
            document.getElementById('tulos2').innerText = "Suurin numeron on: " + largest;
        }


    function oddoreven() {
        var number1 = parseFloat(document.getElementById('number1').value);

        if(number1 % 2 == 0) {
            document.getElementById('tulos3').innerText = "Numero on parillinen";
        }
        
        else {
            document.getElementById('tulos3').innerText = "Numero on pariton";
        }}



        function tarkistaAjoneuvo() {
            var ika = parseInt(document.getElementById("ika").value);
            var tulos = document.getElementById("tulos4");
        
            if (ika >= 18) {
                tulos.innerHTML = "Voit ajaa autoa.";
            } else if (ika >= 15) {
                tulos.innerHTML = "Voit ajaa mopoa.";
            } else if (ika >= 0) {
                tulos.innerHTML = "Voit ajaa polkupyörää.";
            } else {
                tulos.innerHTML = "Eipä ollu.";
            }
        }

        function kaanna() {
            var valittuKieli = document.getElementById("kieli").value;
            var tulosKentta = document.getElementById("tulos5");
          
            if (valittuKieli === "suomi") {
              tulosKentta.innerHTML = "Hei maailma!";
            } else if (valittuKieli === "englanti") {
              tulosKentta.innerHTML = "Hello world!";
            } else if (valittuKieli === "ruotsi") {
              tulosKentta.innerHTML = "Hej världen!";
            }
          }