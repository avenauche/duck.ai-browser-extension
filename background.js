chrome.action.onClicked.addListener((tab) => { 

    chrome.tabs.query({ url:  "chrome://newtab/*" }, function(tabs) {
        const url = "https://duck.ai/";

        if (tabs.length > 0) {
          // If an existing new tab is found, update its URL
          chrome.tabs.update(tabs[0].id, { url: url });
        } else {
          // If no existing new tab is found, create a new one
          chrome.tabs.create({ url: url });
        }
      });

});
