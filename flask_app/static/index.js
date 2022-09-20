const inputField = document.querySelector('#keyButton')
const ascii = document.querySelector('#ascii')
const codeField = document.querySelector('#code')
const charField = document.querySelector('#keyCode')
let shift = ""

function focusInput() {
    const keyInput = inputField.focus()
}

window.addEventListener('keydown', function(e) {
    //key pressed
    inputField.value = e.key
    
    //determine the Ascii code of key pressed
    let charCode = e.key.charCodeAt(0)
    if (e.key === "Shift" || e.key === 'Control' || e.key === 'Alt' || e.key === 'CapsLock') {
        charCode = 0
    }
    if (e.key === 'Enter') {
        charCode = 13
    }
    if (e.key === 'Backspace') {
        charCode = 8
    }
    if (e.key === 'Space') {
        charCode = 32
    }
    if (e.key === 'Escape') {
        charCode = 27
    }
    ascii.innerHTML = charCode

    if (e.key === "Shift") {
        shift = "Shift + "
    }

    //keyCode of key pressed
    charField.innerHTML = shift+e.keyCode

    //code of key  pressed
    codeField.innerHTML = e.code
    console.log(e.key)
}, false)

window.addEventListener('keyup', (e) => {
    if(e.key === "Shift") {
        shift = ""
    }
})