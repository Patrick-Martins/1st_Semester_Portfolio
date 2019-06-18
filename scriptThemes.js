window.onload = function () {
    const menu_toggler = document.querySelector('#menu-toggler');
    const back_arrow = document.querySelector('#back-arrow');
    const top_nav = document.querySelector('#top_nav');


    console.log(menu_toggler);
    console.log(back_arrow);
    console.log(top_nav);



    menu_toggler.addEventListener('click', addOpen);
    back_arrow.addEventListener('click', gotoPortfolio);

    function addOpen() {
        menu_toggler.classList.toggle("open");
        top_nav.classList.toggle("open");
    }

    function gotoPortfolio() {
        window.location.href = "portfolio.html";
    }
};
