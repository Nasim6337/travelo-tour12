
const Ele = document.querySelector('.men');
console.log(Ele)

window.addEventListener('scroll',()=>{
    
    const scr2=window.scrollY;
    console.log(scr2)
    
    if(Math.ceil(scr2)>100 && Math.ceil(scr2)<=150)
        Ele.style.transform=`translateY(250px)`
    
    else if(Math.ceil(scr2)<=100)
        {Ele.style.transform=`translateY(1px)`
        }
      
})