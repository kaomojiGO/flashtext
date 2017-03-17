var msg;
var msgs;
var count=0;
var flashspeed;
var runcheck=0;
var halftext
   
function flash(){
   document.getElementById("msgbox").innerHTML=msgs[count++];
}

function flashloop(){
   if(runcheck==0){
      runcheck=1;
      flashspeed=document.getElementById("speed").value;
      msg=document.getElementById("text").value;
      msg=msg.replace(/。/g , "。 ");
      msg=msg.replace(/、/g , "、 ");
      msgs=msg.split(" ");
      for(var i=0;i<msgs.length-1;i++){
         if(msgs[i].length>12){
            halftext=msgs[i].substr(msgs[i].length-msgs[i].length/2);
            msgs[i]=msgs[i].substr(0,msgs[i].length-msgs[i].length/2);
            msgs.splice(i+1, 0, halftext);
         }
      }
            
      for(var i=0;i<msgs.length-1;i++){
         setTimeout("flash()",flashspeed*i);
      }
      count=0;
      setTimeout("release()",flashspeed*(msgs.length-1)+500);
   }
}

function release(){
   document.getElementById("msgbox").innerHTML="おしまい";
   runcheck=0;
}

