document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const introSection = document.querySelector('.intro');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    header.classList.remove('scrolled');
                } else {
                    header.classList.add('scrolled');
                }
            });
        },
        { threshold: 0 }
    );

    observer.observe(introSection);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});