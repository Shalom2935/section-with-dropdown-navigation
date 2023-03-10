let toggleArrow = undefined;
let toggleArroww = undefined;
let dropdownOptions = undefined;
let dropdownOptionss = undefined;
let displayMenu = undefined;
let closeMenu = undefined;
let bgMenu = undefined;
dropdownOptions = document.querySelector(".list");
dropdownOptionss = document.querySelector(".company-info")
toggleArrow = document.querySelector('.arrow-down');
toggleArroww = document.querySelector('.arrow-down1');
displayMenu = document.querySelector('.nav-bloc');
closeMenu = document.querySelector('.nav-bloc');
bgMenu = document.querySelector('.navbar');




function toggleDropdown(){
dropdownOptions.classList.toggle('show');
toggleArrow.classList.toggle('arrow');
} 

function toggleDopdownn(){
  dropdownOptionss.classList.toggle('show');
  toggleArroww.classList.toggle('arrow');
}

document.querySelector(".dropdown").addEventListener('click',function(){
toggleDropdown();
    })
document.querySelector(".dropdown1").addEventListener('click', function(){
      toggleDopdownn();
    })


function toggleMenu(){
  bgMenu.classList.toggle('background-menu');
  displayMenu.classList.toggle('show-menu');


}
document.querySelector('.menu-button').addEventListener('click', function(){
  toggleMenu();
})
document.querySelector('.close-button').addEventListener('click', function(){
  toggleMenu();
})