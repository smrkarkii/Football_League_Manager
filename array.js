
//window.localStorage.setItem('player',JSON.stringify(a) || []);
var teams={name:'',
           played:'',
           points:'',
           won:'',
           lost:'',
           draw:'' 
            }
            
   
    function displayTeams() {
                let teams = JSON.parse(localStorage.getItem("teams") || "[]");
            var dispList="";
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
           document.getElementById("listTeam").innerHTML = dispList;
            console.log(teams);
        }
        
   
function addTeam(){
    let a=JSON.parse(localStorage.getItem("teams")|| "[]");
    var data=document.getElementById('team-name').value;
    //append data to the array
    a.push({
        name:data,
        played:0,
        points:0,
        won:0,
        lost:0,
        draw:0
    });
    localStorage.setItem("teams",JSON.stringify(a));
    //display
    displayTeams();
  
}


   
function showData()
{
  document.getElementById("points-table").innerHTML="";
  let user_records=JSON.parse(localStorage.getItem("teams")|| "[]")
console.log(user_records);
  if(user_records)
  {
    for(let i=0;i<user_records.length;i++)
    {
      let addDiv=document.createElement('div');
  addDiv.className="row";
  addDiv.innerHTML='  <div class="col-sm-4" style="padding: 10px;">'+user_records[i].name+'</div><div class="col-sm-4" style="padding: 10px;">'+user_records[i].points+'</div><div class="col-sm-4" style="padding: 10px;">'+user_records[i].won+'</div>';
  document.getElementById("points-table").appendChild(addDiv);

    }
  }
  }



//to take points
function set_score(){ 


    // var n=teams.length-1;
    // for(let i =0; i<teams.length;i++){
    //     teams[i].points += document.getElementById("team-point1").value ;
    //     console.log(teams[i]);
    //     teams[n].points += document.getElementById("team-point2").value;
    //     console.log(teams[n]);
    // }

}
function submitPoints(){

}
 
//rounds


function match(){
    let a = JSON.parse(localStorage.getItem("teams") || "[]");
    var n=a.length,b=1;
    var list = "";
    var input_html = "<input type=\"number\" id=\"team-point\" placeholder=\"Enter score\"  class=\"box\"></input>";
    //for fixturei
    do{
        if(b==n){
            if(n%2==0){
                break;
            }
        }
        console.log(b);
        for(let i=0; i<a.length/2; i++){
            n = n-1;
            if(i!=n)
            {
                list += a[i].name + input_html + "  VS  " + input_html + a[n].name + "<br>";
                document.getElementById("matched_teams").innerHTML = list;
            }
        }
        //console.log(list);
        b++;
        n = a.length;
        re_order(a);
    }while(b<=n);
}
function re_order(){
    let a = JSON.parse(localStorage.getItem("teams") || "[]")
    var b=1,n=a.length;
    for(let i=0;i<n-1;i++)
    {   
        if(b==n-1){
            if(n%2==0){
                break;
            }
        }
        var temp;
        temp=a[i];
        a[i]=a[i+1];
        a[i+1]=temp;
        b++;
    }
}
console.log(a);
function deleteTeam(){
    //var datas=document.getElementById('team-name').value;
    teams.pop();
    var dispList="";
    for(i=0; i<a.teams; i++)
    {
        dispList += a[i].teams + '<button class= " btn btn-danger" onclick="deleteTeam()" id="btn2"><i class="fa fa-trash"></i></button></br>';
    
    }
    document.getElementById('listTeam').innerHTML = dispList;
}

    let testArray=JSON.parse(localStorage.getItem("teams")|| "[]")
    console.log(testArray);

    