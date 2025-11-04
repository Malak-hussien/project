// الانتقال لصفحة التفاصيل
function goToDetails(page) {
  window.location.href = page;
}
// تأثير البلور على باقي الكروت
const cards = document.querySelectorAll('.event');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    cards.forEach(c => {
      if (c !== card) c.classList.add('blurred');
    });
  });
  card.addEventListener('mouseleave', () => {
    cards.forEach(c => c.classList.remove('blurred'));
  });
});

// إظهار وإخفاء السعر
function togglePrice() {
  const price = document.getElementById("price");
  if (price.style.display === "none") {
    price.style.display = "block";
  } else {
    price.style.display = "none";
  }
}
// فتح وغلق المودال
function openModal() {
  document.getElementById("termsModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("termsModal").style.display = "none";
}

// الموافقة على الشروط
function acceptTerms() {
  window.location.href = "payment.html";
}

// تأكيد الدفع
function confirmPayment(event) {
  event.preventDefault();
  alert("✅ Payment Confirmed! Thank you for your booking.");
  window.location.href = "index.html";
  return false;
}
