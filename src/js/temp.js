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
    //let teams = JSON.parse(localStorage.getItem("teams" || "[]"))
    var dispList = "";
    for (var i = 0; i < teams.length; i++) {
        dispList += teams[i].name + '<button class= " btn btn-danger" onclick="" id="btn2"><i class="fa fa-trash"></i></button></br>';
    }
    document.getElementById('listTeam').innerHTML = dispList;
}
//export {teamList};

//rounds


    // function createFixtures(){
    //     JSON.parse(localStorage.getItem("teams") || "[]")
    //     document.getElementById('#Gen_Match').onclick(){

    //     }




    // }
$(document).ready(function () {
    JSON.parse(localStorage.getItem("teams") || "[]")
    $("#Gen_Match").on("click", function () {
        var n = teams.length, b = 1, j = 0;
        //var list = "", input = [];


        //var input_html1 = "<input type=\"number\" id=\"team-point1\" ></input>";
        //var input_html2 = "<input type=\"number\" id=\"team-point2\" ></input>";

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
                    // let forId = j;
                    // j= forId.toString();
                    // forId++;
                    // var jj= forId.toString();
                 
                   
                    var fixture = `<label for = ${'team-point'+j.toString()}>${teams[i].name}</label>
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
        do {
            if (b == n) {
                if (n % 2 == 0) {
                    break;
                }
            }
            for (let i = 0; i < teams.length / 2; i++) {
                n = n - 1;
                if (i != n) {

                    for (let i = 0; i < teams.length /2; i++) {
                        var si = Number($("#team-point" + j.toString()).val());

                        teams[i].goals += parseInt(si);
                        teams[i].played ++;
                        console.log(si);
                        //teams[i].played += Number(1);



                        
                        var sn = Number($("#team-point" + (j+1).toString()).val());
                        // teams[n].points += 0;
                        // teams[n].played += 0;

                        teams[n].goals += parseInt(sn);
                        teams[n].played ++;
                        console.log(sn);
                        console.log(si);
                        
                        //teams[n].played += Number(1);



                      
                        console.log(teams);
                        j += 2;
                    }

                }
            }
            b++;
            n = teams.length;
            re_order(teams);
        } while (b <= n);
    });
    localStorage.setItem("teams", JSON.stringify(teams));

});














function set_score() {

    // your js code goes here
    JSON.parse(localStorage.getItem("teams") || "[]");
    var n = teams.length, b = 1, j = 0, input = [];
    //for fixturei
    do {
        if (b == n) {
            if (n % 2 == 0) {
                break;
            }
        }
        for (let i = 0; i < teams.length / 2; i++) {
            n = n - 1;
            for (let j = 0; j < n; j++) {
                input[j] = "team-point" + j.toString();
                //console.log(input[j]);
            }
            if (i != n) {
                j = 0;
                console.log(input[j]);
                teams[i].points += document.getElementById(input[j]).value;
                console.log(teams[i].points);
                teams[n].points += document.getElementById(input[j + 1]).value;
                console.log(teams[n].points);
                j + 2;

                localStorage.setItem("teams", JSON.stringify(teams));
            }
        }
        b++;
        n = teams.length;
        re_order(teams);
    } while (b <= n);
}

// var n=teams.length-1;
// for(let i =0; i<teams.length;i++){
//     teams[i].points += document.getElementById("team-point1").value ;
//     console.log(teams[i]);
//     teams[n].points += document.getElementById("team-point2").value;
//     console.log(teams[n]);
// }





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
//console.log(a);
function deleteTeam() {
    teams.pop();
    var dispList = "";
    for (i = 0; i < teams.length; i++) {
        dispList += teams[i] + '<button class= " btn btn-danger" onclick="deleteTeam()" id="btn2"><i class="fa fa-trash"></i></button></br>';

    }
    document.getElementById('listTeam').innerHTML = dispList;
}