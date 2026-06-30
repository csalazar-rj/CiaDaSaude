CREATE TABLE profissionais (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome_completo VARCHAR(160) NOT NULL,
  telefone VARCHAR(30) NOT NULL,
  endereco VARCHAR(220) NOT NULL,
  bairro VARCHAR(90) NOT NULL,
  cidade VARCHAR(90) NOT NULL,
  estado CHAR(2) NOT NULL,
  registro_profissional VARCHAR(40) NOT NULL,
  especialidade VARCHAR(120) NOT NULL,
  email VARCHAR(160) NOT NULL UNIQUE,
  senha_hash VARCHAR(255) NOT NULL,
  aceitou_politica_privacidade BOOLEAN NOT NULL DEFAULT 0,
  autorizou_uso_dados BOOLEAN NOT NULL DEFAULT 0,
  criado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  atualizado_em DATETIME
);

CREATE TABLE categorias_blog (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome VARCHAR(80) NOT NULL UNIQUE,
  criado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts_blog (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  categoria_id INTEGER NOT NULL,
  profissional_id INTEGER NOT NULL,
  titulo VARCHAR(180) NOT NULL,
  resumo VARCHAR(280),
  conteudo TEXT NOT NULL,
  publicado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  atualizado_em DATETIME,
  status VARCHAR(20) NOT NULL DEFAULT 'publicado',
  FOREIGN KEY (categoria_id) REFERENCES categorias_blog(id),
  FOREIGN KEY (profissional_id) REFERENCES profissionais(id)
);

CREATE TABLE solicitacoes_orcamento (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome_completo VARCHAR(160) NOT NULL,
  email VARCHAR(160) NOT NULL,
  telefone VARCHAR(30) NOT NULL,
  eh_prescritor BOOLEAN NOT NULL DEFAULT 0,
  descricao TEXT NOT NULL,
  status VARCHAR(30) NOT NULL DEFAULT 'recebida',
  origem VARCHAR(40) NOT NULL DEFAULT 'site',
  criado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  atualizado_em DATETIME
);

CREATE TABLE anexos_receita (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  solicitacao_id INTEGER NOT NULL,
  nome_arquivo VARCHAR(220) NOT NULL,
  caminho_arquivo VARCHAR(420) NOT NULL,
  mime_type VARCHAR(120),
  tamanho_bytes INTEGER,
  criado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (solicitacao_id) REFERENCES solicitacoes_orcamento(id) ON DELETE CASCADE
);

CREATE TABLE produtos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome VARCHAR(120) NOT NULL,
  slug VARCHAR(140) NOT NULL UNIQUE,
  descricao_curta VARCHAR(280),
  descricao TEXT,
  imagem_url VARCHAR(420),
  ativo BOOLEAN NOT NULL DEFAULT 1,
  criado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  atualizado_em DATETIME
);

CREATE TABLE rodape_configuracoes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  chave VARCHAR(80) NOT NULL UNIQUE,
  valor TEXT NOT NULL,
  atualizado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO categorias_blog (nome) VALUES ('Manipulacao'), ('Dermatologia'), ('Nutricao'), ('Bem-estar'), ('Veterinaria');
