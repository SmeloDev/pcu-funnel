const acc = document.getElementsByClassName("accordeon-item");
const openModalBtn = document.querySelector(
  ".marketing-materials-section .header .header-btn"
);
const marketingMaterialsModalWrapper = document.querySelector(
  ".marketing-materials-wrapper .modal-wrapper"
);

const marketingMaterialsModal = document.querySelector(
  ".marketing-materials-wrapper .modal-wrapper .modal"
);

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.opacity = "0";
      panel.style.marginBottom = "0";
      panel.style.pointerEvents = "none";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.opacity = "1";
      panel.style.marginBottom = "20px";
      panel.style.pointerEvents = "auto";
    }
  });
}

if (openModalBtn) {
  openModalBtn.addEventListener("click", () => {
    marketingMaterialsModalWrapper.classList.add("open");
    marketingMaterialsModal.classList.add("open");

    // marketingMaterialsModalWrapper.style.display = "flex";
  });
}

document.addEventListener("click", (e) => {
  if (e.target === marketingMaterialsModalWrapper) {
    marketingMaterialsModalWrapper.classList.remove("open");
    marketingMaterialsModal.classList.remove("open");

    // marketingMaterialsModalWrapper.style.display = "none";
  }
});
