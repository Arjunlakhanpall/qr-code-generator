const generateBtn = document.getElementById('generate');
const qrContainer = document.getElementById('qrcode');

generateBtn.addEventListener('click', () => {
  const text = document.getElementById('text').value.trim();
  qrContainer.innerHTML = ""; // Clear previous QR code

  if (text.length === 0) {
    alert("Please enter text or URL.");
    return;
  }

  new QRCode(qrContainer, {
    text: text,
    width: 200,
    height: 200,
    colorDark: "#000",
    colorLight: "#fff",
    correctLevel: QRCode.CorrectLevel.H
  });
});
