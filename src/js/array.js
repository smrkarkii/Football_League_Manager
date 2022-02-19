
//window.localStorage.setItem('player',JSON.stringify(a) || []);
function addTeam(){
    let a=JSON.parse(localStorage.getItem("a")|| "[]")
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
    localStorage.setItem("a",JSON.stringify(a));
    //display
    displayTeams();
}

    function displayTeams() {
        let teams = JSON.parse(localStorage.getItem("a") || "[]")
    var dispList="";
    for(var i=0; i<teams.length; i++)
    {
        dispList += teams[i].name + '<button class= " btn btn-danger" onclick="" id="btn2"><i class="fa fa-trash"></i></button></br>';
       
    }
    document.getElementById('listTeam').innerHTML = dispList;
    console.log(teams);
}

//export {teamList};
 
//rounds


function match(){
    let a = JSON.parse(localStorage.getItem("a") || "[]")
    var n=a.length,b=1;
    var list = "";
    var input_html = "<input type=\"number\" id=\"team-point\" placeholder=\"Enter team point\"></input>";
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
                list += a[i].name + input_html + "-" + input_html + a[n].name + "<br>";
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
    let a = JSON.parse(localStorage.getItem("a") || "[]")
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
//console.log(a);
function deleteTeam(){
    //var datas=document.getElementById('team-name').value;
    a.pop();
    var dispList="";
    for(i=0; i<a.length; i++)
    {
        dispList += a[i].name + '<button class= " btn btn-danger" onclick="deleteTeam()" id="btn2"><i class="fa fa-trash"></i></button></br>';
    
    }
    document.getElementById('listTeam').innerHTML = dispList;
}