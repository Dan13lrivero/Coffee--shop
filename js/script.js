document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.getElementById('navbarContent');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
            const targetId = link.getAttribute('href').substring(1);  
            const targetElement = document.getElementById(targetId);  
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',  
                    block: 'start'  
                });
            }
        });
    });
});
