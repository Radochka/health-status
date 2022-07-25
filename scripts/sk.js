/* ServiceKonto: Servicekonto.NRW - nrwGOV - Sozialplattform(NEU) - MMS - Confluence(t - systems - mms.eu)
Aufruf: GET https: //sknrwq.krzn.de/AutentIDConnect/sk/.well-known/openid-configuration
Zurückgegebenes JSON auf Properties testen(scopes_supported) */

const sk_url1 = 'https://sknrwq.krzn.de/AutentIDConnect/sk/.well-known/openid-configuration'

fetch(sk_url1, {
        mode: 'no-cors',

        method: 'GET',
        /*         headers: {
                    "Accept": "text/html",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Cache Control": "no-cache",
                    "Connection": "keep-alive",
                    "Host": "sknrwq.krzn.de",
                    "Pragma": "no-cache",
                    "ec-ch-ua-mobile": "? 0",
                    "sec-ch-ua-platform": "Windows",
                    "Sec-Fetch-Dest": "empty",
                    "Sec-Fetch-Mode": "no-cors",
                    "Sec-Fetch-Site": "cross-site",
                }, */
    })
    .then(response => {
        console.log(response)
        return response.url
    })
    .catch((err) => console.log(err));

/* function reqZDI() {
    const request = new XMLHttpRequest();
    request.open("GET", zdiURL1, [false, user = "", password = ""]);
    request.setRequestHeader("Content-type", "applichation/json; charset=utf-8");
    request.setRequestHeader("cert", "zdi.pem");
    request.setRequestHeader("key", "zdi.key");

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
}

 */