import fetch from 'cross-fetch';

const httpRequest = ( url, success, error ) => {
    fetch(url , {
        mode: "no-cors",
        method: "GET"
      })
    .then(response => response.json())
    .then(data => {
        success(data);
    })
    .catch(message => error( message ));
};

export default httpRequest;