


// let inp = document.querySelectorAll('input')
// console.log(inp);
// let block = document.querySelector('.block')
// inp[0].addEventListener('input' , ()=>{
//     block.style.width = inp[0].value
// })

// inp[1].addEventListener('input' , ()=>{
//     block.style.height = inp[1].value
// })

// inp[2].addEventListener('input' , ()=>{
//     block.style.background = inp[2].value
// })

// inp[3].addEventListener('input' , ()=>{
//     block.style.borderRadius = inp[3].value
// })

// inp[4].addEventListener('input' , ()=>{
//     block.style.margin = inp[4].value
// })

// let btn = document.querySelector('button')
// let inp = document.querySelector('input')
// let img = document.querySelector('img')

// btn.addEventListener('click' , ()=>{
// img.src = inp.value
// inp.value = ''
// })




let inp = document.querySelector('input')   
text1 = document.querySelector('.text1')
inp.addEventListener('input', ()=>{
    if(inp.value.length >=  6){
text1.innerHTML = "Надёжный"

text1.style.color = 'green'
    } else{
        text1.innerHTML = "Ненадёжный"
        text1.style.color = 'red'
    }
})