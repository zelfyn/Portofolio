// Tangkap elemen dari DOM
const btnLang = document.getElementById('btn-lang');
const btnDev = document.getElementById('btn-dev');
const dynamicContent = document.getElementById('dynamic-content');

// Template Konten Bahasa Pemrograman
const languageContent = `
    <div class="lang-grid">
        <div class="lang-item"><i class="bi bi-filetype-html"></i> HTML</div>
        <div class="lang-item"><i class="bi bi-filetype-css"></i> CSS</div>
        <div class="lang-item"><i class="bi bi-filetype-js"></i> JavaScript</div>
    </div>
`;

// Template Konten Dev Project
const projectContent = `
    <div class="proj-list">
        <a href="creative-porto/index.html" target="_blank" class="proj-item">
            <h3>Portofolio Kreatif - Coming Soon</h3>
            <p>.</p>
        </a>
    </div>
`;

// Set konten awal saat halaman di-load
dynamicContent.innerHTML = languageContent;

// Event listener untuk tombol Code Language
btnLang.addEventListener('click', () => {
    // Ubah konten
    dynamicContent.innerHTML = languageContent;
    
    // Ubah status tombol (active state)
    btnLang.classList.add('active');
    btnDev.classList.remove('active');
});

// Event listener untuk tombol Dev Project
btnDev.addEventListener('click', () => {
    // Ubah konten
    dynamicContent.innerHTML = projectContent;
    
    // Ubah status tombol (active state)
    btnDev.classList.add('active');
    btnLang.classList.remove('active');
});