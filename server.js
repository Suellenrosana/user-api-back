import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/usuarios", async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
});

app.post("/usuarios", async (req, res) => {
  const user = await prisma.user.create({
    data: {
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
    },
  });
  console.log(user);

  res.status(201).json({ message: "Usuário criado com sucesso" });
});

app.put("/usuarios/:id", async (req, res) => {
  req.params.id;
  const user = await prisma.user.update({
    where: {
      id: req.params.id,
    },
    data: {
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
    },
  });
});

app.delete("/usuarios/:id", async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ message: "Usuario deletado com sucesso" });
});

app.listen(3000);

// suellenrosana lU307ujNvt6ind8c
// suellenrcsabino NusCtYWR7LI93RzI
