/* 
Request an: https: //zs.nrw.de/authenticationservice/rest/authentication
    mit username und password als options:
    json: {
        username: XXX,
        password: XXX,
    }
schicken und prüfen, ob der Response ein valides JSON Web Token ist.

POST - Request*/


const zsp_url = 'https://zs.nrw.de/authenticationservice/rest/authentication'
const login = {
    username: '',
    password: '87F§dhaY'
}

const url_zsp = new URL('https://zs.nrw.de/authenticationservice/rest/authentication/login.json')



const request = new XMLHttpRequest();
request.open("POST", zsp_url);
request.setRequestHeader("Content-type", "applichation/json; charset=utf-8");
request.setRequestHeader("mode", "no-cors");
request.send(login);
request.addEventListener("load", function() {
    let data = JSON.parse(request.response);
    console.log(data);

});