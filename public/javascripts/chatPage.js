const send = document.getElementsByClassName('send')[0]
const input = document.getElementsByClassName('input')[0]
const content = document.getElementsByClassName('content')[0]
const form = document.querySelector('.question');


function formatText(text) {
    return text.replace(/\n/g, '<br>');
}


form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!input.value) return;

    const userText = input.value;

    content.innerHTML += `
        <div class="message user">
            <p>${userText}</p>
        </div>
    `;

    input.value = '';

    const res = await fetch('/chat/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userText })
    });

    const data = await res.json();
    console.log(data);

    content.innerHTML += `
        <div class="message ai">
            <p>${formatText(data.answer)}</p>
        </div>
    `;
});
