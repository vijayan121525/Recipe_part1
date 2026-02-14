/* ===================================== */
/* Recipe Data Array */
/* ===================================== */

const recipes = [
  {
    id: 1,
    title: "Creamy Garlic Pasta",
    time: 25,
    difficulty: "easy",
    description: "A rich and creamy garlic pasta perfect for quick dinners.",
    category: "pasta"
  },
  {
    id: 2,
    title: "Chicken Biryani",
    time: 90,
    difficulty: "hard",
    description: "A flavorful layered rice dish with aromatic spices.",
    category: "curry"
  },
  {
    id: 3,
    title: "Caesar Salad",
    time: 20,
    difficulty: "easy",
    description: "Crisp lettuce tossed with creamy Caesar dressing.",
    category: "salad"
  },
  {
    id: 4,
    title: "Beef Stroganoff",
    time: 60,
    difficulty: "medium",
    description: "Tender beef cooked in a creamy mushroom sauce.",
    category: "meat"
  },
  {
    id: 5,
    title: "Vegetable Stir Fry",
    time: 30,
    difficulty: "medium",
    description: "Fresh vegetables sautéed in a savory soy sauce glaze.",
    category: "vegetarian"
  },
  {
    id: 6,
    title: "Chocolate Lava Cake",
    time: 45,
    difficulty: "hard",
    description: "Decadent chocolate cake with a molten center.",
    category: "dessert"
  },
  {
    id: 7,
    title: "Tomato Soup",
    time: 35,
    difficulty: "easy",
    description: "Classic homemade tomato soup with fresh herbs.",
    category: "soup"
  },
  {
    id: 8,
    title: "Grilled Salmon",
    time: 50,
    difficulty: "medium",
    description: "Perfectly grilled salmon with lemon butter sauce.",
    category: "seafood"
  }
];

/* ===================================== */
/* DOM Selection */
/* ===================================== */

const recipeContainer = document.querySelector("#recipe-container");

/* ===================================== */
/* Create Recipe Card Function */
/* ===================================== */

const createRecipeCard = (recipe) => {
  return `
    <div class="recipe-card" data-id="${recipe.id}">
      <h3>${recipe.title}</h3>
      <div class="recipe-meta">
        <span>⏱️ ${recipe.time} min</span>
        <span class="difficulty ${recipe.difficulty}">
          ${recipe.difficulty}
        </span>
      </div>
      <p>${recipe.description}</p>
    </div>
  `;
};

/* ===================================== */
/* Render Recipes Function */
/* ===================================== */

const renderRecipes = (recipesArray) => {
  const recipeHTML = recipesArray
    .map(recipe => createRecipeCard(recipe)) // transform each object into HTML
    .join(""); // combine into one string

  recipeContainer.innerHTML = recipeHTML; // inject into DOM
};

/* ===================================== */
/* Initialize App */
/* ===================================== */

renderRecipes(recipes);
