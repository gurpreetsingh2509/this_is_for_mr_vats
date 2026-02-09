function nextPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page' + page).classList.add('active');
}

async function sendAlert() {

  // 🔐 PASTE your NEW Telegram Bot Token and Chat ID here
  const BOT_TOKEN = "PASTE_NEW_BOT_TOKEN_HERE";
  const CHAT_ID = "PASTE_CHAT_ID_HERE";

  const message = "💖 Kunal clicked 'Order Gulab Jamun' on your Valentine website! Time to send real surprise 🍯❤️";

  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message
      })
    });

    // Move to final romantic page
    nextPage(5);

    // Cute popup confirmation
    setTimeout(() => {
      alert("📦 Surprise is secretly on the way for Kunal! ❤️");
    }, 500);

  } catch (error) {
    console.error("Telegram alert failed:", error);
    alert("Something went wrong 😢 But love is still on the way ❤️");
  }
}
