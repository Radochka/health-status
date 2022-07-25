const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler")


//show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block'
})

//close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none'
})

//change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-varialbes')

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')

})





//fill orders in table
Services.forEach(service => {
    requestUrl("GET", service.url)
        .then(data => {
            //console.log(service.name, data)
            //data = JSON.parse(request.response)
            if (data || requestUrl) {
                service.status = 'UP'
                addStatus(service.name, service.status)
            }
            console.log(`${service.name} - ${service.status} - ${data}`)

        })
        .catch(err => {
            createErr(err, service.name)
            if (err) {
                service.status = 'DOWN'
                addStatus(service.name, service.status)
            }
            console.log(`${service.name} - ${service.status}`)
        })



    /* const tr = document.createElement('tr');
    const trContent = `
            <td>${service.name}</td>
            <td class="${service.status === 'DOWN' ? 'danger' : status === 'UP' ? 'success' : 'primary'}">${status}</td>
            <td class="primary">Details</td>
            `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr) */

})

function requestUrl(method, url, body = null) {
    return fetch(url)
        .then((response) => {
            if (response.ok) {
                //response.status >= 400
                return response.json();
            }
            return response.json().then((error) => {
                const e = new Error("Etwas läuft schief");
                e.data = error;
                throw e;
            });
        });
}

function addStatus(name, status) {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${name}</td>
        <td class="${status === 'DOWN' ? 'danger' : status === 'UP' ? 'success' : 'primary'}">${status}</td>
        <td class="primary">Details</td>
        `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr)
}

function createErr(err, name) {
    console.log(err);
}
/* let icon = ` < span class = "material-icons-sharp" > trending_down < /span>`;
                            let status = document.createElement("div");
                            let healthStatus = "Unhealthy"; status.classList.add("down"); createStatus(name, icon, healthStatus, status); * /
                        }

                        function createStatus(data) {
                            let status;
                            let icon;
                            //let status = document.createElement("div");
                            if (!data) {
                                status = 'DOWN'
                                icon = `<span class="material-icons-sharp">trending_down</span>`;
                                console.error("Etwas ist schief gelaufen");
                            } else {
                                status = 'UP'
                                icon = `<span class="material-icons-sharp">trending_up</span>`;
                            }
                            //status(icon, status);
                        }

                        /* function createStatus(name, icon, status) {
                            status.innerHTML = `
                            <span class="material-icons-sharp">${icon}</span>
                            <div class="middle">
                                <div class="left">
                                    <h3>${name}</h3>
                                </div>
                            </div>`;
                            document.querySelector(".insights").appendChild(status);
                        } */