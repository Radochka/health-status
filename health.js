const formioURL = 'https://test-d.detozgnrw.mms-at-work.de/formio/form'
const lucomURL = 'https://test-d.detozgnrw.mms-at-work.de/fms/service/portal/v1/system/info'
const zufiURL = 'https://zufi.api.vsm.nrw/health'
const leikaURL = 'https://leika.vsm.nrw/health'
const agsURL = 'https://ags-ars.api.vsm.nrw/orte?suchbegriff=D%C3%BCs'
const websucheURL = 'https://web-suche.api.vsm.nrw/web-treffer?suchbegriff=Perso'

//promise - (resolve: success, reject: error)
function sendRequest(method, url, body = null) {
    return fetch(url).then(response => {
        if (response.ok) {//response.status >= 400
            return response.json()
        }
        return response.json().then(error => {
            const e = new Error('Du hast VPN vergessen! Ohne läuft nicht')
            e.data = error
            throw e
        })
    })
}

sendRequest('GET', formioURL)
    .then(data => {
        console.log('Ich bin Formio', data)
        //data = JSON.parse(request.response)
        let icon
        let status = document.createElement('div')
        if (data) {
            status.classList.add('up')
            icon = `<span class="material-icons-sharp">trending_up</span>`
            status.innerHTML = `
                <span class="material-icons-sharp">${icon}</span>
                <div class="middle">
                    <div class="left">
                    <h3>Formio - Healthy</h3>
                    </div>
                </div>
            `
            document.querySelector('.insights').appendChild(status)
        } else {
            status.classList.add('down')
            icon = `
                <span class="material-icons-sharp">trending_down</span>
                `
                status.innerHTML = `
                <span class="material-icons-sharp">${icon}</span>
                <div class="middle">
                    <div class="left">
                        <h3>Formio - Unhealthy</h3>
                    </div>
                </div>
            `
            document.querySelector('.insights').appendChild(status)
            console.error('Etwas ist schief gelaufen')
        }
    })
    .catch(err => console.log(err))


sendRequest('GET' , lucomURL)
.then(data => {
    console.log('Ich bin Lucom', data)
    //data = JSON.parse(request.response)
    let icon
    let status = document.createElement('div')
    if (data) {
        status.classList.add('up')
        icon = `<span class="material-icons-sharp">trending_up</span>`
        status.innerHTML = `
            <span class="material-icons-sharp">${icon}</span>
            <div class="middle">
                <div class="left">
                    <h3>Lucom - Healthy</h3>
                </div>
            </div>
        `
        document.querySelector('.insights').appendChild(status)
    } else {
        status.classList.add('down')
        icon = `
            <span class="material-icons-sharp">trending_down</span>
            `
            status.innerHTML = `
            <span class="material-icons-sharp">${icon}</span>
            <div class="middle">
                <div class="left">
                <h3>Lucom - Healthy</h3>
                </div>
            </div>
        `
        document.querySelector('.insights').appendChild(status)
        console.error('Etwas ist schief gelaufen')
    }
})
.catch(err => console.log(err))

sendRequest('GET' , zufiURL)
.then(data => console.log('Ich bin ZuFi', data))
.catch(err => console.log(err))

sendRequest('GET' , leikaURL)
.then(data => console.log('Ich bin LeiKa', data))
.catch(err => console.log(err))

sendRequest('GET' , agsURL)
.then(data => console.log('Ich bin AGS', data))
.catch(err => console.log(err))

sendRequest('GET' , websucheURL)
.then(data => console.log('Ich bin Websuche', data))
.catch(err => console.log(err))
