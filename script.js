
let back = document.querySelector('#next')
back.addEventListener('click', ()=>{
    document.querySelector('.wrapper').scrollLeft += 300;
})

let nex = document.querySelector('#back')
nex.addEventListener('click', ()=>{
    document.querySelector('.wrapper').scrollLeft -= 300;
})