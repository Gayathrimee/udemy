// ...................own experiment...............
//1.  const panels = document.querySelector('.panel')
//    panels.addEventListener('click', function(){
//        panels.classList.toggle('panel.active')
//    })

//2.   const panels = document.querySelectorAll('.panel')
//     panels.forEach(item => {
//        panels.addEventListener('click', function(){
//           panels.classList.toggle('active')
//       })
//    })
// ..................................................

// origninal:

const panels = document.querySelectorAll('.panel')
panels.forEach((panel)=>{
    panel.addEventListener('click', ()=>{
        removeActiveClasses()
        panel.classList.add('active')
    panel.addEventListener('click', ()=>{
        panel.classList.remove('active')
    })    
        // console.log(123)
    })
})

function removeActiveClasses(){
    panels.forEach((panel)=>{
            panel.classList.remove('active')
        })
    }

// function inActiveClasses(){
//     panels.forEach((panel)=>{
//         panel.classList.add('in-active')
//     })
// }
