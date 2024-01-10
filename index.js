import express from 'express'
import { ProductService } from './product.service.js'
const app = express()
const apiService = new ProductService()
app.get('/getProductsByCategories', async (req, res) => {
    const result = await apiService.getGroupedByCategories(apiService.cart)
    console.log(result)
    res.send(result)
})
app.listen(3000, () => console.log(`Listening on port number: 3000`))
