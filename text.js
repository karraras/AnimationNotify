let button = document.querySelector("button");
let parent = document.querySelector(".parent");
let count = 0;
button.addEventListener("click", (ele) => {
  count++;
  if (count >= 1) {
    parent.classList.add("hide");
    parent.dataset.set = count;
  }
});
