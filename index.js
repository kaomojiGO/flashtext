var msg;
var msgs;
var runcheck=0;
var count=0;
var flashspeed;
   
function flash(){
   flashspeed=document.getElementById("speed").value;
   msg=document.getElementById("text").value;
   msg=msg.replace(/。/g , " ");
   msg=msg.replace(/、/g , " ");
   msgs=msg.split(" ");
   for(count=0;count<msgs.length;count++){
      if(count > msgs.length-1){
         count=0;
         runcheck=0;
         return;
      }
      document.getElementById("msgbox").innerHTML=msgs[count++];
      setTimeout("flash()",flashspeed);
   }
}
