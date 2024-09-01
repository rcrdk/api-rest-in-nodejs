# 💸 Simple Transactions API with Session
I developed this project during my latest studies on Node lessons at [Rocketseat](https://www.rocketseat.com.br).

## 🚀 Techs and Tools
- [Node.js v18](https://nodejs.org/)
- [Fastify](https://fastify.dev)
- [Knex](https://knexjs.org/)
- [SQLite](https://www.sqlite.org)
- [Insomnia](https://insomnia.rest/)
- [Vitest](https://vitest.dev/)

## ⚙️ Installation
Setup enviroment variables and run:
```shell
npm i
npm run knex -- migrate:latest 
npm run dev
npm test
```

## 🔗 Routes
Run POST route to generate a session cookie.

| Method     | Route                 | Params/Body                               |
| ---------- | --------------------- | ------------------------------------------|
| ``POST``   | /transactions/        | title, amount, type ('credit' or 'debit') |
| ``GET``    | /transactions/        | -                                         |
| ``GET``    | /transactions/:id     | -                                         |
| ``GET``    | /transactions/summary | -                                         |