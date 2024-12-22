function ditalClockDisplay(){
    var dateObject=new Date();
    var day=dateObject.getDay();
    var date=dateObject.getDate();
    var month=dateObject.getMonth();
    var fullyear=dateObject.getFullYear();
    var hours=dateObject.getHours();
    var minutes=dateObject.getMinutes();
    var seconds=dateObject.getSeconds();

    var weekArray=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    var monthArray=["January","Febraury","March","April","May","June","July","August","September","October","November","December"];

    day=weekArray[day];
    month=monthArray[month];
    document.getElementById('day').innerText=day;
    document.getElementById('date').innerText=`${date}/${month}/${fullyear}`
    document.getElementById('time').innerText=`${addingZeros(hours)}:${addingZeros(minutes)}`;
    document.getElementById('seconds').innerText=addingZeros(seconds);
}
function addingZeros(timeValue){
    if (timeValue<10){
        timeValue='0'+timeValue;
        return timeValue;
    }
    else{
        return timeValue;
    }
}
setInterval(ditalClockDisplay,1000)
