// open & Close Menu

var menu = document.querySelector(".nav_links");
function open_Menu() {
  menu.classList.toggle("active");
}
function close_Menu() {
  menu.classList.remove("active");
}


// arrow up 

let arrow = document.querySelector('.arrowup');


window.onscroll = () =>{
    
    if (this.scrollY >= 550) {
        
        arrow.classList.add("showarro");

    }
    else{
        arrow.classList.remove("showarro");

    }
}


arrow.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    })
})