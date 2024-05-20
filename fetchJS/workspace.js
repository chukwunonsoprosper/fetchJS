//do not edit
import { fetchJS } from "./fetch.js";
import { fetchJsProxy } from "./proxy/fetchjsproxy.js";

//development environment

let url = 'https://api.api-ninjas.com/v1/facts?X-Api-Key=XFyJSx4tBYXJ0Pmvahr98A==DHpgfdRNRxLJQP9v';

let method = 'GET';

let content_type = 'text/html'

let response_type = 'text'

fetchJS(url, method, content_type, response_type).then(result => {
    //json.stringify result or parse to get the full api response
    //code here
});


let fetchJsproxyserver = fetchJsProxy()

async function fetchData() {
    let url = fetchJsproxyserver // + API_URL
    //write your fetch api request here
}
//call the function
//use can use any function name
fetchData()
