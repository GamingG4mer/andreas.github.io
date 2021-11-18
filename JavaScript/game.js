// Variabler
var start_sec = 15
var start_dec = 0

var time_sec = 15
var time_dec = 0

var highscore_sec = 15
var highscore_dec = 0

/*Holder orden på hva status spillet er i

0 = Har ikkje startet / har blitt restartet
1 = Timer starter
2 = Timer er under 10, tiden er gjemt og du kan trykke på mellomromstasten
3 = Spillet er fryst, du kan se scoren og highscoren er lagret
*/
var game_state = 0





//oppdaterer timeren på nettsiden. Når decimalen er under 10 viser den en ekstra 0
function countdown_update() {
    
    if (time_sec >= 0) {
        if (time_dec < 10) {
            document.getElementById("countdown").innerHTML = time_sec + ":0" + time_dec;
        }

        else {
            document.getElementById("countdown").innerHTML = time_sec + ":" + time_dec;
    }   }
    else if (time_sec <= -1 && time_dec <= 0) {
        document.getElementById("countdown").innerHTML = "-1:00";
    }
    else {
        if (time_dec < 10) {
            document.getElementById("countdown").innerHTML = "0:0" + (100-time_dec);
        }

        else {
            document.getElementById("countdown").innerHTML = "0:" + (100-time_dec);
}   }   }





//Start-Stop knapp
function start() {

    //Restarter spillet
    if (game_state == 3) {
        game_state = 0
        time_sec = start_sec
        time_dec = start_dec
        document.getElementById("game-btn").innerHTML = "Stop";
        document.getElementById("game-btn").disabled = true;
    }

    //Stopper spillet og lagrer highscore
    else if (game_state == 2) {
        game_state = 3;
        document.getElementById("game-btn").innerHTML = "Restart"

        //Sjekker om det er ny highscore og viser evt ny highscore
        if (time_sec >= 0) {
            if (time_sec < highscore_sec) {
                highscore_sec = time_sec;
                highscore_dec = time_dec;
            }
            else if (time_sec == highscore_sec && time_dec < highscore_dec) {
                highscore_dec = time_dec;
        }   }

        else if (highscore_sec > 0) {
            highscore_sec = -0;
            highscore_dec = 100-time_dec;
        }
        else if (highscore_sec == 0 && 100-time_dec < highscore_dec) {
            highscore_dec = 100-time_dec;
        }

        //viser highscoren på nettsiden
        if (100-time_dec < 10) {
            document.getElementById("highscore").innerHTML = highscore_sec + ":0" + highscore_dec;
        }

        else {
            document.getElementById("highscore").innerHTML = highscore_sec + ":" +highscore_dec;
    }   }

    //Starter spillet
    else if (game_state == 0) {  
        game_state = 1;
        document.getElementById("game-btn").innerHTML = "Stop";
        document.getElementById("game-btn").disabled = true;

        //Timer
        setInterval(() => {
            
            if (game_state == 3) {
                countdown_update();
                return;
            }

            //Stopper tiden når tiden har gått ut
            else if (time_sec <= -1 && time_dec <= 0) {
                game_state = 3;
                return;
            }

            else if (time_dec < 1) {
                time_dec = 100;
                time_sec--;
            }

            time_dec--;
            console.log(time_sec + ":" + time_dec)
        
            //oppdatere tallet som vises på nettsiden
            if (time_sec >= 10) {
                countdown_update();
                }

    
            //Skifter til gamestate 2 (sjekk kommentar ved gamestate øverst i koden) 
            else {
                game_state = 2
                document.getElementById("countdown").innerHTML = "??:??";
                document.getElementById("game-btn").disabled = false;
            }

        }, 10);
}   }

/*

ol
.
:

*/
