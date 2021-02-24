// bottom menu functions

// swaps left and right panels
function swapPanel() {
  var leftPanel = document.getElementById("left-panel");
  var rightPanel = document.getElementById("right-panel");

  if (leftPanel.hasAttribute("style")) {
    leftPanel.removeAttribute("style");
    rightPanel.removeAttribute("style");
  } else {
    leftPanel.setAttribute(
      "style",
      "order:2;margin-left: 5px;margin-right:15px"
    );
    rightPanel.setAttribute(
      "style",
      "order:1;margin-right: 5px;margin-left:15px"
    );
  }
}

//  creates a blank DIV to diable all other Web elements from being actioned
function createBlankPage() {
  var blankElement = document.createElement("div");
  document.body.appendChild(blankElement);
  blankElement.id = "blank-page";
}

// removes a blank DIV including all child elements (popup windows) to enable all other Web elements from being actioned
function closeHelpPage() {
  var blankElement = document.getElementById("blank-page");
  document.body.removeChild(blankElement);
}

// creates Web element to show a "Help" page for the user
function showHelpPage() {
  createBlankPage();
  var helpPageContainer = document.createElement("div");
  var helpPageContent = document.createElement("div");
  helpPageContainer.id = "help-page-container";
  helpPageContent.id = "help-page-content";
  document.getElementById("blank-page").appendChild(helpPageContainer);
  document.getElementById("help-page-container").appendChild(helpPageContent);
  helpPageContent.innerHTML =
    '<div class="top-path-label green-label">Help Page</div><div class="help-page-copyright">Copyright 1986-2021. Oleksiy Onyshchenko.<br>Inspired by MS-DOS childhood.</div><br><hr><div class="popup-content">Some "Help" text to  be added here..</div><br><br><br><br><br><br><br><div><span class="close-popup-btn" onclick="closeHelpPage()">[ Close this window ]</span></div>';
}

// creates Web element to show an "Exit" confirmation popup message
function quitConfirmation() {
  createBlankPage();
  var quitPageContainer = document.createElement("div");
  var quitPageContent = document.createElement("div");
  quitPageContainer.id = "quit-page-container";
  quitPageContent.id = "quit-page-content";
  document.getElementById("blank-page").appendChild(quitPageContainer);
  document.getElementById("quit-page-container").appendChild(quitPageContent);
  quitPageContent.innerHTML =
    '<div class="top-path-label grey-label">Exit</div><div class="popup-content"><p>Are you sure that you want to quit?</p></div><br><div><span class="close-popup-btn">{ Yes }</span><span>     </span><span class="close-popup-btn" onclick="closeHelpPage()">[ No ]</span><br><br></div>';
}

// creates Web element to show "Delete" confirmation popup
function deletePage() {
  createBlankPage();
  var deletePageContainer = document.createElement("div");
  var deletePageContent = document.createElement("div");
  deletePageContainer.id = "alert-page-container";
  deletePageContent.id = "alert-page-content";
  document.getElementById("blank-page").appendChild(deletePageContainer);
  document
    .getElementById("alert-page-container")
    .appendChild(deletePageContent);
  deletePageContent.innerHTML =
    '<div class="top-path-label red-label">Delete</div><div class="popup-content"><p>One does not simply delete a single file.<br><br>Delete a whole Web Site?</p></div><br><div><span class="delete-yes-no-button" onclick="deleteBodyChild()">{ Yes }</span><span>     </span><span class="delete-yes-no-button" onclick="closeHelpPage()">[ Cancel ]</span><br><br></div>';
}

// shows "Directed By Meme" when user clicks "Delete > Yes"
function deleteBodyChild() {
  document.body.innerHTML =
    '<div class="directed-by-meme-container"><image class="directed-by-meme-img" src="images/DirectedByMeme.gif"></image></div>';
}

// creates Web element to show "Info" popup that "Feature is not yet implemented"
function infoMessage() {
  createBlankPage();
  var infoPageContainer = document.createElement("div");
  var infoPageContent = document.createElement("div");
  infoPageContainer.id = "quit-page-container";
  infoPageContent.id = "quit-page-content";
  document.getElementById("blank-page").appendChild(infoPageContainer);
  document.getElementById("quit-page-container").appendChild(infoPageContent);
  infoPageContent.innerHTML =
    '<div class="top-path-label grey-label">Info</div><div class="popup-content"><p>This feature is not implemented yet..</p></div><br><div><span class="close-popup-btn" onclick="closeHelpPage()">[ Close this window ]</span><br><br></div>';
}
