$(document).ready(function(){

    var apiKey = "ghLvMoAgNaVy5Mvu";
    var apiSecret = "yr0JTeSDh0cIY6xeoiJaHjrvun3zaz4I";
    var findUrl = "https://livescore-api.com/api-client/teams/list.json?key=5YruetBzlYuM39j5&secret=trQ35goOgMvxFZWLXnfcQQMcPgYSqiXT&country_id=57&size=100";
    // var findUrl = "http://livescore-api.com/api-client/scores/live.json?key=5YruetBzlYuM39j5&secret=trQ35goOgMvxFZWLXnfcQQMcPgYSqiXT"
    var findUrl2 = "http://livescore-api.com/api-client/teams/head2head.json?team1_id=458&team2_id=766&key=5YruetBzlYuM39j5&secret=trQ35goOgMvxFZWLXnfcQQMcPgYSqiXT";
    // jQuery methods go here...

    

    $(".hey").click(function() {

        $("#compara").empty();
        $("#ultimosjuegos").empty();

        
        var puntosL = 0;
        var puntosV = 0;

        var comparacionL = 0;
        var comparacionV = 0;


        var equipoLocal = $("#local").val();
        var equipoVisitante = $("#visitante").val();

        var equipoL = $("#local option:selected").text();
        var equipoV = $("#visitante option:selected").text();

        residuo = 0;

        console.log(equipoLocal);
        console.log(equipoVisitante);





       $.get(`http://livescore-api.com/api-client/teams/head2head.json?team1_id=${equipoLocal}&team2_id=${equipoVisitante}&key=5YruetBzlYuM39j5&secret=trQ35goOgMvxFZWLXnfcQQMcPgYSqiXT`, function(data, status) {
           console.log(data);

        for (i=0;i<7;i++) {
            if (data.data.team1.overall_form[i] == "W") {
                puntosL = puntosL + 3;
            } else if (data.data.team1.overall_form[i] == "D") {
                puntosL = puntosL + 1;
            }
    
            if (data.data.team2.overall_form[i] == "W") {
                puntosV = puntosV + 3;
            } else if (data.data.team2.overall_form[i] == "D") {
                puntosV = puntosV + 1;
            }
    
        }
           
        console.log("Puntos local " + puntosL);
        console.log("Puntos Visitante " +  puntosV);

            for (i=0;i<6;i++) {
                if (data.data.team1.h2h_form[i] == "W") {
                    comparacionL = comparacionL + 3;
                } else if (data.data.team1.h2h_form[i] == "D") {
                    comparacionL = comparacionL+1;
                }

                if (data.data.team2.h2h_form[i] == "W") {
                    comparacionV = comparacionV + 3;
                } else if (data.data.team2.h2h_form[i] == "D") {
                    comparacionV = comparacionV + 1;
                }
            }
                console.log("Puntos Compración local " + comparacionL);
                console.log("Puntos Compración Visitante " + comparacionV);

                totalL = puntosL + comparacionL;
                totalV = puntosV + comparacionV;

                totalL = totalL /2;
                totalV = totalV /2;


                

                if (totalL > totalV) {
                    residuo = totalL - totalV;
                    console.log("total local " + totalL)
                    console.log("total visitante " + totalV)
                    console.log("residuo " + residuo);
                } else {
                    console.log("total local " + totalL)
                    console.log("total visitante " + totalV)
                    residuo = totalV - totalL;
                    console.log("residuo " + residuo);
                }

                if (residuo < 4) {
                   alert("Empate");
                } else if (residuo >= 4) {
                    if (totalL > totalV) {
                       alert("Probable ganador es " + equipoL);
                    } else {
                       alert("Probable ganador es " + equipoV);
                    }
                }


           $("#compara").append(`
           <thead>
           <tr>
           <th>Equipo Local</th>
           <th>marcador</th>
           <th>Equipo Visitante</th>
           <th>Fecha</th>
           </tr>
           </thead>`)

           $("#ultimosjuegos").append(`
           
            <thead>
            <tr>
            <th>${equipoL}</th>
            <th>${equipoV}</th>
            </tr>
            </thead>
           `)


           for (i=0;i<=10;i++) {
            $("#compara").append(`
            
            <tbody>
            <td>${data.data.h2h[i].home_name}</td>
            <td>${data.data.h2h[i].score}</td>
            <td>${data.data.h2h[i].away_name}</td>
            <td>${data.data.h2h[i].date}</td>
            </tr>
            </tbody>
            `)

           
            $("#ultimosjuegos").append(`
            <tbody>
            <td>${data.data.team1.overall_form[i]}</td>
            <td>${data.data.team2.overall_form[i]}</td>
           
            </tr>
            </tbody>
            `)

           

           }

           
          

        })
        

     

    })
    
})
// console.log(data.data.match[i].home_name + " vs " +  data.data.match[i].away_name
// + " Date: " + data.data.match[i].last_changed
// + " Score " + data.data.match[i].score );