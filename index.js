var msg;
var msgs;
var count=0;
var flashspeed;
   
function flash(){
   msg=document.getElementById("text").value;
   msgs=msg.replaceAll("。", "、").split("、");
   flashspeed=document.getElementById("speed").value;
   if(count > msgs.length-1){
      count=0;
   }
   document.getElementById("msgbox").innerHTML=msgs[count++];
   setTimeout("flash()",flashspeed);
}
