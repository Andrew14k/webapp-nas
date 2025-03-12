// Dark Mode Toggle
const toggleButton = document.getElementById('toggle-theme');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Album Search Functionality
function searchAlbums() {
    const input = document.getElementById('album-search');
    const filter = input.value.toLowerCase();
    const albums = document.querySelectorAll('.album-card');

    albums.forEach(album => {
        const title = album.querySelector('h3').textContent.toLowerCase();
        if (title.includes(filter)) {
            album.style.display = "";
        } else {
            album.style.display = "none";
        }
    });
}

// Open Modal with Album Details
function openModal(title, year, tracks, details) {
    const modal = document.getElementById('album-modal');
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-year').textContent = "Release Year: " + year;
    document.getElementById('modal-tracks').textContent = "Track Count: " + tracks;
    document.getElementById('modal-details').textContent = details;
    modal.style.display = "block";
}

// Close Modal
const closeModal = document.querySelector('.close');
closeModal.addEventListener('click', () => {
    const modal = document.getElementById('album-modal');
    modal.style.display = "none";
});
