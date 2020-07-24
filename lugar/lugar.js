const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    const encodedUrl = encodeURI(argv.direccion);

    console.log(encodedUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl }`,
        // timeout: 1000,
        headers: { 'X-RapidAPI-Key': 'd39af79f76msh51f2f579b1dc2dep17de57jsn9729d85c89fa' }
    });

    // instance.get() // hacemos la petición
    //     .then(resp => {
    //         console.log(resp.data.Results[0]);
    //         // console.log(resp);
    //     }) // Si esto se resuelve correctamente
    //     .catch(err => {
    //         console.log('ERROR!!!!', err);
    //     });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultado para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const location = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        location,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatLng
}