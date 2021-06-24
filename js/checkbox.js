var style = document.querySelector('.time-back');
var styleTwo = document.querySelector('.time-start');
var styleThree = document.querySelector('.time-finish');
var styleFour = document.querySelector('.time-output');
var btn = document.querySelector('.btn');

function checkbox(){
    let checkbox = document.getElementById('toogle-btn');
    if(checkbox.checked){
        style.classList.remove('time-back');
        style.classList.add('time-back-display').add('.time-finish');
        styleTwo.classList.add('time-display-none');
        styleThree.classList.add('time-display-none');
        styleFour.removeAttribute('readOnly').add('time-start');
        btn.setAttribute('onclick', 'calcBack()');
    }
    else{
        style.classList.remove('time-back-display');
        style.classList.add('time-back');
        styleTwo.classList.remove('time-display-none');
        styleThree.classList.remove('time-display-none');
        btn.setAttribute('onclick', 'CalcFirstOutput()')
    }
}