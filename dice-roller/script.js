var button = document.querySelector('.btn');
var img = document.querySelector('img');

button.addEventListener('click',function(){
var dice = Math.floor(Math.random()*6)+1;
animation();
img.src = "dice/dice-" + dice + ".PNG"
})

function animation(){
  setTimeout(function(){
    img.classList.add('ani')
  },200)

  img.classList.remove('ani');
}
