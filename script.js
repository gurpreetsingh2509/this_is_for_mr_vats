function sendAlert() {

  const BOT_TOKEN = "8459597820:AAEBLna6gmz33a0lAsA_BI-s-n8mprgZaxk";
  const CHAT_ID = "5078398365";

  const message = "💖 Kunal clicked 'Order Gulab Jamun'! Send real surprise now 🍯❤️";

  const url =
    `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`;

  // Open Telegram API URL silently
  fetch(url)
    .then(() => {
      nextPage(5);
      setTimeout(() => {
        alert("📦 Surprise is secretly on the way for Kunal! ❤️");
      }, 500);
    })
    .catch(() => {
      alert("Something went wrong 😢");
    });
}
