// main js funcitons are here

// this function returns current Year for "Copyright" section to make this app more dinamic :)
function getCurrentYear() {
  var today = new Date();
  var year = today.getFullYear();
  document.getElementById("current-year").innerHTML = year;
}

// this function deletes "Active line" style from non-active lines (files/folders)
function removeActiveLineStyle() {
  var activeLines = document.getElementsByClassName("active-line");
  while (activeLines[0]) {
    activeLines[0].classList.remove("active-line");
  }
}

// this function takes the name of selected file (Name + extension) and sets into right bottom file name section
function setSelectedFileName(fileName) {
  var rightBottomFileName = document.getElementById("right-bottom-file-name");
  rightBottomFileName.innerHTML =
    fileName.getElementsByTagName("span").item(0).innerHTML + //file name
    "." +
    fileName.getElementsByTagName("span").item(1).innerHTML; // file extension
}
// this function shows "About" information on the right panel
function aboutInfo() {
  removeActiveLineStyle();

  var activeLine = document.getElementById("about");
  activeLine.classList.add("active-line");
  var rightContent = document.getElementById("right-content");
  rightContent.innerHTML = '<p>Some "About" text to be added here..</p>';

  setSelectedFileName(activeLine); // shows file name on the right panel - bottom file name section
}

// this function shows "Blog" information on the right panel
function blogInfo() {
  removeActiveLineStyle();

  var activeLine = document.getElementById("blog");
  activeLine.classList.add("active-line");
  var rightContent = document.getElementById("right-content");
  rightContent.innerHTML = '<p>Some "Blog" text to be added here..</p>';

  setSelectedFileName(activeLine); // shows file name on the right panel - bottom file name section
}

// this function shows "Profile Photo" on the right panel
function profilePhotoBmp() {
  removeActiveLineStyle();

  var activeLine = document.getElementById("profile-photo");
  activeLine.classList.add("active-line");
  var rightContent = document.getElementById("right-content");
  rightContent.innerHTML =
    '<div class="profile-image"><img src="images/profile-photo.png"></img></div>';

  setSelectedFileName(activeLine); // shows file name on the right panel - bottom file name section
}

// this function shows "Work Experience" information on the right panel
function workExperienceInfo() {
  removeActiveLineStyle();

  var activeLine = document.getElementById("work-experience");
  activeLine.classList.add("active-line");
  var rightContent = document.getElementById("right-content");
  rightContent.innerHTML =
    '<div class="center-txt"><p>*******************</p><p>* Work Experience *</p><p>*******************</p></div><p class="yellow-txt">2015 - present:</p><p>Lead QA Analyst at Luxoft UK LTD (London)</p><p class="yellow-txt">2013 - 2015:</p><p>Senior QA Engineer at Luxoft Ukraine (Kyiv)</p><p class="yellow-txt">2012 - 2013:</p><p>QA Engineer at Samsung R&D Ukraine (Kyiv)</p><p class="yellow-txt">2009 - 2012:</p><p>Software Engineer at Orneon LTD (Vinnytsya)</p><p class="yellow-txt">2008 - 2009:</p><p>Financial adviser at UkrSibBank BNP Paribas (Vinnytsya)</p>';

  setSelectedFileName(activeLine); // shows file name on the right panel - bottom file name section
}

// this function creates Web element to show an "Error" message when user tries to navigate to the "Root" folder
function root() {
  createBlankPage();

  var errorPageContainer = document.createElement("div");
  var errorPageContent = document.createElement("div");
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

  var activeLine = document.getElementById("contact-exe");
  activeLine.classList.add("active-line");
  var rightContent = document.getElementById("right-content");
  rightContent.innerHTML =
    "<p>Preview is not available for executable programme.</p>";
  var infoPageContainer = document.createElement("div");
  var infoPageContent = document.createElement("div");
  infoPageContainer.id = "quit-page-container";
  infoPageContent.id = "quit-page-content";
  document.getElementById("blank-page").appendChild(infoPageContainer);
  document.getElementById("quit-page-container").appendChild(infoPageContent);
  infoPageContent.innerHTML =
    '<div class="top-path-label grey-label">Contact.exe</div><div class="popup-content"><p>This programme is under development.</p><p>Meanwhile, you can contact me via</p><p><a href="http://www.linkedin.com/in/oleksiy-onyshchenko" target="_blank">www.linkedin.com/in/oleksiy-onyshchenko</a></p></div><br><div><span class="close-popup-btn" onclick="closeHelpPage()">[ Close this window ]</span><br><br></div>';

  setSelectedFileName(activeLine); // shows file name on the right panel - bottom file name section
}

// running fucntions
getCurrentYear();
aboutInfo(); // to show "About" page by default when the page is loaded
