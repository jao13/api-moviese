# API MovieSe

<p align="left">API desenvolvida em Node.js com PostgreSQL.</p>

## 👨‍💻 Tecnologias

#### Este projeto foi desenvolvido com as seguintes tecnologias e bibliotecas:

<!--ts-->

- [Node.js](https://nodejs.org/en/)
- [bcryptjs](https://github.com/kelektiv/node.bcrypt.js/)
- [dotenv-safe](https://github.com/rolodato/dotenv-safe)
- [express](https://expressjs.com/pt-br/)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [pg](https://node-postgres.com/)
- [typeorm](https://typeorm.io/)
<!--te-->

<br>

## ℹ️ Como rodar a aplicação

### Pré-requisitos

Para clonar e rodar a aplicação, é necessário ter instalado em sua máquina as ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Yarn](https://yarnpkg.com/) (opcional).
Além disso, é bom que se tenha um bom editor de código, como o [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando a aplicação

```bash
# Clone este repositório
$ git clone <https://github.com/joaomarques13/api-moviese>

# Acesse a pasta do projeto no terminal/cmd
$ cd api-moviese

# Instale as dependências
$ npm install ou yarn install

# Crie um arquivo ormconfig.json na raíz do projeto com as configurações
$ {
  "type": "postgres",
  "host": "localhost",
  "port": porta-do-banco,
  "username": username-do-banco,
  "password": senha-do-banco,
  "database": nome-do-banco,
  "entities": ["src/app/models/*.ts"],
  "migrations": ["src/database/migrations/*.ts"],
  "cli": {
    "migrationsDir": "src/database/migrations"
  }
}

# Crie um arquivo .ENV com a configuração
$ JWT_SECRET=seu-segredo-jwt

# Execute a aplicação em modo de desenvolvimento
$ npm run dev ou yarn dev

# O servidor inciará na porta:3000 - acesse com <http://localhost:3000>
```

## Requisitos

- Deve ser capaz de realizar cadastro
- Deve ser capaz de realizar login com email e senha
- Deve ser capaz de catalogar um filme
- Deve ser capaz de exibir as informações de um filme catalogado
- Deve ser capaz de exibir as informações de um usuário

#

## Regras

- Não deve ser capaz de cadastrar mais de um usuário com o mesmo email
- Não deve ser capaz de realizar login de uma conta inexistente
- Não deve ser capaz de catalogar um filme sem estar logado
- Não deve ser capaz de exibir as informações de um usuário inexistente

#

## Rotas da aplicação

- '/user' (post) - Cadastro de usuário
- '/user/auth' (post) - Login do usuário
- '/user' (get) - Informações do usuário
- '/user/movies' (get) - Filmes catalogados pelo usuário
- '/movie' (post) - Catalogar um filme
- '/movie' (get) - Listar um filmes catalogado
- '/movies' (get) - Listar todos os filmes catalogados na aplicação
