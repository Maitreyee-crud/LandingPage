document.querySelector('.fa-chevron-up').onclick = () => alert('Move Up');
  document.querySelector('.fa-chevron-down').onclick = () => alert('Move Down');
  document.querySelector('.fa-cog').onclick = () => alert('Settings');
  document.querySelector('.fa-trash').onclick = () => alert('Delete');
  
  const desktopBtn = document.getElementById("desktopBtn");
  const mobileBtn = document.getElementById("mobileBtn");

  desktopBtn.addEventListener("click", () => {
    desktopBtn.classList.add("active");
    mobileBtn.classList.remove("active");
  });

  mobileBtn.addEventListener("click", () => {
    mobileBtn.classList.add("active");
    desktopBtn.classList.remove("active");
  });
  const designTab = document.getElementById("designTab");
  const layersTab = document.getElementById("layersTab");
  const underline = document.querySelector(".tab-underline");

  function activateTab(tabElement) {
    document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
    tabElement.classList.add("active");

    underline.style.left = tabElement.offsetLeft + "px";
    underline.style.width = tabElement.offsetWidth + "px";
  }

  designTab.addEventListener("click", () => activateTab(designTab));
  layersTab.addEventListener("click", () => activateTab(layersTab));

  window.addEventListener("load", () => activateTab(designTab));

  const range = document.getElementById('radiusRange');
  const number = document.getElementById('radiusNumber');

  range.addEventListener('input', () => {
    number.value = range.value;
    updateSliderBackground();
  });

  number.addEventListener('input', () => {
    const value = Math.max(0, Math.min(20, number.value)); // limit between 0–20
    range.value = value;
    updateSliderBackground();
  });

  function updateSliderBackground() {
    const percent = (range.value / range.max) * 100;
    range.style.backgroundSize = `${percent}% 100%`;
  }