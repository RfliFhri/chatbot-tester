const chatForm = document.getElementById("chatForm");
const messageInput = document.getElementById("messageInput");
const chatBox = document.getElementById("chatBox");

function addMessage(sender, text) {
    const msg = document.createElement("div");
    msg.className = `message ${sender}`;
    msg.innerHTML = `<div class="bubble">${text}</div>`;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

chatForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const message = messageInput.value.trim();
    if (!message) return;

    addMessage("user", message);
    messageInput.value = "";

    addMessage("bot", "⏳ Mengetik...");

    const loadingBubble = chatBox.lastChild;

    try {
        const res = await fetch("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
        });

        const data = await res.json();
        loadingBubble.remove();
        addMessage("bot", data.reply);
    } catch (err) {
        loadingBubble.remove();
        addMessage("bot", "Terjadi kesalahan.");
    }
});