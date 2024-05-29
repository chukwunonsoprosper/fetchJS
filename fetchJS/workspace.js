/**
 * Welcome to FetchJS 🚀
 *
 * FetchJS is a versatile HTTP client library designed to simplify data retrieval from servers.
 *
 * To get started, import the required modules from the following paths:
 *
 * Import the main fetch module from: PATH_TO_FETCH/fetch.js
 * Import the fetchJS proxy module from: PATH_TO_FETCH/fetchjsproxy.js
 *
 * Let's get started with fetchJS 
 * 
 * Doc: https://fetchjsdoc.vercel.app/
 */

import { fetchJS } from "./fetch.js";
import { fetchJsProxy } from "./proxy/fetchjsproxy.js";

/**
 * Fetch Request Method: GET
 *
 * Define your variables and update their values according to your requirements.
 *
 * Start by updating the 'url' variable with your desired endpoint URL.
 */

let url = "https://api.api-ninjas.com/v1/facts?X-Api-Key=XFyJSx4tBYXJ0Pmvahr98A==DHpgfdRNRxLJQP9v";
let method = "GET";
let content_type = "text/html";
let response_type = "text";

/**
 * Initialize the fetchJS module
 *
 * Pass the variables you created into the fetchJS function parameters (4).
 * If the result does not meet your expectations, consider using JSON.stringify() and JSON.parse().
 */

fetchJS(url, method, content_type, response_type).then((result) => {
  console.log(result);
});

/**
 * For the POST fetch method, a proxy server has been integrated.
 *
 * Add the proxy server before the API URL.
 * Example: url = fetchJsproxyserver + 'https://api.example.com'
 */

let fetchJsproxyserver = fetchJsProxy();

async function fetchData() {
  let url = fetchJsproxyserver; // + API_URL

  /**
   * All code to initialize the fetch API POST request goes here.
   */
}

fetchData();
