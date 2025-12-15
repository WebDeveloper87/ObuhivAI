const send = document.getElementsByClassName('send')[0]
const input = document.getElementsByClassName('input')[0]
const content = document.getElementsByClassName('content')[0]

send.addEventListener('click', () => {
    if(!input.value){
        return
    }

    content.innerHTML +=`
         <div class="message">
            <p>${input.value}</p>
         </div>`
             input.value = ''
})

document.addEventListener('keydown', (e)=> { 
    if (e.key.toLowerCase() === 'enter') {
        if(!input.value){
        return
    }

    content.innerHTML +=`
         <div class="message">
            <p>${input.value}</p>
         </div>`
             input.value = ''
    }
})
