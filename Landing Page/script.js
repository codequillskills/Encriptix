const hamburger = document.querySelector("header nav div.icons a i");
const ul = document.querySelector("header nav ul.navLinks");
hamburger.addEventListener("click", function (e) {
    e.preventDefault();
    ul.classList.toggle("open");
    if (ul.classList.contains('open')) {
        hamburger.classList.remove('fa-bars');
        hamburger.classList.add('fa-xmark');
    }
    else {
        hamburger.classList.add('fa-bars');
        hamburger.classList.remove('fa-xmark');
    }
});
