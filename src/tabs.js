browser.runtime.onMessage.addListener((message) => {
  if (message.url) {
    browser.tabs.create({ url: message.url });
  }
});
