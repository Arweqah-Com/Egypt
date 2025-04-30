function showDashboard() {
  document.querySelector("button").style.display = "none";
  document.getElementById("dashboard").style.display = "block";
}

function goBack() {
  document.querySelector("button").style.display = "block";
  document.getElementById("dashboard").style.display = "none";
}
