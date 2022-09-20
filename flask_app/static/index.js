const inputField = document.querySelector('#keyButton')
const ascii = document.querySelector('#ascii')
const keyField = document.querySelector('#key')
const charField = document.querySelector('#keyCode')

function focusInput() {
    const keyInput = inputField.focus()
}

window.addEventListener('keydown', function(e) {
    inputField.value = e.key
    ascii.innerHTML = e.key.charCodeAt(0)
    charField.innerHTML = e.code
}, false)