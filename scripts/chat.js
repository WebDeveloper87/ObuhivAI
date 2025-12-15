const send = document.getElementsByClassName('send')[0]
const input = document.getElementsByClassName('input')[0]

send.addEventListener('click', () => {
    if(!input.value){
        return
    }
    console.log(input.value)
    input.value = ''
})