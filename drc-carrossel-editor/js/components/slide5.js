window.slideComponents.slide5 = {
    id: 5,
    name: "Explicação Técnica",
    defaultData: {
        header: "EXPLICAÇÃO TÉCNICA",
        subtitle: "Como funciona na prática jurídica",
        col1: "Texto mais denso com explicação técnica organizada em blocos legíveis. Destaque para termos jurídicos relevantes que merecem atenção especial do leitor.",
        col2: "Segunda parte do texto com desenvolvimento contextual e informação útil e objetiva para o público.",
        highlight: "Termo jurídico em destaque específico",
        alertTitle: "IMPORTANTE",
        alertText: "Box de atenção com informação crítica, prazo legal ou alerta relevante que o leitor não pode ignorar.",
        footer: "DRC Advogados",
        counter: "05 / 08"
    },
    
    render(data) {
        return `
            <div class="slide slide-5" data-slide="5">
                <div class="slide-5__header">
                    <div class="slide-5__kicker">${data.header}</div>
                    <h2 class="slide-5__title" contenteditable="false">${data.subtitle}</h2>
                </div>
                
                <div class="slide-5__content">
                    <div class="slide-5__column" contenteditable="false">${data.col1}</div>
                    <div class="slide-5__column" contenteditable="false">${data.col2}</div>
                    
                    <div class="slide-5__highlight" contenteditable="false">
                        ${data.highlight}
                    </div>
                    
                    <div class="slide-5__alert">
                        <div class="slide-5__alert-icon">⚠</div>
                        <div class="slide-5__alert-content">
                            <h4>${data.alertTitle}</h4>
                            <p contenteditable="false">${data.alertText}</p>
                        </div>
                    </div>
                </div>
                
                <div class="slide-5__footer">
                    <span>${data.footer}</span>
                    <span>${data.counter}</span>
                </div>
            </div>
        `;
    }
};
