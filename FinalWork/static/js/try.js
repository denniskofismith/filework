const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const holder = document.getElementById("holder")
const availableTab = document.getElementById("available");
const occupiedTab = document.getElementById("occupied");
const card = document.getElementById("card")
const statusid = document.getElementById("status")

// Handle tab switching
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

// Function to check the occupancy status and move the card
function checkOccupancy(status) {
  if (status === "Class Available") {
    availableTab.appendChild(card); // Move to Available tab
    document.getElementById("available-tab").click(); // Automatically switch to Available tab
  } else{
    occupiedTab.appendChild(card); // Move to Occupied tab
    document.getElementById("occupied-tab").click(); // Automatically switch to Occupied tab
  }
}

// Example: Set the initial class status dynamically (Replace this with dynamic backend data)
let classStatus =statusid.textContent; // From Flask backend
console.log(statusid.textContent)
checkOccupancy(classStatus);
