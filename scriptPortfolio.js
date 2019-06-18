window.onload = function () {
    const menu_toggler = document.querySelector('#menu-toggler');
    const back_arrow = document.querySelector('#back-arrow');
    const top_nav = document.querySelector('#top_nav');
    const theme1 = document.querySelector('#theme1');
    const theme2 = document.querySelector('#theme2');
    const theme3 = document.querySelector('#theme3');
    const theme4 = document.querySelector('#theme4');

    console.log(menu_toggler);
    console.log(back_arrow);
    console.log(top_nav);
    console.log(theme1);
    console.log(theme2);
    console.log(theme3);
    console.log(theme4);



    menu_toggler.addEventListener('click', addOpen);
    back_arrow.addEventListener('click', gotoPortfolio);
    theme1.addEventListener('click', function () {
        window.location.href = "BasicWeb.html";
    });
    theme2.addEventListener('click', function () {
        window.location.href = "Basic_Animation.html";
    });
    theme3.addEventListener('click', function () {
        window.location.href = "Basic_Content.html";
    });
    theme4.addEventListener('click', function () {
        window.location.href = "Basic_UX.html";
    });

    function addOpen() {
        menu_toggler.classList.toggle("open");
        top_nav.classList.toggle("open");
    }

    function gotoPortfolio() {
        window.location.href = "index.html";
    }
};
