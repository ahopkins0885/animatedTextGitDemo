function randomRGB(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }
  
  const h1= document.querySelectorAll('.letters');
  
  setInterval(function()
  {
    for (let letter of h1){
      letter.style.color = randomRGB();
    }
    
    
  }, 2000)
  
  