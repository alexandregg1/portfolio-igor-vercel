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
        heroSubtitle: "Analista de Dados Júnior",
        heroDescription: "Atuo na transformação de dados em análises, dashboards e insights com SQL, Power BI, Python e R. Minha formação em Ciência da Computação e experiência em TI me dão uma visão técnica sobre infraestrutura, automação e qualidade da informação.",
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
        project1Title: "Análise de Dados - League of Legends (Early Game)",
        project1Desc: "Projeto de Data Analytics que investiga quais fatores dos primeiros 10 minutos de partidas ranked mais influenciam a vitória, combinando tratamento de dados em R, validação com SQL e um dashboard interativo no Power BI.",

        project2Title: "Análise Preditiva em eSports - Previsão de Vitória em LoL",
        project2Desc: "Modelo de Machine Learning que prevê o vencedor de partidas Challenger de League of Legends usando dados dos primeiros 10 minutos, medindo o efeito \"bola de neve\" no early game com 89% de acurácia.",

        project3Title: "Previsão de Churn — Telco Customer Dataset",
        project3Desc: "Construir um modelo classificatório que identifique clientes com risco de churn, priorizando recall sobre precision — a lógica de negócio adotada foi: deixar passar um cliente que vai cancelar (falso negativo) é mais caro do que oferecer uma ação de retenção a alguém que não ia cancelar mesmo (falso positivo).",

        project4Title: "Lumi - Plataforma de Análise de Currículos com IA",
        project4Desc: "Desenvolvimento de um site para análise automatizada de currículos com integração da Gemini AI para fornecer feedback inteligente sobre candidaturas.",

        // Links dos projetos
        videoPresentation: "Video Apresentativo",
        demo: "Demo",
        code: "Repositório",

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
        aboutTitle: "Analista de Dados Júnior & Bacharel em Ciência da Computação",
        aboutText1: "Analista de Dados Júnior com experiência prática em SQL, Power BI, Python e R, atuando na transformação de dados em análises, dashboards e insights para apoiar decisões de negócio. Minha formação em Ciência da Computação pela UNINOVE, somada à experiência em TI, me dá uma visão técnica sobre infraestrutura, automação, integração de sistemas e qualidade da informação.",
        aboutText2: "Atualmente atuo como Analista de T.I., trabalhando com suporte, hardware, infraestrutura e integração de sistemas, enquanto aplico análise de dados e automação para identificar padrões, organizar informações e melhorar processos. Em projetos de Data Analytics, já trabalhei com bases de 12 mil+ registros e desenvolvi um dashboard no Power BI que consolida 4 dimensões de negócio em uma única interface, reduzindo de horas para segundos o tempo de consolidação de relatórios.",
        aboutText3: "Também desenvolvi um modelo preditivo para prever o vencedor de partidas de League of Legends aos 10 minutos de jogo, utilizando engenharia de variáveis, seleção de features e validação do modelo em R e Python, alcançando 89% de acurácia. Meu diferencial é combinar análise de dados com visão de desenvolvimento e TI, e busco oportunidades como Analista de Dados Júnior onde eu possa unir análise, visualização, SQL, programação e visão técnica para resolver problemas de negócio.",
        letsTalk: "Vamos Conversar",

        // Contato
        location: "Localização",
        locationText: "São Paulo, Brasil",
        email: "Email",
        education: "Formação",
        educationText: "Bacharelado em Ciência da Computação - UNINOVE (2023 - Presente) · Google: Foundations - Data, Data, Everywhere · Statistics for Data Science and Business Analysis - Udemy",
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
        viewCode: "Ver Repositório",
        viewDashboard: "Ver Dashboard",
        demoSoon: "Demo em Breve"
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
        heroSubtitle: "Junior Data Analyst",
        heroDescription: "I turn data into analyses, dashboards and insights using SQL, Power BI, Python and R. My background in Computer Science and IT experience give me a technical view of infrastructure, automation and data quality.",
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
        // Projects
        project1Title: "League of Legends Early Game Data Analysis",
        project1Desc: "Data Analytics project investigating which factors in the first 10 minutes of ranked matches most influence victory, combining data cleaning in R, validation with SQL and an interactive Power BI dashboard.",

        project2Title: "Esports Predictive Analysis - LoL Win Prediction",
        project2Desc: "Machine Learning model that predicts the winner of Challenger-tier League of Legends matches using the first 10 minutes of game data, measuring the \"snowball\" effect in the early game with 89% accuracy.",

        project3Title: "Churn Prediction — Telco Customer Dataset",
        project3Desc: "Building a classification model to identify customers at risk of churn, prioritizing recall over precision — the business logic adopted was that missing a customer who is going to cancel (false negative) is more costly than offering a retention action to someone who would not have canceled anyway (false positive).",

        project4Title: "Lumi - AI-Powered Resume Analysis Platform",
        project4Desc: "Development of a website for automated resume analysis with Gemini AI integration to provide intelligent feedback on job applications.",

        // Project Links
        videoPresentation: "Presentation Video",
        demo: "Demo",
        code: "Repository",

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
        aboutTitle: "Junior Data Analyst & Computer Science Graduate",
        aboutText1: "I'm a Junior Data Analyst with hands-on experience in SQL, Power BI, Python and R, turning data into analyses, dashboards and insights that support business decisions. My background in Computer Science (UNINOVE), combined with IT experience, gives me a technical view of infrastructure, automation, systems integration and data quality.",
        aboutText2: "I currently work as an IT Analyst, handling support, hardware, infrastructure and systems integration, while applying data analysis and automation to spot patterns, organize information and improve processes. In Data Analytics projects, I've worked with datasets of 12,000+ records and built a Power BI dashboard consolidating 4 business dimensions into a single interface, cutting report consolidation time from hours to seconds.",
        aboutText3: "I also built a predictive model to forecast the winner of League of Legends matches at the 10-minute mark, using feature engineering, feature selection and model validation in R and Python, reaching 89% accuracy. My edge is combining data analysis with a development and IT mindset — I'm looking for Junior Data Analyst opportunities where I can bring together analysis, visualization, SQL, programming and technical insight to solve business problems.",
        letsTalk: "Let's Talk",

        // Contact
        location: "Location",
        locationText: "São Paulo, Brazil",
        email: "Email",
        education: "Education",
        educationText: "Bachelor's in Computer Science - UNINOVE (2023 - Present) · Google: Foundations - Data, Data, Everywhere · Statistics for Data Science and Business Analysis - Udemy",
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
        viewCode: "View Repository",
        viewDashboard: "View Dashboard",
        demoSoon: "Demo Coming Soon"
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
        heroSubtitle: "Analista de Datos Júnior",
        heroDescription: "Transformo datos en análisis, dashboards e insights utilizando SQL, Power BI, Python y R. Mi formación en Ciencias de la Computación y experiencia en TI me dan una visión técnica sobre infraestructura, automatización y calidad de la información.",
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
        // Proyectos
        project1Title: "Análisis de Datos - League of Legends (Early Game)",
        project1Desc: "Proyecto de Data Analytics que investiga qué factores de los primeros 10 minutos de partidas ranked influyen más en la victoria, combinando limpieza de datos en R, validación con SQL y un dashboard interactivo en Power BI.",

        project2Title: "Análisis Predictivo en eSports - Predicción de Victoria en LoL",
        project2Desc: "Modelo de Machine Learning que predice al ganador de partidas Challenger de League of Legends usando datos de los primeros 10 minutos, midiendo el efecto \"bola de nieve\" en el early game con 89% de precisión.",

        project3Title: "Predicción de Churn — Telco Customer Dataset",
        project3Desc: "Construcción de un modelo de clasificación para identificar clientes con riesgo de churn, priorizando recall sobre precision — la lógica de negocio adoptada fue que dejar escapar a un cliente que va a cancelar (falso negativo) es más costoso que ofrecer una acción de retención a alguien que no iba a cancelar (falso positivo).",

        project4Title: "Lumi - Plataforma de Análisis de Currículos con IA",
        project4Desc: "Desarrollo de un sitio web para el análisis automatizado de currículos con integración de Gemini AI para proporcionar feedback inteligente sobre candidaturas.",

        // Enlaces de proyectos
        videoPresentation: "Video Presentación",
        demo: "Demo",
        code: "Repositorio",

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
        aboutTitle: "Analista de Datos Júnior & Graduado en Ciencias de la Computación",
        aboutText1: "Soy Analista de Datos Júnior con experiencia práctica en SQL, Power BI, Python y R, transformando datos en análisis, dashboards e insights que apoyan decisiones de negocio. Mi formación en Ciencias de la Computación (UNINOVE), sumada a mi experiencia en TI, me da una visión técnica sobre infraestructura, automatización, integración de sistemas y calidad de la información.",
        aboutText2: "Actualmente trabajo como Analista de TI, encargándome de soporte, hardware, infraestructura e integración de sistemas, mientras aplico análisis de datos y automatización para identificar patrones, organizar información y mejorar procesos. En proyectos de Data Analytics, trabajé con bases de más de 12 mil registros y desarrollé un dashboard en Power BI que consolida 4 dimensiones de negocio en una sola interfaz, reduciendo de horas a segundos el tiempo de consolidación de informes.",
        aboutText3: "También desarrollé un modelo predictivo para anticipar al ganador de partidas de League of Legends a los 10 minutos de juego, utilizando ingeniería de variables, selección de features y validación del modelo en R y Python, alcanzando un 89% de precisión. Mi diferencial es combinar el análisis de datos con una visión de desarrollo y TI; busco oportunidades como Analista de Datos Júnior donde pueda unir análisis, visualización, SQL, programación y visión técnica para resolver problemas de negocio.",
        letsTalk: "Hablemos",

        // Contacto
        location: "Ubicación",
        locationText: "São Paulo, Brasil",
        email: "Correo",
        education: "Formación",
        educationText: "Licenciatura en Ciencias de la Computación - UNINOVE (2023 - Presente) · Google: Foundations - Data, Data, Everywhere · Statistics for Data Science and Business Analysis - Udemy",
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
        viewCode: "Ver Repositorio",
        viewDashboard: "Ver Dashboard",
        demoSoon: "Demo Próximamente"
    }
};

// ============================================
// FUNÇÕES DE TRADUÇÃO
// ============================================

const availableLanguages = ['pt', 'en', 'es'];

// Função para mudar o idioma
function changeLanguage(lang) {
    // Garantir que o idioma existe
    if (!translations[lang]) {
        lang = 'pt';
    }

    // Salvar preferência
    localStorage.setItem('preferredLanguage', lang);

    // Atualizar o atributo lang do HTML
    document.documentElement.lang = lang;

    // Traduzir elementos com data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');

        if (translations[lang] && translations[lang][key]) {
            // Verificar se é um elemento de entrada
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

    // Atualizar texto do novo botão de idioma
    const languageText = document.getElementById('languageSwitcherText');

    if (languageText) {
        languageText.textContent = lang.toUpperCase();
    }

    // Atualizar acessibilidade do botão
    const languageSwitcher = document.getElementById('languageSwitcher');

    if (languageSwitcher) {
        languageSwitcher.setAttribute(
            'aria-label',
            `Mudar idioma. Idioma atual: ${lang.toUpperCase()}`
        );

        languageSwitcher.setAttribute(
            'title',
            `Mudar idioma: ${lang.toUpperCase()}`
        );
    }

    // Atualizar título da página
    document.title =
        lang === 'pt'
            ? 'Igor Alexandre | Analista de Dados'
            : lang === 'en'
                ? 'Igor Alexandre | Data Analyst'
                : 'Igor Alexandre | Analista de Datos';

    // Atualizar conteúdo do modal se estiver aberto
    if (typeof updateModalContent === 'function') {
        updateModalContent(lang);
    }
}

// Atualizar conteúdo do modal com base no idioma
function updateModalContent(lang) {
    const modal = document.getElementById('projectModal');

    if (!modal || modal.style.display !== 'block') {
        return;
    }

    const language = translations[lang] || translations.pt;
    const project = projectsData[activeProjectId];

    if (project) {
        const projectNumber = Number(activeProjectId);
        modalTitle.textContent =
            language[`project${projectNumber}Title`] || project.title;
        modalDescription.textContent =
            language[`project${projectNumber}Desc`] || project.description;

        const responsibilities =
            projectResponsibilitiesTranslations[lang]?.[projectNumber] ||
            project.responsibilities;

        modalResponsibilities.innerHTML = '';
        responsibilities.forEach(responsibility => {
            const item = document.createElement('div');
            const icon = document.createElement('i');
            const text = document.createElement('span');

            item.className = 'responsibility-item';
            icon.className = 'fas fa-check-circle';
            text.textContent = responsibility;
            item.append(icon, text);
            modalResponsibilities.appendChild(item);
        });
    }

    modal.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (language[key]) {
            element.textContent = language[key];
        }
    });
}

// ============================================
// INICIALIZAÇÃO DO SISTEMA DE IDIOMAS
// ============================================

function initLanguageSystem() {
    // Idioma salvo anteriormente
    const savedLanguage = localStorage.getItem('preferredLanguage');

    // Idioma do navegador
    const browserLanguage =
        navigator.language ||
        navigator.userLanguage ||
        'pt';

    let initialLanguage = 'pt';

    // Prioridade:
    // 1. Idioma salvo pelo usuário
    // 2. Idioma do navegador
    // 3. Português como fallback

    if (availableLanguages.includes(savedLanguage)) {
        initialLanguage = savedLanguage;
    } else {
        if (browserLanguage.startsWith('en')) {
            initialLanguage = 'en';
        }

        if (browserLanguage.startsWith('es')) {
            initialLanguage = 'es';
        }
    }

    // Aplicar idioma inicial
    changeLanguage(initialLanguage);

    // Botão único de alternância de idioma
    const languageSwitcher =
        document.getElementById('languageSwitcher');

    if (!languageSwitcher) {
        return;
    }

    languageSwitcher.addEventListener('click', function () {
        const currentLanguage =
            localStorage.getItem('preferredLanguage') || 'pt';

        const currentIndex =
            availableLanguages.indexOf(currentLanguage);

        const safeIndex =
            currentIndex >= 0 ? currentIndex : 0;

        const nextIndex =
            (safeIndex + 1) % availableLanguages.length;

        const nextLanguage =
            availableLanguages[nextIndex];

        changeLanguage(nextLanguage);
    });
}

// ============================================
// DADOS DOS PROJETOS
// ============================================

const projectsData = {
    1: {
        title: "Análise de Dados - League of Legends (Early Game)",
        description: "Projeto de Data Analytics que investiga quais fatores dos primeiros 10 minutos de partidas ranked de League of Legends mais influenciam a vitória, combinando tratamento de dados em R, validação com SQL e um dashboard interativo no Power BI.",
        technologies: ["R", "SQL", "Power BI", "Data Analytics"],
        responsibilities: [
            "Tratamento e limpeza de uma base com mais de 9,9 mil partidas usando R",
            "Criação de variáveis derivadas (diferença de ouro, kills e objetivos)",
            "Validação e consultas aos dados com SQL",
            "Desenvolvimento de dashboard interativo no Power BI consolidando 4 dimensões de negócio",
            "Identificação de insights: vantagem de ouro e controle de objetivos como principais fatores de vitória"
        ],
        demo: "assets/mockups/lol-dashboard.png",
        code: "https://github.com/alexandregg1/lol-data-analysis-early-game"
    },

    2: {
        title: "Análise Preditiva em eSports - Previsão de Vitória em LoL",
        description: "Modelo de Machine Learning que prevê o vencedor de partidas de League of Legends do cenário Challenger com base em dados dos primeiros 10 minutos, medindo o efeito \"bola de neve\" (snowball) no early game.",
        technologies: ["Python", "XGBoost", "R", "Riot API", "Machine Learning"],
        responsibilities: [
            "Extração de dados de partidas Challenger via Riot API (Match-V5) com Python",
            "Tratamento e engenharia de features em R (remoção de outliers, criação de gold_diff, dragon_diff, etc.)",
            "Treinamento e regularização de um classificador XGBoost em Python",
            "Validação do modelo com split temporal (treino/validação/teste), atingindo 89,1% de acurácia no teste",
            "Análise de importância de features para interpretar os resultados do modelo"
        ],
        demo: "assets/mockups/esports-predictivo.png",
        code: "https://github.com/alexandregg1/esports-predictive-analysis"
    },
    3: {
        title: "Previsão de Churn — Telco Customer Dataset",
        description: "Projeto de Machine Learning aplicado a um problema de negócio real: prever quais clientes de uma empresa de telecomunicações têm maior risco de cancelar o serviço (churn), usando o dataset Telco Customer Churn do Kaggle.",
        technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "Machine Learning"],
        responsibilities: [
            "Extração e tratamento de dados do dataset Telco Customer Churn",
            "Desenvolvimento de um modelo classificatório para prever churn",
            "Análise de resultados e interpretação dos insights"
        ],
        demo: "assets/mockups/01_distribuicao_churn.png",
        code: "https://github.com/alexandregg1/Churn-Analysis-Project"
    },
    4: {
        title: "Plataforma de Análise de Currículos com IA",
        description: "Desenvolvimento de um site para análise automatizada de currículos com integração da Gemini AI para fornecer feedback inteligente sobre candidaturas.",
        technologies: ["HTML", "CSS", "JavaScript", "C#", "Gemini AI API"],
        responsibilities: [
            "Desenvolvimento do front-end responsivo com HTML, CSS e JavaScript",
        ],
        demo: "https://www.youtube.com/watch?v=1DIdJb87a-A",
        code: "https://github.com/SabrynaRodrigues/lumi_project/tree/consumindoAPI"
    }
};

const projectResponsibilitiesTranslations = {
    pt: {
        1: [
            "Tratamento e limpeza de uma base com mais de 9,9 mil partidas usando R",
            "Criação de variáveis derivadas (diferença de ouro, kills e objetivos)",
            "Validação e consultas aos dados com SQL",
            "Desenvolvimento de dashboard interativo no Power BI consolidando 4 dimensões de negócio",
            "Identificação de insights: vantagem de ouro e controle de objetivos como principais fatores de vitória"
        ],
        2: [
            "Extração de dados de partidas Challenger via Riot API (Match-V5) com Python",
            "Tratamento e engenharia de features em R (remoção de outliers, criação de gold_diff, dragon_diff, etc.)",
            "Treinamento e regularização de um classificador XGBoost em Python",
            "Validação do modelo com split temporal (treino/validação/teste), atingindo 89,1% de acurácia no teste",
            "Análise de importância de features para interpretar os resultados do modelo"
        ],
        3: [
            "Extração e tratamento de dados do dataset Telco Customer Churn",
            "Desenvolvimento de um modelo classificatório para prever churn",
            "Análise de resultados e interpretação dos insights"
        ],
        4: [
            "Desenvolvimento do front-end responsivo com HTML, CSS e JavaScript"
        ]
    },
    en: {
        1: [
            "Cleaned and prepared a dataset of more than 9,900 matches using R",
            "Created derived variables (gold, kill and objective differences)",
            "Validated and queried the data with SQL",
            "Built an interactive Power BI dashboard consolidating four business dimensions",
            "Identified gold advantage and objective control as the main factors behind wins"
        ],
        2: [
            "Extracted Challenger match data through the Riot API (Match-V5) using Python",
            "Cleaned data and engineered features in R, including outlier removal and gold_diff and dragon_diff creation",
            "Trained and regularized an XGBoost classifier in Python",
            "Validated the model with a time-based train/validation/test split, reaching 89.1% test accuracy",
            "Analyzed feature importance to interpret the model results"
        ],
        3: [
            "Extracted and prepared data from the Telco Customer Churn dataset",
            "Developed a classification model to predict churn",
            "Analyzed the results and interpreted the findings"
        ],
        4: [
            "Built the responsive front end using HTML, CSS and JavaScript"
        ]
    },
    es: {
        1: [
            "Preparación y limpieza en R de una base con más de 9.900 partidas",
            "Creación de variables derivadas (diferencias de oro, asesinatos y objetivos)",
            "Validación y consultas de datos con SQL",
            "Desarrollo de un dashboard interactivo en Power BI que consolida cuatro dimensiones de negocio",
            "Identificación de insights: la ventaja de oro y el control de objetivos son factores clave de victoria"
        ],
        2: [
            "Extracción de datos de partidas Challenger mediante la API de Riot (Match-V5) con Python",
            "Limpieza de datos e ingeniería de variables en R, incluida la eliminación de valores atípicos y la creación de gold_diff y dragon_diff",
            "Entrenamiento y regularización de un clasificador XGBoost en Python",
            "Validación del modelo con una división temporal de entrenamiento, validación y prueba, alcanzando un 89,1% de precisión en la prueba",
            "Análisis de la importancia de las variables para interpretar los resultados del modelo"
        ],
        3: [
            "Extracción y preparación de datos del dataset Telco Customer Churn",
            "Desarrollo de un modelo de clasificación para predecir churn",
            "Análisis de resultados e interpretación de los hallazgos"
        ],
        4: [
            "Desarrollo del front-end responsivo con HTML, CSS y JavaScript"
        ]
    }
};

// ============================================
// DADOS DAS TECNOLOGIAS
// ============================================

const technologies = [
    { name: "HTML", icon: "fab fa-html5", level: "" },
    { name: "CSS", icon: "fab fa-css3-alt", level: "" },
    { name: "Bootstrap", icon: "fab fa-bootstrap", level: "" },
    { name: "JavaScript", icon: "fab fa-js", level: "" },
    { name: "Node.js", icon: "fab fa-node-js", level: "" },
    { name: "Python", icon: "fab fa-python", level: "" },
    { name: "C", icon: "fas fa-code", level: "" },
    { name: "SQL", icon: "fas fa-database", level: "" },
    { name: "GIT", icon: "fab fa-git-alt", level: "" }
];

// ============================================
// ELEMENTOS DO MODAL
// ============================================

const modal = document.getElementById('projectModal');
const closeModal = document.querySelector('.close-modal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalTech = document.getElementById('modalTech');
const modalResponsibilities =
    document.getElementById('modalResponsibilities');
const modalDemo = document.getElementById('modalDemo');
const modalVideo = document.getElementById('modalVideo');
const modalCode = document.getElementById('modalCode');
let activeProjectId = null;

// ============================================
// CARROSSEL INFINITO
// ============================================

function initInfiniteCarousel() {
    const carousel =
        document.getElementById('skillsCarousel');

    if (!carousel) {
        return;
    }

    // Duplicar os itens para criar efeito de loop infinito suave
    const duplicatedTechnologies = [
        ...technologies,
        ...technologies,
        ...technologies
    ];

    duplicatedTechnologies.forEach(tech => {
        const skillItem = document.createElement('div');

        skillItem.className = 'skill-item';

        skillItem.innerHTML = `
            <div class="skill-icon">
                <i class="${tech.icon}"></i>
            </div>

            <div class="skill-name">
                ${tech.name}
            </div>

            <div class="skill-level">
                ${tech.level}
            </div>
        `;

        carousel.appendChild(skillItem);
    });
}

// ============================================
// VALIDAÇÃO DE LINKS
// ============================================

const regex =
    /^https?:\/\/[a-zA-Z0-9-]+\.github\.io(\/[A-Za-z0-9._-]+)*\/?$/;

// ============================================
// ABRIR MODAL DO PROJETO
// ============================================

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const projectId =
            card.getAttribute('data-project');

        const project =
            projectsData[projectId];

        if (project) {
            activeProjectId = projectId;

            modalTitle.textContent =
                project.title;

            modalDescription.textContent =
                project.description;

            // Limpar e adicionar tecnologias
            modalTech.innerHTML = '';

            project.technologies.forEach(tech => {
                const techTag =
                    document.createElement('span');

                techTag.className =
                    'tech-tag';

                techTag.textContent =
                    tech;

                modalTech.appendChild(
                    techTag
                );
            });

            // Limpar e adicionar responsabilidades
            modalResponsibilities.innerHTML = '';

            project.responsibilities.forEach(resp => {
                const respItem =
                    document.createElement('div');

                respItem.className =
                    'responsibility-item';

                respItem.innerHTML = `
                    <i class="fas fa-check-circle"></i>
                    <span>${resp}</span>
                `;

                modalResponsibilities.appendChild(
                    respItem
                );
            });

            // ========================================
            // ATUALIZAR LINK DA DEMO
            // ========================================

            if (
                project.demo === "##" ||
                project.demo === "#" ||
                !project.demo
            ) {
                modalDemo.innerHTML =
                    '<i class="fas fa-clock"></i> <span data-i18n="demoSoon">Demo em Breve</span>';

                modalDemo.style.background =
                    '#6c757d';

                modalDemo.style.cursor =
                    'not-allowed';

                modalDemo.onclick =
                    function (e) {
                        e.preventDefault();

                        const currentLang =
                            localStorage.getItem(
                                'preferredLanguage'
                            ) || 'pt';

                        const message =
                            currentLang === 'pt'
                                ? '🚧 Demo em desenvolvimento!\nEste projeto ainda não possui versão pública.'
                                : currentLang === 'en'
                                    ? '🚧 Demo under development!\nThis project does not have a public version yet.'
                                    : '🚧 Demo en desarrollo!\nEste proyecto aún no tiene una versión pública.';

                        alert(message);
                    };

                modalDemo.removeAttribute('href');
            }

            // ========================================
            // DEMO GITHUB PAGES
            // ========================================

            if (regex.test(project.demo)) {
                modalDemo.href =
                    project.demo;

                modalDemo.target =
                    "_blank";

                modalDemo.innerHTML =
                    '<i class="fas fa-external-link-alt"></i> <span data-i18n="viewDemo">Ver Demo</span>';

                modalDemo.style.background =
                    '';

                modalDemo.style.cursor =
                    'pointer';

                modalDemo.onclick =
                    null;
            }

            // ========================================
            // DEMO YOUTUBE
            // ========================================

            if (
                project.demo.includes("youtube.com") ||
                project.demo.includes("youtu.be")
            ) {
                modalDemo.href =
                    project.demo;

                modalDemo.target =
                    "_blank";

                modalDemo.innerHTML =
                    '<i class="fa-brands fa-youtube"></i> <span data-i18n="videoPresentation">Ver Video</span>';

                modalDemo.style.background =
                    '';

                modalDemo.style.cursor =
                    'pointer';

                modalDemo.onclick =
                    null;
            }

            // ========================================
            // DEMO IMAGEM / DASHBOARD
            // ========================================

            if (
                /\.(png|jpe?g|webp)$/i.test(
                    project.demo
                )
            ) {
                modalDemo.href =
                    project.demo;

                modalDemo.target =
                    "_blank";

                modalDemo.innerHTML =
                    '<i class="fas fa-chart-column"></i> <span data-i18n="viewDashboard">Ver Dashboard</span>';

                modalDemo.style.background =
                    '';

                modalDemo.style.cursor =
                    'pointer';

                modalDemo.onclick =
                    null;
            }

            // ========================================
            // LINK DO CÓDIGO
            // ========================================

            modalCode.href =
                project.code;

            modalCode.target =
                "_blank";

            modalCode.innerHTML =
                '<i class="fab fa-github"></i> <span data-i18n="viewCode">Ver Repositório</span>';

            // ========================================
            // MOSTRAR MODAL
            // ========================================

            modal.style.display =
                'block';

            document.body.style.overflow =
                'hidden';

            // Atualizar textos do modal
            const currentLang =
                localStorage.getItem(
                    'preferredLanguage'
                ) || 'pt';

            updateModalContent(
                currentLang
            );
        }
    });
});

// ============================================
// FECHAR MODAL
// ============================================

if (closeModal && modal) {
    closeModal.addEventListener(
        'click',
        () => {
            modal.style.display =
                'none';

            document.body.style.overflow =
                'auto';
        }
    );
}

// ============================================
// FECHAR MODAL AO CLICAR FORA
// ============================================

window.addEventListener(
    'click',
    (e) => {
        if (
            modal &&
            e.target === modal
        ) {
            modal.style.display =
                'none';

            document.body.style.overflow =
                'auto';
        }
    }
);

// ============================================
// MENU MOBILE
// ============================================

const menuToggle =
    document.querySelector('.menu-toggle');

if (menuToggle) {
    menuToggle.addEventListener(
        'click',
        function () {
            const navbar =
                document.querySelector('.navbar');

            navbar.classList.toggle(
                'active'
            );
        }
    );
}

// ============================================
// FECHAR MENU AO CLICAR EM LINK
// ============================================

document
    .querySelectorAll('.nav-links a')
    .forEach(link => {
        link.addEventListener(
            'click',
            () => {
                if (
                    window.innerWidth <= 992
                ) {
                    const navbar =
                        document.querySelector(
                            '.navbar'
                        );

                    if (navbar) {
                        navbar.classList.remove(
                            'active'
                        );
                    }
                }

                // Atualizar link ativo
                document
                    .querySelectorAll(
                        '.nav-links a'
                    )
                    .forEach(a =>
                        a.classList.remove(
                            'active'
                        )
                    );

                link.classList.add(
                    'active'
                );
            }
        );
    });

// ============================================
// ANIMAÇÃO SUAVE AO ROLAR
// ============================================

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {
        anchor.addEventListener(
            'click',
            function (e) {
                e.preventDefault();

                const targetId =
                    this.getAttribute(
                        'href'
                    );

                if (
                    targetId === '#'
                ) {
                    return;
                }

                const targetElement =
                    document.querySelector(
                        targetId
                    );

                if (targetElement) {
                    window.scrollTo({
                        top:
                            targetElement.offsetTop -
                            80,

                        behavior:
                            'smooth'
                    });
                }
            }
        );
    });

// ============================================
// INICIALIZAR PARTÍCULAS
// ============================================

particlesJS(
    'particles-js',
    {
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
    }
);

// ============================================
// INICIALIZAÇÃO GERAL
// ============================================

document.addEventListener(
    'DOMContentLoaded',
    function () {
        initLanguageSystem();
        initInfiniteCarousel();
    }
);