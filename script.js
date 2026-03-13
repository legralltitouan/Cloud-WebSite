// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeCards();
    initializeSearch();
});

// Navigation active
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Interaction des cartes
function initializeCards() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            console.log('Carte cliquée');
        });
        
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
        });
    });
}

// Recherche
function initializeSearch() {
    const searchBox = document.querySelector('.search-box input');
    
    if (searchBox) {
        searchBox.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            console.log('Recherche:', searchTerm);
        });
    }
}

// Affichage de la date
function updateDate() {
    const dateEl = document.querySelector('.date-display');
    if (dateEl) {
        const d = new Date();
        const day = String(d.getDate()).padStart(2, '0');
        const month = new Intl.DateTimeFormat('en-US', {'month':'short'}).format(d).toUpperCase();
        const year = d.getFullYear();
        dateEl.innerText = `${day} ${month} ${year}`;
    }
}

// Bouton Add
document.querySelector('.add-btn').addEventListener('click', function() {
    alert('Fonction d\'ajout à implémenter');
});

// Avatar utilisateur
document.querySelector('.user-avatar').addEventListener('click', function() {
    console.log('Profil utilisateur');
});

console.log('Cloudly.io - Interface chargée avec succès!');
