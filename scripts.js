document.addEventListener("DOMContentLoaded", function () {

  const themeBtn = document.getElementById("themeBtn");
  const langBtn = document.getElementById("langBtn");

  //tema escuro ou claro
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      themeBtn.innerText = "Light";
    } else {
      themeBtn.innerText = "Dark";
    }
  });

  document.body.classList.add("dark");
  themeBtn.innerText = "Light";

  let language =
    localStorage.getItem("language") ||
    ((navigator.language || navigator.userLanguage).startsWith("pt") ? "pt" : "en");

  function setLanguage(lang) {
    document.body.style.visibility = "visible";
    language = lang;

    if (language === "pt") {
      langBtn.innerText = "EN";

      document.getElementById("navimpact").innerText = "Impacto";
      document.getElementById("navexperience").innerText = "Experiência";
      document.getElementById("navcontact").innerText = "Contato";
      document.getElementById("navprojects").innerText = "Projetos";

      document.getElementById("eyebrow").innerText = "TRANSPORTE • DADOS • INOVAÇÃO"
      
      document.getElementById("heroTitle").innerText =
        "Construindo uma mobilidade melhor com dados, política pública e tecnologia.";

      document.getElementById("heroDescription").innerText =
        "Sou engenheiro de transportes e atuo na interseção entre transporte público, mobilidade urbana, análise de dados e inovação no setor público.";

      document.getElementById("heroCardTitle").innerText = "Especialista em Transporte Público e Dados";
      document.getElementById("heroCardDescription").innerText = "Engenheiro Civil e mestre em Engenharia de Transportes, com experiência em setor público, implementação de SaaS e projetos de mobilidade.";

      document.getElementById("btnViewProjects").innerText = "Ver Projetos";
      document.getElementById("btnexperience").innerText = "Experiência";
      document.getElementById("btncontact").innerText = "Contato";

      document.getElementById("impactEyebrow").innerText = "Trabalhos Selecionados";
      document.getElementById("impactTitle").innerText = "Impacto";
      document.getElementById("project1Title").innerText = "Projeto de Otimização com ROI de 10x";
      document.getElementById("project1Description").innerText = "Liderei iniciativas de implementação e otimização que alcançaram até 10x de retorno sobre investimento para operadores de transporte público através de melhorias operacionais e de programação.";
      document.getElementById("project2Title").innerText = "Modelo de Subsídio Tarifário do Transporte Público";
      document.getElementById("project2Description").innerText = "Contribuí para o desenvolvimento do modelo de subsídio do transporte coletivo urbano da cidade, apoiando sustentabilidade financeira, continuidade operacional e transparência.";
      document.getElementById("project3Title").innerText = "Eficiência de Escala de Motoristas acima de 99%";
      document.getElementById("project3Description").innerText = "Configurei e otimizei sistemas de escala de motoristas alcançando eficiência acima de 99%, melhorando alocação operacional e confiabilidade.";
      document.getElementById("project4Title").innerText = "Estruturação de Licitação do Transporte Público";
      document.getElementById("project4Description").innerText = "Apoiei o desenho técnico e a estruturação de um novo modelo de concessão do transporte público urbano, com prazo de 15 anos, prorrogável por mais 10 anos, envolvendo planejamento operacional, modelagem financeira e diretrizes de qualidade do serviço. O contrato tinha valor estimado superior a R$ 2 bilhões à época.";

      document.getElementById("experienceEyebrow").innerText = "Trajetória";
      document.getElementById("experienceTitle").innerText = "Experiência";
      document.getElementById("exp1Title").innerText = "Engenheiro de Inovação";
      document.getElementById("exp1Description").innerText = "Atuo no desenvolvimento de frameworks de inovação no setor público, combinando desenho de políticas, capacitação e desenvolvimento do ecossistema de inovação.";
      document.getElementById("exp2Title").innerText = "Engenheiro de Soluções";
      document.getElementById("exp2Description").innerText = "Implementei soluções SaaS de otimização do transporte para operadores de ônibus no Brasil e Europa, melhorando eficiência operacional e tomada de decisão.";
      document.getElementById("exp3Title").innerText = "Chefe da Seção de Estudos e Projetos";
      document.getElementById("exp3Description").innerText = "Liderei equipe técnica responsável pelo planejamento, análise e desenvolvimento de projetos de mobilidade urbana.";
      document.getElementById("exp4Title").innerText = "Engenheiro de Transportes";
      document.getElementById("exp4Description").innerText = "Atuei no planejamento, análise e regulação do sistema de transporte coletivo urbano.";

      document.getElementById("contactEyebrow").innerText = "Contato";
      document.getElementById("contactTitle").innerText = "Vamos conversar";
      document.getElementById("contactDescription").innerText = "Entre em contato para oportunidades relacionadas a transporte, dados, inovação no setor público ou mobilidade urbana.";
      document.getElementById("copyEmailBtn").innerText = "Copiar Email";

    } else {
      langBtn.innerText = "PT";

      document.getElementById("navimpact").innerText = "Impact";
      document.getElementById("navexperience").innerText = "Experience";
      document.getElementById("navcontact").innerText = "Contact";
      document.getElementById("navprojects").innerText = "Projects";

      document.getElementById("eyebrow").innerText = "TRANSPORT • DATA • INNOVATION"

      document.getElementById("heroTitle").innerText =
        "Building better mobility through data, public policy and technology.";

      document.getElementById("heroDescription").innerText =
        "I am a Transport Engineer working at the intersection of public transport, urban mobility, data analysis and public sector innovation.";

      document.getElementById("heroCardTitle").innerText = "Public Transport & Data Specialist";
      document.getElementById("heroCardDescription").innerText = "Civil Engineer, MSc in Transportation Engineering, with experience in public sector, SaaS implementation and mobility projects.";

      document.getElementById("btnViewProjects").innerText = "View Projects";
      document.getElementById("btnexperience").innerText = "Experience";
      document.getElementById("btncontact").innerText = "Contact";

      document.getElementById("impactEyebrow").innerText = "Selected Work";
      document.getElementById("impactTitle").innerText = "Impact";
      document.getElementById("project1Title").innerText = "10x ROI Optimization Project";
      document.getElementById("project1Description").innerText = "Led implementation and optimization initiatives that achieved up to 10x return on investment for public transport operators through scheduling and operational improvements.";
      document.getElementById("project2Title").innerText = "Urban Bus Fare Subsidy Framework";
      document.getElementById("project2Description").innerText = "Contributed to the development of the city's urban bus subsidy model, supporting financial sustainability, operational continuity and transparency during a critical transition period.";
      document.getElementById("project3Title").innerText = "99%+ Driver Scheduling Efficiency";
      document.getElementById("project3Description").innerText = "Configured and optimized driver scheduling systems achieving 99%+ scheduling efficiency, improving workforce allocation and operational reliability.";
      document.getElementById("project4Title").innerText = "Public Transport Tender Design";
      document.getElementById("project4Description").innerText = "Supported the technical design and structuring of a 15-year urban public transport concession, extendable for another 10 years, covering operational planning, financial modeling, and service quality guidelines. The contract was estimated at over BRL 2 billion at the time.";
      
      document.getElementById("experienceEyebrow").innerText = "Career path";
      document.getElementById("experienceTitle").innerText = "Experience";
      document.getElementById("exp1Title").innerText = "Innovation Engineer";
      document.getElementById("exp1Description").innerText = "Leading the development of public sector innovation frameworks, combining policy design, capacity building and ecosystem development.";
      document.getElementById("exp2Title").innerText = "Solutions Engineer";
      document.getElementById("exp2Description").innerText = "Implemented SaaS transport optimization solutions for bus operators across Brazil and Europe, improving operational efficiency and decision-making.";
      document.getElementById("exp3Title").innerText = "Head of Transport Studies & Projects";
      document.getElementById("exp3Description").innerText = "Led technical team responsible for planning, analysis and development of urban mobility projects.";
      document.getElementById("exp4Title").innerText = "Transport Engineer";
      document.getElementById("exp4Description").innerText = "Worked on planning, analysis and regulation of the urban bus system.";

      document.getElementById("contactEyebrow").innerText = "Contact";
      document.getElementById("contactTitle").innerText = "Let’s connect";
      document.getElementById("contactDescription").innerText = "Feel free to reach out for opportunities related to transport, data, public sector innovation or urban mobility.";
      document.getElementById("copyEmailBtn").innerText = "Copy Email";

    }
  }

  setLanguage(language);

  langBtn.addEventListener("click", () => {
    const newLang = language === "en" ? "pt" : "en";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  });



  // copiar email
  const copyEmailBtn = document.getElementById("copyEmailBtn");

  copyEmailBtn.addEventListener("click", () => {
    navigator.clipboard.writeText("igormachadoprojetos@gmail.com");

    copyEmailBtn.innerText = "Copied!";

    setTimeout(() => {
      copyEmailBtn.innerText = "Copy Email";
    }, 2000);
  });
});
