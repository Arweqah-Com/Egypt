function checkPassword() {
  const password = prompt("Please enter the password:");

  // You can change this password as needed
  if (password === "1234") {
    document.querySelector("button").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
  } else {
    alert("Incorrect password!");
  }
}
