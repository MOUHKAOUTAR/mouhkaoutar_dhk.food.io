// Gérer la classe active dynamiquement
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        // Supprimer "active" de tous les liens
        document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));
        // Ajouter "active" au lien cliqué
        link.classList.add('active');
    });
});

// Ajouter ou supprimer la classe "scrolled" sur la barre de navigation
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Si l'utilisateur défile de plus de 50px
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Gérer le clic sur le bouton admin et le logo

// Récupérer les éléments
const adminImg = document.getElementById('admin-img');
const adminBtn = document.getElementById('admin-btn');
const roleSelection = document.getElementById('role-selection');
const closeSelectionBtn = document.getElementById('close-selection');
const adminOption = document.getElementById('admin-option');
const managerOption = document.getElementById('manager-option');

// Fonction pour basculer la visibilité de la fenêtre des rôles
function toggleRoleSelection() {
    roleSelection.classList.toggle('hidden'); // Basculer la classe "hidden"
}

// Ajouter les événements pour afficher ou masquer la fenêtre
adminImg.addEventListener('click', toggleRoleSelection);
adminBtn.addEventListener('click', function (event) {
    event.preventDefault();
    toggleRoleSelection(); // Masquer ou afficher la fenêtre des rôles
});

// Sélection des éléments de modale
const adminModal = document.getElementById('admin-modal');
const managerModal = document.getElementById('manager-modal');
const closeAdminModal = document.getElementById('close-admin-modal');
const closeManagerModal = document.getElementById('close-manager-modal');


// Fonction pour afficher une modale
function showModal(modal) {
    modal.style.display = 'flex';
}

// Fonction pour masquer une modale
function hideModal(modal) {
    modal.style.display = 'none';
}

// Écouteurs d'événements pour afficher les modales
adminOption.addEventListener('click', () => {
    roleSelection.classList.add('hidden'); // Cacher la fenêtre des rôles
    showModal(adminModal);                // Afficher la modale Administrateur
});

managerOption.addEventListener('click', () => {
    roleSelection.classList.add('hidden'); // Cacher la fenêtre des rôles
    showModal(managerModal);               // Afficher la modale Gérant
});

// Écouteurs d'événements pour fermer les modales
closeAdminModal.addEventListener('click', () => hideModal(adminModal));
closeManagerModal.addEventListener('click', () => hideModal(managerModal));

// Fermer la modale en cliquant à l'extérieur
window.addEventListener('click', (event) => {
    if (event.target === adminModal) hideModal(adminModal);
    if (event.target === managerModal) hideModal(managerModal);
});

// Fermer la fenêtre de rôle en cliquant sur le bouton "close-selection"
closeSelectionBtn.addEventListener('click', toggleRoleSelection);

    
document.addEventListener("DOMContentLoaded", function () {
    // Vérifier si l'URL contient une ancre '#adminModal' ou '#managerModal'
    const urlParams = new URLSearchParams(window.location.hash.substring(1));
    const modalId = urlParams.get('modal');

    if (modalId === 'adminModal') {
        showModal(document.getElementById('admin-modal'));
    } else if (modalId === 'managerModal') {
        showModal(document.getElementById('manager-modal'));
    }
});
