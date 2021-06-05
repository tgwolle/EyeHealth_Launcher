document.addEventListener('DOMContentLoaded',()=>{
  const timeLeftview=document.querySelector('#minutes')
  const startbtn=document.querySelector('#time-button')
  timeLeft=20
  function timer(){
    setInterval(function() {
      if(timeLeft<=0){
        clearInterval(timeleft=0)

      }
      timeLeftview.innerHTML=timeLeft
      timeLeft-=1
    },20000)

  }startbtn.addEventListener('click',timer)

})
