console.log("empty");

function display_h1 (results){
  h1=results;
  document.querySelector("#id1").innerHTML = "<p>tab title: " + tab_title + "</p><p>dom h1: " + h1 + "</p>";
}

chrome.tabs.query({active: true}, function(tabs) {
  console.log(tabs, "tabs");
  var tab = tabs[0];
  tab_title = tab.title;
  chrome.tabs.executeScript(tab.id, {
    code: 'document.querySelector("h1").textContent'
  }, display_h1);
  // chrome.tabs.update(tabs[0].id, {url: 'http://ya.ru'});
});