
function refreshPage(){
    window.location.reload();
} 




var randomNumber1 =Math.floor(Math.random()*6)+1

var dice_number1=`dice${randomNumber1}.png`

var dice_source1=`images/${dice_number1}`

document.querySelector("img.img1").setAttribute("src",dice_source1)






var randomNumber2 =Math.floor(Math.random()*6)+1

var dice_number2=`dice${randomNumber2}.png`

var dice_source2=`images/${dice_number2}`

document.querySelector("img.img2").setAttribute("src",dice_source2)
            


if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML= `Player 1 wins <i class="fas fa-flag"></i> ` 

}  

else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML= `Player 2 wins <i class="fas fa-flag"></i> ` 
  
  }
  
else {
    document.querySelector("h1").innerHTML= `Draw` 
  
  }  


























  // for_img1=document.querySelector("img.img1")

// if (randomNumber1==1){
// for_img1.setAttribute("src","images/dice1.png")
// }

// else if (randomNumber1==2){
//     for_img1.setAttribute("src","images/dice2.png")
//     }

// else if (randomNumber1==3){
//     for_img1.setAttribute("src","images/dice3.png")
//     }    
// else if (randomNumber1==4){
//     for_img1.setAttribute("src","images/dice4.png")
//     }

// else if (randomNumber1==5){
//         for_img1.setAttribute("src","images/dice5.png")
//         }

// else if (randomNumber1==6){
//             for_img1.setAttribute("src","images/dice6.png")
//             }


// if (randomNumber2==1){
//     for_img2.setAttribute("src","images/dice1.png")
//                 }
    
//     else if (randomNumber2==2){
//         for_img2.setAttribute("src","images/dice2.png")
//         }
    
//     else if (randomNumber2==3){
//         for_img2.setAttribute("src","images/dice3.png")
//     }
//     else if (randomNumber2==4){
//         for_img2.setAttribute("src","images/dice4.png")
//         }
    
//     else if (randomNumber2==5){
//             for_img2.setAttribute("src","images/dice5.png")
//             }
    
//     else if (randomNumber2==6){
//                 for_img2.setAttribute("src","images/dice6.png")
//                 }            
    




