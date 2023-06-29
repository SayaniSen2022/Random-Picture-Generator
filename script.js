let catButton = document.querySelector(".cat-btn");

catButton.addEventListener("click", fetchPics);

function fetchPics() {
  let catsImgDiv = document.querySelector(".cat-img");
  catsImgDiv.innerHTML = "";

  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let catsImgUrl = data[0].url;

      let catsImgEl = document.createElement("img");
      catsImgEl.setAttribute("src", `${catsImgUrl}`);
      catsImgEl.classList.add("showcase");

      let catsImgDiv = document.querySelector(".cat-img");
      catsImgDiv.appendChild(catsImgEl);
    })
    .catch((err) => console.log(err));
}
