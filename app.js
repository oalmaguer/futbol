$(document).ready(function(){

    var apiKey = "ghLvMoAgNaVy5Mvu";
    var apiSecret = "yr0JTeSDh0cIY6xeoiJaHjrvun3zaz4I";
    var findUrl = "https://livescore-api.com/api-client/teams/list.json?key=5YruetBzlYuM39j5&secret=trQ35goOgMvxFZWLXnfcQQMcPgYSqiXT&country_id=57&size=100";
    // var findUrl = "http://livescore-api.com/api-client/scores/live.json?key=5YruetBzlYuM39j5&secret=trQ35goOgMvxFZWLXnfcQQMcPgYSqiXT"
    var findUrl2 = "http://livescore-api.com/api-client/teams/head2head.json?team1_id=458&team2_id=766&key=5YruetBzlYuM39j5&secret=trQ35goOgMvxFZWLXnfcQQMcPgYSqiXT";
    // jQuery methods go here...

    

    $(".hey").click(function() {

        $("#compara").empty();

        var equipoLocal = $("#local").val();
        var equipoVisitante = $("#visitante").val();

        var equipoL = $("#local").text();
        var equipoV = $("#visitante").text();


        console.log(equipoLocal);
        console.log(equipoVisitante);


       $.get(`http://livescore-api.com/api-client/teams/head2head.json?team1_id=${equipoLocal}&team2_id=${equipoVisitante}&key=5YruetBzlYuM39j5&secret=trQ35goOgMvxFZWLXnfcQQMcPgYSqiXT`, function(data, status) {
           console.log(data);
           for (i=0;i<=10;i++) {
            $("#compara").append(`
            <thead>
            <tr>
            <th>Equipo Local</th>
            <th>marcador</th>
            <th>Equipo Visitante</th>
            <th>Fecha</th>
            </tr>
            </thead>
            <tbody>
            <td>${data.data.h2h[i].home_name}</td>
            <td>${data.data.h2h[i].score}</td>
            <td>${data.data.h2h[i].away_name}</td>
            <td>${data.data.h2h[i].date}</td>
            </tr>
            </tbody>
            `)
           
            $("#ultimosjuegos").append(`
         
            <tr>
            <tbody>
            <td>${data.data.team1.h2h_form[i]}</td>
            <td>${data.data.team2.h2h_form[i]}</td>
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