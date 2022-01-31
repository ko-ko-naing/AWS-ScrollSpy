//for toggle btn
let btn = document.querySelector(".mobile-menu-btn");
let clickTimes = 0;
btn.addEventListener("click",function(){

  clickTimes +=1;
  console.log(clickTimes);

  var icon = document.querySelector(".fa");

  for(var i=0;i < clickTimes; i++){
   if((clickTimes%2)== 0){
     icon.classList.remove("fa-times");
     icon.classList.add("fa-bars");
     console.log('bars');
    }else{
     icon.classList.remove("fa-bars");
     icon.classList.add("fa-times");
     console.log("cross");
    }
  }

});