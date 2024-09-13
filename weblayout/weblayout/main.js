

// const spanNumber = document.querySelector('.number')
// const arrNumber = Array.from(spanNumber.children)
// const divSlide =document.querySelector('.slide');
// const arrSlide = Array.from(divSlide.children);
// const right = document.querySelector('.right-svg');
// const left = document.querySelector('.left-svg')


// let index=0

// const activeSlide = n =>{
//  for (slid of arrSlide){
// slid.classList.remove('active')
//  }
//  arrSlide[n+2].classList.add('active')
// }

// const numberSlide = n =>{
//   for (num of arrNumber){
//  num.classList.remove('active')
//   }
//   arrNumber[n].classList.add('active')
//  }


//  const prepareCurrentSlide = ind =>{
//   activeSlide(ind)
//   numberSlide(ind)
//  }

// const nextSlide=()=>{
//   if ( index == arrSlide.length ==0){
//     index=1
//     prepareCurrentSlide(index)
//   }

// }

// const prevSlide=()=>{
//   if ( index ==1){
//     index=0
//     prepareCurrentSlide(index)
//   }

// }


//  const timerSlider =()=>{
//   if ( index == arrSlide.length -1){
//     index=0
//     prepareCurrentSlide(index)
//   } else {
//     index++
//     prepareCurrentSlide(index)
//   }
//  }

// // setInterval(timerSlider,4000)


// left.addEventListener('click',function(e){
//   e.preventDefault()
//   prevSlide()
// })

// right.addEventListener('click',function(){
// console.log('aaaaa')
// nextSlide()
// })









const right = document.querySelector('.right-svg');
const left = document.querySelector('.left-svg')
const blockLi =document.querySelector('.block-slide')
const arrBlockLi = Array.from(blockLi.children)

const number = document.querySelector('.number')
const arrNumber =Array.from(number.children)


let currentIndex=0

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
  if(currentIndex<1) {
    currentIndex++
displayImages()

  }
  sixNumber()


})

left.addEventListener('click',function(e){
  if(currentIndex>0) {
    currentIndex--
displayImages()
  }
  thereNumber()
})

displayImages()



setInterval(()=>{
  if(currentIndex<1) {
    currentIndex++
displayImages()
sixNumber()
  } else  if(currentIndex>0) {
    currentIndex--
displayImages()
thereNumber()

  }
},4000)




