
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    let accText = this.nextElementSibling;
    if (accText.style.display === "block") {
      accText.style.display = "none";
    } else {
      accText.style.display = "block";
    }
  });
}