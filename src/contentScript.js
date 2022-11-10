(async () => {
  let settings = (await import("./settings.js")).default;
  // let {objectEquals} = await import("./utils.js");

  const sleep = async (ms)=>{ return new Promise(resolve => setTimeout(resolve, ms));};

  const getShowHomePage = async () => {
    let tintim_auth_data = await new Promise(function(resolve, reject){
      chrome.storage.sync.get('show_home_page', function(data){resolve(data['show_home_page'])})
    });
    if (tintim_auth_data == undefined){
      tintim_auth_data = false
    }
    console.log(">>>>>>> tintim_auth_data", tintim_auth_data);
    return tintim_auth_data
  }

  const removeHomePage = () => {
    let element = document.getElementById("contents")
    if (element && element.style){element.style.display = 'none'}
  }

  const removeHomeAdPlayer = () => {
    let element = document.getElementsByClassName("ytd-banner-promo-renderer-background")
    let el = element[0]
    if (el && el.style){el.style.display = 'none'}
  }

  const removeChips = () => {
    let element = document.getElementById("chips")
    if (element && element.style){element.style.display = 'none'}
  }

  const initialScript = async () => {
    settings.DEBUG ? console.log(">>>>>>> inside initialScript") : 'Do nothing'
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            if(request.message === "removeHomePage") {
              chrome.storage.sync.set({'show_home_page': false});
              sendResponse('ok')
            }
            if(request.message === "showHomePage") {
              chrome.storage.sync.set({'show_home_page': true});
              sendResponse('ok')
            }
        }
    );
    let showHomePage = await getShowHomePage();
    if (!showHomePage) {
      removeHomePage()
    }
    removeHomeAdPlayer()
    removeChips()
    await sleep(1400)
    initialScript()
  }
  initialScript();
})();
