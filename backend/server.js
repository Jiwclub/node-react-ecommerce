import express from 'express'
import data from './data'
import dotenv from 'dotenv'
import config from './config'
import mongoose from 'mongoose'
import userRoute from './routes/userRoute'
import bodyParser from 'body-parser'
import productRoute from './routes/productRoute'



const app = express();


dotenv.config();
app.use(bodyParser.json())

// todo เป็นตัวเชื่อม mongoDB
const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    userCreateIndex: true
}).catch(error => console.log(error.reason))



app.use("/api/users", userRoute)
app.use("/api/products", productRoute)


// app.get('/api/products/:id', (req, res) => {
//     const productId = req.params.id;
//     const product = data.products.find(x => x._id === productId)
//     if (product)
//         res.send(product)
//     else
//         res.status(404).send({ msg: "Product Not Fond." })

// })

// app.get('/api/products', (req, res) => {
//     res.send(data.products)
// })

app.listen(5000, () => {
    console.log("Server started at http://localhost:5000")
})
