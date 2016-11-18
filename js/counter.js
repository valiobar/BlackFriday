$(document).ready(function() {

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total':Math.max(0, t),
    'days': Math.max(0,days),
    'hours': Math.max(0,hours),
    'minutes': Math.max(0,minutes),
    'seconds': Math.max(0,seconds)
  };
}
function changeDeadline(){	
	
	if (new Date()>Date.parse('Sat, 26 Nov 2016 00:00:00')){
		$('#expire').css('visibility', 'visible');
		return  (new Date(Date.parse('Sat, 26 Nov 2016 00:00:00')));
	}
	else if(new Date()>Date.parse('Fri, 25 Nov 2016 00:00:00')){
		$('#sign').html("До края остават:")
	return  (new Date(Date.parse('Sat, 26 Nov 2016 00:00:00')));	
	}
	else {
		$('#sign').html("До началото остават:")
		return deadline;		
	}
}
function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

   if (t.days<10){
	  daysSpan.innerHTML = '0'+t.days;  
   }else{
	   daysSpan.innerHTML = '0'+t.days;
   }
   
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

//var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
var deadline = new Date(Date.parse('Fri, 25 Nov 2016 00:00:00'));
deadline = changeDeadline();
//alert(deadline);
initializeClock('clockdiv', deadline);
});