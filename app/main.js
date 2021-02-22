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

  var rightBottomFileName = document.getElementById("right-bottom-file-name");
  rightBottomFileName.innerHTML =
    activeLine.getElementsByTagName("span").item(0).innerHTML +
    "." +
    activeLine.getElementsByTagName("span").item(1).innerHTML;
}

// this function shows "Blog" information on the right panel
function blogInfo() {
  removeActiveLineStyle();
  let activeLine = document.getElementById("blog");
  activeLine.classList.add("active-line");
  let rightContent = document.getElementById("right-content");
  rightContent.innerHTML = '<p>Some "Blog" text to be added here..</p>';

  var rightBottomFileName = document.getElementById("right-bottom-file-name");
  rightBottomFileName.innerHTML =
    activeLine.getElementsByTagName("span").item(0).innerHTML +
    "." +
    activeLine.getElementsByTagName("span").item(1).innerHTML;
}

// this function shows "Profile Photo" on the right panel
function profilePhotoBmp() {
  removeActiveLineStyle();
  let activeLine = document.getElementById("profile-photo");
  activeLine.classList.add("active-line");
  let rightContent = document.getElementById("right-content");
  rightContent.innerHTML = '<img src="images/profile-photo.png"></img>';

  var rightBottomFileName = document.getElementById("right-bottom-file-name");
  rightBottomFileName.innerHTML =
    activeLine.getElementsByTagName("span").item(0).innerHTML +
    "." +
    activeLine.getElementsByTagName("span").item(1).innerHTML;
}

// this function shows "Work Experience" information on the right panel
function workExperienceInfo() {
  removeActiveLineStyle();
  let activeLine = document.getElementById("work-experience");
  activeLine.classList.add("active-line");
  let rightContent = document.getElementById("right-content");
  rightContent.innerHTML =
    '<p>Some "Work Experience" text to be added here..</p>';

  var rightBottomFileName = document.getElementById("right-bottom-file-name");
  rightBottomFileName.innerHTML =
    activeLine.getElementsByTagName("span").item(0).innerHTML +
    "." +
    activeLine.getElementsByTagName("span").item(1).innerHTML;
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

// this function creates Web element to show an "Info" message when user tries to run a contact.exe programme
function contactExe() {
  createBlankPage();
  removeActiveLineStyle();
  let activeLine = document.getElementById("contact-exe");
  activeLine.classList.add("active-line");
  let rightContent = document.getElementById("right-content");
  rightContent.innerHTML =
    "<p>Preview is not available for executable programme.</p>";
  let infoPageContainer = document.createElement("div");
  let infoPageContent = document.createElement("div");
  infoPageContainer.id = "quit-page-container";
  infoPageContent.id = "quit-page-content";
  document.getElementById("blank-page").appendChild(infoPageContainer);
  document.getElementById("quit-page-container").appendChild(infoPageContent);
  infoPageContent.innerHTML =
    '<div class="top-path-label grey-label">Contact.exe</div><div class="popup-content"><p>This programme is under development.</p><p>Meanwhile, you can contact me via</p><p><a href="http://www.linkedin.com/in/oleksiy-onyshchenko" target="_blank">www.linkedin.com/in/oleksiy-onyshchenko</a></p></div><br><div><span class="close-popup-btn" onclick="closeHelpPage()">[ Close this window ]</span><br><br></div>';

  var rightBottomFileName = document.getElementById("right-bottom-file-name");
  rightBottomFileName.innerHTML =
    activeLine.getElementsByTagName("span").item(0).innerHTML +
    "." +
    activeLine.getElementsByTagName("span").item(1).innerHTML;
}

// running fucntions
getCurrentYear();
aboutInfo(); // to show "About" page by default
