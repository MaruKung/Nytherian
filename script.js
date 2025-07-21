const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');

    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });

const promptPayID = '0931201546';

function generateDonateQR() {
  const amountInput = document.getElementById('donateAmount');
  const amount = amountInput.value.trim();

  if (!amount || isNaN(amount) || Number(amount) <= 0) {
    alert('กรุณากรอกจำนวนเงินที่ถูกต้อง (มากกว่า 0)');
    amountInput.focus();
    return;
  }

  const url = `https://promptpay.io/${promptPayID}?amount=${Number(amount).toFixed(2)}`;

  const container = document.getElementById('qr-container');
  container.innerHTML = '';

  QRCode.toCanvas(url, { width: 220 }, function (error, canvas) {
    if (error) {
      alert('เกิดข้อผิดพลาดในการสร้าง QR Code');
      console.error(error);
      return;
    }
    container.appendChild(canvas);
  });
}
