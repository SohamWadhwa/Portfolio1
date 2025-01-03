window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active'); // Reset animation when out of view
            }
        });
    }, {
        threshold: 0.01, // Trigger when 10% of the element is visible
    });

    reveals.forEach(element => {
        observer.observe(element);
    });
}

document.addEventListener('DOMContentLoaded', initScrollReveal);

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('backToTop').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        const backToTopBtn = document.getElementById('backToTop');

        if (window.scrollY > 300) {
            backToTopBtn.classList.remove('slide-out-down');
            setTimeout(() =>{
                backToTopBtn.classList.add('slide-in-up');
                backToTopBtn.style.display = 'block';
            }, 300);
        } else {
            backToTopBtn.classList.remove('slide-in-up');
            backToTopBtn.classList.add('slide-out-down');
            setTimeout(() => {
                backToTopBtn.style.display = 'none';
            }, 300);
        }
    });
});


