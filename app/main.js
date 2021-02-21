// main js funcitons are here

// this function returns current Year for "Copyright" section to make this app more dinamic :)
function getCurrentYear() {
  let today = new Date();
  let year = today.getFullYear();
  document.getElementById("current-year").innerHTML = year;
}

// this function deletes "Active line" style from non-active lines (files/folders)
function removeActiveLineStyle() {
  var activeLines = document.getElementsByClassName("active-line");
  while (activeLines[0]) {
    activeLines[0].classList.remove("active-line");
  }
}

// this function shows "About" information on the right panel
function aboutInfo() {
  removeActiveLineStyle();
  let activeLine = document.getElementById("about");
  activeLine.classList.add("active-line");
  let rightContent = document.getElementById("right-content");
  rightContent.innerHTML = '<p>Some "About" text to be added here..</p>';
}

// this function shows "Blog" information on the right panel
function blogInfo() {
  removeActiveLineStyle();
  let activeLine = document.getElementById("blog");
  activeLine.classList.add("active-line");
  let rightContent = document.getElementById("right-content");
  rightContent.innerHTML = '<p>Some "Blog" text to be added here..</p>';
}

// this function shows "Work Experience" information on the right panel
function workExperienceInfo() {
  removeActiveLineStyle();
  let activeLine = document.getElementById("work-experience");
  activeLine.classList.add("active-line");
  let rightContent = document.getElementById("right-content");
  rightContent.innerHTML =
    '<p>Some "Work Experience" text to be added here..</p>';
}

// this function creates Web element to show an "Error" message when user tries to navigate to the "Root" folder
function root() {
  createBlankPage();
  let errorPageContainer = document.createElement("div");
  let errorPageContent = document.createElement("div");
  errorPageContainer.id = "alert-page-container";
  errorPageContent.id = "alert-page-content";
  document.getElementById("blank-page").appendChild(errorPageContainer);
  document.getElementById("alert-page-container").appendChild(errorPageContent);
  errorPageContent.innerHTML =
    '<div class="top-path-label red-label">Access Denied</div><div class="popup-content"><p>You don&#39;t have an access to the "Root" folder</p></div><div><br><span class="delete-yes-no-button" onclick="closeHelpPage()">[ Close this window ]</span><br><br></div>';
}

// running fucntions
getCurrentYear();
aboutInfo(); // to show "About" page by default
