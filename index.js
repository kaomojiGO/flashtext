<script type="text/JavaScript">
   msg="一定間隔で,文字が,変更されていますか？";
   msgs=msg.split(",");
   i=0;
   
   function changeMsg(){
   if(i > msgs.length-1){
   i=0;
   }
   document.getElementById("msgbox").innerHTML=msgs[i++];
   setTimeout("changeMsg()",1000);
   }
</script>
