// Accordion Toggle
document.querySelectorAll(".accordion-header").forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const symbol = header.querySelector("span");
    if (content.style.display === "block") {
      content.style.display = "none";
      symbol.textContent = "➕";
    } else {
      document.querySelectorAll(".accordion-content").forEach(c => c.style.display = "none");
      document.querySelectorAll(".accordion-header span").forEach(s => s.textContent = "➕");
      content.style.display = "block";
      symbol.textContent = "➖";
    }
  });
});
