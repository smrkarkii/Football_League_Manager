const teamList = new Array();

function addTeam(){
    var data=document.getElementById('team-name').value;
    //append data to the array
    teamList.push(data);
    //display
    var dispList="";
    for(i=0; i<teamList.length; i++)
    {
        dispList += teamList[i] + '<button class= " btn btn-danger" onclick="" id="btn2"><i class="fa fa-trash"></i></button></br>';
       
    }
    document.getElementById('listTeam').innerHTML = dispList;
       
}
// function deleteTeam(){
//     //var datas=document.getElementById('team-name').value;
//     teamList.pop();
//     var dispList="";
//     for(i=0; i<teamList.length; i++)
//     {
//         dispList += teamList[i] + '<button class= " btn btn-danger" onclick="deleteTeam()" id="btn2"><i class="fa fa-trash"></i></button></br>';
    
//     }
//     document.getElementById('listTeam').innerHTML = dispList;
// }
//export {teamList};

