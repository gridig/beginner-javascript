const baseEndpoint = 'http://www.recipepuppy.com/api/';
const proxy = `https://cors-anywhere.herokuapp.com/`;
const formMeal = document.querySelector('form#meal');
const formIngredient = document.querySelector('form#ingredient');
const recipesGrid = document.querySelector('.recipes');

async function fetchRecipesMeal(query) {
  const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const data = await res.json();
  return data;
}

async function fetchRecipesIngredient(query) {
  const res = await fetch(`${proxy}${baseEndpoint}?i=${query}`);
  const data = await res.json();
  return data;
}

async function handleSubmitMeal(event) {
  event.preventDefault();
  fetchAndDisplayMeal(formMeal.query.value);
}

async function handleSubmitIngredient(event) {
  event.preventDefault();
  fetchAndDisplayIngredient(formIngredient.query.value);
}

async function fetchAndDisplayMeal(query) {
  formMeal.submit.disabled = true;
  const recipes = await fetchRecipesMeal(query);
  formMeal.submit.disabled = false;
  displayRecipes(recipes.results);
}

async function fetchAndDisplayIngredient(query) {
  formIngredient.submit.disabled = true;
  const recipes = await fetchRecipesIngredient(query);
  formIngredient.submit.disabled = false;
  displayRecipes(recipes.results);
}

function displayRecipes(recipes) {
  const html = recipes.map(
    recipe => `<div class="recipe">
      <h2>${recipe.title}</h2>
      <p>${recipe.ingredients}</p>
      ${recipe.thumbnail &&
        `<img src="${recipe.thumbnail}" alt="${recipe.title}"/>`}
      <a href="${recipe.href}">View Recipe →</a>
    </div>`
  );
  recipesGrid.innerHTML = html.join('');
}

formMeal.addEventListener('submit', handleSubmitMeal);
formIngredient.addEventListener('submit', handleSubmitIngredient);
fetchAndDisplayMeal();
fetchAndDisplayIngredient();
