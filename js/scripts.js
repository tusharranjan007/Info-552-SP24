let burgerBtn = document.querySelector("#burger-btn");
let mainNav = document.querySelector("#main-nav")

let canSeeMenu = false;

burgerBtn.addEventListener("click",()=> {
    console.log(canSeeMenu);

    if(!canSeeMenu){
        mainNav.classList.add("show-menu");
        canSeeMenu= true;
    }else{
        mainNav.classList.remove("show-menu");
        canSeeMenu= false;
    }
})

mainNav.addEventListener("click", () =>{
    mainNav.classList.add("show-menu");
    canSeeMenu = false;
})