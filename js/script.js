// Alert

const alertBanner = document.getElementById("alert");

// //create the html for the banner

alertBanner.innerHTML = `<div class="alert-banner">
                         <p><strong>Alert:</strong>This is an alert, please be alerted by the alertness of this alert!</p>
                        <p class="alert-banner-close">X</p>
                       </div>`
  let pointer = document.querySelector('.alert-banner-close')
  pointer.style.cursor = "pointer";
    
  //close with addEventListener 
 alertBanner.addEventListener('click', e => { 
     const element = e.target;
     
    if(element.classList.contains("alert-banner-close")){
         setTimeout(function(){
             alertBanner.remove()
           }, 200);
        
     };   
 });

//animation: alert-box


alertBanner.animate([
    { transform: 'scale(1)', background: 'hsl(131, 39%, 68%)', opacity: 1, offset: 0 },
    { transform: 'scale(.5) rotate(10deg)', background: 'hsl(131, 39%, 68%)', opacity: .1, offset: .2 },
    { transform: 'scale(1) rotate(0deg)', background: 'hsl(131, 39%, 68%)', opacity: 1, offset: 1 },
  ], {
    duration: 750,
    easing: 'ease-in-out', 
    iterations: 1,
    direction: 'alternate', 
    fill: 'forwards' 
  });
