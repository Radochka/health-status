/* Ein Request an https: //epay-test.nrw.de/konnektor/epayment/fachverfahren/v1_0/mandanten/B000004/bewirtschafter/BW100001/zahlverfahren 

    mit zwei Zertifikaten:
    epaybl.pem
    epaybl.key

    https: //confluence.t-systems-mms.eu/display/detozgnrw/DG+-+Integration 

    als Reponse wird ein Array mit möglichen Zahlungsmethoden geliefert. */

const epayUrl = 'https://epay-test.nrw.de/konnektor/epayment/fachverfahren/v1_0/mandanten/B000004/bewirtschafter/BW100001/zahlverfahren'

const options = {

    cert: '../cert/epaybl.pem',
    key: '../cert/epaybl.key',
    /* passphrase: '<your-passphrase>',
    rejectUnauthorized: false,
    keepAlive: false, // switch to true if you're making a lot of calls from this client */
};

let xhr = new XMLHttpRequest();

xhr.open("GET", epayUrl);

xhr.setRequestHeader("Content-Type", "application/json");


const certifikate = {
    cert: '../cert/epaybl.pem',
    key: '../cert/epaybl.key',
    passphrase: '<your-passphrase>',
    rejectUnauthorized: false,
    keepAlive: false, // switch to true if you're making a lot of calls from this client
};
xhr.onload = () => console.log(xhr.responseText);
xhr.send();
xhr.addEventListener("load", function() {
    let data = JSON.parse(request.response);
    console.log(data);
})




/* function makeRequest(url) {
    fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
            options

        })
        .then(response => {
            if (response.ok) {
                //response.status >= 400
                return response.json();
            }
            return response.json().then(error => {
                const e = new Error("Etwas läuft schief");
                e.data = error;
                throw e;
            });
        });
}

 */



/* const myPromise = new Promise((resolve, reject) => {
    //resolve((Promise wurde erledigt) und reject(Promise wurde abgelehnt)= funktionen, einer davon muss aufgeruft werden 
    //hier wird die Logik beschrieben, wie und was ich zurück erhalte und mögliche Errors
})

myPromise
    .then(value => {})
    .catch(error => {}) 
    
function reqPayBL() {
    const request = new XMLHttpRequest();
    request.open("GET", zdiURL1, [false, (user = ""), (password = "")]);
    request.setRequestHeader("Content-type", "applichation/json; charset=utf-8");
    request.send();
    request.addEventListener("load", function() {
        let data = JSON.parse(request.response);
        console.log(data);
        if (request) {
            const icon = `<span class="material-icons-sharp">check</span>`;
            data.forEach((element) => {
                const tr = document.createElement("tr");
                const trContent = `
                    <td>${element.title}</td>
                    <td>${element.type}</td>
                    <td>${icon}</td>`;
                tr.innerHTML = trContent;
                document.querySelector("table tbody").appendChild(tr);
            });
        }
    });
}*/