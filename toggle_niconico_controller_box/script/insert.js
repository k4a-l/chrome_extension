let ControllerContainer_area = document.getElementsByClassName(
  "ControllerContainer-area"
);

let svg =
  '<svg class="timeOnOffButton-iconHide" viewBox="0 0 62.08 61.44"><defs><style>.cls-1{fill:#fff;}</style></defs><path class="cls-1" d="M2.5,20.33a5.74,5.74,0,0,1-1.45-4.18V7.05A5.72,5.72,0,0,1,2.51,2.86,5.7,5.7,0,0,1,6.76,1.37,5.7,5.7,0,0,1,11,2.85a5.76,5.76,0,0,1,1.45,4.2v9.1A5.74,5.74,0,0,1,11,20.34a5.66,5.66,0,0,1-4.25,1.49A5.67,5.67,0,0,1,2.5,20.33ZM9,18.39a3.19,3.19,0,0,0,.71-2.24V7.05A3.19,3.19,0,0,0,9,4.82,2.82,2.82,0,0,0,6.76,4a2.81,2.81,0,0,0-2.2.78,3.19,3.19,0,0,0-.71,2.23v9.1a3.24,3.24,0,0,0,.71,2.24,2.85,2.85,0,0,0,2.2.77A2.81,2.81,0,0,0,9,18.39Z" transform="translate(-0.94 -1.37)"/><path class="cls-1" d="M17.5,20.33a5.74,5.74,0,0,1-1.45-4.18V7.05a5.76,5.76,0,0,1,1.46-4.19,5.7,5.7,0,0,1,4.25-1.49A5.7,5.7,0,0,1,26,2.85a5.76,5.76,0,0,1,1.45,4.2v9.1A5.7,5.7,0,0,1,26,20.34a5.66,5.66,0,0,1-4.25,1.49A5.67,5.67,0,0,1,17.5,20.33ZM24,18.39a3.24,3.24,0,0,0,.71-2.24V7.05A3.19,3.19,0,0,0,24,4.82,2.81,2.81,0,0,0,21.76,4a2.82,2.82,0,0,0-2.2.78,3.19,3.19,0,0,0-.7,2.23v9.1a3.19,3.19,0,0,0,.71,2.24,2.81,2.81,0,0,0,2.19.77A2.85,2.85,0,0,0,24,18.39Z" transform="translate(-0.94 -1.37)"/><path class="cls-1" d="M30.43,7.2h3v3h-3Zm0,11.48h3v2.95h-3Z" transform="translate(-0.94 -1.37)"/><path class="cls-1" d="M37.79,20.33a5.74,5.74,0,0,1-1.45-4.18V7.05A5.72,5.72,0,0,1,37.8,2.86a5.7,5.7,0,0,1,4.25-1.49,5.7,5.7,0,0,1,4.26,1.48,5.76,5.76,0,0,1,1.45,4.2v9.1a5.74,5.74,0,0,1-1.46,4.19,5.66,5.66,0,0,1-4.25,1.49A5.67,5.67,0,0,1,37.79,20.33Zm6.45-1.94A3.19,3.19,0,0,0,45,16.15V7.05a3.19,3.19,0,0,0-.7-2.23A2.82,2.82,0,0,0,42.05,4a2.81,2.81,0,0,0-2.2.78,3.19,3.19,0,0,0-.71,2.23v9.1a3.24,3.24,0,0,0,.71,2.24,2.85,2.85,0,0,0,2.2.77A2.81,2.81,0,0,0,44.24,18.39Z" transform="translate(-0.94 -1.37)"/><path class="cls-1" d="M52.79,20.33a5.74,5.74,0,0,1-1.45-4.18V7.05A5.76,5.76,0,0,1,52.8,2.86a5.7,5.7,0,0,1,4.25-1.49,5.7,5.7,0,0,1,4.26,1.48,5.76,5.76,0,0,1,1.45,4.2v9.1a5.7,5.7,0,0,1-1.46,4.19,5.64,5.64,0,0,1-4.25,1.49A5.67,5.67,0,0,1,52.79,20.33Zm6.46-1.94A3.24,3.24,0,0,0,60,16.15V7.05a3.19,3.19,0,0,0-.71-2.23,3.49,3.49,0,0,0-4.4,0,3.19,3.19,0,0,0-.7,2.23v9.1a3.19,3.19,0,0,0,.71,2.24,2.81,2.81,0,0,0,2.19.77A2.85,2.85,0,0,0,59.25,18.39Z" transform="translate(-0.94 -1.37)"/><path class="cls-1" d="M62.88,24.26H1.08a.14.14,0,0,0-.14.14V62.67a.14.14,0,0,0,.14.14h61.8a.14.14,0,0,0,.14-.14V24.4A.14.14,0,0,0,62.88,24.26ZM28.5,56.74H7.56V30.34H28.5Zm10,0H32V30.34h6.44Zm18.37,0H42.05V30.34h14.8Z" transform="translate(-0.94 -1.37)"/></svg>';

let svg_hide =
  '<svg class="timeOnOffButton-iconHide" viewBox="0 0 62.08 61.44"><defs><style>.cls-1{fill:#fff;}</style></defs><path class="cls-1" d="M2.5,20.33a5.74,5.74,0,0,1-1.45-4.18V7.05A5.72,5.72,0,0,1,2.51,2.86,5.7,5.7,0,0,1,6.76,1.37,5.7,5.7,0,0,1,11,2.85a5.76,5.76,0,0,1,1.45,4.2v9.1A5.74,5.74,0,0,1,11,20.34a5.66,5.66,0,0,1-4.25,1.49A5.67,5.67,0,0,1,2.5,20.33ZM9,18.39a3.19,3.19,0,0,0,.71-2.24V7.05A3.19,3.19,0,0,0,9,4.82,2.82,2.82,0,0,0,6.76,4a2.81,2.81,0,0,0-2.2.78,3.19,3.19,0,0,0-.71,2.23v9.1a3.24,3.24,0,0,0,.71,2.24,2.85,2.85,0,0,0,2.2.77A2.81,2.81,0,0,0,9,18.39Z" transform="translate(-0.94 -1.37)"/><path class="cls-1" d="M17.5,20.33a5.74,5.74,0,0,1-1.45-4.18V7.05a5.76,5.76,0,0,1,1.46-4.19,5.7,5.7,0,0,1,4.25-1.49A5.7,5.7,0,0,1,26,2.85a5.76,5.76,0,0,1,1.45,4.2v9.1A5.7,5.7,0,0,1,26,20.34a5.66,5.66,0,0,1-4.25,1.49A5.67,5.67,0,0,1,17.5,20.33ZM24,18.39a3.24,3.24,0,0,0,.71-2.24V7.05A3.19,3.19,0,0,0,24,4.82,2.81,2.81,0,0,0,21.76,4a2.82,2.82,0,0,0-2.2.78,3.19,3.19,0,0,0-.7,2.23v9.1a3.19,3.19,0,0,0,.71,2.24,2.81,2.81,0,0,0,2.19.77A2.85,2.85,0,0,0,24,18.39Z" transform="translate(-0.94 -1.37)"/><path class="cls-1" d="M30.43,7.2h3v3h-3Zm0,11.48h3v2.95h-3Z" transform="translate(-0.94 -1.37)"/><path class="cls-1" d="M37.79,20.33a5.74,5.74,0,0,1-1.45-4.18V7.05A5.72,5.72,0,0,1,37.8,2.86a5.7,5.7,0,0,1,4.25-1.49,5.7,5.7,0,0,1,4.26,1.48,5.76,5.76,0,0,1,1.45,4.2v9.1a5.74,5.74,0,0,1-1.46,4.19,5.66,5.66,0,0,1-4.25,1.49A5.67,5.67,0,0,1,37.79,20.33Zm6.45-1.94A3.19,3.19,0,0,0,45,16.15V7.05a3.19,3.19,0,0,0-.7-2.23A2.82,2.82,0,0,0,42.05,4a2.81,2.81,0,0,0-2.2.78,3.19,3.19,0,0,0-.71,2.23v9.1a3.24,3.24,0,0,0,.71,2.24,2.85,2.85,0,0,0,2.2.77A2.81,2.81,0,0,0,44.24,18.39Z" transform="translate(-0.94 -1.37)"/><path class="cls-1" d="M52.79,20.33a5.74,5.74,0,0,1-1.45-4.18V7.05A5.76,5.76,0,0,1,52.8,2.86a5.7,5.7,0,0,1,4.25-1.49,5.7,5.7,0,0,1,4.26,1.48,5.76,5.76,0,0,1,1.45,4.2v9.1a5.7,5.7,0,0,1-1.46,4.19,5.64,5.64,0,0,1-4.25,1.49A5.67,5.67,0,0,1,52.79,20.33Zm6.46-1.94A3.24,3.24,0,0,0,60,16.15V7.05a3.19,3.19,0,0,0-.71-2.23,3.49,3.49,0,0,0-4.4,0,3.19,3.19,0,0,0-.7,2.23v9.1a3.19,3.19,0,0,0,.71,2.24,2.81,2.81,0,0,0,2.19.77A2.85,2.85,0,0,0,59.25,18.39Z" transform="translate(-0.94 -1.37)"/><path class="cls-1" d="M62.88,24.26H1.08a.14.14,0,0,0-.14.14V62.67a.14.14,0,0,0,.14.14h61.8a.14.14,0,0,0,.14-.14V24.4A.14.14,0,0,0,62.88,24.26ZM29.27,52.46a2.54,2.54,0,0,1,0,3.59,2.57,2.57,0,0,1-1.8.74,2.53,2.53,0,0,1-1.79-.74L17,47.38,8.34,56.05a2.56,2.56,0,0,1-3.6,0,2.54,2.54,0,0,1,0-3.59l8.67-8.67L4.74,35.12a2.55,2.55,0,0,1,3.6-3.6L17,40.19l8.67-8.67a2.54,2.54,0,0,1,3.59,3.6L20.6,43.79Zm9.21,4.28H32V30.34h6.44Zm18.37,0H42.05V30.34h14.8Z" transform="translate(-0.94 -1.37)"/><path class="cls-1" d="M2.5,20.33a5.74,5.74,0,0,1-1.45-4.18V7.05A5.72,5.72,0,0,1,2.51,2.86,5.7,5.7,0,0,1,6.76,1.37,5.7,5.7,0,0,1,11,2.85a5.76,5.76,0,0,1,1.45,4.2v9.1A5.74,5.74,0,0,1,11,20.34a5.66,5.66,0,0,1-4.25,1.49A5.67,5.67,0,0,1,2.5,20.33ZM9,18.39a3.19,3.19,0,0,0,.71-2.24V7.05A3.19,3.19,0,0,0,9,4.82,2.82,2.82,0,0,0,6.76,4a2.81,2.81,0,0,0-2.2.78,3.19,3.19,0,0,0-.71,2.23v9.1a3.24,3.24,0,0,0,.71,2.24,2.85,2.85,0,0,0,2.2.77A2.81,2.81,0,0,0,9,18.39Z" transform="translate(-0.94 -1.37)"/><path class="cls-1" d="M17.5,20.33a5.74,5.74,0,0,1-1.45-4.18V7.05a5.76,5.76,0,0,1,1.46-4.19,5.7,5.7,0,0,1,4.25-1.49A5.7,5.7,0,0,1,26,2.85a5.76,5.76,0,0,1,1.45,4.2v9.1A5.7,5.7,0,0,1,26,20.34a5.66,5.66,0,0,1-4.25,1.49A5.67,5.67,0,0,1,17.5,20.33ZM24,18.39a3.24,3.24,0,0,0,.71-2.24V7.05A3.19,3.19,0,0,0,24,4.82,2.81,2.81,0,0,0,21.76,4a2.82,2.82,0,0,0-2.2.78,3.19,3.19,0,0,0-.7,2.23v9.1a3.19,3.19,0,0,0,.71,2.24,2.81,2.81,0,0,0,2.19.77A2.85,2.85,0,0,0,24,18.39Z" transform="translate(-0.94 -1.37)"/><path class="cls-1" d="M30.43,7.2h3v3h-3Zm0,11.48h3v2.95h-3Z" transform="translate(-0.94 -1.37)"/><path class="cls-1" d="M37.79,20.33a5.74,5.74,0,0,1-1.45-4.18V7.05A5.72,5.72,0,0,1,37.8,2.86a5.7,5.7,0,0,1,4.25-1.49,5.7,5.7,0,0,1,4.26,1.48,5.76,5.76,0,0,1,1.45,4.2v9.1a5.74,5.74,0,0,1-1.46,4.19,5.66,5.66,0,0,1-4.25,1.49A5.67,5.67,0,0,1,37.79,20.33Zm6.45-1.94A3.19,3.19,0,0,0,45,16.15V7.05a3.19,3.19,0,0,0-.7-2.23A2.82,2.82,0,0,0,42.05,4a2.81,2.81,0,0,0-2.2.78,3.19,3.19,0,0,0-.71,2.23v9.1a3.24,3.24,0,0,0,.71,2.24,2.85,2.85,0,0,0,2.2.77A2.81,2.81,0,0,0,44.24,18.39Z" transform="translate(-0.94 -1.37)"/><path class="cls-1" d="M52.79,20.33a5.74,5.74,0,0,1-1.45-4.18V7.05A5.76,5.76,0,0,1,52.8,2.86a5.7,5.7,0,0,1,4.25-1.49,5.7,5.7,0,0,1,4.26,1.48,5.76,5.76,0,0,1,1.45,4.2v9.1a5.7,5.7,0,0,1-1.46,4.19,5.64,5.64,0,0,1-4.25,1.49A5.67,5.67,0,0,1,52.79,20.33Zm6.46-1.94A3.24,3.24,0,0,0,60,16.15V7.05a3.19,3.19,0,0,0-.71-2.23,3.49,3.49,0,0,0-4.4,0,3.19,3.19,0,0,0-.7,2.23v9.1a3.19,3.19,0,0,0,.71,2.24,2.81,2.81,0,0,0,2.19.77A2.85,2.85,0,0,0,59.25,18.39Z" transform="translate(-0.94 -1.37)"/></svg>';
let title = "ToggleNicoNicoControllerBox";

let show = "show";
// fetchShowData();

insertButton();

function insertButton() {
  var newElement = document.createElement("button");
  var innerElement = document.createElement("div");
  var svgElement = document.createElement("svg");

  newElement.className = "ActionButton ControllerButton timeOnOffButton";
  innerElement.className = "ControllerButton-inner";
  svgElement.className = "timeOnOffButton-iconHide";

  // innerElement.appendChild(svgElement);
  innerElement.innerHTML = svg;
  newElement.appendChild(innerElement);

  var afterElement = document.createElement("div");
  afterElement.innerHTML = "Toggle SeekBar&Time Show/Hide";
  newElement.after(afterElement);

  ControllerContainer_area[2].appendChild(newElement);
}

function setSvg(flag) {
  var innerElement = document.createElement("div");
  var svgElement = document.createElement("svg");

  innerElement.className = "ControllerButton-inner";
  svgElement.className = "timeOnOffButton-iconHide";

  let button = document.getElementsByClassName("timeOnOffButton")[0];

  if (flag == true) {
    innerElement.innerHTML = svg;
  } else {
    innerElement.innerHTML = svg_hide;
  }

  button.innerHTML = innerElement.innerHTML;
  //   newElement.appendChild(innerElement);

  //   ControllerContainer_area[2].appendChild(newElement);
}

document.getElementsByClassName("timeOnOffButton")[0].onclick = function (
  element
) {
  console.log("show : " + show);
  if (show == "show") {
    console.log("now show");
    setControllerBoxDisplay(false);
    setSvg(false);
    saveShowData("hide");
  } else {
    console.log("now hide");
    setControllerBoxDisplay(true);
    setSvg(true);
    saveShowData("show");
  }
};

function saveShowData(data) {
  /*
  chrome.storage.sync.set(
    { ToggleNicoNicoControllerBox_show: data },
    function () {
      console.log("saved : " + data);
    }
  );
  */
  show = data;
}

function fetchShowData() {
  chrome.storage.sync.get("ToggleNicoNicoControllerBox_show", function (data) {
    let value = data.ToggleNicoNicoControllerBox_show;
    // console.log("geted : " + value);
    if (data !== null) {
      show = value;
    } else {
      show = "show";
    }
  });
}

function setControllerBoxDisplay(style) {
  document.getElementsByClassName("PlayerPlayTime")[0].style.display =
    style == true ? "inline-flex" : "none";
  document.getElementsByClassName("SeekBarContainer")[0].style.display =
    style == true ? "block" : "none";
}
