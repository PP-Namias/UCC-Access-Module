const userInput = document.querySelector('.js-username input'),
passInput = document.querySelector('.js-password input')

userInput.addEventListener('focus', () => {
    focusState(userInput)
})

userInput.addEventListener('blur', () => {
    blurState(userInput)
})

passInput.addEventListener('focus', () => {
    focusState(passInput)
})

passInput.addEventListener('blur', () => {
    blurState(passInput)

})

function focusState(element){
        parentEl = element.parentElement
            parentEl.classList.add('active')             
}

function blurState(element){
    parentEl = element.parentElement
    if(!element.value){
        parentEl.classList.remove('active')  
    }
}

window.addEventListener('pageshow', () => {
    if(userInput && userInput.value){
        focusState(userInput)
    }
})



