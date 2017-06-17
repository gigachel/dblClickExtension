console.log("xyuuuuu");
document.ondblclick = function() {
  //console.log(window.getSelection().toString().trim())
  document.execCommand('copy');
  setTimeout(function() { document.execCommand('paste'); console.log(document.execCommand('paste')); }, 3000);
};
