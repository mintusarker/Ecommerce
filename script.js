const bar = document.getElementById('mobile-bars-icon-click'); 
const mobiles = document.getElementById('mobile');

if(bar){
    bar.addEventListener('click', ()=> {
        mobiles.classList.remove('active')
    })
}