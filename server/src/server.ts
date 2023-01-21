import Fastify from 'fastify';
import cors from '@fastify/cors';
import {PrismaClient} from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient();

//Definindo qual endereço irá consumir a API
app.register(cors,{
  origin:['http://localhost:3000']
});

//Pegando Todos os Dados do BD
app.get('/', async ()=>{
  const habits = await prisma.habit.findMany()
  return habits
})

//Iniciando o Servidor
app.listen({
  port: 3333
}).then(()=>{
  console.log('HTTP Server Running!')
})