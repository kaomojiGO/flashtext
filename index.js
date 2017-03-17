var msg;
var msgs;
var runcheck=0;
var count;
var flashspeed;
var d1;
var d2;
   
function flash(){
   flashspeed=document.getElementById("speed").value;
   if(runcheck==0){
      runcheck=1;
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
         document.getElementById("msgbox").innerHTML=msgs[count];
         d1 = new Date();
         while (true) {
            d2 = new Date();
            if (d2 - d1 > flashspeed) {
               break;
            }
         }
      }
   }
}
