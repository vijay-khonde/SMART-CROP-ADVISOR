const headers = document.querySelectorAll(".accordion-header");
headers.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const icon = header.querySelector("span:last-child");

    // Close all open items
    document.querySelectorAll(".accordion-content").forEach((c) => {
      if (c !== content) c.style.display = "none";
    });
    document
      .querySelectorAll(".accordion-header span:last-child")
      .forEach((i) => (i.textContent = "➕"));

    // Toggle current
    if (content.style.display === "block") {
      content.style.display = "none";
      icon.textContent = "➕";
    } else {
      content.style.display = "block";
      icon.textContent = "➖";
    }
  });
});
