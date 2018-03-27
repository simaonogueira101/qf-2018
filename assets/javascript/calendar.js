document.querySelector(".menu-1-close").addEventListener("click", function(){
  document.querySelector(".menu-1").classList.remove("hide");
  document.querySelector(".menu-1-close").classList.add("hide");

  document.querySelector(".menu-2").classList.add("hide");
  document.querySelector(".menu-2-close").classList.remove("hide");
  document.querySelector(".menu-3").classList.add("hide");
  document.querySelector(".menu-3-close").classList.remove("hide");

  document.querySelector(".calendar-cultural").classList.remove("hide");
  document.querySelector(".calendar-sports").classList.add("hide");
  document.querySelector(".calendar-traditional").classList.add("hide");
});

document.querySelector(".menu-2-close").addEventListener("click", function(){
  document.querySelector(".menu-2").classList.remove("hide");
  document.querySelector(".menu-2-close").classList.add("hide");

  document.querySelector(".menu-1").classList.add("hide");
  document.querySelector(".menu-1-close").classList.remove("hide");
  document.querySelector(".menu-3").classList.add("hide");
  document.querySelector(".menu-3-close").classList.remove("hide");

  document.querySelector(".calendar-cultural").classList.add("hide");
  document.querySelector(".calendar-sports").classList.remove("hide");
  document.querySelector(".calendar-traditional").classList.add("hide");
});

document.querySelector(".menu-3-close").addEventListener("click", function(){
  document.querySelector(".menu-3").classList.remove("hide");
  document.querySelector(".menu-3-close").classList.add("hide");

  document.querySelector(".menu-1").classList.add("hide");
  document.querySelector(".menu-1-close").classList.remove("hide");
  document.querySelector(".menu-2").classList.add("hide");
  document.querySelector(".menu-2-close").classList.remove("hide");

  document.querySelector(".calendar-cultural").classList.add("hide");
  document.querySelector(".calendar-sports").classList.add("hide");
  document.querySelector(".calendar-traditional").classList.remove("hide");
});
