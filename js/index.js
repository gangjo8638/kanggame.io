let mainText = document.querySelector(".section3 .fixed02 h1")
window.addEventListener('scroll', function(){
    let value = this.window.scrollY
    console.log("scrollY", value);

    if(value > 2300){ //없어지기
      mainText.style.animation="disappaer 1s ease-out forwards";
     
    }
    else if(value < 1600){ //등장하기
      mainText.style.animation= "disappaer 1s ease-out forwards";
      
    }
    else{
      mainText.style.animation= `slide 1s ease-out`;
      
    }
})

let mainText1 = document.querySelector(".section3 .fixed02 p")
window.addEventListener('scroll', function(){
    let value = this.window.scrollY
    console.log("scrollY", value);

    if(value > 2300){ //없어지기
      mainText1.style.animation="disappaer1 1s ease-out forwards";
     
    }
    else if(value < 1700){ //등장하기
      mainText1.style.animation= "disappaer1 1s ease-out forwards";
      
    }
    else{
      mainText1.style.animation= `slide1 1s ease-out`;
      
    }
})


