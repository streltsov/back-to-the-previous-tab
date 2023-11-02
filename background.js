browser.runtime.onMessage.addListener(async () => {
  const prevTab = await browser.tabs
    .query({ currentWindow: true })
    .then((tabs) => tabs.sort((a, b) => a.lastAccessed - b.lastAccessed))
    .then((tabs) => tabs[tabs.length - 2]);

  browser.tabs.update(prevTab.id, { active: true });
});
