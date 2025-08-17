
let inpCode =document.getElementById('inpCode') ;
let btnEncode =document.getElementById('btnEncode'); 
let btnEncrypt =document.getElementById('btnEncrypt'); 
let code =document.getElementById('code'); 

btnEncode.onclick=function() {
    let data =inpCode.value;
    data=btoa(data);
    code.value=data;
}



swapcase = function swapcase(str) {
    // Use the replace method with a regular expression to match lowercase and uppercase letters separately
    return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        // For each match, if chr (lowercase letter) exists, convert it to uppercase; otherwise, convert the match (uppercase letter) to lowercase
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}


btnEncrypt.onclick=function(){
    let data=code.value;
    data=swapcase(data);
    code.value=data;
}