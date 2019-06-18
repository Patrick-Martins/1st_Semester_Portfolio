window.onload = function () {
    const about = document.querySelector('#about-heading');
    const work = document.querySelector('#work-heading');
    console.log(about);
    console.log(work);


    about.addEventListener('click', gotoAbout);
    work.addEventListener('click', gotoPortfolio);

    function gotoAbout() {
        window.location.href = "about.html";
    }

    function gotoPortfolio() {
        window.location.href = "portfolio.html";
    }
};
