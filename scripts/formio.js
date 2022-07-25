const formioURL = 'https://test-d.detozgnrw.mms-at-work.de/formio/form'
const sk_url =
    "https://sknrwq.krzn.de/AutentIDConnect/sk/.well-known/openid-configuration";


function req(url) {
    const request = new XMLHttpRequest()
    request.open("GET", url)
    request.setRequestHeader("Content-type", "applichation/json; charset=utf-8")
    request.send();
    request.addEventListener("load", function() {
        let data = JSON.parse(request.response)
        console.log('Formio.js', data)
        if (request) {
            const icon = `<span class="material-icons-sharp">check</span>`
            data.forEach(element => {
                const tr = document.createElement('tr')
                const trContent = `
                    <td>${element.title}</td>
                    <td>${element.type}</td>
                    <td>${icon}</td>`;
                tr.innerHTML = trContent;
                document.querySelector('table tbody').appendChild(tr)

            });

        }
    })
}
req(formioURL)