const WHATSAPP_NUMBER = "5521982587969";
const FOOTER = {
  nome: "Cia da Saúde",
  endereco: "Av. Meriti, 2128 - Vila da Penha, Rio de Janeiro - RJ, 21211-006",
  telefone: "(21) 98258-7969",
  email: "atendimento@ciadasaude.com.br",
  horario: "Segunda à sexta, 8h as 18h | Sábado, 8h as 13h",
  instagram: "@ciadasaude"
};

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
      </div>
      <div>
        <h3>Atendimento</h3>
        <p>${FOOTER.endereco}</p>
        <p>${FOOTER.telefone}<br>${FOOTER.email}</p>
      </div>
      <div>
        <h3>Funcionamento</h3>
        <p>${FOOTER.horario}</p>
        <p>Instagram: ${FOOTER.instagram}</p>
      </div>
    </div>
    <div class="footer-note">Rodape editavel em assets/app.js. Atualize os dados do objeto FOOTER quando necessario.</div>
  `;
}

function setupBudgetForms() {
  document.querySelectorAll("[data-budget-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const files = form.querySelector('input[type="file"]')?.files?.length || 0;
      const message = [
        "Solicitacao de orcamento - Cia da Saude",
        `Nome: ${data.get("nome")}`,
        `E-mail: ${data.get("email")}`,
        `Telefone: ${data.get("telefone")}`,
        `Prescritor: ${data.get("prescritor")}`,
        `Descricao: ${data.get("descricao")}`,
        `Receitas anexadas no site: ${files}`
      ].join("\n");
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
    });
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
    title: "Quando uma formula manipulada pode ajudar",
    category: "Manipulacao",
    author: "Farmaceutico responsavel",
    date: "2026-06-25",
    body: "A manipulacao permite ajustar dose, forma farmaceutica, sabor e combinacoes conforme a prescricao. O acompanhamento farmaceutico e essencial para orientar conservacao, uso correto e seguranca."
  },
  {
    id: "sono-e-rotina",
    title: "Sono, rotina e cuidado individualizado",
    category: "Bem-estar",
    author: "Equipe Cia da Saude",
    date: "2026-06-25",
    body: "Habitos consistentes e avaliacao profissional ajudam a identificar estrategias adequadas para cada pessoa. Produtos manipulados devem ser usados com orientacao."
  }
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
    postBody.innerHTML = `
      <span class="eyebrow">${post.category}</span>
      <h1>${post.title}</h1>
      <p>${new Date(post.date).toLocaleDateString("pt-BR")} | Criado por: ${post.author}</p>
      <p>${post.body}</p>
    `;
  }
}

setupResponsiveMenus();
renderFooter();
setupBudgetForms();
setupAuth();
setupBlog();
