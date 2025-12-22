const send = document.getElementsByClassName('send')[0]
const input = document.getElementsByClassName('input')[0]
const content = document.getElementsByClassName('content')[0]
const form = document.querySelector('.question');


function renderAIMessage(markdownText) {
    const rawHTML = marked.parse(markdownText);
    const safeHTML = DOMPurify.sanitize(rawHTML);

    content.innerHTML += `
        <div class="message ai">
            ${safeHTML}
        </div>
    `;
}

function escapeHTML(str) {
  return str.replace(/[&<>"']/g, m => ({
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    "'":'&#39;'
  })[m]);
}


form.addEventListener('submit', async (e) => {
 e.preventDefault();

    if (!input.value.trim()) return;

    send.disabled = true;

    const userText = input.value;

    content.innerHTML += `
        <div class="message user">
            <p>${escapeHTML(userText)}</p>
        </div>
    `;

    input.value = '';

    try {
        const res = await fetch('/chat/ask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: userText })
        });

        const data = await res.json();

        renderAIMessage(data.answer);
    } catch (err) {
        alert("Помилка зв'язку з сервером. Спробуйте пізніше.");
    } finally {
        send.disabled = false;
    }
});