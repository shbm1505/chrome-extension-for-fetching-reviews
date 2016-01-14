chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    var x = request.source;
    message.innerText = $(x).find('div[id^="revData"] .a-section').text();
    // message.innerText = $(x).find('#revData-dpReviewsMostHelpfulAUI-R1F1WSKARN2FIY .a-section').text();
  }
});

function onWindowLoad() {

  var message = document.querySelector('#message');

  chrome.tabs.executeScript(null, {
    file: "getPagesSource.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      message.innerText = 'There was an error : \n' + chrome.runtime.lastError.message;
    }
  });

}

window.onload = onWindowLoad;