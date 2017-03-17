var msg="一定間隔で,文字が,変更されていますか？";
var msgs=msg.split(",");
var i=0;
   
function changeMsg(){
   if(i > msgs.length-1){
      i=0;
   }
   document.getElementById("msgbox").innerHTML=msgs[i++];
   setTimeout("changeMsg()",1000);
}
