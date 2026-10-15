# 📚 Projeto CRUD - Estudo de Programação Web

## 🎯 Contexto e Objetivo
Este projeto foi desenvolvido como uma atividade prática em aula para estudos de **Extensão e Programação Web** na Universidade Católica de Brasília (UCB). O repositório contém uma aplicação CRUD (Create, Read, Update, Delete) completa, criada com o intuito de estudar o desenvolvimento full-stack, a criação de servidores locais e o consumo de APIs RESTful.

## 💻 Tecnologias e Ferramentas Utilizadas
O projeto explora o ecossistema web, dividindo as responsabilidades entre frontend e backend:

- **Backend (Servidor e API):**
  - **Node.js** com **Express**: Utilizados para levantar o servidor no arquivo `server.js` e gerenciar as requisições HTTP.
  - **Módulo de Rotas:** A lógica da API está isolada no arquivo `routes/api.js`, demonstrando a organização modular de rotas e endpoints.
  - **Persistência de Dados:** O arquivo `db.js` gerencia a conexão e as operações com o banco de dados.
  - **NPM:** Gerenciamento de dependências através do `package.json`.

- **Frontend (Interface):**
  - **HTML5 & CSS3:** Estruturação e estilização das páginas, localizadas na pasta `public/` (`index.html` e `style.css`).
  - **JavaScript (Vanilla):** O arquivo `public/script.js` atua no lado do cliente, consumindo a API desenvolvida no backend de forma assíncrona para atualizar a interface de forma dinâmica.

## ⚙️ APIs e Integrações
O foco central deste estudo foi entender como uma interface web interage com um servidor através de uma API. O projeto constrói e consome sua própria API REST, onde o frontend (`script.js`) envia requisições para os endpoints definidos no backend (`routes/api.js`), processando os dados e retornando as respostas adequadas para a tela.

## 🚀 Como Executar

Para rodar o projeto localmente, certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina e siga os passos abaixo:

1. Clone o repositório:
    git clone https://github.com/SEU-USUARIO/projeto-crud.git

2. Acesse a pasta do projeto:
    cd projeto-crud

3. Instale as dependências necessárias descritas no `package.json`:
    npm install

4. Inicie o servidor Node:
    node server.js

5. Abra o navegador e acesse a aplicação (geralmente em `http://localhost:3000`, dependendo da porta configurada no seu `server.js`).
