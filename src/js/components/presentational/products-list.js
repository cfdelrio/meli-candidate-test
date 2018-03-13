import React from 'react';
import qs from "query-string";

const urlEndPoint = 'http://localhost:8081';

const httpRequest = () => {
    let response;
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        
            response = xhttp.responseText;
        }
    };
    xhttp.open("GET", urlEndPoint, true);
    xhttp.send();

    return response;
}
export default class ProductsList extends React.Component {
    componentWillMount() {
       /* fetch(urlEndPoint, {
            mode: "no-cors",
            method: "GET",
            headers: {
              "Accept": "application/json"
            }
          }).then(response => {
            console.log(response.json()); // null
          })
          .catch(error => { console.log('request failed', error); });
          */
          console.log(httpRequest());
    }

    render() {
        const searchTerm = qs.parse(this.props.location.search);
        return (
            <div>
                <h3>product list search:{searchTerm.search}</h3>
            </div>
        );
    }
}
