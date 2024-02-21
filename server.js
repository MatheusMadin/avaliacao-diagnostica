const express = require('express')
const {PrismaClient, Prisma} = require('@prisma/client');
const  prisma = new PrismaClient({errorFormat: 'minimal'});
 const app = express()


app.use(express.json())


app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html');
  });

  app.get('/recarregar', (req, res) => {

    res.sendFile(__dirname + '/recarregar.html');
  });

app.post('/',  async (req, res) =>{
    const dados =req.body

    const pessoa = await prisma.formulario.create({
        data: dados
    })
})

app.get('/cebola',async (req, res) =>{
    const pessoas = await prisma.formulario.findMany()
console.log(pessoas)
    res.json(pessoas)
})

    app.listen(666,() => {
        console.log('http://localhost:666/')
    });
    

