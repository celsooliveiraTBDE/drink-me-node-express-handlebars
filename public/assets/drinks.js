// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".drink-up").on("click", function(event) {
    var id = $(this).data("id");
    var newDrink = $(this).data("drinkstate");

    var newDrinkState = {
      sipped: newDrink
    };

    // Send the PUT request.
    $.ajax("/api/drinks/" + id, {
      type: "PUT",
      data: newDrinkState
    }).then(function() {
      console.log("changed sipped to", newDrink);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newDrink = {
      name: $("#ca")
        .val()
        .trim(),
      sipped: $("[name=sipped]:checked")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/drinks", {
      type: "POST",
      data: newDrink
    }).then(function() {
      console.log("created new drink");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
