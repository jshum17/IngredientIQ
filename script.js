fetch("./data/ingredients.json")
  .then(function (resp) {
    return resp.json();
  })

  .then(function (data) {
    // var firstIngredient = data.ingredient[0];
    // console.log(firstIngredient.name);
    // console.log(firstIngredient.substitutes);
    for (var i = 0; i < data.length; i++) {
        document.getElementById("data").innerHTML += 
        data[i].id + "=>" + data[i].substitutions.ingredient + "</ br>"
    }
});




