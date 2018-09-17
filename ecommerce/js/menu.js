
//Menu
var el = document.getElementsByClassName("dropdown")
for(var i=0; i<el.length; i++) {
   el[i].addEventListener("mouseenter", showSub, false);
   el[i].addEventListener("mouseleave", hideSub, false);
}

function showSub() {
   if(this.children.length>1) {
      this.children[1].style.height = "auto";
      this.children[1].style.overflow = "visible";
      this.children[1].style.opacity = "1";
      this.children[1].style.display = "block";
   } else {
      return false;
   }
}

function hideSub() {
    if(this.children.length>1) {
      this.children[1].style.height = "0px";
       this.children[1].style.overflow = "hidden";
       this.children[1].style.opacity = "0";
    } else {
       return false;
    }
}

var navList = document.querySelector(".main-nav--small").querySelector(".nav-list");


function smallMenu(obj){
  obj.classList.toggle('nav-list--show');
};

//PopUps
var signin = document.querySelector(".sign-in");
var signup = document.querySelector(".sign-up");
function togglePopUp(obj) {
  obj.classList.toggle('pop-up-sign--hidden');
};