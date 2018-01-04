// ==UserScript==
// @name         CoinMarketCapFix
// @description  Userscript to fix the annoying whitespace to the right of the crypto data graph on CoinMarketCap.com
// @author       Adam Roach - github.com/roachadam
// @version      1.0
// @grant        none
// @match        https://coinmarketcap.com/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @downloadURL  https://raw.githubusercontent.com/roachadam/coinmarketcapfix/master/coinmarketcapfix.js
// @updateURL    https://raw.githubusercontent.com/roachadam/coinmarketcapfix/master/coinmarketcapfix.js
// ==/UserScript==

(function() {
    'use strict';

    // Grabs the table using jQuery and sets the table to the larger style class.
    $(".col-lg-10").removeClass("col-lg-10").addClass("col-lg-12");
})();
