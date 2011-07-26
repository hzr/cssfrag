/**
 * Authors: David Håsäther, <dhasather@gmail.com>
 * Version: 0.2
 *
 * Supports a subset of http://simonstl.com/articles/cssFragID.html
 */
function goToCssFrag(selector) {
    try {
      var ele = document.querySelector(selector);
      if (ele) {
          ele.scrollIntoView();
          ele.focus();
      }
    }
    catch (syntaxErrorException) {
        console.error("CSSFrag extension: Wrong CSS fragment syntax.");
    }
}

function getSelector() {
    var selectors = window.location.hash.match(/^#css\((.+)\)/);
    if (selectors) {
        try {
            return decodeURIComponent(selectors[1]);
        }
        catch (uriError) {
            console.error("CSSFrag extension: Wrong CSS fragment syntax.");
        }
    }
}

function onHash() {
    var selector = getSelector();
    if (selector) {
        goToCssFrag(selector);
    }
}

window.addEventListener("hashchange", onHash, false);
window.addEventListener("load", onHash, false);
window.addEventListener("DOMContentLoaded", onHash, false);

