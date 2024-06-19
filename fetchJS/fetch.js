export function fetchJS(url, method, content_type, response_type) {
    let data = {
        resourceUrl: url,
        resourceMethod: method,
        resourceContent_type: content_type,
        resourceResponse_type: response_type
    }



    let fetchingResource = data;
    let fetchJsUrl = fetchingResource.resourceUrl = url;
    let fetchJsMethod = fetchingResource.resourceMethod = method;
    let fetchJsContent = fetchingResource.resourceContent_type = content_type;
    let fetchJsResponse = fetchingResource.resourceResponse_type = response_type;
    let responseArray = ['json', 'text'];
    let contentArray = ['application/json', 'application/xml', 'application/javascript', 'text/html'];
    let newModifiedUrl = `https://corsproxy.io/?${fetchJsUrl}`;
    let option = {
        'method': fetchJsMethod,
        'Content-Type': fetchJsContent

    }

    async function fetchDataUsingFetchJS() {
        let newModifiedUrl = `https://corsproxy.io/?${fetchJsUrl}`;
        let option = {
            'method': fetchJsMethod,
            'Content-Type': fetchJsContent

        }
        try {
            let response = await fetch(newModifiedUrl, option);
            let result = await response.text();
            if (response.status == 200) {
                return result
            } else {
                let error = {
                    message: 'An error has occur'
                };
                return JSON.stringify(error)
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function fetchDataUsingFetchJS2() {
        let newModifiedUrl = `https://corsproxy.io/?${fetchJsUrl}`;
        let option = {
            'method': fetchJsMethod,
            'Content-Type': fetchJsContent

        }
        try {
            let response = await fetch(newModifiedUrl, option);
            let result = await response.json();
            if (response.status == 200) {
                return result
            } else {
                let error = {
                    message: 'An error has occur'
                };
                return JSON.stringify(error)
            }
        } catch (error) {
            console.log(error);
        }
    }



    if (fetchJsUrl == '' || fetchJsMethod == '' || fetchJsContent == '' || fetchJsResponse == '') {
        let errorMessage = {
            message: 'data cannot be blank'
        };
        return JSON.stringify(errorMessage);
    } else if (fetchJsMethod != 'GET') {
        let errorMessage2 = {
            message: 'method must be get'
        };
        return JSON.stringify(errorMessage2)
    } else if (!responseArray.includes(fetchJsResponse)) {
        let errorMessage3 = {
            message: 'response type is not define'
        }
        return JSON.stringify(errorMessage3)
    } else if (!contentArray.includes(fetchJsContent)) {
        let errorMessage4 = {
            message: 'content type is not supported'
        }
        return JSON.stringify(errorMessage4)
    } else {
        if (fetchJsResponse == 'text') {
            return fetchDataUsingFetchJS()

        } else if (fetchJsResponse == 'json') {
            return fetchDataUsingFetchJS2()
        }


    }
}

export function proxyS() {
    return 'https://corsproxy.io/?'
}
