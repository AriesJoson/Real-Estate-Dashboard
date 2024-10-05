export function myFunction2() {
    let btn = document.querySelector('#btn2');
    let navbar = document.querySelector('.navbar');

    btn.onclick = function () {
        navbar.classList.toggle('active');
    };
}