// script.js
document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll(".faq-toggle");
    toggles.forEach(toggle => {
      toggle.addEventListener("click", () => {
        toggle.nextElementSibling.classList.toggle("hidden");
      });
    });
  });
  window.onload = function () {
    const canvas = document.getElementById("connectionLines");
    const ctx = canvas.getContext("2d");

    const container = canvas.parentElement;
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;

    const centerTarget = document.getElementById("chat-point").getBoundingClientRect();
    const avatars = document.querySelectorAll(".avatar");

    avatars.forEach(avatar => {
      const rect = avatar.getBoundingClientRect();
      const x1 = rect.left + rect.width / 2 - container.getBoundingClientRect().left;
      const y1 = rect.top + rect.height / 2 - container.getBoundingClientRect().top;

      const x2 = centerTarget.left + centerTarget.width / 2 - container.getBoundingClientRect().left;
      const y2 = centerTarget.top + centerTarget.height / 2 - container.getBoundingClientRect().top;

      ctx.beginPath();
      ctx.setLineDash([5, 5]);
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = "#ccc";
      ctx.lineWidth = 2;
      ctx.stroke();
    });
  }; const lineCtx = document.getElementById('cr-line-chart').getContext('2d');
  new Chart(lineCtx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        data: [30, 45, 55, 60, 70, 85],
        borderColor: '#6C63FF',
        borderWidth: 2,
        fill: false,
        tension: 0.4,
        pointRadius: 0
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: { x: { display: false }, y: { display: false } },
      responsive: false,
      maintainAspectRatio: false
    }
  });

  // Concentric Pie Chart
  const pieCtx = document.getElementById('cr-pie-chart').getContext('2d');
  new Chart(pieCtx, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [70, 30],
        backgroundColor: ['#6C63FF', '#e0e0e0'],
        cutout: '70%',
        borderWidth: 0
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      responsive: false,
      maintainAspectRatio: false
    }
  });