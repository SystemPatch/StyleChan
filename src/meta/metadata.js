// ==UserScript==
// @name         <%= meta.name %>
// @version      <%= version %>
// @namespace    <%= name %>
// @description  <%= description %>
// @minGMVer     <%= meta.min.greasemonkey %>
// @minFFVer     <%= meta.min.firefox %>
// @license      <%= license %>; <%= meta.repo %>blob/<%= meta.mainBranch %>/LICENSE 
<%=
  (function() {
    function expand(items, regex, substitutions) {
      var results = [];
      items.forEach(function(item) {
        if (regex.test(item)) {
          substitutions.forEach(function(s) {
            results.push(item.replace(regex, s));
          });
        } else {
          results.push(item);
        }
      });
      return results;
    }
    function expandMatches(matches) {
      return expand(matches, /^\*/, ['http', 'https']);
    }
    return [].concat(
      expandMatches(meta.matches).map(function(match) {
        return '// @match        ' + match;
      }),
      expandMatches(meta.exclude_matches).map(function(match) {
        return '// @exclude      ' + match;
      })
    ).join('\n');
  })()
%>
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_openInTab
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.deleteValue
// @grant        GM.listValues
// @grant        GM.openInTab
// @run-at       document-start
// @updateURL    <%= meta.downloads %><%= meta.files.metajs %>
// @downloadURL  <%= meta.downloads %><%= meta.files.userjs %>
// @icon         data:image/png;base64,<%= grunt.file.read('src/img/icon48.png', {encoding: 'base64'}) %>
// ==/UserScript==