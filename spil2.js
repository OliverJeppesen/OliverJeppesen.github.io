total=0
function spil() {
  ok = true
  while(ok == true) {
    kast = Math.floor(6*Math.random()) + 1
    kast2 = Math.floor(6*Math.random()) + 1
    if(kast == 1) {
      gevinst = 10
      terning.src = "ener.gif"
    }
    else if(kast == 2) {
      gevinst = 15
      terning.src = 'toer.gif'
    }
    else if(kast == 3) {
      gevinst = 15
      terning.src = 'treer.gif'
    }
    else if(kast == 4) {
      gevinst = 10
      terning.src = 'firer.gif'
    }
    else if(kast == 5) {
      gevinst = 15
      terning.src = 'femmer.gif'
    }
    else {
      gevinst = 20
      terning.src = 'sekser.gif'
    }



    if(kast2 == 1) {
      gevinst += 10
      terning2.src = 'ener.gif'
      alert(kast2)
    }
    else if(kast2 == 2) {
      gevinst += 15
      terning2.src = 'toer.gif'
        alert(kast2)
    }
    else if(kast2 == 3) {
      gevinst += 15
      terning2.src = 'treer.gif'
        alert(kast2)
    }
    else if(kast2 == 4) {
      gevinst += 10
      terning2.src = 'firer.gif'
        alert(kast2)
    }
    else if(kast2 == 5) {
      gevinst += 15
      terning2.src = 'femmer.gif'
        alert(kast2)
    }
    else {
      gevinst += 20
      terning2.src = 'sekser.gif'
        alert(kast2)
    }
total+=gevinst
    ok = confirm('Din gevinst er '+gevinst+' kr og din total er '+total+'.\n Forts�t?')
    }
  }
