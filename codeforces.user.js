// ==UserScript==
// @name         Codeforces Nord theme
// @version      1.0.3
// @description  Nord color theme for codeforces
// @author       Thallium54
// @match        https://codeforces.com/*
// @match        http://codeforces.com/*
// @resource     NordCSS  nord.css
// @resource     syntax  syntax.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @run-at       document-start
// ==/UserScript==
(function() {
    'use strict';
    var style = GM_getResourceText("NordCSS");
    var syntax = GM_getResourceText("syntax");
	GM_addStyle(style);
	GM_addStyle(syntax);
})()
