import { Router } from 'express'

const router = Router()

router.get('/', (request, response) => {
    response.send('Página home')
})

export default router