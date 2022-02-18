// for(i=1;i<20;i++){
//     if((i%3 == 0) & (i%5 == 0)){
//         console.log('fizzbuzz');
//     }
//     else if(i%5 == 0){
//         console.log('buzz');
//     }
//     else if(i%3 == 0 ){
//         console.log('fizz');
//     }
//     else{
//         console.log(i);
// }
// }


for(i=1;i<20;i++){
    var data=""
    if(i%3 == 0){
        data += "fizz";
    }
    if(i%5 == 0)
    {
        data+= "buzz";
    }
    else {
        data=i;
    }
    console.log(data);
}
