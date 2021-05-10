// Your code goes here

//mouseover
let navItems = document.querySelectorAll('.nav-link')
navItems.forEach(function (element) {
    element.addEventListener('mouseover', turnOrange)
    function turnOrange(event) {
        event.target.style.color = 'orange'
        setTimeout(function () {
            event.target.style.color = "";
        }, 500);
    }
})
//keydown
document.addEventListener('keydown', event => {
    if (event.key === "Escape") {
        alert('Ready to leave?');
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
    top.style.backgroundColor = 'pink'
    body.style.backgroundColor = 'lightyellow'
    footer.style.backgroundColor = 'lightblue'
}

//focus

//resize
const paragraph = document.querySelectorAll('p')
paragraph.forEach(element => {
    window.addEventListener('resize', ()=>{
        element.style.backgroundColor = 'lightblue'
    })
})

//dblClick, the event is lowercase!
const doubleClickPic = document.querySelector('.img-content img')
doubleClickPic.addEventListener('dblclick', () =>{
    doubleClickPic.src = "https://www.nationalbuscharter.com/employee/upload_editor_files/files/charter-bus.jpg"
})

//event Object
const title = document.querySelector('.logo-heading')
title.addEventListener('click', () => {
    title.style.color = 'green'
})
