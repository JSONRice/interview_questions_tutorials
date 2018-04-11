/************************************************
 * Asynchronous functions with async and await.
 ***********************************************/
"use strict";
const fetch = require('node-fetch');
// Lots of data (130Mb):
let TARGET_URL = "https://raw.githubusercontent.com/zemirco/sf-city-lots-json/master/citylots.json";

class AjaxService {
    constructor() {
        this._timeout = {active: false, ms: 0};
    }

    set timeout(timeout) {
	    this._timeout = JSON.parse(JSON.stringify(timeout)); // deep copy
    }

    resetTimeout() {
        this.timeout = {active: false, ms: 0};
    }

    /***
     * Asynchronous fetch decorator.
     *
     * @param url to target
     * @param options should
     * @returns {Promise.<*>}
     */
    async asyncFetch(url, options = {
        cache: 'default',
        credentials: 'omit',
        headers: {
            'content-type': 'application/json'
        },
        method: 'GET',
        mode: 'same-origin',
        redirect: 'manual',
        referrer: 'client',
        timeout: 0
    }) {
        if (this._timeout.active && this._timeout.ms > 0) {
            options.timeout = this._timeout.ms;
            let msg = (options.timeout >= 1000) ? `${options.timeout/1000} second(s)` : `${options.timeout} millisecond(s)`
            console.log(`timeout set to ${msg}`);
        }

        let response = await fetch(url, options);

        if (response.ok) {
    	    return await response.json();
        } else {
            throw new Error(response.status);
        }
    };

    // Run the data fetch function.
    fetch(url, options) {
        this.asyncFetch(url, options)
   	        .then(data => console.log("Acquired fetched data: ", data.type))
		    .catch(reason => console.error("Caught error: ", reason.message));
    };
}

let ajaxService = new AjaxService();

// Demo the service:
ajaxService.fetch(TARGET_URL);

// This should run first since it's a bogus url and the response is faster:
ajaxService.fetch(TARGET_URL + "bogus");

// Test the timeout of the initiating request by making a very fast request that should timeout:
ajaxService.timeout = {active: true, ms: 1000};
ajaxService.fetch(TARGET_URL);

ajaxService.resetTimeout();