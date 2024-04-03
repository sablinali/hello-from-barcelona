
function changeMainTitle(){
    const mainTitleEl = document.querySelector(".mainTitle");
    console.log(mainTitleEl.textContent);

    mainTitleEl.textContent = "Hello from Barcelona!";
    mainTitleEl.style.backgroundColor = "pink";

    console.log(mainTitleEl.textContent);
}

//changeMainTitle();
const greeting = setTimeout(changeMainTitle, 3000);

function darkMode(){
   document.body.style.backgroundColor = "black";
   const textElement = document.querySelector(".text");
   if (textElement) {
       textElement.style.color = "rgb(230, 230, 250)";
   }
   const image = document.querySelector(".photo");
   console.log(image.src);
   image.src = "./moi.jpg";
   
};