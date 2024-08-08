<h1> User API 📡</h1>

Este projeto é uma aplicação backend para gerenciar usuários utilizando Node.js, Express, Cors e Prisma. Ele permite listar, criar, editar e excluir usuários em um banco de dados MongoDB.
Biblioteca Axios para conexão das requisições get, post, put e delete criadas numa API desenvolvida com o auxílio do PrismaSoft conectada ao banco de dados MongoDB.</li>


<h3>Tecnologias utilizadas:</h3>

<li>Node.js</li>
<li>Prisma</li>
<li>Axios</li>
<li>MongoDB</li>

<h2>Configure o Prisma - Estrutura Jason:</b></h2>

Configure a variável de ambiente DATABASE_URL no arquivo .env com a URL de conexão do seu MongoDB.</li>

  ```sh
  generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model User {
  id    String @id @default(auto()) @map("_id") @db.ObjectId
  name  String
  age   Int
  email String @unique
}

  







