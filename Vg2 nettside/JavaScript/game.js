// Variabler
let start_sec = 15
let start_dec = 0

var time_sec = 15
var time_dec = 0

/*holder orden på hva status spillet er i

0 = har ikkje startet
1 = timer starter
2 = timer er under 10, tiden er gjemt og du kan trykke på mellomromstasten
3 = spillet er fryst, du kan se scoren og scoren er lagret
4 = gjør klar til å restarte
*/
var game_state = 0
var started = false

var highscore_sec = 0
var highscore_dec = 0

//Timer function
function start(){

    if(game_state == 0) {  
    game_state = 1
    document.getElementById("game-btn").innerHTML = "Restart"
    document.getElementById("game-btn").disabled = true;

    setInterval(() => {
        if (game_state == 3) 
        {
            if(time_dec < 10)
            {
                document.getElementById("countdown").innerHTML = time_sec + ":0" + time_dec
            }
            else
            {
                document.getElementById("countdown").innerHTML = time_sec + ":" + time_dec
            }
            return;
        }
        else if (time_sec <= -1 && time_dec <= 0)
        {
            game_state = 3
            return;
        }
        else if (time_dec < 1)
        {
            time_dec = 100;
            time_sec--;
        }


        time_dec--;
        console.log(time_sec + ":" + time_dec)

        
        //oppdatere tallet som vises på nettsiden
        if(time_sec >= 10) {
        //Når decimalen er under 10 viser den en ekstra 0 for å ha en mer behagelig brukeropplevelse
        if(time_dec < 10)
        {
            document.getElementById("countdown").innerHTML = time_sec + ":0" + time_dec
        }
        else
        {
            document.getElementById("countdown").innerHTML = time_sec + ":" + time_dec
        }   }
    
        //Skifter til gamestate 2 (sjekk kommentar ved gamestate øverst i koden) 
        else {
            game_state = 2
            document.getElementById("countdown").innerHTML = "??:??"
        }

    }, 10);
}       
    else {
    document.getElementById("game-btn").innerHTML = "Start"
    game_state = 0
    time_sec = start_sec
    time_dec = start_dec
    }
} 

function stop() {
    if (game_state == 2) {
        game_state = 3;
        document.getElementById("game-btn").disabled = false;
    }
}

/*

ol
.
:

*/
