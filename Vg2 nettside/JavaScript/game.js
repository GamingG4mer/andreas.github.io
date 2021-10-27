// Variabler
var time_dec = 0
var time_sec = 15
var started = false

//Spacebar input
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 32) {
        alert('spacebar pressed') }
});


//Timer function
    function start(){

        if(started) {
            return;
        }
        else {
            started = true;
        
        setInterval(() => {
            if (time_sec <= 0 && time_dec <= 0) 
            {
                return;
            }
            else if (time_dec < 1) {
                time_dec = 100;
                time_sec--;
            }
            time_dec--;
            console.log(time_sec + ":" + time_dec)
            
            //Når decimalen er under 10 viser den en ekstra 0 for å ha en mer behagelig brukeropplevelse
            if(time_dec < 10)
            {
                document.getElementById("countdown").innerHTML = time_sec + ":0" + time_dec
            }
            else
            {
                document.getElementById("countdown").innerHTML = time_sec + ":" + time_dec
            }

        }, 10);

        }
    }


/*

ol
.
:

*/