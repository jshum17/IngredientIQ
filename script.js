function displayAlternativesForIngredient(ingredientName) {
    fetch("./data/ingredients.json")
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
            "<div class='itemsHeader'>" +
            "Alternatives for " +
            ingredientName +
            ": " +
            "</div>";
  
          ingredient.substitutes.forEach(function (substitute) {
            substitutesContainer.innerHTML +=
              "<br class='item'>" +
              "<div class='item'>" +
              substitute.name +
              " - Calories: " +
              substitute.calories_per_cup +
              "</div>";
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
        console.log("David");
      }
    });
  });