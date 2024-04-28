function changeMainTitle() {
  const mainTitleEl = document.querySelector(".mainTitle");
  console.log(mainTitleEl.textContent);

  mainTitleEl.textContent = "Hello from Barcelona!";
  mainTitleEl.style.backgroundColor = "pink";

  console.log(mainTitleEl.textContent);
}

//seconds to changeMainTitle();
const greeting = setTimeout(changeMainTitle, 3000);

//change to dark mode
function darkMode() {
  document.body.style.backgroundColor = "black";
  const textElement = document.querySelector(".text");
  if (textElement) {
    textElement.style.color = "white";
  }
  const image = document.querySelector(".photo");
  console.log(image.src);
  image.src = "./moi.jpg";
}

//cahnge to light mode
function lightMode() {
  document.body.style.backgroundColor = "white";
  const textElement = document.querySelector(".text");
  if (textElement) {
    textElement.style.color = "maroon";
  }
  const image = document.querySelector(".photo");
  console.log(image.src);
  image.src = "./sablina_sagrada_familia.jpg";
}
