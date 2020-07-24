const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=be9d1663e74491dce562e0215f168cd4&units=metric`);

    return resp.data.main.temp; //voy a la temperatura que está en el objeto JSON
    //que se llama main y su propiedad temp
}

module.exports = {
    getClima
}