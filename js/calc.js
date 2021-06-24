
function CalcFirstOutput() {
    let timeOutput = document.querySelector('.time-output');
    let timeStart = document.querySelector('.time-start').value;
    let timeFinish = document.querySelector('.time-finish').value;
    let hour, minute, first_hour, second_hour, first_minute, second_minute;
    first_hour = Math.trunc(timeStart);
    second_hour = Math.trunc(timeFinish);
    first_minute =  timeStart - Math.floor(timeStart);
    second_minute = timeFinish - Math.floor(timeFinish);
    first_minute = first_minute.toFixed(2)*100;
    second_minute = second_minute.toFixed(2)*100;

    if (second_hour < first_hour && second_minute < first_minute){
        hour = (second_hour + 24) - first_hour;
        minute = 60 + (second_minute-first_minute);
    }
    else if (second_hour < first_hour){
        hour = (second_hour + 24) - first_hour;
        minute = second_minute - first_minute;
    }
    else if(second_minute < first_minute && first_hour>0){
        minute = 60 + (second_minute-first_minute);
        hour = (second_hour-first_hour) - 1;
    }

    else if (second_hour > first_hour && second_minute < first_minute){
        hour = (second_hour-first_hour) - 1;
        minute = second_minute - first_minute;
        
    }
    else if(second_minute < first_minute){
        minute = 60 + (second_minute-first_minute);
        hour = (second_hour-first_hour) - 1;
    }
    else{
        hour = second_hour - first_hour;
        minute = second_minute - first_minute;
    }

    if (minute < 10 && hour < 10){
        console.log("0" + hour + "." + "0"+ minute);
    }
    else if(hour<10){
        console.log("0" + hour + "." + minute);
    }
    else if(minute < 10){
        console.log(hour + "."+"0"+ minute);
    }

    else{
        console.log(hour + "." + minute);
    }

    timeOutput.value = hour + (minute/60);
}
