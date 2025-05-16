// Theme Toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
    const body = document.body;
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.getElementById("theme-toggle").textContent = "🌙 Dark Mode";
    } else {
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.getElementById("theme-toggle").textContent = "☀️ Light Mode";
    }
  });
  
  // Load saved theme
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.className = savedTheme;
  document.getElementById("theme-toggle").textContent = savedTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
  
  // Category Filter
  function filterCategory(category) {
    const cards = document.querySelectorAll(".product-card");
    cards.forEach(card => {
      if (category === "all" || card.classList.contains(category)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  
    // Update active button
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelector(`[onclick="filterCategory('${category}')"]`).classList.add("active");
  }
  
  // Wishlist Feature
  function addToWishlist(productName) {
    let list = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (!list.includes(productName)) {
      list.push(productName);
      localStorage.setItem("wishlist", JSON.stringify(list));
      alert(`${productName} added to your wishlist!`);
    } else {
      alert(`${productName} is already in your wishlist.`);
    }
  }