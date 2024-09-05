const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button =>{
    button.addEventListener('click', function (e){

        const x = e.clientX  //this provides the horizontal coordinates of the mouse pointer
        const y = e.clientY     //this provides the vertical coordinates of the mouse pointer

        // e.clientX: This property provides the horizontal coordinate (in pixels) of the mouse pointer 
        // relative to the viewport (the visible part of the web page) when the event was triggered. 
        // For example, if e.clientX is 150, it means that the mouse pointer is 150 pixels from the left edge of the viewport.

        console.log(x,y)

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        console.log(buttonLeft,buttonTop)

        // e.target.offsetTop: This property gives the distance, in pixels, of the top edge of the target element from the top edge of 
        // its offset parent. It represents the vertical position of the element relative to its positioned ancestor. 
        // If e.target.offsetTop is 50, it means the top edge of the element is 50 pixels down from the top edge of its offset parent.

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        console.log(xInside,yInside)

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})