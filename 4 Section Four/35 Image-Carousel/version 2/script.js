const imageContainer = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const img = document.querySelectorAll('.image-container img')

let currentImage;
let firstImage;
let lastImage;

rightBtn.addEventListener('click',()=>{
    currentImage++

    if(imageContainer.length === currentImage){
        currentImage = firstImage
    }

    updateImage()
})

leftBtn.addEventListener('click',()=>{
    currentImage--

    if(imageContainer.length === 0){
        currentImage = lastImage
    }

    updateImage()
})


function updateImage(){
    img.forEach((idx,img) =>{
        if(idx < imageContainer.length){
            img.addEventListener('change',()=> img++)
        } else {

        }
    })
}