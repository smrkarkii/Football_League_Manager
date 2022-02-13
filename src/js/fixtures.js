
//import {teamList as a} from './array.js';
//document.writeln("<script type='text/javascript' src='./src/array.js'></script>");
//<script type= "text/javascript" src="./src/array.js"></script>

const a=["A","B","C","D", "E"];
//for array length
//a=teamList;
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
        console.log(list);
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
console.log(teamList);