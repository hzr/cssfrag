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
          ele.scrollIntoView(true);
          ele.focus();
      }
    }
    catch (syntaxErrorException) {
        console.error("CSSFrag extension: Wrong CSS fragment syntax.");
    }
}

function getSelector() {
    var selectors = window.location.hash.match(/^#css\((.+)\)/);
    var selector = selectors && selectors[1];
    if (selector) {
        try {
            return decodeURIComponent(selector);
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

