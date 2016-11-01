/* constant del programa */
const consumoRealE8 = 13.7;
const consumoRealE11 = 18.8;
const consumoRealE17 = 34.5;
const consumoApartamento = 0.125;
const consumoCasa = 0.15;


const durezaE8 = 60;
const durezaE11 = 73;
const durezaE17 = 95;
const consumoSalE8 = 0.36;
const consumoSalE11 = 0.36;
const consumoSalE17 = 0.73;
const capacidadSalE8 = 24;
const capacidadSalE11 = 30;
const capacidadSalE17 = 50;
/* variables globals equips per mostrar */

equipoE8 = "ESSENTIAL 8 ";
equipoE11 = "ESSENTIAL 11 ";
equipoE17 = "ESSENTIAL 17 ";

imatgeE8 = "e8.jpg";
imatgeE11 = "e11.jpg";
imatgeE17 = "e17.jpg";

txt = " Ver más información";
urlE8 = txt.link("http://www.ionfilter.com/equipos/essential8");
urlE11 = txt.link("http://www.ionfilter.com/equipos/essential11");
urlE17 = txt.link("http://www.ionfilter.com/equipos/essential17");


function show(nombreEquipo,urlEquipo){
        
    document.getElementById('capcaleraResultats').style.display='block';
    document.getElementById("capcaleraResultats").innerHTML = nombreEquipo + " " + urlEquipo;

}

function hide(){
    document.getElementById('capcaleraResultats').style.display='none';
}

    

/* borrar totes les dades - recarrega l'aplicació */
function borrar(){
    window.location.reload();  
}


/* printar resultats */

function mostrarResultats(personas,consumoReal,dureza,nombreEquipo,calculaConsumo,consumoSal,capacidadSal){


    document.getElementById("mostraModelo").innerHTML = nombreEquipo ;

    document.getElementById("mostraAutonomia").innerHTML = Math.round((consumoReal/dureza)*1000);

    var regeneracion = consumoReal/(calculaConsumo*dureza);
    document.getElementById("mostraRegeneracion").innerHTML = regeneracion.toFixed(2);

    var consumoSalDia = (consumoSal/regeneracion).toFixed(2);
    document.getElementById("mostraConsumoSal").innerHTML = consumoSalDia;

    document.getElementById("mostraSalAno").innerHTML = (consumoSalDia*365).toFixed(2);

    document.getElementById("mostraCargaSal").innerHTML = (capacidadSal/consumoSalDia).toFixed(2);
    
}


function otrosEquipos(recomendados){


    if(recomendados == equipoE8){

    document.getElementById("otrosEquipos1").innerHTML = equipoE11 + urlE11;
    document.getElementById("otrosEquipos2").innerHTML = equipoE17 + urlE17;

    }

    if(recomendados == equipoE11){

    document.getElementById("otrosEquipos1").innerHTML = equipoE17 + urlE17;

    }


    if(recomendados == equipoE17){

    document.getElementById("otrosEquipos1").innerHTML = "";

    }
}



function evaluarResultats() {


    /* resetejar dades si es que n'hi ha */
    document.getElementById("mostraDureza").innerHTML = "";
    document.getElementById("mostraTipo").innerHTML = "";
    document.getElementById("mostraNumPersonas").innerHTML = "";
    document.getElementById("mostraModelo").innerHTML = "";
    document.getElementById("mostraAutonomia").innerHTML = "";
    document.getElementById("mostraRegeneracion").innerHTML = "";
    document.getElementById("mostraConsumoSal").innerHTML = "";
    document.getElementById("mostraCargaSal").innerHTML = "";
    document.getElementById("mostraSalAno").innerHTML = "";
    document.getElementById("imatge").src = "choose.png";
    equipoTooltip ="";

    hide();


    /* captura variables i mostra dades entrada */

    dureza = document.getElementById("dureza").value;
    tipoCasa = document.getElementById("tipoCasa").value;
    numPersonas = document.getElementById("numPersonas").value;

    


    document.getElementById("mostraDureza").innerHTML = dureza ;
    document.getElementById("mostraTipo").innerHTML = tipoCasa ;
    document.getElementById("mostraNumPersonas").innerHTML = numPersonas ;


    /* determinar si es apartament o casa */

    if(tipoCasa == "apartamento"){

    /* declarem variables per determinar la autonomia de cada maquina a partir de la dureza i constant consumoReal */
        var autonomiaE8 = (consumoRealE8/dureza)*1000;
        var autonomiaE11 = (consumoRealE11/dureza)*1000;
        var autonomiaE17 = (consumoRealE17/dureza)*1000;
        var consumoEstimado = (numPersonas * 0.125)*100 ;
        document.getElementById("mostraConsEst").innerHTML = consumoEstimado ;
        
    /* Evaluem el número persones per E8 */
        
        switch (numPersonas){

            case "1":
            var calculaConsumo = 1 * consumoApartamento;

            if(autonomiaE8 >= 210.8){

                mostrarResultats(1,consumoRealE8,dureza,equipoE8,calculaConsumo,consumoSalE8,capacidadSalE8);

                document.getElementById("imatge").src = imatgeE8; 
                show(equipoE8,urlE8);
                otrosEquipos(equipoE8);

            }else if (autonomiaE11 >= 268.6){

                mostrarResultats(1,consumoRealE11,dureza,equipoE11,calculaConsumo,consumoSalE11,capacidadSalE11);

                document.getElementById("imatge").src = imatgeE11; 
                show(equipoE11,urlE11);
                otrosEquipos(equipoE11);

            }else{

                mostrarResultats(1,consumoRealE17,dureza,equipoE17,calculaConsumo,consumoSalE17,capacidadSalE17);

                document.getElementById("imatge").src = imatgeE17;
                show(equipoE17,urlE17);}

            break;

            case "2":
            var calculaConsumo = 2 * consumoApartamento;

            if(autonomiaE8 >= 210.8){

                mostrarResultats(2,consumoRealE8,dureza,equipoE8,calculaConsumo,consumoSalE8,capacidadSalE8);

                document.getElementById("imatge").src = imatgeE8; 
                show(equipoE8,urlE8);
                otrosEquipos(equipoE8);

            }else if (autonomiaE11 >= 268.6){

                mostrarResultats(2,consumoRealE11,dureza,equipoE11,calculaConsumo,consumoSalE11,capacidadSalE11);

                document.getElementById("imatge").src = imatgeE11; 
                show(equipoE11,urlE11);
                otrosEquipos(equipoE11);

            }else{

                mostrarResultats(2,consumoRealE17,dureza,equipoE17,calculaConsumo,consumoSalE17,capacidadSalE17);

                document.getElementById("imatge").src = imatgeE17;
                show(equipoE17,urlE17);}

            break;

            case "3":
            var calculaConsumo = 3 * consumoApartamento;

            if(autonomiaE8 >= 249.9){

                mostrarResultats(3,consumoRealE8,dureza,equipoE8,calculaConsumo,consumoSalE8,capacidadSalE8);

                document.getElementById("imatge").src = imatgeE8; 
                show(equipoE8,urlE8);
                otrosEquipos(equipoE8);

            }else if (autonomiaE11 >= 313.33){

                mostrarResultats(3,consumoRealE11,dureza,equipoE11,calculaConsumo,consumoSalE11,capacidadSalE11);

                document.getElementById("imatge").src = imatgeE11; 
                show(equipoE11,urlE11);
                otrosEquipos(equipoE11);

            }else{

                mostrarResultats(3,consumoRealE17,dureza,equipoE17,calculaConsumo,consumoSalE17,capacidadSalE17);

                document.getElementById("imatge").src = imatgeE17;
                show(equipoE17,urlE17);}

            break;

            case "4":
            var calculaConsumo = 4 * consumoApartamento;

            if(autonomiaE8 >= 342.5){

                mostrarResultats(4,consumoRealE8,dureza,equipoE8,calculaConsumo,consumoSalE8,capacidadSalE8);

                document.getElementById("imatge").src = imatgeE8; 
                show(equipoE8,urlE8);
                otrosEquipos(equipoE8);

            }else if (autonomiaE11 >= 376){

                mostrarResultats(4,consumoRealE11,dureza,equipoE11,calculaConsumo,consumoSalE11,capacidadSalE11);

                document.getElementById("imatge").src = imatgeE11; 
                show(equipoE11,urlE11);
                otrosEquipos(equipoE11);

            }else{

                mostrarResultats(4,consumoRealE17,dureza,equipoE17,calculaConsumo,consumoSalE17,capacidadSalE17);

                document.getElementById("imatge").src = imatgeE17;
                show(equipoE17,urlE17);}

            break;

            case "5":
            var calculaConsumo = 5 * consumoApartamento;

            if(autonomiaE8 >= 456.67){

                mostrarResultats(5,consumoRealE8,dureza,equipoE8,calculaConsumo,consumoSalE8,capacidadSalE8);

                document.getElementById("imatge").src = imatgeE8; 
                show(equipoE8,urlE8);
                otrosEquipos(equipoE8);

            }else if (autonomiaE11 >= 417.78){

                mostrarResultats(5,consumoRealE11,dureza,equipoE11,calculaConsumo,consumoSalE11,capacidadSalE11);

                document.getElementById("imatge").src = imatgeE11; 
                show(equipoE11,urlE11);
                otrosEquipos(equipoE11);

            }else{

                mostrarResultats(5,consumoRealE17,dureza,equipoE17,calculaConsumo,consumoSalE17,capacidadSalE17);

                document.getElementById("imatge").src = imatgeE17;
                show(equipoE17,urlE17);}

            break;

            case "6":
            var calculaConsumo = 6 * consumoApartamento;

            if(autonomiaE8 >= 548){

                mostrarResultats(6,consumoRealE8,dureza,equipoE8,calculaConsumo,consumoSalE8,capacidadSalE8);

                document.getElementById("imatge").src = imatgeE8; 
                show(equipoE8,urlE8);
                otrosEquipos(equipoE8);

            }else if (autonomiaE11 >= 537.14){

                mostrarResultats(6,consumoRealE11,dureza,equipoE11,calculaConsumo,consumoSalE11,capacidadSalE11);

                document.getElementById("imatge").src = imatgeE11; 
                show(equipoE11,urlE11);
                otrosEquipos(equipoE11);

            }else{

                mostrarResultats(6,consumoRealE17,dureza,equipoE17,calculaConsumo,consumoSalE17,capacidadSalE17);

                document.getElementById("imatge").src = imatgeE17;
                show(equipoE17,urlE17);}

            break;

            case "7":
            var calculaConsumo = 7 * consumoApartamento;

            if (autonomiaE11 > 626.67){

                mostrarResultats(7,consumoRealE11,dureza,equipoE11,calculaConsumo,consumoSalE11,capacidadSalE11);

                document.getElementById("imatge").src = imatgeE11; 
                show(equipoE11,urlE11);
                otrosEquipos(equipoE11);

            }else{

                mostrarResultats(7,consumoRealE17,dureza,equipoE17,calculaConsumo,consumoSalE17,capacidadSalE17);

                document.getElementById("imatge").src = imatgeE17;
                show(equipoE17,urlE17);}

            break;

            case "8":
            var calculaConsumo = 8 * consumoApartamento;

            if (autonomiaE11 > 752){

                mostrarResultats(8,consumoRealE11,dureza,equipoE11,calculaConsumo,consumoSalE11,capacidadSalE11);

                document.getElementById("imatge").src = imatgeE11; 
                show(equipoE11,urlE11);
                otrosEquipos(equipoE11);

            }else{

                mostrarResultats(8,consumoRealE17,dureza,equipoE17,calculaConsumo,consumoSalE17,capacidadSalE17);

                document.getElementById("imatge").src = imatgeE17;
                show(equipoE17,urlE17);}

            break;

        }


    /* Si es una casa   */

      }else if(tipoCasa == "casa"){

        /* declarem variables per determinar la autonomia de cada maquina a partir de la dureza i constant consumoReal */
        var autonomiaE8 = (consumoRealE8/dureza)*1000;
        var autonomiaE11 = (consumoRealE11/dureza)*1000;
        var autonomiaE17 = (consumoRealE17/dureza)*1000;
        var consumoEstimado = (numPersonas * 0.150)*100 ;
        document.getElementById("mostraConsEst").innerHTML = consumoEstimado ;

        switch (numPersonas){

            case "1":
            var calculaConsumo = 1 * consumoCasa;

            if(autonomiaE8 >= 210.8){

                mostrarResultats(1,consumoRealE8,dureza,equipoE8,calculaConsumo,consumoSalE8,capacidadSalE8);

                document.getElementById("imatge").src = imatgeE8; 
                show(equipoE8,urlE8);
                otrosEquipos(equipoE8);

            }else if (autonomiaE11 >= 268.6){

                mostrarResultats(1,consumoRealE11,dureza,equipoE11,calculaConsumo,consumoSalE11,capacidadSalE11);

                document.getElementById("imatge").src = imatgeE11; 
                show(equipoE11,urlE11);
                otrosEquipos(equipoE11);

            }else{

                mostrarResultats(1,consumoRealE17,dureza,equipoE17,calculaConsumo,consumoSalE17,capacidadSalE17);

                document.getElementById("imatge").src = imatgeE17;
                show(equipoE17,urlE17);}

            break;

            case "2":
            var calculaConsumo = 2 * consumoCasa;

            if(autonomiaE8 >= 228.33){

                mostrarResultats(2,consumoRealE8,dureza,equipoE8,calculaConsumo,consumoSalE8,capacidadSalE8);

                document.getElementById("imatge").src = imatgeE8; 
                show(equipoE8,urlE8);
                otrosEquipos(equipoE8);

            }else if (autonomiaE11 >= 268.6){

                mostrarResultats(2,consumoRealE11,dureza,equipoE11,calculaConsumo,consumoSalE11,capacidadSalE11);

                document.getElementById("imatge").src = imatgeE11; 
                show(equipoE11,urlE11);
                otrosEquipos(equipoE11);

            }else{

                mostrarResultats(2,consumoRealE17,dureza,equipoE17,calculaConsumo,consumoSalE17,capacidadSalE17);

                document.getElementById("imatge").src = imatgeE17;
                show(equipoE17,urlE17);}

            break;


            case "3":
            var calculaConsumo = 3 * consumoCasa;

            if(autonomiaE8 >= 304.44){

                mostrarResultats(3,consumoRealE8,dureza,equipoE8,calculaConsumo,consumoSalE8,capacidadSalE8);

                document.getElementById("imatge").src = imatgeE8; 
                show(equipoE8,urlE8);
                otrosEquipos(equipoE8);

            }else if (autonomiaE11 >= 341.82){

                mostrarResultats(3,consumoRealE11,dureza,equipoE11,calculaConsumo,consumoSalE11,capacidadSalE11);

                document.getElementById("imatge").src = imatgeE11; 
                show(equipoE11,urlE11);
                otrosEquipos(equipoE11);

            }else{

                mostrarResultats(3,consumoRealE17,dureza,equipoE17,calculaConsumo,consumoSalE17,capacidadSalE17);

                document.getElementById("imatge").src = imatgeE17;
                show(equipoE17,urlE17);}

            break;

            case "4":
            var calculaConsumo = 4 * consumoCasa;

            if(autonomiaE8 >= 491.43){

                mostrarResultats(4,consumoRealE8,dureza,equipoE8,calculaConsumo,consumoSalE8,capacidadSalE8);

                document.getElementById("imatge").src = imatgeE8; 
                show(equipoE8,urlE8);
                otrosEquipos(equipoE8);

            }else if (autonomiaE11 >= 417.78){

                mostrarResultats(4,consumoRealE11,dureza,equipoE11,calculaConsumo,consumoSalE11,capacidadSalE11);

                document.getElementById("imatge").src = imatgeE11; 
                show(equipoE11,urlE11);
                otrosEquipos(equipoE11);

            }else{

                mostrarResultats(4,consumoRealE17,dureza,equipoE17,calculaConsumo,consumoSalE17,capacidadSalE17);

                document.getElementById("imatge").src = imatgeE17;
                show(equipoE17,urlE17);}

            break;

            case "5":
            var calculaConsumo = 5 * consumoCasa;

            if(autonomiaE8 >= 548){

                mostrarResultats(5,consumoRealE8,dureza,equipoE8,calculaConsumo,consumoSalE8,capacidadSalE8);

                document.getElementById("imatge").src = imatgeE8; 
                show(equipoE8,urlE8);
                otrosEquipos(equipoE8);

            }else if (autonomiaE11 >= 537.14){

                mostrarResultats(5,consumoRealE11,dureza,equipoE11,calculaConsumo,consumoSalE11,capacidadSalE11);

                document.getElementById("imatge").src = imatgeE11; 
                show(equipoE11,urlE11);
                otrosEquipos(equipoE11);

            }else{

                mostrarResultats(5,consumoRealE17,dureza,equipoE17,calculaConsumo,consumoSalE17,capacidadSalE17);

                document.getElementById("imatge").src = imatgeE17;
                show(equipoE17,urlE17);}

            break;

            case "6":
            var calculaConsumo = 6 * consumoCasa;

            if(autonomiaE8 >= 685){

                mostrarResultats(6,consumoRealE8,dureza,equipoE8,calculaConsumo,consumoSalE8,capacidadSalE8);

                document.getElementById("imatge").src = imatgeE8; 
                show(equipoE8,urlE8);
                otrosEquipos(equipoE8);

            }else if (autonomiaE11 >= 626.67){

                mostrarResultats(6,consumoRealE11,dureza,equipoE11,calculaConsumo,consumoSalE11,capacidadSalE11);

                document.getElementById("imatge").src = imatgeE11; 
                show(equipoE11,urlE11);
                otrosEquipos(equipoE11);

            }else{

                mostrarResultats(6,consumoRealE17,dureza,equipoE17,calculaConsumo,consumoSalE17,capacidadSalE17);

                document.getElementById("imatge").src = imatgeE17;
                show(equipoE17,urlE17);}

            break;

            case "7":
            var calculaConsumo = 7 * consumoCasa;

            if (autonomiaE11 >= 752){

                mostrarResultats(7,consumoRealE11,dureza,equipoE11,calculaConsumo,consumoSalE11,capacidadSalE11);

                document.getElementById("imatge").src = imatgeE11; 
                show(equipoE11,urlE11);
                otrosEquipos(equipoE11);

            }else{

                mostrarResultats(7,consumoRealE17,dureza,equipoE17,calculaConsumo,consumoSalE17,capacidadSalE17);

                document.getElementById("imatge").src = imatgeE17;
                show(equipoE17,urlE17);}

            break;

             case "8":
            var calculaConsumo = 8 * consumoCasa;

            if (autonomiaE11 >= 752){

                mostrarResultats(8,consumoRealE11,dureza,equipoE11,calculaConsumo,consumoSalE11,capacidadSalE11);

                document.getElementById("imatge").src = imatgeE11; 
                show(equipoE11,urlE11);
                otrosEquipos(equipoE11);

            }else{

                mostrarResultats(8,consumoRealE17,dureza,equipoE17,calculaConsumo,consumoSalE17,capacidadSalE17);

                document.getElementById("imatge").src = imatgeE17;
                show(equipoE17,urlE17);}

            


            }


      }


    
    }