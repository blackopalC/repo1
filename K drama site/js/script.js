const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

const dramaCards = document.querySelectorAll('.drama-card');
const filterButtons = document.querySelectorAll('.filter-btn');


function filterDramas() {
    
    const activeFilter = document.querySelector('.filter-btn.active');
    const filterValue = activeFilter ? activeFilter.dataset.filter : 'all';
    let visibleCount = 0;

    dramaCards.forEach(card => {
        const genres = card.dataset.genres || '';
        const matchesFilter = filterValue === 'all' || genres.includes(filterValue);
        
        if (matchesFilter) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}


filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        filterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        filterDramas();
    });
});

document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const description = this.nextElementSibling;
        if (description && description.classList.contains('full-description')) {
            description.classList.toggle('show');
            if (description.classList.contains('show')) {
                this.textContent = 'Read Less';
            } else {
                this.textContent = 'Read More';
            }
        }
    });
});


document.querySelectorAll('.nav-links a').forEach(link => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    let linkHref = link.getAttribute('href');
    if (linkHref.startsWith('./')) {
        linkHref = linkHref.substring(2);
    }
    if (linkHref === currentPage) {
        document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});



function toggleFavorite(button) {
    button.classList.toggle("active");

    const heart = button.querySelector(".heart");

    if (button.classList.contains("active")) {
        heart.textContent = "♥️";
        button.innerHTML = '<span class="heart">♥️</span> ';
    } else {
        heart.textContent = "♡";
        button.innerHTML = '<span class="heart">♡</span>';
    }
}