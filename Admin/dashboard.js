
const asideMenu = document.querySelector("aside");
const menubtn = document.querySelector("#menu-btn");
const closebtn = document.querySelector("#close-btn");
const themetoggler = document.querySelector(".theme-toggler");

menubtn.addEventListener('click',() =>{
    asideMenu.style.display = 'block';
})

closebtn.addEventListener('click',() =>{
    asideMenu.style.display = 'none';
})

themetoggler.addEventListener('click',() =>{
    document.body.classList.toggle('dark-theme-variables');

    themetoggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themetoggler.querySelector('span:nth-child(2)').classList.toggle('active');
})


// Orders.forEach(order =>{
//     const tr = document.createElement('tr');
// })