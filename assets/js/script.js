const header = document.getElementById('header');
const about = document.getElementById('about');
const footer = document.getElementById('footer');

let count = 0;

window.addEventListener("wheel", (e) =>{
    
    let delta = e.deltaY;
    count += delta;
    
    if(window.getComputedStyle(header).opacity == 1 && count > 200){
        about.style.opacity = 1;
        about.style.top = 0;
        header.style.opacity = 0;
        header.style.top = -90+'vh';
        count = 0
    }else if(window.getComputedStyle(about).opacity == 1 && count > 200){
        footer.style.opacity = 1;
        footer.style.bottom = 0;
        count = 0
    }else if(window.getComputedStyle(footer).opacity == 1 && count < -100){
        footer.style.opacity = 0;
        footer.style.bottom = -100 +'px';
        count = 0
    }else if(window.getComputedStyle(about).opacity == 1 && count < -300){
        about.style.opacity = 0;
        about.style.top = 100 + 'px';
        header.style.opacity = 1;
        header.style.top = 0;
        count = 0
    }

})

window.addEventListener("touchstart", (event) =>{

    let touch = event.changedTouches[0].pageY
    if(window.getComputedStyle(header).opacity == 1 && touch > 680){
        about.style.opacity = 1;
        about.style.top = 0;
        header.style.opacity = 0;
        header.style.top = -90+'vh';
         
    }else if(window.getComputedStyle(about).opacity == 1 && touch > 680){
        footer.style.opacity = 1;
        footer.style.bottom = 0;
        
    }else if(window.getComputedStyle(footer).opacity == 1 && touch < 340){
        footer.style.opacity = 0;
        footer.style.bottom = -100 +'px';
        
    }else if(window.getComputedStyle(about).opacity == 1 && touch < 340){
        about.style.opacity = 0;
        about.style.top = 100 + 'px';
        header.style.opacity = 1;
        header.style.top = 0;
        
    }
       
})