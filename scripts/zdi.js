/* ZDI - Datenaustauschplattform Data Transfer to ZDI - Serviceportal 2.0 - MMS - Confluence(t - systems - mms.eu)

IsServiceAvailable: POST???

curl {}
cert zdi.pem {}
key zdi.key {}
header--"Content-Type: text/xml;charset=UTF-8" - header "SOAPAction: http://www.xta.de/XTA/IsServiceAvailable" - data "@IsServiceAvailable.xml"
https: //xta.zdi-idmz-pre.nrw.de/xta */

const header = {
    'Content-Type': 'text/xml;charset=UFT-8',
    'SOAPAction': 'http: //www.xta.de/XTA/IsServiceAvailable'
}
const body = {
    data: '@IsServiceAvailable.xml'
}
const certificate = {
    cert: 'zdi.pem',
    key: 'zdi.key'
}

const zdi = 'https://xta.zdi-idmz-pre.nrw.de/xta'

f
/* etch(zdi, {
        mode: 'no-cors',
        method: 'HEAD',
        headers: header,
        body: JSON.stringify(body), //???
        cert: certificate

    })
    .then(response => {
        console.log(response)
        return response.json()
    })
    .catch((err) => console.log(err)); */