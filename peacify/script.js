const container = document.querySelector('.container')


setanimation();

function setanimation(){

  container.className = 'container grow'
  setTimeout(()=>{
    container.className = 'container shrink'
  },2000)
}


setInterval(setanimation,4000);
