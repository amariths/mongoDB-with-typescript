import express, { Request, Response, json } from 'express'
import animalRouter from './routes/animal'
import { connect } from 'mongoose'
import { getAnimalsById, getAnimals, createAnimal, deleteAnimal } from './db/models/animalCrud'
import { create } from 'ts-node'

connect('mongodb://127.0.0.1:27017/AmarM')




const app = express()
app.use(json())

app.use('/animal', animalRouter)

app.get('/', (req: Request, res: Response) => {
    res.send('hello world')
})

app.get('/animals', async (req: Request, res: Response) => {
    const animals = await getAnimals()

    res.json(animals)
})

app.get('/animals/:id', async (req: Request, res: Response) => {
    const animals = await getAnimalsById(req.params.id)
    res.json(animals)
})

app.delete('/animals/:id', async (req: Request, res: Response) => {
    const animals = await deleteAnimal(req.params.id)
    res.json(animals)
})

app.post('/animals', async (req: Request, res: Response) => {
    const newAnimal = req.body
    const createdAnimal = await createAnimal(newAnimal)
    res.json(createdAnimal)
})


app.listen(8000, () => {
    console.log('Exampel app listening on http://localhost:8000/')
})
