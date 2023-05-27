var countElement = document.getElementById("count");
var count = 0;

function countNumber() {
  count++;
  countElement.textContent = count;

  if (count % 10 === 0) {
    var congratsElement = document.getElementById("congrats");
    if (!congratsElement) {
      congratsElement = document.createElement("p");
      congratsElement.id = "congrats";
      congratsElement.textContent =
        "Chúc mừng! Bạn đã đếm đến số " + count + ".";
      countElement.parentNode.appendChild(congratsElement);
    }
    congratsElement.style.color = "green";
  } else {
    var congratsElement = document.getElementById("congrats");
    if (congratsElement) {
      congratsElement.parentNode.removeChild(congratsElement);
    }
  }
}
