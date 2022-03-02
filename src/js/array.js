//window.localStorage.setItem('player',JSON.stringify(a) || []);

var teams = [];
function addTeam() {
    //a=JSON.parse(localStorage.getItem("teams" || "[]"));
    var data = document.getElementById('team-name').value;
    //append data to the array
    teams.push({
        name: data,
        played: 0,
        points: 0,
        goals:0,
        won: 0,
        lost: 0,
        draw: 0
    });
    JSON.parse(localStorage.getItem("teams" || "[]"));
    localStorage.setItem("teams", JSON.stringify(teams));
    //display
    displayTeams();
}
function displayTeams() {
    let teams = JSON.parse(localStorage.getItem("teams" || "[]"))
    var dispList = "";
    for (var i = 0; i < teams.length; i++) {
        var tr = "<tr>";
        tr += `<td>${i + 1}</td>`;
        tr += `<td>
             <i class="far fa-user"></i> 
             ${teams[i].name} 
             <i class="fas fa-times delete" onclick="deletePlayer(${i})"></i>
        </td>`;
        tr += "</tr>";
        dispList += tr;
   }
    document.getElementById('listTeam').innerHTML = dispList;
}

$(document).ready(function () {
  
    $("#Gen_Match").on("click", function () {
        
    JSON.parse(localStorage.getItem("teams") || "[]")
        var n = teams.length, b = 1, j = 0;
    
        //for fixturei
        do {
            if (b == n) {
                if (n % 2 == 0) {
                    break;
                }
            }
            for (let i = 0; i < teams.length / 2; i++) {
                n = n - 1;
                if (i != n) {
                
                   
                    var fixture = `
                               
                                <label for = ${'team-point'+j.toString()}>${teams[i].name}</label>
                                  <input type="number" id=${'team-point' +j.toString()} >
                                <span>V/S</span>
                                 <input type="number" id=${'team-point' +(j+1).toString()}>
                                  <label for=${'team-point' +(j+1).toString()}>${teams[n].name}</label> <br> `;
                                  j += 2;

                    $('#fixtures').append(fixture);
                }
            }
            b++;
            n = teams.length;
            re_order(teams);
        } while (b <= n);
    });
    $("#myid").on("click", function () {
        teams=JSON.parse(localStorage.getItem("teams" || "[]"));
        var n = teams.length, b = 1, j = 0;
        var temp = [];
        do {
            if (b == n) {
                if (n % 2 == 0) {
                    break;
                }
            }
            for (let i = 0; i < teams.length / 2; i++) {
                n = n - 1;
                if (i != n) {

                        var si = Number($("#team-point" + j.toString()).val());

                        temp[i] = parseInt(si);
                        teams[i].goals += parseInt(si);
                        teams[i].played ++;
                        console.log(teams[i].goals);
                        //teams[i].played += Number(1);



                        
                        var sn = Number($("#team-point" + (j+1).toString()).val());
                        // teams[n].points += 0;
                        // teams[n].played += 0;
                        temp[n] = parseInt(sn);
                        teams[n].goals += parseInt(sn);
                        teams[n].played ++;
                        console.log(teams[n].goals);

                        if(temp[i] == temp[n]){
                            teams[i].points ++;
                            teams[n].points ++;
                            teams[i].draw ++;
                            teams[n].draw ++;
                        }
                        if(temp[i]>temp[n]){
                            teams[i].points += 3;
                            teams[i].won ++;
                            teams[n].lost ++;
                        }
                        if(temp[n]>temp[i]){
                            teams[n].points +=3;
                            teams[n].won ++;
                            teams[i].lost ++;
                        }
                        
                        //teams[n].played += Number(1);



                        localStorage.setItem("teams", JSON.stringify(teams));
                        console.log(teams);
                        j += 2;

                }
            }
            b++;
            n = teams.length;
            re_order(teams);
        } while (b <= n);
    });
    
});


 localStorage.setItem("teams", JSON.stringify(teams));



function re_order(teams) {
    //let teams = JSON.parse(localStorage.getItem("a") || "[]")
    JSON.parse(localStorage.getItem("teams" || "[]"));

    var b = 1, n = teams.length;
    for (let i = 0; i < n - 1; i++) {
        if (b == n - 1) {
            if (n % 2 == 0) {
                break;
            }
        }
        var temp;
        temp = teams[i];
        teams[i] = teams[i + 1];
        teams[i + 1] = temp;
        b++;
    }
}
