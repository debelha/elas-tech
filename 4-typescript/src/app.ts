// Interface - Contrato 
interface ItemCurriculo {
    titulo: string;
    renderizar(): HTMLDivElement; 
}

//Experiência profissional
class ExperienciaProfissional implements ItemCurriculo {

    constructor (
        public titulo: string,
        public empresa: string,
        public periodo: string
    ){}
        
    renderizar(): HTMLDivElement {
        const div = document.createElement('div');
        div.className = 'item-curriculo-formacao';
        div.innerHTML = 
    }
}