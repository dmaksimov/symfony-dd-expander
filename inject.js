// this is the code which will be injected into a given page...

(function() {

  var compacted = document.querySelectorAll('.sf-dump-compact');

  var allExpanded = compacted.length === 0;

  if (! allExpanded) {
    for (var i = 0; i < compacted.length; i++) {
      compacted[i].className = 'sf-dump-expanded';
      compacted[i].previousSibling.lastChild.innerHTML = '&#9660;';
    }
  } else {
    var expanded = document.querySelectorAll('.sf-dump-expanded');
    for (var i = 0; i < expanded.length; i++) {
      // Leave first one expanded
      if (i === 0) {
        continue;
      }

      expanded[i].className = 'sf-dump-compact';
      expanded[i].previousSibling.lastChild.innerHTML = '&#9654;';
    }
  }

})();
