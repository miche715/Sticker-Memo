const fetchUtility = (url, method, header, body) => {
    fetch(url, {
        method: method, 
        headers: header, 
        body: JSON.stringify(body)
    })
    .then((response) => {
        return response.json();
    })
    .then((responseBody) => {
        console.log(responseBody.isSuccess)
        console.log(responseBody.message)
        console.log(responseBody.data)
        return [responseBody.isSuccess, responseBody.message, responseBody.data];
    });
};

export default fetchUtility;