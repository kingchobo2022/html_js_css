document.addEventListener("DOMContentLoaded", function() {
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    const mobileNav = document.querySelector(".mobile-nav");

    mobileMenuBtn.addEventListener("click", function () {
        mobileNav.classList.toggle('active');
    });

    const contactForm = document.querySelector(".contact-form");
    if(contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            alert('문의가 접수되었습니다. 감사합니다!');
            contactForm.reset();
        });
    }
});