// this function swaps left and right panels
function swapPanel() {
  let leftPanel = document.getElementById("left-panel");
  let rightPanel = document.getElementById("right-panel");

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

// this function creates a blank page to diable all other Web elements from being actioned
function createBlankPage() {
  let blankElement = document.createElement("div");
  document.body.appendChild(blankElement);
  blankElement.id = "blank-page";
}

// this function removes a blank page including all child elements (popup windows) to enable all other Web elements from being actioned
function closeHelpPage() {
  let blankElement = document.getElementById("blank-page");
  document.body.removeChild(blankElement);
}

// this function creates Web element to show a Help page for the user
function showHelpPage() {
  createBlankPage();
  let helpPageContainer = document.createElement("div");
  let helpPageContent = document.createElement("div");
  helpPageContainer.id = "help-page-container";
  helpPageContent.id = "help-page-content";
  document.getElementById("blank-page").appendChild(helpPageContainer);
  document.getElementById("help-page-container").appendChild(helpPageContent);
  helpPageContent.innerHTML =
    '<p class="pop-logo">Help Page</p><p>Copyright 1986-2021. Oleksiy Onyshchenko.<br>Inspired by MS-DOS childhood.</p><hr><p>Some text will be added here..</p><br><br><a href="#"><span id="close-help-page-btn" onclick="closeHelpPage()">[ Close this window ]</span></a>';
}
