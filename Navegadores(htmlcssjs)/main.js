const themeBtn = document.querySelector("#themeBtn");

themeBtn.addEventListener("click", () =>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        themeBtn.textContent = "🌕";
    }else{
        themeBtn.textContent = "🌙";
    }
});

/*//Añadir
localStorage.setItem("theme","dark")

//GET
console.log(localStorage.getItem("theme"))

//Eliminar
localStorage.removeItem("theme")

//Clear
localStorage.clear();*/