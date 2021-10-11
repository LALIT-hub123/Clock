const clock = () => {
  var time = new Date(); 
  var sec = time.getSeconds();
  var hour = time.getHours();
  var minute = time.getMinutes();
  
  if (sec < '10') {
    sec = '0' + sec;
  }
  if (minute < '10') {
    minute = '0' + minute;
  }
  if (hour < '10') {
    hour = '0' + hour;
  }
  
  var l = hour + ':' + minute + ':' + sec;
  if (hour < '12') {
    l +=' AM'
  }
  else{
    l +=' PM'
  }
  
  document.getElementById('clock').innerHTML= l;
  

  setTimeout(clock, 1000);
  
}