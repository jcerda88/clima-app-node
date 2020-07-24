const axios = require("axios");

axios({
        "method": "GET",
        "url": "https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php",
        "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "x-rapidapi-key": "d39af79f76msh51f2f579b1dc2dep17de57jsn9729d85c89fa",
            "useQueryString": true
        },
        "params": {
            "location": "New York"
        }
    })
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })