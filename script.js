// ============================================
// SISTEMA DE TRADUÇÃO MULTILÍNGUE
// ============================================

const translations = {
    pt: {
        // Navegação
        home: "Início",
        skills: "Habilidades",
        projects: "Projetos",
        services: "Serviços",
        experience: "Experiência",
        about: "Sobre",
        contact: "Contato",
        
        // Hero Section
        heroTitle: "Igor <span class='highlight'>Alexandre</span>",
        heroSubtitle: "Graduando em Ciência da Computação",
        heroDescription: "Desenvolvedor Full Stack com foco em Front-end, Back-end e interesse em Análise de Dados. Transformo ideias em soluções digitais funcionais e elegantes.",
        viewProjects: "Ver Projetos",
        contactMe: "Entre em Contato",
        
        // Títulos das seções
        sectionSkills: "Habilidades",
        sectionProjects: "Projetos",
        sectionServices: "Serviços",
        sectionExperience: "Experiência Profissional",
        sectionAbout: "Sobre Mim",
        sectionContact: "Entre em Contato",
        
        // Projetos
        project1Title: "Lumi - Project",
        project1Desc: "Desenvolvimento de um site para análise automatizada de currículos com integração da Gemini AI.",
        project2Title: "Landing Page M2 Academia",
        project2Desc: "Landing page institucional para academia integrada a sistema de atendimento automatizado via WhatsApp.",
        project3Title: "Landing Page - 4UPact - Marketing Digital",
        project3Desc: "Landing page institucional para agência de marketing digital.",
        project4Title: "Landing Page - Centro de Psicologia Infantil",
        project4Desc: "Página institucional com informações sobre localização, redes sociais e formas de contato.",
        project5Title: "Bot para WhatsApp",
        project5Desc: "Bot para atendimento automático via WhatsApp.",
        
        // Links dos projetos
        videoPresentation: "Video Apresentativo",
        demo: "Demo",
        code: "Código",
        
        // Serviços
        service1Title: "Desenvolvimento Front-end",
        service1Desc: "Criação de interfaces modernas e responsivas usando HTML, CSS, JavaScript e frameworks como Bootstrap.",
        service2Title: "Websites Responsivos",
        service2Desc: "Desenvolvimento de sites que funcionam perfeitamente em todos os dispositivos e tamanhos de tela.",
        service3Title: "Manutenção e Suporte",
        service3Desc: "Suporte técnico, correção de problemas e manutenção preventiva de sistemas e infraestrutura.",
        
        // Experiência
        exp1Title: "Analista de T.I",
        exp1Desc1: "Suporte técnico a sistemas e infraestrutura de TI",
        exp1Desc2: "Apoio na resolução de problemas relacionados a hardware e software",
        exp1Desc3: "Manutenção preventiva e corretiva de equipamentos",
        exp2Title: "Caixa",
        exp2Desc1: "Atendimento ao cliente no caixa, garantindo precisão e eficiência nas transações",
        exp3Title: "Freelancer",
        exp3Subtitle: "Produção de Websites",
        exp3Desc1: "Desenvolvimento de sites personalizados, incluindo planejamento, design responsivo e implementação",
        exp3Desc2: "Experiência em gerenciamento de projetos e entrega de soluções digitais sob medida para clientes regionais",
        
        // Sobre Mim
        aboutTitle: "Desenvolvedor Full Stack & Estudante de Ciência da Computação",
        aboutText1: "Graduando em Ciência da Computação pela Universidade Nove de Julho (UNINOVE), com experiência acadêmica em desenvolvimento front-end e back-end. Além disso, possuo experiência em manutenção e suporte de computadores.",
        aboutText2: "Meu objetivo é atuar em áreas relacionadas à Tecnologia da Informação, Desenvolvimento Front-end e Back-end, além de ter interesse em Análise de Dados e Engenharia de Dados.",
        aboutText3: "Sou uma pessoa proativa, com facilidade para aprender novas tecnologias e trabalhar em equipe. Busco constantemente me desenvolver profissionalmente e contribuir para projetos desafiadores.",
        letsTalk: "Vamos Conversar",
        
        // Contato
        location: "Localização",
        locationText: "São Paulo, Brasil",
        email: "Email",
        education: "Formação",
        educationText: "Bacharelado em Ciência da Computação - UNINOVE (2023 - Presente)",
        nameLabel: "Nome",
        emailLabel: "Email",
        subjectLabel: "Assunto",
        messageLabel: "Mensagem",
        namePlaceholder: "Nome",
        emailPlaceholder: "Email",
        subjectPlaceholder: "Assunto",
        messagePlaceholder: "Mensagem",
        sendMessage: "Enviar Mensagem",
        
        // Footer
        copyright: "© 2025 Igor Alexandre. Todos os direitos reservados.",
        
        // Modal
        technologiesUsed: "Tecnologias Utilizadas",
        myResponsibilities: "Minhas Responsabilidades",
        viewDemo: "Ver Demo",
        viewCode: "Ver Código"
    },
    
    en: {
        // Navigation
        home: "Home",
        skills: "Skills",
        projects: "Projects",
        services: "Services",
        experience: "Experience",
        about: "About",
        contact: "Contact",
        
        // Hero Section
        heroTitle: "Igor <span class='highlight'>Alexandre</span>",
        heroSubtitle: "Computer Science Student",
        heroDescription: "Full Stack Developer focused on Front-end, Back-end and interested in Data Analysis. I transform ideas into functional and elegant digital solutions.",
        viewProjects: "View Projects",
        contactMe: "Contact Me",
        
        // Section Titles
        sectionSkills: "Skills",
        sectionProjects: "Projects",
        sectionServices: "Services",
        sectionExperience: "Professional Experience",
        sectionAbout: "About Me",
        sectionContact: "Contact",
        
        // Projects
        project1Title: "Lumi - Project",
        project1Desc: "Development of a website for automated resume analysis with Gemini AI integration.",
        project2Title: "M2 Academy Landing Page",
        project2Desc: "Institutional landing page for a gym integrated with automated WhatsApp customer service.",
        project3Title: "Landing Page - 4UPact - Digital Marketing",
        project3Desc: "Institutional landing page for a digital marketing agency.",
        project4Title: "Landing Page - Children's Psychology Center",
        project4Desc: "Institutional page with information about location, social media and contact methods.",
        project5Title: "WhatsApp Bot",
        project5Desc: "Bot for automated customer service via WhatsApp.",
        
        // Project Links
        videoPresentation: "Presentation Video",
        demo: "Demo",
        code: "Code",
        
        // Services
        service1Title: "Front-end Development",
        service1Desc: "Creation of modern and responsive interfaces using HTML, CSS, JavaScript and frameworks like Bootstrap.",
        service2Title: "Responsive Websites",
        service2Desc: "Development of websites that work perfectly on all devices and screen sizes.",
        service3Title: "Maintenance and Support",
        service3Desc: "Technical support, problem fixing and preventive maintenance of systems and infrastructure.",
        
        // Experience
        exp1Title: "IT Analyst",
        exp1Desc1: "Technical support for systems and IT infrastructure",
        exp1Desc2: "Assistance in resolving hardware and software related issues",
        exp1Desc3: "Preventive and corrective equipment maintenance",
        exp2Title: "Cashier",
        exp2Desc1: "Customer service at the cashier, ensuring accuracy and efficiency in transactions",
        exp3Title: "Freelancer",
        exp3Subtitle: "Website Production",
        exp3Desc1: "Development of custom websites, including planning, responsive design and implementation",
        exp3Desc2: "Experience in project management and delivery of customized digital solutions for regional clients",
        
        // About Me
        aboutTitle: "Full Stack Developer & Computer Science Student",
        aboutText1: "Computer Science student at Universidade Nove de Julho (UNINOVE), with academic experience in front-end and back-end development. Additionally, I have experience in computer maintenance and support.",
        aboutText2: "My goal is to work in areas related to Information Technology, Front-end and Back-end Development, as well as having interest in Data Analysis and Data Engineering.",
        aboutText3: "I'm a proactive person, with ease in learning new technologies and working in teams. I constantly seek professional development and to contribute to challenging projects.",
        letsTalk: "Let's Talk",
        
        // Contact
        location: "Location",
        locationText: "São Paulo, Brazil",
        email: "Email",
        education: "Education",
        educationText: "Bachelor's in Computer Science - UNINOVE (2023 - Present)",
        nameLabel: "Name",
        emailLabel: "Email",
        subjectLabel: "Subject",
        messageLabel: "Message",
        namePlaceholder: "Name",
        emailPlaceholder: "Email",
        subjectPlaceholder: "Subject",
        messagePlaceholder: "Message",
        sendMessage: "Send Message",
        
        // Footer
        copyright: "© 2025 Igor Alexandre. All rights reserved.",
        
        // Modal
        technologiesUsed: "Technologies Used",
        myResponsibilities: "My Responsibilities",
        viewDemo: "View Demo",
        viewCode: "View Code"
    },
    
    es: {
        // Navegación
        home: "Inicio",
        skills: "Habilidades",
        projects: "Proyectos",
        services: "Servicios",
        experience: "Experiencia",
        about: "Sobre",
        contact: "Contacto",
        
        // Hero Section
        heroTitle: "Igor <span class='highlight'>Alexandre</span>",
        heroSubtitle: "Estudiante de Ciencias de la Computación",
        heroDescription: "Desarrollador Full Stack enfocado en Front-end, Back-end e interesado en Análisis de Datos. Transformo ideas en soluciones digitales funcionales y elegantes.",
        viewProjects: "Ver Proyectos",
        contactMe: "Contáctame",
        
        // Títulos de secciones
        sectionSkills: "Habilidades",
        sectionProjects: "Proyectos",
        sectionServices: "Servicios",
        sectionExperience: "Experiencia Profesional",
        sectionAbout: "Sobre Mí",
        sectionContact: "Contacto",
        
        // Proyectos
        project1Title: "Lumi - Project",
        project1Desc: "Desarrollo de un sitio web para análisis automatizado de currículos con integración de Gemini AI.",
        project2Title: "Página de Destino - Academia M2",
        project2Desc: "Página institucional para gimnasio integrada con sistema de atención automatizada por WhatsApp.",
        project3Title: "Página de Destino - 4UPact - Marketing Digital",
        project3Desc: "Página institucional para agencia de marketing digital.",
        project4Title: "Página de Destino - Centro de Psicología Infantil",
        project4Desc: "Página institucional con información sobre ubicación, redes sociales y formas de contacto.",
        project5Title: "Bot para WhatsApp",
        project5Desc: "Bot para atención automática a través de WhatsApp.",
        
        // Enlaces de proyectos
        videoPresentation: "Video Presentación",
        demo: "Demo",
        code: "Código",
        
        // Servicios
        service1Title: "Desarrollo Front-end",
        service1Desc: "Creación de interfaces modernas y responsivas utilizando HTML, CSS, JavaScript y frameworks como Bootstrap.",
        service2Title: "Sitios Web Responsivos",
        service2Desc: "Desarrollo de sitios web que funcionan perfectamente en todos los dispositivos y tamaños de pantalla.",
        service3Title: "Mantenimiento y Soporte",
        service3Desc: "Soporte técnico, corrección de problemas y mantenimiento preventivo de sistemas e infraestructura.",
        
        // Experiencia
        exp1Title: "Analista de T.I",
        exp1Desc1: "Soporte técnico a sistemas e infraestructura de TI",
        exp1Desc2: "Apoyo en la resolución de problemas relacionados con hardware y software",
        exp1Desc3: "Mantenimiento preventivo y correctivo de equipos",
        exp2Title: "Cajero",
        exp2Desc1: "Atención al cliente en caja, garantizando precisión y eficiencia en las transacciones",
        exp3Title: "Freelancer",
        exp3Subtitle: "Producción de Sitios Web",
        exp3Desc1: "Desarrollo de sitios web personalizados, incluyendo planificación, diseño responsivo e implementación",
        exp3Desc2: "Experiencia en gestión de proyectos y entrega de soluciones digitales a medida para clientes regionales",
        
        // Sobre Mí
        aboutTitle: "Desarrollador Full Stack & Estudiante de Ciencias de la Computación",
        aboutText1: "Estudiante de Ciencias de la Computación en la Universidad Nove de Julho (UNINOVE), con experiencia académica en desarrollo front-end y back-end. Además, tengo experiencia en mantenimiento y soporte de computadoras.",
        aboutText2: "Mi objetivo es trabajar en áreas relacionadas con Tecnología de la Información, Desarrollo Front-end y Back-end, además de tener interés en Análisis de Datos e Ingeniería de Datos.",
        aboutText3: "Soy una persona proactiva, con facilidad para aprender nuevas tecnologías y trabajar en equipo. Busco constantemente desarrollarme profesionalmente y contribuir a proyectos desafiantes.",
        letsTalk: "Hablemos",
        
        // Contacto
        location: "Ubicación",
        locationText: "São Paulo, Brasil",
        email: "Correo",
        education: "Formación",
        educationText: "Licenciatura en Ciencias de la Computación - UNINOVE (2023 - Presente)",
        nameLabel: "Nombre",
        emailLabel: "Correo",
        subjectLabel: "Asunto",
        messageLabel: "Mensaje",
        namePlaceholder: "Nombre",
        emailPlaceholder: "Correo",
        subjectPlaceholder: "Asunto",
        messagePlaceholder: "Mensaje",
        sendMessage: "Enviar Mensaje",
        
        // Footer
        copyright: "© 2025 Igor Alexandre. Todos los derechos reservados.",
        
        // Modal
        technologiesUsed: "Tecnologías Utilizadas",
        myResponsibilities: "Mis Responsabilidades",
        viewDemo: "Ver Demo",
        viewCode: "Ver Código"
    }
};

// ============================================
// FUNÇÕES DE TRADUÇÃO
// ============================================

// Função para mudar o idioma
function changeLanguage(lang) {
    // Salvar preferência
    localStorage.setItem('preferredLanguage', lang);
    
    // Atualizar o atributo lang do HTML
    document.documentElement.lang = lang;
    
    // Atualizar o botão ativo
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Atualizar o texto do botão principal
    const langBtn = document.querySelector('.lang-btn');
    if (lang === 'pt') langBtn.innerHTML = '<i class="fas fa-globe"></i> <span class="lang-text">PT</span>';
    if (lang === 'en') langBtn.innerHTML = '<i class="fas fa-globe"></i> <span class="lang-text">EN</span>';
    if (lang === 'es') langBtn.innerHTML = '<i class="fas fa-globe"></i> <span class="lang-text">ES</span>';
    
    // Traduzir elementos com data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Verificar se é um elemento de entrada (input, textarea)
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                // Para elementos HTML normais
                element.innerHTML = translations[lang][key];
            }
        }
    });
    
    // Traduzir placeholders com data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Traduzir labels
    document.querySelectorAll('label[data-i18n]').forEach(label => {
        const key = label.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            label.textContent = translations[lang][key];
        }
    });
    
    // Atualizar título da página
    document.title = `Igor Alexandre | ${lang === 'pt' ? 'Desenvolvedor Full Stack' : lang === 'en' ? 'Full Stack Developer' : 'Desarrollador Full Stack'}`;
    
    // Atualizar conteúdo do modal se estiver aberto
    updateModalContent(lang);
}

// Atualizar conteúdo do modal com base no idioma
function updateModalContent(lang) {
    const modal = document.getElementById('projectModal');
    if (modal.style.display === 'block') {
        // Atualizar títulos do modal
        const modalTitle = document.querySelector('.modal-body h3[data-i18n="technologiesUsed"]');
        const modalResponsibilitiesTitle = document.querySelector('.modal-responsibilities h3[data-i18n="myResponsibilities"]');
        const modalDemoLink = document.querySelector('#modalDemo span[data-i18n="viewDemo"]');
        const modalCodeLink = document.querySelector('#modalCode span[data-i18n="viewCode"]');
        
        if (modalTitle && translations[lang] && translations[lang]['technologiesUsed']) {
            modalTitle.textContent = translations[lang]['technologiesUsed'];
        }
        if (modalResponsibilitiesTitle && translations[lang] && translations[lang]['myResponsibilities']) {
            modalResponsibilitiesTitle.textContent = translations[lang]['myResponsibilities'];
        }
        if (modalDemoLink && translations[lang] && translations[lang]['viewDemo']) {
            modalDemoLink.textContent = translations[lang]['viewDemo'];
        }
        if (modalCodeLink && translations[lang] && translations[lang]['viewCode']) {
            modalCodeLink.textContent = translations[lang]['viewCode'];
        }
    }
}

// ============================================
// INICIALIZAÇÃO DO SISTEMA DE IDIOMAS - VERSÃO CORRIGIDA
// ============================================

// Função para inicializar o sistema de idiomas
function initLanguageSystem() {
    // Detectar idioma preferido do usuário
    const savedLang = localStorage.getItem('preferredLanguage');
    const browserLang = navigator.language || navigator.userLanguage;
    let defaultLang = 'pt';
    
    // Verificar se o navegador está em inglês ou espanhol
    if (browserLang.startsWith('en')) defaultLang = 'en';
    if (browserLang.startsWith('es')) defaultLang = 'es';
    
    // Usar idioma salvo ou detectado
    const langToUse = savedLang || defaultLang;
    
    // Aplicar idioma inicial
    changeLanguage(langToUse);
    
    // Adicionar event listeners aos botões de idioma
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
            // Fechar dropdown após seleção
            document.querySelector('.language-selector').classList.remove('active');
        });
    });
    
    // Adicionar event listener ao botão principal do seletor
    const langBtn = document.querySelector('.lang-btn');
    const langSelector = document.querySelector('.language-selector');
    
    if (langBtn && langSelector) {
        // Alternar dropdown ao clicar no botão
        langBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            langSelector.classList.toggle('active');
        });
        
        // Fechar dropdown ao clicar fora
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.language-selector')) {
                langSelector.classList.remove('active');
            }
        });
        
        // Fechar dropdown ao rolar
        window.addEventListener('scroll', function() {
            langSelector.classList.remove('active');
        });
    }
}

// Dados dos projetos para o modal
const projectsData = {
    1: {
        title: "Plataforma de Análise de Currículos com IA",
        description: "Desenvolvimento de um site para análise automatizada de currículos com integração da Gemini AI para fornecer feedback inteligente sobre candidaturas.",
        technologies: ["HTML", "CSS", "JavaScript", "C#", "Gemini AI API"],
        responsibilities: [
            "Desenvolvimento do front-end responsivo com HTML, CSS e JavaScript",
        ],
        demo: "https://www.youtube.com/watch?v=1DIdJb87a-A",
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
        demo: "##",
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
        demo: "##",
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
const modalVideo = document.getElementById('modalVideo');
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

const regex = /^https?:\/\/[a-zA-Z0-9-]+\.github\.io(\/[A-Za-z0-9._-]+)*\/?$/;

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
            if (project.demo === "##" || project.demo === "#" || !project.demo) {
                modalDemo.innerHTML = '<i class="fas fa-clock"></i> Demo em Breve';
                modalDemo.style.background = '#6c757d';
                modalDemo.style.cursor = 'not-allowed';
                modalDemo.onclick = function(e) {
                    e.preventDefault();
                    const currentLang = localStorage.getItem('preferredLanguage') || 'pt';
                    const message = currentLang === 'pt' ? 
                        '🚧 Demo em desenvolvimento!\nEste projeto ainda não possui versão pública.' :
                        currentLang === 'en' ?
                        '🚧 Demo under development!\nThis project does not have a public version yet.' :
                        '🚧 Demo en desarrollo!\nEste proyecto aún no tiene una versión pública.';
                    alert(message);
                };
                modalDemo.removeAttribute('href');
            }
            if (regex.test(project.demo)) {
                modalDemo.href = project.demo;
                modalDemo.target = "_blank";
                modalDemo.innerHTML = '<i class="fas fa-external-link-alt"></i> <span data-i18n="viewDemo">Ver Demo</span>';
                modalDemo.style.background = '';
                modalDemo.style.cursor = 'pointer';
                modalDemo.onclick = null;
            }
            if (project.demo.includes("youtube.com") || project.demo.includes("youtu.be")) {
                modalDemo.href = project.demo;
                modalDemo.target = "_blank";
                modalDemo.innerHTML = '<i class="fa-brands fa-youtube"></i> <span data-i18n="videoPresentation">Ver Video</span>';
                modalDemo.style.background = '';
                modalDemo.style.cursor = 'pointer';
                modalDemo.onclick = null;
            }

            // Link do código sempre abre em nova aba
            modalCode.href = project.code;
            modalCode.target = "_blank";
            modalCode.innerHTML = '<i class="fab fa-github"></i> <span data-i18n="viewCode">Ver Código</span>';

            // Mostrar modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // Atualizar textos do modal com o idioma atual
            const currentLang = localStorage.getItem('preferredLanguage') || 'pt';
            updateModalContent(currentLang);
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

// Menu toggle para mobile - VERSÃO ÚNICA
document.querySelector('.menu-toggle').addEventListener('click', function () {
    const navbar = document.querySelector('.navbar');
    const langSelector = document.querySelector('.language-selector');
    
    navbar.classList.toggle('active');
    langSelector.classList.remove('active');
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
    initLanguageSystem();
    initInfiniteCarousel();
});