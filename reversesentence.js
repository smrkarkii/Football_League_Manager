function reverse(str){
    newstring="";
    x=str.split(" ");
    console.log(x);
    // 
    x.reverse();
    y=x.join(" ");
    return y;
}
rever=reverse("i am smriti karki");
console.log(rever);