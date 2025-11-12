const skills = {
    cpp: {
        icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png",
        title: "C++",
        level: "Avançado",
        description: "Experiência sólida em desenvolvimento de jogos e sistemas com foco em desempenho, incluindo otimizações de memória e uso de estruturas avançadas."
    },
    csharp: {
        icon: "https://img.icons8.com/color/48/000000/c-sharp-logo.png",
        title: "C#",
        level: "Intermediário",
        description: "Uso principalmente para desenvolvimento de jogos em Unity, com foco em lógica de gameplay, IA e gerenciamento de estados."
    },
    js: {
        icon: "https://img.icons8.com/color/48/000000/javascript.png",
        title: "JavaScript",
        level: "Intermediário",
        description: "Experiência com interatividade em sites, manipulação de DOM, e alguns projetos pequenos de front-end."
    },
    sql: {
        icon: "https://img.icons8.com/fluency/48/sql.png",
        title: "SQL",
        level: "Básico",
        description: "Trabalho com criação de consultas simples, joins e manipulação de dados em bancos relacionais."
    },
    html: {
        icon: "https://img.icons8.com/color/48/000000/html-5--v1.png",
        title: "HTML",
        level: "Intermediário",
        description: "Criação de páginas web estruturadas para projetos pessoais e acadêmicos."
    },
    css: {
        icon: "https://img.icons8.com/color/48/000000/css3.png",
        title: "CSS",
        level: "Intermediário",
        description: "Experiência com estilização, responsividade e layouts modernos usando Flexbox e Grid."
    },
    blender: {
        icon: "https://img.icons8.com/color/48/000000/blender-3d.png",
        title: "Blender",
        level: "Básico",
        description: "Modelagem de objetos simples para jogos e criação de animações básicas."
    },
    inkscape: {
        icon: "https://img.icons8.com/color/48/000000/inkscape.png",
        title: "Inkscape",
        level: "Básico",
        description: "Criação de vetores, logotipos e artes conceituais para projetos visuais."
    },
    audacity: {
        icon: "https://img.icons8.com/color/48/000000/audacity.png",
        title: "Audacity",
        level: "Intermediário",
        description: "Edição de áudio, limpeza de ruídos, cortes e ajustes para projetos de mídia."
    },
    fmod: {
        icon: "img/fmod.png",  // Ícone fictício (não tem no icons8, você pode trocar)
        title: "FMOD",
        level: "Básico",
        description: "Integração de áudio interativo em jogos, incluindo eventos sonoros e mixagem básica."
    }
};

function showSkill(skillKey) {
    const skill = skills[skillKey];
    document.getElementById('skill-icon').src = skill.icon;
    document.getElementById('skill-icon').style.display = 'block';
    document.getElementById('skill-title').innerText = skill.title;
    document.getElementById('skill-level').innerText = `Nível: ${skill.level}`;
    document.getElementById('skill-description').innerText = skill.description;

    
}
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".skills-buttons button");
    const radius = 250; // Distância em pixels do centro ao botão
    const centerX = 300; // Metade da largura do container (600px)
    const centerY = 300; // Metade da altura do container (600px)

    buttons.forEach((button, index) => {
        const angle = (index / buttons.length) * 2 * Math.PI;  // Ângulo em radianos
        const x = centerX + radius * Math.cos(angle) - 50; // -50 para centralizar o botão (aproximadamente metade da largura)
        const y = centerY + radius * Math.sin(angle) - 15; // -15 para centralizar na altura (metade da altura)

        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
    });

    showSkill('js')
});