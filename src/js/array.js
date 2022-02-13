var a= [];

function addTeam(){
    var data=document.getElementById('team-name').value;
    //append data to the array
    a.push(data);
    //display
    var dispList="";
    for(i=0; i<a.length; i++)
    {
        dispList += a[i] + '<button class= " btn btn-danger" onclick="" id="btn2"><i class="fa fa-trash"></i></button></br>';
       
    }
    document.getElementById('listTeam').innerHTML = dispList;
    console.log(a);
}

//export {teamList};

var n=a.length,b=1;
var list = "";
 
//rounds
function match(){
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
                list += a[i] + "-" + a[n] + "<br>";
                document.getElementById("matched_teams").innerHTML = list;
            }
        }
        //console.log(list);
        b++;
        n = a.length;
        re_order();
    }while(b<=n);
}
function re_order(){
    var b=1;
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
        dispList += a[i] + '<button class= " btn btn-danger" onclick="deleteTeam()" id="btn2"><i class="fa fa-trash"></i></button></br>';
    
    }
    document.getElementById('listTeam').innerHTML = dispList;
}