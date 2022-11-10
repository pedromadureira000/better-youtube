document.addEventListener("DOMContentLoaded", () => {console.log('inside popup.js, after DOMContentLoaded event')});

const removeHomePage = () => {
  chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"message": "removeHomePage"}, (response)=>{
        if (response == 'ok'){
          // ....
        }
      });
  });
}

const showHomePage = () => {
  chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"message": "showHomePage"}, (response)=>{
        if (response == 'ok'){
          // ....
        }
      });
  });
}
