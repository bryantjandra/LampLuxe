var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-img");

var images = document.querySelectorAll(".flex-item img");
images.forEach(function (img) {
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    document.body.classList.add("no-scroll");
  };
});

function closeModal() {
  modal.style.display = "none";
  document.body.classList.remove("no-scroll");
}
