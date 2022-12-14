window.onload = function(){
   var min = 00;
   var hr = 00;
   var sec = 00;
   var msec= 00;

   var addsec = document.getElementById("sec");
   var addmsec = document.getElementById("m");
   var addmin = document.getElementById("min");
   var addhr = document.getElementById("hr");
   var btnStart = document.getElementById("start");
   var btnStop = document.getElementById("stop");
   var btnreset = document.getElementById("reset");
   var interval;

   btnStart.onclick= function(){
      clearInterval(interval);
      interval = setInterval(startTimer,10);
   }
   btnStop.onclick= function(){
      clearInterval(interval);
   }
   btnreset.onclick= function(){
      clearInterval(interval);
      sec = "00";
      msec= "00";
      min = "00";
      hr="00";
      addmsec.innerHTML = msec;
      addsec.innerHTML = sec;
      addmin.innerHTML = min;
      addhr.innerHTML = hr;
   }

   function startTimer(){
      msec++;

      if (msec<10){
         addmsec.innerHTML= "0" + msec;
      }
      if (msec>9){
         addmsec.innerHTML= msec;
      }
      if (msec > 99){
         sec++;
         addsec.innerHTML= "0" + sec;
         msec = 0;
         addmsec.innerHTML= "0"+ 0;
      }
      if(sec>9){
         addsec.innerHTML=sec;
      }
      if(sec > 59){
         min ++;
         addmin.innerHTML = "0"+min;
         sec = 0;
         addsec.innerHTML = "0"+0;
         
      }
      if(min>9){
         addmin.innerHTML=min;
      }
   
      if(min > 59){
          hr ++;
          addhr.innerHTML = "0"+hr;
          min = 0;
          addmin.innerHTML = "0"+0;
    
       }
       if(hr>9){
          addhr.innerHTML=hr;
       }
   }

   

}
