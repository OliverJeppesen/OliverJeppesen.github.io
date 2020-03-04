function figur(nr) {
if(nr == 0) {
return 'kirsebaer.gif'
}
else if(nr == 1) {
return 'ananas.gif'
}
else if(nr == 2) {
return 'bar.gif'
}
else if(nr == 3) {
return 'blomme.gif'
}
else if(nr == 4) {
return 'banan.gif'
}
else if(nr == 5) {
return 'appelsin.gif'
}
else if(nr == 6) {
return 'aeble.gif'
}
}

function vaerdi(felt1,felt2,felt3) {
if(felt1 == 0 && felt2 == 0 && felt3 == 0) {
return 300
}
if(felt1 == 0 && felt2 == 0) {
return 30
}
if(felt1 == 0 && felt3 == 0) {
return 30
}
if(felt2 == 0 && felt3 == 0) {
return 30
}
else if(felt1 == 1 && felt2 == 1 && felt3 == 1) {
return 350
}
if(felt1 == 1 && felt2 == 1) {
return 35
}
if(felt1 == 1 && felt3 == 1) {
return 35
}
if(felt2 == 1 && felt3 == 1) {
return 35
}
else if(felt1 == 2 && felt2 == 2 && felt3 == 2) {
return 450
}
if(felt1 == 2 && felt2 == 2) {
return 45
}
if(felt1 == 2 && felt3 == 2) {
return 45
}
if(felt2 == 2 && felt3 == 2) {
return 45
}
else if(felt1 == 3 && felt2 == 3 && felt3 == 3) {
return 600
}
if(felt1 == 3 && felt2 == 3) {
return 60
}
if(felt1 == 3 && felt3 == 3) {
return 60
}
if(felt2 == 3 && felt3 == 3) {
return 60
}
else if(felt1 == 4 && felt2 == 4 && felt3 == 4) {
return 800
}
if(felt1 == 4 && felt2 == 4) {
return 80
}
if(felt1 == 4 && felt3 == 4) {
return 80
}
if(felt2 == 4 && felt3 == 4) {
return 80
}
else if(felt1 == 5 && felt2 == 5 && felt3 == 5) {
return 1050
}
if(felt1 == 5 && felt2 == 5) {
return 105
}
if(felt1 == 5 && felt3 == 5) {
return 105
}
if(felt2 == 5 && felt3 == 5) {
return 105
}
else if(felt1 == 6 && felt2 == 6 && felt3 == 6) {
return 1350
}
if(felt1 == 6 && felt2 == 6) {
return 135
}
if(felt1 == 6 && felt3 == 6) {
return 135
}
if(felt2 == 6 && felt3 == 6) {
return 135
}
else {
return 0
}
}
function spil() {
ok = true
total = 0
while(ok == true) {
felt1 = Math.floor(7*Math.random())
felt2 = Math.floor(7*Math.random())
felt3 = Math.floor(7*Math.random())
hjul1.src = figur(felt1)
hjul2.src = figur(felt2)
hjul3.src = figur(felt3)
gevinst = vaerdi(felt1,felt2,felt3)
total = total + gevinst - 20
ok = confirm('Din gevinst er '+gevinst+' kr\nDin saldo er '+total+
' kr\n\nVil du prøve igen?')
}
}
