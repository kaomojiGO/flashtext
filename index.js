var msg="一定間隔で,文字が,変更されていますか？";
var msgs=msg.split(",");
var count=0;
var flashspeed
   
function flash(){
   flashspeed=document.getElementById('speed').value;
   if(count > msgs.length-1){
      count=0;
   }
   document.getElementById("msgbox").innerHTML=msgs[i++];
   setTimeout("flash()",flashspeed);
}
