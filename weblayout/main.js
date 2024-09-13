







const right = document.querySelector('.right-svg');
const left = document.querySelector('.left-svg')
const blockLi =document.querySelector('.block-slide')
const arrBlockLi = Array.from(blockLi.children)

const number = document.querySelector('.number')
const arrNumber =Array.from(number.children)


let currentIndex=0
let prevOrrBack = 0


width = document.documentElement.clientWidth
if(width >= 1201) {

    spanView = document.querySelector("span.left")

    spanView.innerText = "3/6"
    function displayImages() {
      const images =document.querySelectorAll('.participants-list')

    images.forEach((img,index)=>{
    img.classList.toggle('hidden',index<currentIndex * 3|| index>=(currentIndex+1)*3)

    })

    }

    const displayNumber= n =>{

    for(num of arrNumber){
      num.classList.remove('active')
    }
    arrNumber[n].classList.add('active')
    }

    function sixNumber(){
    if (currentIndex=1){
    displayNumber(currentIndex)
    }
    }


    function thereNumber(){
      if(currentIndex=1){
        currentIndex=0
        displayNumber(currentIndex)
      }
    }

    right.addEventListener('click',function(e){
      if(currentIndex == 0) {
        spanView.innerText = "6/6"
        currentIndex++
    displayImages()

      }


    })

    left.addEventListener('click',function(e){
     if(currentIndex == 1) {
        prevOrrBack = 0
            spanView.innerText = "3/6"
        currentIndex--
    displayImages()

      }
    })

    displayImages()



    setInterval(()=>{

      spanView = document.querySelector("span.left")

      console.log(spanView)
      if(currentIndex == 0) {
        prevOrrBack = 1
        spanView.innerText = "6/6"
        currentIndex++
    displayImages()

      } else if(currentIndex == 1) {
        prevOrrBack = 0
            spanView.innerText = "3/6"
        currentIndex--
    displayImages()

      }
    },4000)
  }



if(width <= 1200 && width >= 801) {
  spanView = document.querySelector("span.left")

  spanView.innerText = "2/6"
  function displayImages() {
    const images =document.querySelectorAll('.participants-list')

  images.forEach((img,index)=>{
  img.classList.toggle('hidden',index<currentIndex * 2|| index>=(currentIndex+1)*2)

  })

  }

  const displayNumber= n =>{

  for(num of arrNumber){
    num.classList.remove('active')
  }
  arrNumber[n].classList.add('active')
  }

  function sixNumber(){
  if (currentIndex=1){
  displayNumber(currentIndex)
  }
  }


  function thereNumber(){
    if(currentIndex=1){
      currentIndex=0
      displayNumber(currentIndex)
    }
  }

  right.addEventListener('click',function(e){
    prevOrrBack = 1
    if(currentIndex == 0) {
      prevOrrBack= 1
      currentIndex++
      spanView.innerText = "4/6"
  displayImages()

    } else if(currentIndex == 1 && prevOrrBack == 1) {
      currentIndex++
      spanView.innerText = "6/6"
  displayImages()

    }


  })

  left.addEventListener('click',function(e){
    prevOrrBack = 0
   if(currentIndex == 2) {
      currentIndex--
      prevOrrBack= 0
      spanView.innerText = "4/6"
      displayImages()

    } else if(currentIndex == 1 && prevOrrBack == 0){
      currentIndex = 0
      spanView.innerText = "2/6"
      displayImages()

    }
  })

  displayImages()
  clearInterval(intervalSmall)
  try{
    clearInterval(intervalSred3)
  } catch{

  }
  try{
    clearInterval(intervalSred2)
  } catch{

  }

    let intervalSred1 = setInterval(()=>{

      spanView = document.querySelector("span.left")

      console.log(spanView)
      if(currentIndex == 0) {
        spanView.innerText = "4/6"
        prevOrrBack++
        currentIndex++
    displayImages()

      } else if(currentIndex == 1 && prevOrrBack == 1) {
            spanView.innerText = "6/6"
        currentIndex++
    displayImages()

      } else if(currentIndex == 2) {
        spanView.innerText = "4/6"
        currentIndex--
        prevOrrBack--
        displayImages()

      } else if(currentIndex == 1 && prevOrrBack == 0){
        spanView.innerText = "2/6"
        currentIndex = 0
        displayImages()

      }
    },4000)




}


window.addEventListener("resize", ()=>{
  width = window.innerWidth-8;
  if(width >= 1201){
    function displayImages() {
      const images =document.querySelectorAll('.participants-list')

    images.forEach((img,index)=>{
    img.classList.toggle('hidden',index<currentIndex * 3|| index>=(currentIndex+1)*3)

    })

    }
  }


})






if(width <= 800) {
  spanView = document.querySelector("span.left")

  spanView.innerText = "1/6"
  function displayImages() {
    const images =document.querySelectorAll('.participants-list')

  images.forEach((img,index)=>{
  img.classList.toggle('hidden',index<currentIndex * 1|| index>=(currentIndex+1)*1)

  })

  }

  const displayNumber= n =>{

  for(num of arrNumber){
    num.classList.remove('active')
  }
  arrNumber[n].classList.add('active')
  }

  function sixNumber(){
  if (currentIndex=1){
  displayNumber(currentIndex)
  }
  }


  function thereNumber(){
    if(currentIndex=1){
      currentIndex=0
      displayNumber(currentIndex)
    }
  }

  right.addEventListener('click',function(e){
    prevOrrBack = 1
    if(currentIndex == 0) {
      prevOrrBack++
      currentIndex++
      spanView.innerText = "2/6"
  displayImages()

    } else if(currentIndex == 1 && prevOrrBack == 1) {
      currentIndex++
      spanView.innerText = "3/6"
  displayImages()

    } else if(currentIndex == 2 && prevOrrBack == 1) {
      currentIndex++
      displayImages()
      spanView.innerText = "4/6"
    } else if(currentIndex == 3 && prevOrrBack == 1){
      currentIndex++
      displayImages()
      spanView.innerText = "5/6"
    } else if(currentIndex == 4 && prevOrrBack == 1){
      currentIndex++
      displayImages()
      spanView.innerText = "6/6"
    }


  })

  left.addEventListener('click',function(e){
    prevOrrBack = 0
    if(currentIndex == 5 && prevOrrBack == 0){
      currentIndex--
      prevOrrBack = 1
      spanView.innerText = "5/6"
      displayImages()
    } else if(currentIndex == 4 && prevOrrBack == 0) {
      currentIndex--
      prevOrrBack = 1
      displayImages()
      spanView.innerText = "4/6"
    } else if(currentIndex == 3 && prevOrrBack == 0){
      currentIndex--
      prevOrrBack = 1
      displayImages()
      spanView.innerText = "3/6"
    } else if(currentIndex == 2 && prevOrrBack == 0){
      currentIndex--
      prevOrrBack = 1
      displayImages()
      spanView.innerText = "2/6"
    } else if(currentIndex == 1 && prevOrrBack == 0){
      currentIndex--
      prevOrrBack = 1
      displayImages()
      spanView.innerText = "1/6"
    }
  })

  displayImages()

try{
  clearInterval(intervalSred)
} catch{

}

  var intervalSmall = setInterval(()=>{

    spanView = document.querySelector("span.left")
    if(currentIndex == 0) {
      prevOrrBack++
      currentIndex++
      spanView.innerText = "2/6"
  displayImages()

    } else if(currentIndex == 1 && prevOrrBack == 1) {
      currentIndex++
      spanView.innerText = "3/6"
  displayImages()

    } else if(currentIndex == 2 && prevOrrBack == 1) {
      currentIndex++
      displayImages()
      spanView.innerText = "4/6"
    } else if(currentIndex == 3 && prevOrrBack == 1){
      currentIndex++
      displayImages()
      spanView.innerText = "5/6"
    } else if(currentIndex == 4 && prevOrrBack == 1){
      currentIndex++
      displayImages()
      spanView.innerText = "6/6"
    } else if(currentIndex == 5 && prevOrrBack == 1){
      currentIndex=0
      prevOrrBack=0
      spanView.innerText = "1/6"
      displayImages()
    } else if(currentIndex == 4 && prevOrrBack == 0) {
      currentIndex--
      displayImages()
      spanView.innerText = "4/6"
    } else if(currentIndex == 3 && prevOrrBack == 0){
      currentIndex--
      displayImages()
      spanView.innerText = "3/6"
    } else if(currentIndex == 2 && prevOrrBack == 0){
      currentIndex--
      displayImages()
      spanView.innerText = "2/6"
    } else if(currentIndex == 1 && prevOrrBack == 0){
      currentIndex--
      displayImages()
      spanView.innerText = "1/6"
    }
  },4000)
}













// window.addEventListener("resize", ()=>{
//   width = window.innerWidth-8;
//   currentIndex=0
//   var highestTimeoutId = setTimeout(";");
// for (var i = 0 ; i < highestTimeoutId ; i++) {
//     clearTimeout(i);
// }
//   if(width <= 360) {
//     function displayImages() {
//       const images =document.querySelectorAll('.participants-list')

//     images.forEach((img,index)=>{
//     img.classList.toggle('hidden',index<currentIndex * 1|| index>=(currentIndex+1)*1)

//     })

//     }
//   } else if(width <= 1200 && width >= 361) {
//     function displayImages() {
//       const images =document.querySelectorAll('.participants-list')

//     images.forEach((img,index)=>{
//     img.classList.toggle('hidden',index<currentIndex * 2|| index>=(currentIndex+1)*2)

//     })

//     }
//   } else if(width >= 1201){
//     function displayImages() {
//       const images =document.querySelectorAll('.participants-list')

//     images.forEach((img,index)=>{
//     img.classList.toggle('hidden',index<currentIndex * 3|| index>=(currentIndex+1)*3)

//     })

//     }
//   }


//   displayImages()
//   if(width <= 360) {
//     spanView = document.querySelector("span.left")

//     spanView.innerText = "1/6"


//     const displayNumber= n =>{

//     for(num of arrNumber){
//       num.classList.remove('active')
//     }
//     arrNumber[n].classList.add('active')
//     }

//     function sixNumber(){
//     if (currentIndex=1){
//     displayNumber(currentIndex)
//     }
//     }


//     function thereNumber(){
//       if(currentIndex=1){
//         currentIndex=0
//         displayNumber(currentIndex)
//       }
//     }

//     right.addEventListener('click',function(e){
//       prevOrrBack = 1
//       if(currentIndex == 0) {
//         prevOrrBack++
//         currentIndex++
//         spanView.innerText = "2/6"
//     displayImages()

//       } else if(currentIndex == 1 && prevOrrBack == 1) {
//         currentIndex++
//         spanView.innerText = "3/6"
//     displayImages()

//       } else if(currentIndex == 2 && prevOrrBack == 1) {
//         currentIndex++
//         displayImages()
//         spanView.innerText = "4/6"
//       } else if(currentIndex == 3 && prevOrrBack == 1){
//         currentIndex++
//         displayImages()
//         spanView.innerText = "5/6"
//       } else if(currentIndex == 4 && prevOrrBack == 1){
//         currentIndex++
//         displayImages()
//         spanView.innerText = "6/6"
//       }


//     })

//     left.addEventListener('click',function(e){
//       prevOrrBack = 0
//       if(currentIndex == 5 && prevOrrBack == 0){
//         currentIndex--
//         prevOrrBack = 1
//         spanView.innerText = "5/6"
//         displayImages()
//       } else if(currentIndex == 4 && prevOrrBack == 0) {
//         currentIndex--
//         prevOrrBack = 1
//         displayImages()
//         spanView.innerText = "4/6"
//       } else if(currentIndex == 3 && prevOrrBack == 0){
//         currentIndex--
//         prevOrrBack = 1
//         displayImages()
//         spanView.innerText = "3/6"
//       } else if(currentIndex == 2 && prevOrrBack == 0){
//         currentIndex--
//         prevOrrBack = 1
//         displayImages()
//         spanView.innerText = "2/6"
//       } else if(currentIndex == 1 && prevOrrBack == 0){
//         currentIndex--
//         prevOrrBack = 1
//         displayImages()
//         spanView.innerText = "1/6"
//       }
//     })

//     displayImages()


//     try{
//       clearInterval(intervalSred)
//     } catch{

//     }

//     var intervalSmall = setInterval(()=>{

//       spanView = document.querySelector("span.left")

//       console.log(spanView)
//       if(currentIndex == 0) {
//         prevOrrBack = 1
//         currentIndex++
//         spanView.innerText = "2/6"
//     displayImages()

//       } else if(currentIndex == 1 && prevOrrBack == 1) {
//         currentIndex++
//         spanView.innerText = "3/6"
//     displayImages()

//       } else if(currentIndex == 2 && prevOrrBack == 1) {
//         currentIndex++
//         displayImages()
//         spanView.innerText = "4/6"
//       } else if(currentIndex == 3 && prevOrrBack == 1){
//         currentIndex++
//         displayImages()
//         spanView.innerText = "5/6"
//       } else if(currentIndex == 4 && prevOrrBack == 1){
//         currentIndex++
//         displayImages()
//         spanView.innerText = "6/6"
//       } else if(currentIndex == 5 && prevOrrBack == 1){
//         currentIndex--
//         prevOrrBack--
//         spanView.innerText = "5/6"
//         displayImages()
//       } else if(currentIndex == 4 && prevOrrBack == 0) {
//         currentIndex--
//         displayImages()
//         spanView.innerText = "4/6"
//       } else if(currentIndex == 3 && prevOrrBack == 0){
//         currentIndex--
//         displayImages()
//         spanView.innerText = "3/6"
//       } else if(currentIndex == 2 && prevOrrBack == 0){
//         currentIndex--
//         displayImages()
//         spanView.innerText = "2/6"
//       } else if(currentIndex == 1 && prevOrrBack == 0){
//         currentIndex--
//         displayImages()
//         spanView.innerText = "1/6"
//       }
//     },4000)
//   }

//   if(width <= 1200 && width >= 361) {
//     console.log("sred")




//     spanView = document.querySelector("span.left")
//     currentIndex = 0
//     prevOrrBack = 1
//     spanView.innerText = "2/6"
//     function displayImages() {
//       const images =document.querySelectorAll('.participants-list')

//     images.forEach((img,index)=>{
//     img.classList.toggle('hidden',index<currentIndex * 2|| index>=(currentIndex+1)*2)

//     })

//     }

//     const displayNumber= n =>{

//     for(num of arrNumber){
//       num.classList.remove('active')
//     }
//     arrNumber[n].classList.add('active')
//     }






//     right.addEventListener('click',function(e){

//       if(currentIndex == 0) {
//         spanView.innerText = "4/6"
//         prevOrrBack = 1
//         currentIndex = 1
//         console.log(90)
//     displayImages()

//       } else if(spanView.value == "4/6") {
//         console.log(555)
//         spanView.innerText = "6/6"
//         currentIndex = 2
//     displayImages()

//       }


//     })
//     console.log(displayImages)
//     left.addEventListener('click',function(e){

//       console.log(currentIndex)
//       if(currentIndex == 2) {
//         currentIndex = 1
//         prevOrrBack = 0
//         spanView.innerText = "4/6"
//         displayImages()

//       } else if(spanView.value == "4/6"){
//         spanView.innerText = "2/6"
//         currentIndex = 0
//         displayImages()

//       }
//     })

//     displayImages()

//     clearInterval(intervalSmall)
//     try{
//       clearInterval(intervalSred1)
//     } catch{

//     }
//     try{
//       clearInterval(intervalSred2)
//     } catch{

//     }
//     let intervalSred3 = setInterval(()=>{





//       spanView = document.querySelector("span.left")

//       console.log(spanView)
//       console.log(currentIndex)
//       if(currentIndex == 0) {
//         spanView.innerText = "4/6"
//         prevOrrBack = 1
//         currentIndex++
//     displayImages()

//       } else if(currentIndex == 1 && prevOrrBack == 1) {
//             spanView.innerText = "6/6"
//         currentIndex++
//     displayImages()

//       } else if(currentIndex == 2) {
//         spanView.innerText = "4/6"
//         currentIndex--
//         prevOrrBack--
//         displayImages()

//       } else if(currentIndex == 1 && prevOrrBack == 0){
//         spanView.innerText = "2/6"
//         currentIndex = 0
//         displayImages()

//       }
//     },4000)
//   }

//   if(width >= 1201) {
//     console.log("big")
//     function displayImages() {
//       const images =document.querySelectorAll('.participants-list')

//     images.forEach((img,index)=>{
//     img.classList.toggle('hidden',index<currentIndex * 3|| index>=(currentIndex+1)*3)

//     })

//     }
//     left.removeEventListener("click",function(e){
//       prevOrrBack = 0
//       if(currentIndex == 5 && prevOrrBack == 0){
//         currentIndex--
//         prevOrrBack = 1
//         spanView.innerText = "5/6"
//         displayImages()
//       } else if(currentIndex == 4 && prevOrrBack == 0) {
//         currentIndex--
//         prevOrrBack = 1
//         displayImages()
//         spanView.innerText = "4/6"
//       } else if(currentIndex == 3 && prevOrrBack == 0){
//         currentIndex--
//         prevOrrBack = 1
//         displayImages()
//         spanView.innerText = "3/6"
//       } else if(currentIndex == 2 && prevOrrBack == 0){
//         currentIndex--
//         prevOrrBack = 1
//         displayImages()
//         spanView.innerText = "2/6"
//       } else if(currentIndex == 1 && prevOrrBack == 0){
//         currentIndex--
//         prevOrrBack = 1
//         displayImages()
//         spanView.innerText = "1/6"
//       }
//     });
//     left.removeEventListener("click",function(e){
//       if(currentIndex == 0) {
//         prevOrrBack++
//         currentIndex++
//     displayImages()

//       } else if(currentIndex == 1 && prevOrrBack == 1) {
//         currentIndex++
//     displayImages()

//       } else if(currentIndex == 2) {
//         currentIndex--
//         prevOrrBack--
//         displayImages()

//       } else if(currentIndex == 1 && prevOrrBack == 0){
//         currentIndex = 0
//         displayImages()

//       }
//     })
//     try{
//       clearInterval(intervalSmall)
//     } catch{

//     }
//     try{
//       clearInterval(intervalSred1)
//     } catch{

//     }
//     try{
//       clearInterval(intervalSred2)
//     } catch{

//     }
//     spanView = document.querySelector("span.left")

//     spanView.innerText = "3/6"
//     function displayImages() {
//       const images =document.querySelectorAll('.participants-list')

//     images.forEach((img,index)=>{
//     img.classList.toggle('hidden',index<currentIndex * 3|| index>=(currentIndex+1)*3)

//     })

//     }

//     const displayNumber= n =>{

//     for(num of arrNumber){
//       num.classList.remove('active')
//     }
//     arrNumber[n].classList.add('active')
//     }

//     function sixNumber(){
//     if (currentIndex=1){
//     displayNumber(currentIndex)
//     }
//     }


//     function thereNumber(){
//       if(currentIndex=1){
//         currentIndex=0
//         displayNumber(currentIndex)
//       }
//     }



//     right.addEventListener('click',function(e){
//       currentIndex = 0
//       if(currentIndex == 0) {
//         spanView.innerText = "6/6"
//         currentIndex++
//     displayImages()

//       }


//     })

//     left.addEventListener('click',function(e){
//       currentIndex = 1
//      if(currentIndex == 1) {
//         prevOrrBack = 0
//             spanView.innerText = "3/6"
//         currentIndex--
//     displayImages()

//       }
//     })

//     displayImages()



//     setInterval(()=>{

//       spanView = document.querySelector("span.left")

//       console.log(spanView)
//       if(currentIndex == 0) {
//         prevOrrBack = 1
//         spanView.innerText = "6/6"
//         currentIndex++
//     displayImages()

//       } else if(currentIndex == 1) {
//         prevOrrBack = 0
//             spanView.innerText = "3/6"
//         currentIndex--
//     displayImages()

//       }
//     },4000)
//   }
// })



const blockUl = document.querySelector('.vasyukov-block');

const arrayBlockUl= Array.from(blockUl.children);

const listPointer = document.querySelector('.pointsAreaSize');
const arrListPointer = Array.from(listPointer.children);

const btnLeft = document.querySelector('.leftBtn');
const btnRight = document.querySelector('.rightBtn');

let index=0

const hidden=(n)=>{
  for (const element of arrayBlockUl ) {
    console.log(n)
 element.classList.remove('active-vasyukov')
  }
  arrayBlockUl[n].classList.add('active-vasyukov')
}


const dotsSlide=(n)=>{
  for (const dot of arrListPointer ) {

 dot.classList.remove('point-active')
  }
  arrListPointer[n].classList.add('point-active')
}

const currentSlide=ind=>{
  hidden(ind)
    dotsSlide(ind)
}


const nextSlide=()=>{

  if(index==arrayBlockUl.length-1){
    index=0
    currentSlide(index)
  }else{
    index++
    currentSlide(index)
  }
}

const prevSlide=()=>{

  if(index==0){
    index=arrayBlockUl.length-1
    currentSlide(index)
  }else{
    index--
    currentSlide(index)
  }
}

arrListPointer.forEach((item,indexSlide)=>{
item.addEventListener('click',()=>{
  index=indexSlide
  currentSlide(index)
})
})


btnRight.addEventListener('click',nextSlide)
btnLeft.addEventListener('click',prevSlide)



