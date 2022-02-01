const acc = document.getElementsByClassName("accordeon-item");

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
