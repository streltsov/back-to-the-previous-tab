window.addEventListener("keydown", notifyExtension);

function notifyExtension(e) {
  if (e.keyCode === 54 && e.ctrlKey) {
    browser.runtime.sendMessage({});
  }
}
