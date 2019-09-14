fetch("devtools.css")
  .then(res => res.text())
  .then(data => {
    chrome.devtools.panels.applyStyleSheet(data);

    var style = document.createElement("style");

    style.setAttribute("src", "devtools.css");

    document.body.appendChild(style);

    console.clear();
    console.log(
      "%c Developer Tools %c Main %c Injected stylesheet",
      "background: #1d1d1d; border-radius: 3px 0px 0px 3px; color: white; display: block;",
      "background: black; border-radius: 0px; color: white; display: block;",
      "background: #dbdbdb; border-radius: 0px 3px 3px 0px; color: black; display: block;"
    );
    console.log(
      "%c Developer Tools %c Socket %c Preparing websocket",
      "background: #1d1d1d; border-radius: 3px 0px 0px 3px; color: white; display: block;",
      "background: black; border-radius: 0px; color: white; display: block;",
      "background: #dbdbdb; border-radius: 0px 3px 3px 0px; color: black; display: block;"
    );
    console.log(
      `%c Developer Tools %c Main %c Websocket connected to tab ${chrome.devtools.inspectedWindow.tabId}`,
      "background: #1d1d1d; border-radius: 3px 0px 0px 3px; color: white; display: block;",
      "background: black; border-radius: 0px; color: white; display: block;",
      "background: #dbdbdb; border-radius: 0px 3px 3px 0px; color: black; display: block;"
    );
    console.log(
      `%c Developer Tools %c Info %c Using ${
        chrome.devtools.panels.themeName == "default" ? "light" : "dark"
      } theme`,
      "background: #1d1d1d; border-radius: 3px 0px 0px 3px; color: white; display: block;",
      "background: black; border-radius: 0px; color: white; display: block;",
      "background: #dbdbdb; border-radius: 0px 3px 3px 0px; color: black; display: block;"
    );
  });
