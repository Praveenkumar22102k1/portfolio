document.addEventListener('DOMContentLoaded', () => {
    // Load data from portfolioData defined in data.js
    populatePortfolio(portfolioData);

    // Navbar click handling (active state & close mobile menu)
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.getElementById('navbarNav');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        });
    });
});

function populatePortfolio(data) {
    // 0. Navbar
    if (data.navbar) {
        document.getElementById('navbar-brand').innerHTML = `${data.navbar.brandText}<span class="text-accent">${data.navbar.brandAccent}</span>`;
    }

    // 1. Hero Section
    document.getElementById('hero-badge').textContent = data.hero.badge;
    document.getElementById('hero-title-1').innerHTML = data.hero.title_part1 + ' <br>';
    document.getElementById('hero-title-2').textContent = data.hero.title_part2;
    document.getElementById('hero-description').textContent = data.hero.description;

    // 2. About Section
    document.getElementById('about-years').textContent = data.about.yearsOfExperience;
    document.getElementById('about-title-1').innerHTML = data.about.title_part1 + ' <br> ';
    document.getElementById('about-title-2').textContent = data.about.title_part2;
    document.getElementById('about-description').textContent = data.about.description;

    const skillsContainer = document.getElementById('skills-container');
    skillsContainer.innerHTML = ''; // Clear fallback
    data.about.skills.forEach(skill => {
        skillsContainer.innerHTML += `
            <div class="col-md-6">
                <div class="skill-card h-100">
                    <i class="bi ${skill.icon} text-accent fs-2 mb-3 d-block"></i>
                    <h4 class="h5 text-white">${skill.title}</h4>
                    <p class="text-secondary small mb-0">${skill.description}</p>
                </div>
            </div>
        `;
    });

    // 3. Projects Section
    document.getElementById('projects-title-1').textContent = data.projects_section.title_part1 + ' ';
    document.getElementById('projects-title-2').textContent = data.projects_section.title_part2;
    document.getElementById('projects-subtitle').textContent = data.projects_section.subtitle;

    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = ''; // Clear fallback
    data.projects_section.projects.slice(0, 3).forEach(project => {
        let badgesHtml = project.badges.map(badge => `<span class="badge bg-glass text-white">${badge}</span>`).join('');
        projectsContainer.innerHTML += `
            <div class="col-md-4">
                <div class="project-card h-100">
                    <div class="project-img-wrapper">
                        <img src="${project.image}" alt="${project.title}" class="img-fluid project-img">
                        <div class="project-overlay">
                            <a href="#" class="btn btn-light rounded-circle p-3"><i class="bi bi-arrow-up-right text-dark"></i></a>
                        </div>
                    </div>
                    <div class="project-info p-4">
                        <div class="d-flex gap-2 mb-3">
                            ${badgesHtml}
                        </div>
                        <h3 class="h5 text-white mb-2">${project.title}</h3>
                        <p class="text-secondary small mb-0">${project.description}</p>
                    </div>
                </div>
            </div>
        `;
    });

    // 4. Contact Section
    document.getElementById('contact-title-1').innerHTML = data.contact.title_part1 + ' <br> ';
    document.getElementById('contact-title-2').textContent = data.contact.title_part2;
    document.getElementById('contact-description').textContent = data.contact.description;

    const contactLinksContainer = document.getElementById('contact-links-container');
    contactLinksContainer.innerHTML = '';
    data.contact.links.forEach(link => {
        contactLinksContainer.innerHTML += `
            <a href="${link.href}" class="text-white text-decoration-none fs-5 d-flex align-items-center gap-3 contact-link">
                <div class="icon-box"><i class="bi ${link.icon}"></i></div> ${link.text}
            </a>
        `;
    });

    // 5. Footer
    document.getElementById('footer-text').textContent = data.footer.text;
    const footerSocialsContainer = document.getElementById('footer-socials-container');
    footerSocialsContainer.innerHTML = '';
    data.footer.socials.forEach(social => {
        footerSocialsContainer.innerHTML += `
            <a href="${social.href}" class="text-secondary hover-white"><i class="bi ${social.icon}"></i></a>
        `;
    });
}