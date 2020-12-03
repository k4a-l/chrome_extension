let showController = document.getElementById("show");
let hideController = document.getElementById("hide");

let title = "Toggle NicoNico Controller Box";
let show = "show";
chrome.storage.sync.get(title + "show", function (data) {
  if (data !== null) {
    show = data;
  } else {
    show = "show";
  }
});

hideController.onclick = function (element) {
  setControllerBoxDisplay(false);
};

showController.onclick = function (element) {
  setControllerBoxDisplay(true);
};

function setControllerBoxDisplay(style) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code:
        'document.getElementsByClassName("PlayerPlayTime")[0].style.display="' +
        (style == true ? "inline-flex" : "none") +
        '";document.getElementsByClassName("SeekBarContainer")[0].style.display="' +
        (style == true ? "block" : "none") +
        '"',
    });
  });
}
