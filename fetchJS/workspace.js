//Making a get request

//update the variable listed below
// replace with your desire url

import { fetchJS } from "./fetch.js";


let url = 'https://api.api-ninjas.com/v1/facts?X-Api-Key=XFyJSx4tBYXJ0Pmvahr98A==DHpgfdRNRxLJQP9v';

let method = 'GET';

let content_type = 'text/html'

let response_type = 'text'

fetchJS(url, method, content_type, response_type).then(result => {
    //configure your api result here
    result = JSON.parse(result);
    console.log(result[0]['fact'])
});

//Makind a post request  

import { fetchJsProxy } from "./proxy/fetchjsproxy.js";

let fetchJsproxyserver = fetchJsProxy()



async function fetchData() {
    let url = fetchJsproxyserver // + //{API_URL};

    //write your fetch, ajax post request code here
    //endeavor to configure the url

}

fetchData()
