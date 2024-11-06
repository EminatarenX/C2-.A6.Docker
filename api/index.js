import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors';
const app = express()

const port = process.env.PORT ?? 8000;
const prisma = new PrismaClient();

app.use(express.json(), cors())


app.get('/', async (_, res) => {
     await prisma.user.create({
        data: {
            name: `user${Math.random().toString(36).substr(2,9)}`,
            email:`user${Math.floor(Math.random() * 99999)}@gmail.com`
        }
    })

    const users = await prisma.user.findMany({
        take: 10
    })

    res.status(201).json({
        code: 200,
        message: 'success',
        data: users
    })
})

app.listen(port, () => console.log(`listen on localhost:${port}`))