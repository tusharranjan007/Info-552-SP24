let burgerBtn=document.querySelector("#burger-btn"),mainNav=document.querySelector("#main-nav"),canSeeMenu=!1;burgerBtn.addEventListener("click",(()=>{console.log(canSeeMenu),canSeeMenu?(mainNav.classList.remove("show-menu"),canSeeMenu=!1):(mainNav.classList.add("show-menu"),canSeeMenu=!0)})),mainNav.addEventListener("click",(()=>{mainNav.classList.add("show-menu"),canSeeMenu=!1}));