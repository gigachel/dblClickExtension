console.log("1");
// document.ondblclick = function() {
//   //console.log(window.getSelection().toString().trim())
//   document.execCommand('copy');
//   // setTimeout(function() { document.execCommand('paste'); }, 3000);
// };

// document.addEventListener("selectstart", function() {
//   console.log('Selection started');
// }, false);

document.addEventListener("dblclick", function(e) {
  var sel = window.getSelection();

  if (sel.toString()[sel.toString().length - 1] === " ") {
    var rng = document.createRange();
    var start = sel.anchorOffset ;
    var startNode = sel.anchorNode;
    var end = sel.focusOffset;
    var endNode = sel.focusNode;

    rng.setStart(startNode, start);
    rng.setEnd(endNode, end - 1);

    sel.removeAllRanges();
    sel.addRange(rng);
  }
  document.execCommand('copy');
});



// document.addEventListener("selectionchange", function(e) {
//   console.log(e, "e");
//   console.log(e.clientX, "x");
//   console.log(e.clientY, "y");
//   var sel = window.getSelection();
//   var rng = document.createRange();
//   var start = sel.anchorOffset ;
//   var startNode = sel.anchorNode;
//   var end = sel.focusOffset;
//   var endNode = sel.focusNode;
//
//   // if (start > end) {
//   //   start = sel.focusOffset;
//   //   startNode = sel.focusNode;
//   //   end = sel.anchorOffset ;
//   //   endNode = sel.anchorNode;
//   // }
//
//   // if (sel.toString()[0] === " " || sel.toString()[sel.toString().length - 1] === " ") {
//   //   if (sel.toString()[0] === " ") {
//   //     rng.setStart(startNode, start + 1);
//   //     rng.setEnd(endNode, end);
//   //   }
//   //   if (sel.toString()[sel.toString().length - 1] === " ") {
//   //     rng.setStart(startNode, start);
//   //     rng.setEnd(endNode, end - 1);
//   //   }
//   //   sel.removeAllRanges();
//   //   sel.addRange(rng);
//   // }
//
//
//   // console.log(window.Selection.rangeCount, "Selection.rangeCount");
//   console.log(window.getSelection(), "getSelection");
//   document.execCommand('copy');
// });

var inputs = document.querySelectorAll("input");
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("click", function() {
    document.execCommand('paste');

    // var sel = window.getSelection();
    // sel.removeAllRanges();
    // document.execCommand('delete');
  });
}
