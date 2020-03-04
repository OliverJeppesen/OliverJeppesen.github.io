function spil() {
  ok = true
  while(ok == true) {
    kast = Math.floor(6*Math.random()) + 1
    if(kast == 1) {
      gevinst = 10
      terning.src = 'ener.gif'
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
    ok = confirm('Din gevinst er '+gevinst+' kr.\n Fortsæt?')
  }
}
