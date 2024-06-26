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
 * 
 * Method should either be text/html or rest depending on your API docs
 * 
 * Response type text or json without parenthesis
 * 
 */

let url = "https://api.api-ninjas.com/v1/facts?X-Api-Key=[YOUR_API_KEY]";
let method = "GET";
let content_type = "text/html";
let response_type = "text";

/**
 * Initialize the fetchJS module
 *
 * Pass the variables you created into the fetchJS function parameters (4).
 */

fetchJS(url, method, content_type, response_type).then((result) => {
  console.log(result);

  /**
   *  If the result does not meet your expectations, consider using JSON.stringify() and JSON.parse().
   */

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
   * Use the custom fetch method for the post request
   */
}

fetchData();
