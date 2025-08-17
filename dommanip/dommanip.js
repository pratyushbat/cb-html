console.log("hello");
let p2 = document.getElementsByClassName("para")[1];

console.log(p2.innerText);
console.log(p2.outerHTML);

p2.getAttribute("id");
p2.getAttribute("class");
p2.setAttribute("spellcheck", false);
p2.setAttribute("contenteditable", true);

let i = document.getElementById("inpbox");
i.value;

i.setAttribute('type','email')
console.log(i.validity) //to check validity
let btn =document.getElementById('btn')
btn.innerText='a'
btn.innerHTML='<b>BOLD</b>'