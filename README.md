# 💸 Simple Transactions API with Session
I developed this project during my latest studies on Node lessons at [Rocketseat](https://www.rocketseat.com.br).

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