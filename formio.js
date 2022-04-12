const formioURL = 'https://test-d.detozgnrw.mms-at-work.de/formio/form'

function req() {
    const request = new XMLHttpRequest()
    request.open("GET", formioURL)
    request.setRequestHeader("Content-type", "applichation/json; charset=utf-8")
    request.send()
    request.addEventListener("load", function () {
        let data = JSON.parse(request.response)
        console.log(data)
        if (request.status >= 200 && request.status <= 399) {
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
req()