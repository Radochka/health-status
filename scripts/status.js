const formioURL = "https://test-d.detozgnrw.mms-at-work.de/formio/form";
const lucomURL =
    "https://test-d.detozgnrw.mms-at-work.de/fms/service/portal/v1/system/info";
const zufiURL = "https://zufi.api.vsm.nrw/health";
const leikaURL = "https://leika.vsm.nrw/health";
const agsURL = "https://ags-ars.api.vsm.nrw/orte?suchbegriff=D%C3%BCs";
const websucheURL =
    "https://web-suche.api.vsm.nrw/web-treffer?suchbegriff=Perso";
const serviceKonto =
    "https://sknrwq.krzn.de/AutentIDConnect/sk/.well-known/openid-configuration";
const zdiURL = "https://xta.zdi-idmz-pre.nrw.de/xta";
const ePayBLURL =
    "https://epay-test.nrw.de/konnektor/epayment/fachverfahren/v1_0/mandanten/B000004/bewirtschafter/BW100001/zahlverfahren";
const zspURL = "https://zs.nrw.de/authenticationservice/rest/authentication";

const myEnums = {
    FORMIO: "Formio",
    LUCOM: "Lucom",
    ZUFI: "ZuFi",
    AGS: "AGS",
    LEIKA: "LeiKa",
    WEBSUCHE: "WebSuche",
    SK: "ServiceKonto",
    PAY: "ePayBL",
    ZDI: "ZDI",
    ZSP: "ZSP",
};

function sendRequest(method, url, body = null) {
    return fetch(url).then((response) => {
        if (response.ok) {
            //response.status >= 400
            return response.json();
        }
        return response.json().then((error) => {
            const e = new Error("Etwas läuft nicht");
            e.data = error;
            throw e;
        });
    });
}

/* function sendReqWithOpt(method, url) {
  return fetch(url, {
    mode: "no-cors",
  })
    .then((response) => {
      if (response.ok) {
        //response.status >= 400
        return response.json();
      }
    })
    .catch((err) => console.log(err));
} */

function sendReqWithOpt(method, url) {
    return fetch(url, {
            "Content-Type": "text/xml; charset=UTF-8",
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .catch((err) => console.log(err));
}

function createHealth(data, name) {
    console.log(name, data);
    let icon;
    let status = document.createElement("div");
    if (!sendRequest || !sendReqWithOpt) {
        status.classList.add("down");
        icon = `<span class="material-icons-sharp">trending_down</span>`;
        console.error("Etwas ist schief gelaufen");
    } else {
        status.classList.add("up");
        icon = `<span class="material-icons-sharp">trending_up</span>`;
    }
    createStatus(name, icon, status);
}

function createStatus(name, icon, status) {
    status.innerHTML = `
    <span class="material-icons-sharp">${icon}</span>
    <div class="middle">
        <div class="left">
            <h3>${name}</h3>
        </div>
    </div>`;
    document.querySelector(".insights").appendChild(status);
}

function createErr(err, name) {
    console.log(err);
    let icon = `<span class="material-icons-sharp">trending_down</span>`;
    let status = document.createElement("div");
    let healthStatus = "Unhealthy";
    status.classList.add("down");
    createStatus(name, icon, healthStatus, status);
}

sendRequest("GET", agsURL)
    .then(data => createHealth(data.daten, myEnums.AGS))
    .catch(err => createErr(err, myEnums.AGS));

sendRequest("GET", formioURL)
    .then(data => createHealth(data, myEnums.FORMIO))
    .catch(err => createErr(err, myEnums.FORMIO));

sendRequest("GET", lucomURL)
    .then(data => createHealth(data, myEnums.LUCOM))
    .catch(err => createErr(err, myEnums.LUCOM));

sendRequest("GET", websucheURL)
    .then(data => createHealth(data, myEnums.WEBSUCHE))
    .catch(err => createErr(err, myEnums.WEBSUCHE));

sendRequest("GET", zufiURL)
    .then((data) => createHealth(data, myEnums.ZUFI))
    .catch((err) => createErr(err, myEnums.ZUFI));

sendRequest("GET", leikaURL)
    .then((data) => createHealth(data, myEnums.LEIKA))
    .catch((err) => createErr(err, myEnums.LEIKA));

/* sendReqWithOpt("GET", serviceKonto)
    .then(response => createHealth(response, myEnums.SK))
    .catch((err) => createErr(err, myEnums.SK)); */

/* sendRequest('GET', ePayBLURL)
    .then(data => createHealth(data, myEnums.PAY))
    .catch(err => createErr(err, myEnums.PAY))

sendRequest('GET', zdiURL)
    .then(data => createHealth(data, myEnums.ZDI))
    .catch(err => createErr(err, myEnums.ZDI))

sendRequest('GET', zspURL)
    .then(data => createHealth(data, myEnums.ZSP))
    .catch(err => createErr(err, myEnums.ZSP))
 */