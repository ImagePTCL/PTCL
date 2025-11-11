const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

const products = [
  { name: "AXLE HOUSING -Front", image: "images/AXLE HOUSING -F.jpg", category: "PTCL"   },
  { name: "AXLE HOUSING -Back", image: "images/AXLE HOUSING -B.jpg", category: "PTCL"   },
  { name: "Banjo", image: "images/Banjo.png", category: "PTCL"   },
   { name: "Idler", image: "images/Idler.png", category: "PTCL"   },
   { name: "Pivot -RH", image: "images/Pivot RH.png", category: "PTCL"   },
   { name: "Support 4544550", image: "images/Support - 4544550.png", category: "PTCL"   },
   { name: "Support 2432461/62", image: "images/Support 2432461 & 62.png", category: "PTCL"   },
   { name: "Swivel Pin LH", image: "images/Swivel Pin LH.png", category: "PTCL"   },
   { name: "Wheel Front", image: "images/Wheel Front-1.png", category: "PTCL"   },  

 ];

function displayProducts(productList) {
  gallery.innerHTML = "";
  productList.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <p>${product.name}</p>
    `;
    gallery.appendChild(div);
  });
}

function filterProducts() {
  const searchQuery = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  const filtered = products.filter(product => {
    const matchName = product.name.toLowerCase().includes(searchQuery);
    const matchCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchName && matchCategory;
  });

  displayProducts(filtered);
}

searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);

// Initial load
displayProducts(products);

displayProducts(products);
