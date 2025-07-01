function generatePromptPayQR() {
  const amount = document.getElementById("amount-promptpay").value;
  const qrBox = document.getElementById("qrcode-promptpay");
  const phone = "0891234567"; // เบอร์ PromptPay ของคุณ

  if (!amount || amount <= 0) {
    alert("กรุณากรอกจำนวนเงินให้ถูกต้อง");
    return;
  }

  const url = `https://promptpay.io/${phone}/${amount}.png`;

  qrBox.innerHTML = `
    <p>QR Code:</p>
    <img src="${url}" alt="PromptPay QR Code" />
  `;
}

function generateTrueMoneyQR() {
  const amount = document.getElementById("amount-truemoney").value;
  const qrBox = document.getElementById("qrcode-truemoney");
  const phone = "0987654321"; // เบอร์ TrueMoney Wallet

  if (!amount || amount <= 0) {
    alert("กรุณากรอกจำนวนเงินให้ถูกต้อง");
    return;
  }

  const msg = `TrueMoney ${phone} จำนวน ${amount} บาท`;
  const url = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(msg)}&size=200x200`;

  qrBox.innerHTML = `
    <p>QR Code:</p>
    <img src="${url}" alt="TrueMoney QR Code" />
  `;
}
