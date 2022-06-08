let menuList = document.getElementById("menuList");
const content_block = document.getElementById("content_block");

menuList.style.maxHeight = "0px";

// Function to toggle the menulist
function togglemenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "500px";
    menuList.style.visibility = "visible";
    content_block.style.visibility = "hidden";
  } else {
    content_block.style.visibility = "visible";
    menuList.style.visibility = "hidden";
    menuList.style.maxHeight = "0px";
  }
}
