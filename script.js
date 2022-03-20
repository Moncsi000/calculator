const osszeAd = document.getElementById("osszeadas");
const input1 = document.getElementById("bevitel1");
const input2 = document.getElementById("bevitel2");
const kivon = document.getElementById("kivonas");
const oszt= document.getElementById("osztas");
const szor = document.getElementById("szorzas");
const here = document.getElementById("ide");


function muvelet(muv){
    let eredmenyem =0;

   switch(muv){
       case "+" : eredmenyem= (Number)(bevitel1.value)+(Number)(bevitel2.value);
       break;
       case "-" :  eredmenyem= (Number)(bevitel1.value)-(Number)(bevitel2.value);
       break;
       case "*" : eredmenyem = (Number)(bevitel1.value)*(Number)(bevitel2.value);
       break;
       case "/" : eredmenyem= (Number)(bevitel1.value)/(Number)(bevitel2.value);
   }
   here.innerHTML = eredmenyem;
}

osszeAd.addEventListener("click",function(){muvelet("+");});
kivon.addEventListener("click",function(){muvelet("-");});
oszt.addEventListener("click",function(){muvelet("/");});
szor.addEventListener("click",function(){muvelet("*");});