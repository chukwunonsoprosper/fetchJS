# fetchJS

**_fetchJS_** is a lightweight JavaScript library designed to simplify the process of making HTTP requests in client-side applications. By leveraging the Fetch API, fetchJS provides developers with a clean and intuitive interface for fetching resources from the internet without the complexity of dealing with XMLHttpRequest or fetch API configurations.

## Features:

- **Easy-to-Use Interface:** With fetchJS, developers can make HTTP requests effortlessly using a simple and intuitive API. The library handles common tasks such as constructing fetch URLs, specifying HTTP methods, setting content types, and parsing response data, allowing developers to focus on building their applications.

- **Cross-Origin Resource Sharing (CORS) Support:** fetchJS seamlessly handles Cross-Origin Resource Sharing (CORS) issues, enabling developers to fetch resources from external domains without encountering CORS restrictions.

- **Flexible Configuration:** Developers have the flexibility to customize various aspects of their HTTP requests, including the URL, method, content type, and response type, to suit their specific requirements.

- **Error Handling:** fetchJS includes robust error handling mechanisms to gracefully handle errors and provide informative error messages, ensuring smooth error recovery and debugging.

## Usage:

To use fetchJS, simply install the library via npm:

```bash
npm i gofetchjs
```

Or clone the repo

```bash
git clone https://github.com/chukwunonsoprosper/fetchJS.git
```

Then import the fetchJS function into your JavaScript file and invoke it with the desired parameters:

```javascript
import { fetchJS } from "./fetch.js";

//sample api request

let url = 'https://api.api-ninjas.com/v1/facts?X-Api-Key=XFyJSx4tBYXJ0Pmvahr98A==DHpgfdRNRxLJQP9v';
let method = 'GET';
let content_type = 'text/html';
let response_type = 'text';

fetchJS(url, method, content_type, response_type).then(result => {
    // Configure your API result here
    result = JSON.parse(result);
    console.log(result[0]['fact']);
});
```

## Why fetchJS?
- **Saves Time and Effort:** fetchJS simplifies the process of making HTTP requests, saving developers time and effort when implementing client-server communication in their applications.

- **Enhances Code Readability:** With its clean and concise API, fetchJS improves code readability and maintainability, making it easier for developers to understand and collaborate on codebases.

- **Cross-Browser Compatibility:** fetchJS is compatible with modern web browsers and provides consistent behavior across different browser environments, ensuring a smooth user experience for all users.

Whether you're building a simple web application or a complex single-page application (SPA), fetchJS is the perfect tool for handling HTTP requests with ease and efficiency.

## Documentation coming soon
