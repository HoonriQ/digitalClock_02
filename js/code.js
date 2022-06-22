$(function(){
  setInterval(function (){

    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let month = time.getMonth();
    let date = time.getDate();
    

    switch (month) {
      case 0:
        $('.month').html('JAN');
        break;
      case 1:
        $('.month').html('FEB');
        break;
      case 2:
        $('.month').html('MAR');
        break;
      case 3:
        $('.month').html('APR');
        break;
      case 4:
        $('.month').html('MAY');
        break;
      case 5:
        $('.month').html('JUN');
        break;
      case 6:
        $('.month').html('JUL');
        break;
      case 7:
        $('.month').html('AUG');
        break;
      case 8:
        $('.month').html('SEP');
        break;
      case 9:
        $('.month').html('OCT');
        break;
      case 10:
        $('.month').html('NOV');
        break;
      case 11:
        $('.month').html('DEC');
        break;
    };

    if(hour <= 12){
      $('.ampm').html('AM');
    }
    else{
      $('.ampm').html('PM')
      hour = hour - 12;
    };
    
    if(hour < 10){
      hour = '0' + hour
    };
    if(min < 10){
      min = '0' + min
    };
    if(sec < 10){
      sec = '0' + sec
    };
    
    
    if(min > 49){
      $('#noalarm').empty(),
      $('#alarm').html('break time');
    };
      

    $('.hour').html(hour);
    $('.min').html(min);
    $('.sec').html(sec);
    $('.date').html(date);

  }, 1000);

});