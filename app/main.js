// main js funcitons are here

// this function returns current Year for "Copyright" section to make this app more dinamic :)
function getCurrentYear() {
  let today = new Date();
  let year = today.getFullYear();
  document.getElementById("current-year").innerHTML = year;
}

// running fucntions
getCurrentYear();
