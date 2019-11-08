$(document).ready(function() {
  $("#register-button").on("click", function() {
    const user = {
      email: $("#email").val(),
      developerType: $("#developer-type").val(),
      bootcamp: $("#bootcamp").val(),
      location: $("#location").val(),
      password: $("#password").val()
    };

    $.post("/api/register", user).then(results => {
      console.log("USER CREATED!", results);
    });
  });

  $("#login-button").on("click", function() {
    const user = {
      email: $("#email").val(),
      password: $("#password").val()
    };

    $.post("/api/login", user).then(results => {
      console.log("Login successful!", results);
    });
  });
});
