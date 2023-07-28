 const daysEL = document.getElementById("days");
 const hoursEL = document.getElementById("hours");
 const minsEL = document.getElementById("mins");
 const secEL = document.getElementById("sec");





function countdown() {
    const futureDate = new Date(" 1  Jan 2024");
    const currentDate = new Date();
     const totalSecond = (futureDate - currentDate)/1000;
     const  days = Math.floor(totalSecond /3600/24);

     const  hours = Math.floor(totalSecond /3600)%24;
     const  mins = Math.floor(totalSecond /60)%60;
     const  sec = Math.floor(totalSecond)%60;

      daysEL.innerHTML = formatTime(days);
      hoursEL.innerHTML = formatTime(hours);
      minsEL.innerHTML = formatTime(mins);
      secEL.innerHTML = formatTime(sec);
    }   
    function formatTime(time) {
      return  time <10 ? (`0${time}`):time
    }
    countdown()
    
    setInterval(countdown,60000);
      
    
    
      

   

     


