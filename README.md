# API MovieSe - Desafio Desenvolvedor Mobile FullStack

### API desenvolvida em NodeJS, com express e PostgreSQL como banco de dados.

#

## Requisitos

- Deve ser capaz de realizar cadastro
- Deve ser capaz de realizar login com email e senha
- Deve ser capaz de catalogar um filme
- Deve ser capaz de exibir as informações de um filme catalogado
- Deve ser capaz de exibir as informações de um usuário

---

## Regras

- Não deve ser capaz de cadastrar mais de um usuário com o mesmo email
- Não deve ser capaz de realizar login de uma conta inexistente
- Não deve ser capaz de catalogar um filme sem estar logado
- Não deve ser capaz de exibir as informações de um usuário inexistente

---

## Rotas da aplicação

- '/user' (post) - Cadastro de usuário
- '/user/auth' (post) - Login do usuário
- '/user' (get) - Informações do usuário
- '/user/movies' (get) - Filmes catalogados pelo usuário
- '/movie' (post) - Catalogar um filme
- '/movie' (get) - Listar um filmes catalogado
- '/movies' (get) - Listar todos os filmes catalogados na aplicação

---
