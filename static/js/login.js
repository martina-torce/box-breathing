document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // In a real app, you would send a request to the server for authentication here.
    // For this example, let's assume a successful login.
    if (username === "user" && password === "pass") {
      // Redirect to main.html upon successful login
      window.location.href = "/";
    } else {
      alert("Login failed. Please try again.");
    }
  });
});
