
//window.localStorage.setItem('player',JSON.stringify(a) || []);
var teams = {
    name: '',
    played: '',
    points: '',
    won: '',
    lost: '',
    draw: ''
}


function displayTeams() {
    let teams = JSON.parse(localStorage.getItem("teams") || "[]");
    var dispList = "";
    for (var i = 0; i < teams.length; i++) {
        dispList += teams[i].name + '<button class= " btn btn-danger" onclick="" id="btn2"><i class="fa fa-trash"></i></button></br>';

    }
    document.getElementById('listTeam').innerHTML = dispList;
    console.log(teams);
}


function addTeam() {
    let a = JSON.parse(localStorage.getItem("teams") || "[]");
    var data = document.getElementById('team-name').value;
    console.log(data);
    //append data to the array
    a.push({
        name: data,
        played: 0,
        points: 0,
        won: 0,
        lost: 0,
        draw: 0
    });
    localStorage.setItem("teams", JSON.stringify(a));
    //display
    displayTeams();

}



function showData() {
    document.getElementById("points-table").innerHTML = "";
    let user_records = JSON.parse(localStorage.getItem("teams") || "[]")
    console.log(user_records);
    if (user_records) {
        for (let i = 0; i < user_records.length; i++) {
            let addDiv = document.createElement('div');
            addDiv.className = "row";
            addDiv.innerHTML = '  <div class="col-sm-4" style="padding: 10px;">' + user_records[i].name + '</div><div class="col-sm-4" style="padding: 10px;">' + user_records[i].points + '</div><div class="col-sm-4" style="padding: 10px;">' + user_records[i].won + '</div>';
            document.getElementById("points-table").appendChild(addDiv);

        }
    }
}



//to take points
function set_score() {


    // var n=teams.length-1;
    // for(let i =0; i<teams.length;i++){
    //     teams[i].points += document.getElementById("team-point1").value ;
    //     console.log(teams[i]);
    //     teams[n].points += document.getElementById("team-point2").value;
    //     console.log(teams[n]);
    // }

}
function submitPoints() {

}

//rounds


// function match(){
//     //let teams = JSON.parse(localStorage.getItem("teams") || "[]")
//     var n=teams.length,b=1,j=0;
//     var list = "",input = [];

//     for(let i=0;i<(n*(n-1));i++){
//         input[i] = "<input type=\"number\" id=\"team-point" + i.toString() + " \"placeholder=\"Enter team point\"></input>";
//     }
//     //var input_html1 = "<input type=\"number\" id=\"team-point1\" ></input>";
//     //var input_html2 = "<input type=\"number\" id=\"team-point2\" ></input>";

//     //for fixturei
//     do{
//         if(b==n){
//             if(n%2==0){
//                 break;
//             }
//         }
//         for(let i=0; i<teams.length/2; i++){
//             n = n-1;
//             if(i!=n)
//             {
//                 console.log(input[j] + "      " + input[j+1] + "loop" + j);
//                 list += teams[i].name + input[j] + "-" + input[j+1] + teams[n].name + "<br>";
//                 document.getElementById("matched_teams").innerHTML = list;
//                 j +=2;
//             }
//         }
//         b++;
//         n = teams.length;
//         re_order(teams);
//     }while(b<=n);
// }
$(document).ready(function () {
    let teams = JSON.parse(localStorage.getItem("teams") || "[]")
    $("#Gen_Match").on("click", function () {
        var n = teams.length, b = 1, j = 0;
        var list = "", input = [];


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
                    //     // $('#team1').innerHTML=teams[i].name;
                    //     // $('#team2').innerHTML=teams[n].name;
                    //     $('#vs').append('<label for ="team-point" + j.toString()> teams[i].name </label> ').append
                    //     ('<input>', { id: 'team-point' + j.toString(), name: 'team-point' + j.toString(), type: 'text', name: 'info',}).append
                    //  ('<input>', { id: 'team-point' + (j + 1).toString(), name: 'team-point' + j.toString(), type: 'text', name: 'info'  }).append('<label for ="team-point" + j.toString()> teams[n].name </label>');

                    var table = $('#fixtures');
                    table.innerHTML = '';
                    var fixture = `<label for = ${'team-point' + j.toString()}>${teams[i].name}</label>
                                  <input type="number" id='team-point' + j.toString() >
                                <span>V/S</span>
                                 <input type="number" id='team-point' + j.toString()>
                                  <label for='team-point' + j.toString()>${teams[n].name}</label> `
                                  displayTeams.innerHTML += fixture;
                                  j += 2;
                }
            }
            b++;
            n = teams.length;
            re_order(teams);
        } while (b <= n);
    });

    $("#myid").on("click", function () {
        JSON.parse(localStorage.getItem("teams") || "[]");
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
                    j = 0;
                    $("#set_score").on("click", function () {
                        for (let i = 0; i < (n * (n - 1) / 2); i++) {
                            teams[i].points += $("input[id = team-point" + i.toString() + "]").val();
                            console.log(teams[i].points);
                            teams[n].points += $("input[id = team-point" + i.toString() + "]").val();
                            console.log(teams[n].points);

                        }
                    });
                }
            }
            b++;
            n = teams.length;
            re_order(teams);
        } while (b <= n);
    });
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
    //var datas=document.getElementById('team-name').value;
    a.pop();
    var dispList = "";
    for (i = 0; i < a.length; i++) {
        dispList += a[i].name + '<button class= " btn btn-danger" onclick="deleteTeam()" id="btn2"><i class="fa fa-trash"></i></button></br>';

    }
    document.getElementById('listTeam').innerHTML = dispList;
}



