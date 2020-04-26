const weatherproto = require('./js-gen/weather_pb.js');
const {WeatherClient} = require('./js-gen/weather_grpc_web_pb.js');
const async = require('async');
global.XMLHttpRequest = require('xhr2');

// console.log(weatherproto);

let client = new WeatherClient('http://localhost:8080');

function subscribeWeather(){
        let request = new weatherproto.City();

        request.setName('Cracow');

        let stream = client.subscribe(request);
        console.log(stream);
        stream.on('data', resp => {
                console.log(resp);
        });
}

subscribeWeather();





