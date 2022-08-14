//ACCORDION

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }
  });
};



//SEARCH FORM

let searchForm = document.getElementById('search-form')
let searchIcon = document.getElementById('search-icon')

function displaySearchForm(){
  

  if (searchForm.style.display === "flex"){
    searchForm.style.display = "none";
  } else {
    searchForm.style.display = "flex";
  }
};

searchIcon.addEventListener("click", displaySearchForm)