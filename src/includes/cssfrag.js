/**
 * Authors: David Håsäther, <dhasather@gmail.com>
 * Version: 0.1
 *
 * Supports a subset of http://simonstl.com/articles/cssFragID.html
 */
function goToCssFrag(frag) {
    try {
      var ele = document.querySelector(frag);
      if (ele) {
          ele.scrollIntoView(true);
      }
    }
    catch (syntaxErrorException) {
        console.error("CSSFrag extension: Wrong CSS fragment syntax.");
    }
}

function getCssFrag() {
    var frags = window.location.hash.match(/^#css\((.+)\)/);
    var frag = frags && frags[1];
    if (frag) {
        try {
            return decodeURIComponent(frag);
        }
        catch (uriError) {
            console.error("CSSFrag extension: Wrong CSS fragment syntax.");
        }
    }
}

function onHash() {
    var frag = getCssFrag();
    if (frag) {
        goToCssFrag(frag);
    }
}

window.addEventListener("hashchange", onHash, false);
window.addEventListener("load", onHash, false);
window.addEventListener("DOMContentLoaded", onHash, false);

