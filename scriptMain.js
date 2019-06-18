//var menu_toggler = document.getElementById('menu-toggler');
//var top_nav = document.getElementById('top-nav');



//document.getElementById('menu-toggler').addEventListener('click', toggleOpen);
//function toggleOpen(){
//    this.classList.toggle('open');
//}
//
//console.log(document.getElementById('menu-toggler'));
//console.log(document.getElementById('top-nav'));

window.onload = function () {
    const x = document.querySelector('#menu-toggler');
    const y = document.querySelector('#top_nav');
    console.log(x);
    console.log(y);


    const aboutHeading = document.getElementById('about-heading');
    console.log(aboutHeading);

    aboutHeading.addEventListener('click', function () {
        window.location.href = "about.html";
    });

    x.addEventListener('click', myFunction);

    function myFunction() {
        x.classList.toggle("open");
        y.classList.toggle("open");
    }
};



//aboutHeading.addEventListener('click', );
