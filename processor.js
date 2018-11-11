var setter =0;
function log(i,mydata){
  console.log("Tester"+previousdiv);
document.getElementById(previousdiv).classList.remove('wiggle');
document.getElementById(previousdiv).classList.add('myclass');
previousdiv=mydata[i]+setter;
console.log("Testerer"+previousdiv);


     
if (document.contains(document.getElementById("wo"+mydata[i]) )){
  var div = document.getElementById("wo"+mydata[i]);
  div.parentNode.removeChild(div);
            } 

var d2 = document.getElementById('p0');
if(setter%12==0){
var content='<br /><br /><span class= wiggle id='+mydata[i]+setter+">"+mydata[i]+"</span>";
}
else{
  var content='<span class= wiggle id='+mydata[i]+setter+">"+mydata[i]+"</span>";
  
}
d2.insertAdjacentHTML('beforeend', content);
setter+=1;

     
    if (i<mydata.length&&mydata[i]!=undefined){
       setTimeout(function(){
           i++;
           console.log(i);
           log(i,mydata);
       },1000);

    }



 
}










