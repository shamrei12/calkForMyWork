function calcBack(){
    let timeOutput = document.querySelector('.time-output').value;
    let timeResultBack = document.querySelector('.time-back-display');
    let firstTime, firstMinute, time, minute;
    firstTime = Math.trunc(timeOutput);
    firstMinute = timeOutput - Math.floor(timeOutput);
    time = firstTime;
    minute = Math.round(firstMinute*60);
    console.log(timeResultBack.value = time + ":"+ minute);
    if (minute < 10 && time < 10){
        timeResultBack.value = "0" + time + ":"+ "0" + minute;
    }
    else if(time < 10){
        timeResultBack.value = "0" + time + ":" + minute;
    }
    else if(minute < 10){
        timeResultBack.value = time + ":"+ "0" + minute;
    }

    else{
        timeResultBack.value = time + ":"+ minute;
    }
}