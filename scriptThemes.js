window.onload = function () {
    const x = document.querySelector('#menu-toggler');
    const y = document.querySelector('#top_nav');
    console.log(x);
    console.log(y);


    x.addEventListener('click', myFunction);

    function myFunction() {
        x.classList.toggle("open");
        y.classList.toggle("open");
    }
};
