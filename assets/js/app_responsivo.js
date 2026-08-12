const WHATSAPP_NUMBER = "5521995337189";
const FOOTER = {
  nome: "Cia da Saúde",
  endereco: "Av. Meriti, 2128 - Vila da Penha, Rio de Janeiro - RJ, 21211-006",
  telefone: "(21) 99533-7189",
  email: "ciadasaude.rj@gmail.com",
  horario: "Segunda à sexta, 9h as 18h | Não abrimos aos Sábados!",
  instagram: "@farmciadasaude",
  drMichel: "Dr Michel Abussamra CRF- RJ 24778",
  draMonica: "Dra Mônica Alves CRF-RJ 14969"
 
};

// scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


function setupResponsiveMenus() {
  document.querySelectorAll(".nav").forEach((nav, index) => {
    const menu = nav.querySelector(".menu");
    if (!menu || nav.querySelector(".nav-toggle")) return;

    const button = document.createElement("button");
    const menuId = menu.id || `site-menu-${index + 1}`;
    menu.id = menuId;
    button.className = "nav-toggle";
    button.type = "button";
    button.setAttribute("aria-label", "Abrir menu");
    button.setAttribute("aria-controls", menuId);
    button.setAttribute("aria-expanded", "false");
    button.innerHTML = "<span></span>";

    nav.insertBefore(button, menu);

    button.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("menu-open");
      button.setAttribute("aria-expanded", String(isOpen));
      button.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("menu-open");
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-label", "Abrir menu");
      });
    });
  });
}

function renderFooter() {
  const el = document.querySelector("[data-footer]");
  if (!el) return;
  el.innerHTML = `
    <div class="footer-grid">
      <div>
        <h3>${FOOTER.nome}</h3>
        <p>Farmácia de manipulação com atendimento humanizado, fórmulas personalizadas e acompanhamento técnico.</p>
        <h4>Responsáveis Técnicos</h4>
        <p><em>${FOOTER.drMichel}</em></p>
        <p><em>${FOOTER.draMonica}</em></p>
        <p>* Podendo este ser o nosso farmacêutico de acordo com a Resolução 586/2013 do Conselho de Farmácia.</p>
      </div>
      <div>
        <h3>Atendimento</h3>
        <p>${FOOTER.endereco}</p>
        <p>${FOOTER.telefone}<br>${FOOTER.email}</p>
      </div>
      <div>
        <h3>Funcionamento</h3>
        <p>${FOOTER.horario}</p>
              
        <a class="social-icon social-icon--instagram" href="https://instagram.com/${FOOTER.instagram.replace('@', '')}" target="_blank" rel="noopener noreferrer" aria-label="Instagram: ${FOOTER.instagram}" title="${FOOTER.instagram}">

          <svg viewBox="0 0 48 48" width="26" height="26" aria-hidden="true" focusable="false">
              <defs>
                <radialGradient id="igAppGradient" cx="30%" cy="107%" r="150%">
                  <stop offset="0%" stop-color="#fdf497"/>
                  <stop offset="5%" stop-color="#fdf497"/>
                  <stop offset="45%" stop-color="#fd5949"/>
                  <stop offset="60%" stop-color="#d6249f"/>
                  <stop offset="90%" stop-color="#285AEB"/>
                </radialGradient>
              </defs>
              <rect width="48" height="48" rx="12" fill="url(#igAppGradient)"/>
              <rect x="12" y="12" width="24" height="24" rx="7" fill="none" stroke="#fff" stroke-width="2.4"/>
              <circle cx="24" cy="24" r="6.2" fill="none" stroke="#fff" stroke-width="2.4"/>
              <circle cx="31.2" cy="16.8" r="1.6" fill="#fff"/>
          </svg>
          <span>Instagram</span>
        </a>
      </div>
    </div>
    <div class="footer-note">© 2026 Cia da Saúde Farmácia de Manipulação. Todos os direitos reservados.  Desenvolvido por Carlos ESA</div>
  `;
}

/**
 * replace the line below 
 * <p>Instagram: ${FOOTER.instagram}</p>
 * 
 * by: new line below
 * Instagram: 
  <a href="https://instagram.com/${FOOTER.instagram.replace('@', '')}" target="_blank" rel="noopener noreferrer">
    ${FOOTER.instagram}
  </a>

 ------

        <a class="social-icon social-icon--instagram" href="https://instagram.com/${FOOTER.instagram.replace('@', '')}" target="_blank" rel="noopener noreferrer" aria-label="Instagram: ${FOOTER.instagram}" title="${FOOTER.instagram}">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true" focusable="false">
            <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.256 1.216.6 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.05 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.05-1.405.06-4.122.06s-3.056-.01-4.122-.06c-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.01 15.056 2 14.717 2 12s.01-3.056.06-4.122c.05-1.065.217-1.79.465-2.428a4.897 4.897 0 0 1 1.153-1.772A4.904 4.904 0 0 1 5.45 2.525c.637-.248 1.363-.415 2.428-.465C8.944 2.01 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.181-.8.398-1.15.748-.35.35-.567.684-.748 1.15-.137.353-.3.882-.344 1.857-.05 1.055-.06 1.37-.06 4.04s.01 2.986.06 4.04c.045.976.207 1.505.344 1.858.181.466.398.8.748 1.15.35.35.684.567 1.15.748.353.137.882.3 1.857.344 1.054.05 1.37.06 4.041.06s2.987-.01 4.04-.06c.976-.045 1.505-.207 1.858-.344.466-.181.8-.398 1.15-.748.35-.35.567-.683.748-1.15.137-.353.3-.882.344-1.857.05-1.055.06-1.37.06-4.041s-.01-2.986-.06-4.04c-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.05-1.37-.06-4.041-.06zm0 4.594a5.604 5.604 0 1 1 0 11.208 5.604 5.604 0 0 1 0-11.208zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5.884-9.717a1.31 1.31 0 1 1-2.62 0 1.31 1.31 0 0 1 2.62 0z"/>
          </svg>
        <span class="sr-only">${FOOTER.instagram}</span>
        </a>


 ------
  */

function setupBudgetForms() {
  document.querySelectorAll("[data-budget-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const fileInput = form.querySelector('input[type="file"]');
      const files = fileInput?.files ? Array.from(fileInput.files) : [];
      const fileNames = files.map((file) => file.name).join(", ");


      const message = [
        "Solicitacao de orcamento - Cia da Saude",
        `Nome: ${data.get("nome")}`,
        `E-mail: ${data.get("email")}`,
        `Telefone: ${data.get("telefone")}`,
        `Prescritor: ${data.get("prescritor")}`,
        `Descricao: ${data.get("descricao")}`,
      
        files.length
          ? `Receitas anexadas no site (${files.length}): ${fileNames} - arquivo(s) baixado(s) automaticamente, favor anexar aqui na conversa`
          : "Receitas anexadas no site: 0"
            
      ].join("\n");

      // O link do WhatsApp (wa.me) nao suporta anexar arquivos via URL - e uma
      // limitacao da propria plataforma, nao do formulario. Como alternativa,
      // baixamos o(s) arquivo(s) selecionados para o dispositivo do cliente,
      // para que ele anexe manualmente na conversa que abre em seguida.

      // IMPORTANTE: window.open precisa ser chamado ANTES de qualquer alert()
      // ou operacao assincrona. Navegadores só permitem abrir uma nova aba
      // sem bloqueio de pop-up se isso acontecer imediatamente dentro do
      // gesto do usuario (o clique no botao). Um alert() antes do window.open
      // "quebra" essa cadeia e o navegador passa a bloquear a aba do WhatsApp.
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");

      files.forEach((file) => {
        const url = URL.createObjectURL(file);
        const link = document.createElement("a");
        link.href = url;
        link.download = file.name;
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
      });

      if (files.length) {
        alert(`${files.length} arquivo(s) baixado(s) para o seu dispositivo (${fileNames}). O WhatsApp vai abrir agora - por favor, anexe o(s) arquivo(s) baixado(s) na conversa antes de enviar.`);
      }

    });
  });
}

/* Function Carrousel - Date: 08/12/26 Begin */
function setupHeroCarousel() {
  const slides = Array.from(document.querySelectorAll(".hero-slide"));
  const dotsWrap = document.querySelector("[data-hero-dots]");
  const inner = document.querySelector("[data-hero-inner]");
  const heroSection = document.querySelector(".hero:not(.monica-hero)");

  if (slides.length < 2) return;

  let current = slides.findIndex((slide) => slide.classList.contains("is-active"));
  if (current < 0) current = 0;

  let dots = [];
  if (dotsWrap) {
    dotsWrap.innerHTML = "";
    dots = slides.map((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "hero-dot" + (i === current ? " is-active" : "");
      dot.setAttribute("aria-label", `Ir para o slide ${i + 1}`);
      dot.addEventListener("click", () => goTo(i));
      dotsWrap.appendChild(dot);
      return dot;
    });
  }

  // Titulo e botoes (hero-inner) e o gradiente escuro aparecem somente na
  // primeira imagem do carrossel (indice 0). Nas demais imagens (que ja
  // trazem texto proprio), ficam ocultos para a foto ficar nitida.
  function updateInnerVisibility() {
    if (inner) inner.classList.toggle("is-hidden", current !== 0);
    if (heroSection) heroSection.classList.toggle("hero--no-gradient", current !== 0);
  }
  updateInnerVisibility();

  function goTo(index) {
    slides[current].classList.remove("is-active");
    dots[current]?.classList.remove("is-active");
    current = index;
    slides[current].classList.add("is-active");
    dots[current]?.classList.add("is-active");
    updateInnerVisibility();
  }

  // O carrossel troca automaticamente as fotos mesmo quando o sistema tem a
  // preferencia "reduzir movimento" ativada, ja que aqui a troca de imagem e
  // conteudo (nao apenas decoracao). O que muda nesse caso e a duracao da
  // transicao de fade, controlada via CSS.
  setInterval(() => {
    goTo((current + 1) % slides.length);
  }, 4000);
  
}


/* Function Carrousel - End */

function setupCapsuleGranules() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document.querySelectorAll("[data-granule-capsule]").forEach((capsule) => {
    if (capsule.dataset.granulesReady) return;
    capsule.dataset.granulesReady = "true";

    for (let i = 0; i < 7; i += 1) {
      const granule = document.createElement("div");
      const size = 6 + Math.random() * 7;
      granule.className = "granule";
      granule.style.width = `${size}px`;
      granule.style.height = `${size}px`;
      granule.style.left = `${20 + Math.random() * 60}%`;
      granule.style.bottom = `${Math.random() * 20}%`;
      granule.style.animation = `float-up ${5 + Math.random() * 4}s ease-in ${Math.random() * 5}s infinite`;
      capsule.appendChild(granule);
    }
  });
}

function setupAuth() {
  const login = document.querySelector("[data-login-form]");
  if (login) {
    login.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(login);
      localStorage.setItem("ciaSaudeAuth", JSON.stringify({ nome: data.get("usuario"), loggedAt: new Date().toISOString() }));
      window.location.href = "blog.html?admin=1";
    });
  }

  const register = document.querySelector("[data-register-form]");
  if (register) {
    register.addEventListener("submit", (event) => {
      event.preventDefault();
      const payload = Object.fromEntries(new FormData(register).entries());
      const users = JSON.parse(localStorage.getItem("ciaSaudeUsers") || "[]");
      users.push({ ...payload, createdAt: new Date().toISOString() });
      localStorage.setItem("ciaSaudeUsers", JSON.stringify(users));
      alert("Cadastro registrado no prototipo. Conecte ao banco usando db/schema.sql.");
      window.location.href = "login.html";
    });
  }
}

const defaultPosts = [
  {
    id: "formula-personalizada",
    title: "Preço chama atenção. Qualidade conquista confiança.",
    category: "Manipulação",
    author: "Dra. Mônica Alves",
    date: "2026-08-05",
    body: [
      "Uma fórmula manipulada não é apenas uma combinação de ingredientes.",

      "Ela é resultado de um processo que envolve conhecimento técnico, responsabilidade, controle de qualidade e o compromisso de entregar um tratamento personalizado.",
    
      "Na Cia da Saúde, cada detalhe importa: da seleção das matérias-primas à conferência final antes da entrega.",

      "É assim que transformamos mais de 30 anos de experiência em confiança para milhares de pacientes.",

      "Porque a sua saúde merece muito mais do que o menor preço. Merece qualidade em cada fórmula."    
    ]
    
  } 
    /*,
  {
    id: "sono-e-rotina",
    title: "Sono, rotina e cuidado individualizado",
    category: "Bem-estar",
    author: "Equipe Cia da Saude",
    date: "2026-06-25",
    body: "Habitos consistentes e avaliacao profissional ajudam a identificar estrategias adequadas para cada pessoa. Produtos manipulados devem ser usados com orientacao."
  } */
];

function getPosts() {
  const stored = JSON.parse(localStorage.getItem("ciaSaudePosts") || "[]");
  return [...stored, ...defaultPosts];
}

function setupBlog() {
  const list = document.querySelector("[data-post-list]");
  if (list) {
    const posts = getPosts();
    list.innerHTML = posts.map((post) => `
      <a class="post-card" href="post.html?id=${post.id}">
        <span class="eyebrow">${post.category}</span>
        <h3>${post.title}</h3>
        <p>${new Date(post.date).toLocaleDateString("pt-BR")} | Criado por: ${post.author}</p>
      </a>
    `).join("");
  }

  const admin = document.querySelector("[data-blog-admin]");
  const isAdmin = new URLSearchParams(location.search).get("admin") === "1" || localStorage.getItem("ciaSaudeAuth");
  if (admin && isAdmin) admin.classList.remove("hidden");

  const form = document.querySelector("[data-post-form]");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      const posts = JSON.parse(localStorage.getItem("ciaSaudePosts") || "[]");
      posts.unshift({
        id: `${Date.now()}`,
        title: data.title,
        category: data.categoryNew || data.category,
        author: data.author,
        date: new Date().toISOString(),
        body: data.body
      });
      localStorage.setItem("ciaSaudePosts", JSON.stringify(posts));
      location.href = "blog.html?admin=1";
    });
  }

  const postBody = document.querySelector("[data-post]");
  if (postBody) {
    const id = new URLSearchParams(location.search).get("id");
    const post = getPosts().find((item) => item.id === id) || defaultPosts[0];
    
    const bodyHtml = Array.isArray(post.body)
      ? post.body.map(paragraph => `<p>${paragraph}</p>`).join("")
      : `<p>${post.body}</p>`;

    postBody.innerHTML = `
      <span class="eyebrow">${post.category}</span>

      <h1>${post.title}</h1>

      <p class="post-meta">
        ${new Date(post.date).toLocaleDateString("pt-BR")} |
        Criado por: ${post.author}
      </p>

      <div class="post-content">
        ${bodyHtml}
      </div>
    `;

  }
}


setupResponsiveMenus();
renderFooter();
setupBudgetForms();
setupHeroCarousel();
setupCapsuleGranules();
setupAuth();
setupBlog();

/** 
 *   postBody.innerHTML = `
      <span class="eyebrow">${post.category}</span>
      <h1>${post.title}</h1>
      <p>${new Date(post.date).toLocaleDateString("pt-BR")} | Criado por: ${post.author}</p>
      
      <p>${post.body}</p> 

    `;
 */