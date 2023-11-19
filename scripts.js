function displayAlternativesForIngredient(ingredientName) {
  fetch("ingredients.json")
    .then(function (resp) {
      return resp.json();
    })

    .then(function (data) {
      var ingredient = data.substitutions.find(function (item) {
        return item.ingredient === ingredientName;
      });

      if (ingredient) {
        var substitutesContainer = document.getElementById(
          "ingredientNameContainer"
        );
        substitutesContainer.innerHTML =
          "Alternatives for " + ingredientName + ": ";

        ingredient.substitutes.forEach(function (substitute) {
          substitutesContainer.innerHTML +=
            "<br>" +
            substitute.name +
            " - Calories: " +
            substitute.calories_per_cup;
        });
      } else {
        document.getElementById("ingredientNameContainer").innerHTML =
          "Ingredient not found: " + ingredientName;
      }
    });
}

document.addEventListener("DOMContentLoaded", function () {
  var ingredientInput = document.getElementById("ingredientInput");

  ingredientInput.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      displayAlternativesForIngredient(ingredientInput.value);
    }
  });
});
