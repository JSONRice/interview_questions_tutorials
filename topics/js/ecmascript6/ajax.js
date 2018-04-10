/************************************************
 * Asynchronous functions with async and await.
 ***********************************************/
"use strict";
const fetch = require('node-fetch')
let copyOfUrl = "https://raw.githubusercontent.com/zemirco/sf-city-lots-json/master/citylots.json";

class AjaxService {
    constructor() {
        this.url = copyOfUrl;
        this._timeout = {active: false, seconds: 0};
    }

    // TODO: combine a setTimeout with fetch
    fetchTimeout(url, options) {
        if (this._timeout.active && this._timeout.seconds > 0) {
            let timeoutError = {
                ok: false,
                status: 408
            };
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    // implement...
                }, this._timeout.seconds * 1000);
            })
        }
    }

    resetUrl() {
        this.url = copyOfUrl;
    }

    set timeout(timeout) {
	    this._timeout = JSON.parse(JSON.stringify(timeout)); // deep copy
    }

    async asyncFetchImpl() {
        let response = await fetch(this.url);
        let data = null;
        if (response.ok) {
    	    return await response.json();
        } else {
    	    throw new Error(response.status);
        }	
    };

    asyncFetchData() {
        if (this._timeout.active && this._timeout.seconds > 0) {
            setTimeout(() => {
                return this.asyncFetchImpl();
            }, this._timeout.seconds * 1000);
        } else {
            return this.asyncFetchImpl();
        }
    };


    // Run the data fetch function.
    run() {
        this.asyncFetchData()
   	        .then(data => console.log("Data type: ", data.type))
		    .catch(reason => console.error("Caught error: ", reason.message));
    };
}

 let ajaxService = new AjaxService();

// Demo the service:
ajaxService.run();

// Now test with an invalid url to see what happens:
ajaxService.url = "bogus";

// This should run first since it's a bogus url:
ajaxService.run();

ajaxService.resetUrl();

// ajaxService.timeout = {active: true, seconds: 1};
//
// ajaxService.run();
