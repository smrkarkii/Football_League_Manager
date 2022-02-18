var string = 'i am smriti karki';
function reverseWords(str) {
   let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
   return reverseWordArr.join(" ");
 }
 console.log(reverseWords(string));