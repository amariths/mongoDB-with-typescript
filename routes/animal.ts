import express, { Request, Response } from 'express'
import { createAnimal } from '../db/models/animalCrud'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
    res.send('Get animals')
})

router.post('/animals', async (req: Request, res: Response) => {
    const createdAnimal = await createAnimal(req.body)
    res.status(201).json(createdAnimal)
})

export default router
