let viewportWidht = window.innerWidth
let viewportHeightt = window.innerHeight
let titleImgSelector = document.querySelectorAll('article h3');
let image = document.querySelectorAll ('article')
let titre = document.querySelector('.menu h2')
let burger = document.querySelector('.burger')
let close = document.querySelector('.close')

let isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
console.log(isFirefox);
function reponsive() {
    let titleImage = [];

    titleImgSelector.forEach(e => {
        titleImage.push(e.innerHTML);
    });
    
    if (viewportWidht <= 800) {
        image.forEach(element => {
            let currentValue = element.querySelector('h3').innerHTML;
            if (titleImage.includes(currentValue)) {
                let newPath ='images/mobile';
                let src = element.querySelector('img').src;
                let img = src.substr(src.lastIndexOf("/"));
                element.querySelector('img').setAttribute('src',newPath+img);
            }
            
        });
        
    }
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        // true for mobile device
        console.log("mobile device");
        document.querySelector('header h1').style.setProperty('font-size', '2.3em');
      }else{
        // false for not mobile device
        console.log("not mobile device");
      }
        
}
reponsive();

burger.addEventListener('click',()=>{
    document.querySelector('.menu nav').classList.add('responsive');
    titre.style.setProperty('position', 'absolute');
    titre.style.setProperty('z-index', '1');
    close.style.setProperty('display', 'flex');
})
close.addEventListener('click',()=>{
    document.querySelector('.menu nav').classList.remove('responsive');
    titre.style.setProperty('position', 'unset');
    titre.style.setProperty('z-index', '1');
    close.style.setProperty('display', 'none');
})

