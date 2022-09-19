const inputField = document.querySelector('#keyButton')
const charField = document.querySelector('#charCode')

function focusInput() {
    const keyInput = inputField.focus()
}

window.addEventListener('keydown', function(e) {
    inputField.value = e.key
    charField.innerHTML = e.which
}, false)