const numberInput = document.querySelector("#addnumber")
const btn = document.querySelector("#addbtn")
const span = document.querySelector("#interface")

let result = 0
let result2 = 0
btn.addEventListener("click", () => {
    result2 = result + Number(numberInput.value)
    span.innerHTML = result2 
    result = result2
    numberInput.value = ""
})


const plus = document.querySelector("#plus")
const minus = document.querySelector("#minus")

plus.addEventListener("click", () =>{
    let content = span.textContent
    let result = Number(content) +1
    span.innerHTML= result
    numberInput.value= ""

})

minus.addEventListener("click", () =>{
    let content = span.textContent
    let result = Number(content) -1
    if(span.textContent != 0) {
        span.innerHTML= result
    }
    numberInput.value= ""
})

const trash = document.querySelector("#trash")

trash.addEventListener("click", () =>{
    span.textContent = 0
})