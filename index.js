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

/* //fill orders in table
Services.forEach(service => {
    const tr = document.createElement('tr')
    const trContent = `
        <td>${service.name}</td>
        <td class="${service.status === 'DOWN' ? 'danger' : service.status === 'UP' ? 'success' : 'primary'}">${service.status}</td>
        <td class="primary">Details</td>
        `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr)
        

}) */