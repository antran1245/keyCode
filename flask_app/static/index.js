const inputField = document.querySelector('#keyButton')

function focusInput() {
    const keyInput = inputField.focus()
}

window.addEventListener('keydown', function(e) {
    inputField.value = e.key
}, false)