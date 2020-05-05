// Ensures that the app waits to attach handlers until the DOM is fully loaded.
$(function() {

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger").val().trim(), 
            devoured: 0
        };
        // Send the PUT request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            
            // Reloads the page so the updated database info gets shown
            location.reload();
        });
    });

    $(".devourBurger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var isDevoured = {
            devoured: 1
        };
        // Send the POST request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: isDevoured,

        }).then(function() {
            
            // Reloads the page to show updated database info
            location.reload();

        })
    });

    // Test
    
});