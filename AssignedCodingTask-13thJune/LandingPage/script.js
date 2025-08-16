const canvas = document.getElementById('revenueGauge');
  const ctx = canvas.getContext('2d');

  // Grey background arc
  ctx.beginPath();
  ctx.lineWidth = 8;
  ctx.strokeStyle = '#e0e0e0';
  ctx.arc(50, 50, 40, Math.PI, 2 * Math.PI);
  ctx.stroke();

  // Green progress arc (adjust 0.2 for percent)
  ctx.beginPath();
  ctx.strokeStyle = '#00704A';
  ctx.arc(50, 50, 40, Math.PI, Math.PI + Math.PI * 0.2); // 20% fill
  ctx.stroke();

  window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.features-tag').forEach((tag, i) => {
      tag.style.opacity = 0;
      tag.style.transform = "translateY(10px)";
      setTimeout(() => {
        tag.style.transition = "all 0.4s ease";
        tag.style.opacity = 1;
        tag.style.transform = "translateY(0)";
      }, i * 150);
    });
  });

  // Placeholder for slide navigation logic
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      alert("Slide navigation not yet implemented.");
    });
  });
  // Currently static – placeholder for interaction logic if needed
  document.querySelector(".boost-btn").addEventListener("click", () => {
    alert("Get Started Now clicked!");
  });

  // Placeholder for link actions
  document.querySelectorAll(".footer-col ul li").forEach(item => {
    item.addEventListener("click", () => {
      alert(`Navigating to: ${item.textContent}`);
    });
  });