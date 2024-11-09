//Modal
let modal1 = document.querySelector('.modal')
let modal2 = document.querySelector('.modal2')
let modal3 = document.querySelector('.modal3')
let modal4 = document.querySelector('.modal4')
let modal5 = document.querySelector('.modal5')
let modal6 = document.querySelector('.modal6')

let btn1 = document.getElementById('pic1')
let btn2 = document.getElementById('pic2')
let btn3 = document.getElementById('pic3')
let btn4 = document.getElementById('pic4')
let btn5 = document.getElementById('pic5')
let btn6 = document.getElementById('pic6')

let closebtn = document.querySelector('.close-btn')
let closebtn2 = document.querySelector('.close2-btn')
let closebtn3 = document.querySelector('.close3-btn')
let closebtn4 = document.querySelector('.close4-btn')
let closebtn5 = document.querySelector('.close5-btn')
let closebtn6 = document.querySelector('.close6-btn')

//Modal1
function toggleModal(e){
    console.log(e.target)
    modal1.classList.toggle('hide')
}

btn1.addEventListener('click', toggleModal)
closebtn.addEventListener('click', toggleModal)

//Modal2
function toggleModal2(e){
    console.log(e.target)
    modal2.classList.toggle('hide2')
}

btn2.addEventListener('click', toggleModal2)
closebtn2.addEventListener('click', toggleModal2)

//Modal3
function toggleModal3(e){
    console.log(e.target)
    modal3.classList.toggle('hide3')
}

btn3.addEventListener('click', toggleModal3)
closebtn3.addEventListener('click', toggleModal3)

//Modal4
function toggleModal4(e){
    console.log(e.target)
    modal4.classList.toggle('hide4')
}

btn4.addEventListener('click', toggleModal4)
closebtn4.addEventListener('click', toggleModal4)

//Modal5
function toggleModal5(e){
    console.log(e.target)
    modal5.classList.toggle('hide5')
}

btn5.addEventListener('click', toggleModal5)
closebtn5.addEventListener('click', toggleModal5)

//Modal6
function toggleModal6(e){
    console.log(e.target)
    modal6.classList.toggle('hide6')
}

btn6.addEventListener('click', toggleModal6)
closebtn6.addEventListener('click', toggleModal6)

/**********************************************************/

//slider1

let slideIndex = 1
showSlides(slideIndex)

function plusSlides(n){
    console.log(n)
    showSlides(slideIndex += n)
}

function currentSlide(n){
    console.log(n)
    showSlides(slideIndex = n)
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("modal__img")

    if(n > slides.length) {
        slideIndex = 1
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    for(i = 0 ; i < slides.length ; i++){
        slides[i].style.display = "none"
    }
    slides[slideIndex-1].style.display = "block"; 
}

//slider2

showSlides2(slideIndex)

function plusSlides2(n){
    console.log(n)
    showSlides2(slideIndex += n)
}

function currentSlide2(n){
    console.log(n)
    showSlides2(slideIndex = n)
}

function showSlides2(n){
    let i;
    let slides = document.getElementsByClassName("modal2__img")

    if(n > slides.length) {
        slideIndex = 1
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    for(i = 0 ; i < slides.length ; i++){
        slides[i].style.display = "none"
    }
    slides[slideIndex-1].style.display = "block"; 
}

//slider3

showSlides3(slideIndex)

function plusSlides3(n){
    console.log(n)
    showSlides3(slideIndex += n)
}

function currentSlide3(n){
    console.log(n)
    showSlides3(slideIndex = n)
}

function showSlides3(n){
    let i;
    let slides = document.getElementsByClassName("modal3__img")

    if(n > slides.length) {
        slideIndex = 1
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    for(i = 0 ; i < slides.length ; i++){
        slides[i].style.display = "none"
    }
    slides[slideIndex-1].style.display = "block"; 
}

//slider4

showSlides4(slideIndex)

function plusSlides4(n){
    console.log(n)
    showSlides4(slideIndex += n)
}

function currentSlide4(n){
    console.log(n)
    showSlides4(slideIndex = n)
}

function showSlides4(n){
    let i;
    let slides = document.getElementsByClassName("modal4__img")

    if(n > slides.length) {
        slideIndex = 1
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    for(i = 0 ; i < slides.length ; i++){
        slides[i].style.display = "none"
    }
    slides[slideIndex-1].style.display = "block"; 
}

//slider5

showSlides5(slideIndex)

function plusSlides5(n){
    console.log(n)
    showSlides5(slideIndex += n)
}

function currentSlide5(n){
    console.log(n)
    showSlides5(slideIndex = n)
}

function showSlides5(n){
    let i;
    let slides = document.getElementsByClassName("modal5__img")

    if(n > slides.length) {
        slideIndex = 1
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    for(i = 0 ; i < slides.length ; i++){
        slides[i].style.display = "none"
    }
    slides[slideIndex-1].style.display = "block"; 
}

//slider6

showSlides6(slideIndex)

function plusSlides6(n){
    console.log(n)
    showSlides6(slideIndex += n)
}

function currentSlide6(n){
    console.log(n)
    showSlides6(slideIndex = n)
}

function showSlides6(n){
    let i;
    let slides = document.getElementsByClassName("modal6__img")

    if(n > slides.length) {
        slideIndex = 1
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    for(i = 0 ; i < slides.length ; i++){
        slides[i].style.display = "none"
    }
    slides[slideIndex-1].style.display = "block"; 
}



    