// Dados dos projetos para o modal
const projectsData = {
    1: {
        title: "Plataforma de Análise de Currículos com IA",
        description: "Desenvolvimento de um site para análise automatizada de currículos com integração da Gemini AI para fornecer feedback inteligente sobre candidaturas.",
        technologies: ["HTML", "CSS", "JavaScript", "C#", "Gemini AI API"],
        responsibilities: [
            "Desenvolvimento do front-end responsivo com HTML, CSS e JavaScript",
        ],
        demo: "#",
        code: "https://github.com/SabrynaRodrigues/lumi_project/tree/consumindoAPI"
    },
    2: {
        title: "Landing Page - Academia M2 Fitness",
        description: "Landing page institucional para academia.",
        technologies: ["HTML", "CSS", "Bootstrap"],
        responsibilities: [
            "Desenvolvimento do front-end responsivo com Bootstrap",
        ],
        demo: "https://alexandregg1.github.io/Projeto/",
        code: "https://github.com/alexandregg1/Projeto/tree/main"
    },
    3: {
        title: "Landing Page - 4UPact - Marketing Digital",
        description: "Site Institucional para agência de marketing digital, apresentando serviços e contato via WhatsApp.",
        technologies: ["HTML", "CSS", "Bootstrap"],
        responsibilities: [
            "Desenvolvimento completo do front-end responsivo",
            "Integração com WhatsApp para contato direto",
            "Otimização para dispositivos móveis",
        ],
        demo: "https://alexandregg1.github.io/4upact-teste/",
        code: "https://github.com/alexandregg1/4upact-teste"
    },
    4: {
        title: "Landing Page - Centro de Psicologia Infantil",
        description: "Página institucional com informações sobre localização, redes sociais e formas de contato para um centro especializado em psicologia infantil.",
        technologies: ["HTML", "CSS"],
        responsibilities: [
            "Desenvolvimento completo da landing page",
            "Otimização para SEO e acessibilidade",
            "Integração com mapas e formulários de contato",
            "Garantia de responsividade em todos os dispositivos",
            "Publicação e configuração do domínio"
        ],
        demo: "",
        code: "https://github.com/TR1Z1E/Projeto-Neuro-crescer"
    },
    5: {
        title: "Bot para WhatsApp",
        description: "Bot para atendimento automático via WhatsApp com respostas inteligentes para atendimento personalizado.",
        technologies: ["JavaScript", "Node.js"],
        responsibilities: [
            "Desenvolvimento do bot de atendimento automático",
            "Implementação de sistema de respostas inteligentes",
        ],
        demo: "#",
        code: "https://github.com/alexandregg1/ProjetoBOT"
    }
};

// Dados das tecnologias para o carrossel
const technologies = [
    { name: "HTML", icon: "fab fa-html5", level: "" },
    { name: "CSS", icon: "fab fa-css3-alt", level: "" },
    { name: "Bootstrap", icon: "fab fa-bootstrap", level: "" },
    { name: "JavaScript", icon: "fab fa-js", level: "" },
    { name: "Node.js", icon: "fab fa-node-js", level: "" },
    { name: "Python", icon: "fab fa-python", level: "" },
    { name: "C", icon: "fas fa-code", level: "" },
    { name: "SQL", icon: "fas fa-database", level: "" },
    { name: "GIT", icon: "fab fa-git-alt", level: "" },
];

// Elementos do modal
const modal = document.getElementById('projectModal');
const closeModal = document.querySelector('.close-modal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalTech = document.getElementById('modalTech');
const modalResponsibilities = document.getElementById('modalResponsibilities');
const modalDemo = document.getElementById('modalDemo');
const modalCode = document.getElementById('modalCode');

// Inicializar carrossel infinito
function initInfiniteCarousel() {
    const carousel = document.getElementById('skillsCarousel');

    // Duplicar os itens para criar efeito de loop infinito suave
    const duplicatedTechnologies = [...technologies, ...technologies, ...technologies];

    duplicatedTechnologies.forEach(tech => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
            <div class="skill-icon">
                <i class="${tech.icon}"></i>
            </div>
            <div class="skill-name">${tech.name}</div>
            <div class="skill-level">${tech.level}</div>
        `;
        carousel.appendChild(skillItem);
    });
}

// Abrir modal do projeto
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project');
        const project = projectsData[projectId];

        if (project) {
            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;

            // Limpar e adicionar tecnologias
            modalTech.innerHTML = '';
            project.technologies.forEach(tech => {
                const techTag = document.createElement('span');
                techTag.className = 'tech-tag';
                techTag.textContent = tech;
                modalTech.appendChild(techTag);
            });

            // Limpar e adicionar responsabilidades
            modalResponsibilities.innerHTML = '';
            project.responsibilities.forEach(resp => {
                const respItem = document.createElement('div');
                respItem.className = 'responsibility-item';
                respItem.innerHTML = `
                    <i class="fas fa-check-circle"></i>
                    <span>${resp}</span>
                `;
                modalResponsibilities.appendChild(respItem);
            });

            // Atualizar links - com verificação para demos indisponíveis
            if (project.demo === "#" || project.demo === "" || !project.demo) {
                modalDemo.innerHTML = '<i class="fas fa-clock"></i> Demo em Breve';
                modalDemo.style.background = '#6c757d';
                modalDemo.style.cursor = 'not-allowed';
                modalDemo.onclick = function(e) {
                    e.preventDefault();
                    alert('🚧 Demo em desenvolvimento!\nEste projeto ainda não possui versão pública.');
                };
                modalDemo.removeAttribute('href');
            } else {
                modalDemo.href = project.demo;
                modalDemo.target = "_blank";
                modalDemo.innerHTML = '<i class="fas fa-external-link-alt"></i> Ver Demo';
                modalDemo.style.background = '';
                modalDemo.style.cursor = 'pointer';
                modalDemo.onclick = null;
            }

            // Link do código sempre abre em nova aba
            modalCode.href = project.code;
            modalCode.target = "_blank";

            // Mostrar modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Fechar modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Fechar modal ao clicar fora
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Menu toggle para mobile
document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.navbar').classList.toggle('active');
});

// Fechar menu ao clicar em um link (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 992) {
            document.querySelector('.navbar').classList.remove('active');
        }

        // Atualizar link ativo
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
    });
});

// Animação suave ao rolar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Inicializar partículas
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#9b59b6"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#8e44ad",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Inicializar tudo quando a página carregar
document.addEventListener('DOMContentLoaded', function () {
    initInfiniteCarousel();
});
