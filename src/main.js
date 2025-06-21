document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.content > div');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Hide all sections
            sections.forEach(section => {
                section.classList.add('hidden');
            });

            // Show clicked section
            const sectionId = link.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);
            if (section) {
                section.classList.remove('hidden');
            }
        });
    });
});
