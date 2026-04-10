window.slideComponents.slide7 = {
    id: 7,
    name: "Variação Capa",
    defaultData: {
        brand: "DRC Advogados —",
        title: "TÍTULO PRINCIPAL",
        subtitle: "Subtítulo da publicação jurídica",
        category: "Área do Direito",
        social: "@drcadvogados",
        counter: "07 / 08"
    },
    
    render(data) {
        return `
            <div class="slide slide-7" data-slide="7">
                <div class="slide-7__visual">
                    <div class="slide-7__brand">${data.brand}</div>
                    <div style="font-size: 14px; opacity: 0.6; letter-spacing: 0.1em;">FOTO / ELEMENTO VISUAL</div>
                </div>
                <div class="slide-7__content">
                    <div class="slide-7__category" contenteditable="false">${data.category}</div>
                    <h1 class="slide-7__title" contenteditable="false">${data.title}</h1>
                    <p class="slide-7__subtitle" contenteditable="false">${data.subtitle}</p>
                    <div class="slide-7__social">
                        <span>${data.brand.replace('—', '')}</span>
                        <span>${data.social} · ${data.counter}</span>
                    </div>
                </div>
            </div>
        `;
    }
};
