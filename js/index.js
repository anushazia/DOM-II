// Your code goes here

//mouseover
let navItems = document.querySelectorAll('.nav-link')
navItems.forEach(function (element) {
    element.addEventListener('mouseover', turnWhite)
    function turnWhite(event) {
        event.target.style.color = 'white'
        setTimeout(function () {
            event.target.style.color = "";
        }, 500);
    }
})
//keydown
document.addEventListener('keydown', event => {
    if (event.key === "Escape") {
        alert('Are you ready to leave already?!');
    }
})


//wheel
const img = document.querySelector('.intro img')
function zoom(event){
    event.preventDefault();
    scale += event.deltaY *-0.01;
    scale = Math.min(Math.max(.225, scale), 4);
    img.style.transform =`scale(${scale})`
}
let scale = 1;
img.onwheel = zoom;

//load
const top = document.querySelector('header')
const body = document.querySelector('body')
const footer = document.querySelector('footer')
window.onload = function() {
    top.style.backgroundColor = 'lightpink'
    body.style.backgroundColor = 'beige'
    footer.style.backgroundColor = 'lightblue'
}

//focus

//window resize
const paragraph = document.querySelectorAll('p')
paragraph.forEach(element => {
    window.addEventListener('resize', ()=>{
        element.style.backgroundColor = 'lightblue'
    })
})

//dblClick, the event is lowercase!
const doubleClickPic = document.querySelector('.img-content img')
doubleClickPic.addEventListener('dblclick', () =>{
    doubleClickPic.src = "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3298&q=80"
})

//event Object
const title = document.querySelector('.logo-heading')
title.addEventListener('click', () => {
    title.style.color = 'green'
})
