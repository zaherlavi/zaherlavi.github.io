h1 = document.getElementById('job');
body = document.getElementById('body');
h1.addEventListener("change", () => {
   if (body.style.width < 700){
      h1.style.display = "none";
   }
});
   