const formatSwitchbtn= document.querySelector(".format-switch-btn");

formatSwitchbtn.addEventListener("click",() =>{
    formatSwitchbtn.classList.toggle("active");
    var formatvalue=formatSwitchbtn.getAttribute("data-format");
     if (formatvalue ==="12"){
        formatSwitchbtn.setAttribute("data-format","24");
     }
     else{
        formatSwitchbtn.setAttribute("data-format","12");
     }
});


//get current time in javascript
function clock(){
    var today= new Date();

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    let period ="AM";
 //set the time period(Am/PM)
 if(hours >=12){
    period ="PM";
 }
 //set 12hrs clock
 var formatvalue=formatSwitchbtn.getAttribute("data-format");
 if(formatvalue==="12"){
    hours= hours >12 ? hours % 12 : hours;
 }

if(hours <10){
    hours='0' + hours
}
if(minutes <10){
    minutes='0' + minutes
}
if(seconds <10){
    seconds='0' + seconds
}


    document.querySelector(".hours").innerHTML =hours;
    document.querySelector(".minutes").innerHTML =minutes;
    document.querySelector(".seconds").innerHTML =seconds;
    document.querySelector(".period").innerHTML =period;
    
}
var updateClock = setInterval(clock, 1000);

var today= new Date();
const dayNumber = today.getDate();
const year = today.getFullYear();
const dayName =today.toLocaleString('default',{weekday:"long"});
const monthName =today.toLocaleString('default',{month:"short"});

document.querySelector(".month-name").innerHTML =monthName;
document.querySelector(".day-name").innerHTML =dayName;
document.querySelector(".date-number").innerHTML =dayNumber;
document.querySelector(".year").innerHTML =year;

