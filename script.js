const bars = document.getElementById('bars');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if(bars){
    bars.addEventListener('click', () =>{
        nav.classList.add('active');
    })
};
if(close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
};



