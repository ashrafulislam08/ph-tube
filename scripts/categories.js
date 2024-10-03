// Fetch, Load and Show Categories on html

// create loadCategories
const loadCategories = () => {
  // fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((response) => response.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.error(error));
};

// create displayCategories
const displayCategories = (categories) => {
  const categoriesContainer = document.getElementById("categories");
  categories.forEach((item) => {
    // create a button
    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = `
        <button onclick="loadCategoriesVideos(${item.category_id})" class="btn">
        ${item.category}
        </button>
    `;

    // add button to categories container
    categoriesContainer.append(buttonContainer);
  });
};

loadCategories();
