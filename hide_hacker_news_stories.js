// ==UserScript==
// @name        Hide links on Hacker News homepage
// @namespace   hide_hacker_news_stories
// @author      ludios
// @license     AGPL-3.0; https://www.gnu.org/licenses/agpl-3.0.en.html
// @grant       none
// @version     1.0.0
// @match       https://news.ycombinator.com/*
// @grant       GM_addStyle
// @run-at      document-start
// ==/UserScript==

const loc = window.location.href;

const HOMEPAGE_RE = /^https:\/\/news\.ycombinator\.com\/(news)?($|[?&])/;

if (HOMEPAGE_RE.test(loc)) {
  GM_addStyle(`
    body > center > table#hnmain > tbody > tr > td > table[border="0"][cellpadding="0"][cellspacing="0"]:has(tbody > tr.athing) {
      display: none;
    }
  `);
}
