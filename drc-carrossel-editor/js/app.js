// Renderizador Principal
const AppRenderer = {
    init() {
        AppState.init();
        this.renderAll();
        EditorController.init();
        EditorController.updateCounter();
        
        // Set zoom inicial responsivo
        this.calculateInitialZoom();
        window.addEventListener('resize', () => this.calculateInitialZoom());
    },
    
    calculateInitialZoom() {
        const wrapper = document.querySelector('.canvas-wrapper');
        const availableHeight = window.innerHeight - 100;
        const availableWidth = window.innerWidth - 400; // sidebar
        const scale = Math.min(
            availableWidth / 1080,
            availableHeight / 1350,
            0.8
        );
        AppState.zoom = Math.max(0.4, scale);
        document.getElementById('slidesContainer').style.transform = `scale(${AppState.zoom})`;
        document.getElementById('zoomLevel').textContent = Math.round(AppState.zoom * 100) + '%';
    },
    
    renderAll() {
        const container = document.getElementById('slidesContainer');
        container.innerHTML = '';
        
        AppState.slides.forEach((data, index) => {
            const component = window.slideComponents[`slide${index + 1}`];
            if (component) {
                const html = component.render(data);
                container.insertAdjacentHTML('beforeend', html);
            }
        });
        
        // Ativa primeiro slide
        const slides = container.querySelectorAll('.slide');
        if (slides[AppState.currentSlide]) {
            slides[AppState.currentSlide].classList.add('active');
        }
        
        if (AppState.isEditing) {
            EditorController.enableContentEdit(true);
        }
    }
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    AppRenderer.init();
});
