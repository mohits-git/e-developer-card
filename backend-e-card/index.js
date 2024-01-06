if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
const PORT = process.env.PORT;
const express = require('express');
const app = express();
const cors = require('cors');
const Card = require('./db')
const cardSchema = require('./schema')

app.use(cors({ origin: 'https://e-developer-card.vercel.app' }))
app.use(express.json());

app.get('/api/cards', async (req, res) => {
    try{
        const cards = await Card.find({});
        res.json(cards);
    } 
    catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})

app.post('/api/card', async(req, res) => {
    try{
        const card = req.body.card;
        const response = cardSchema.safeParse(card);
        if(!response.success){
            return res.status(200).json({error: true, success: false, message: "Invalid card data"});
        }
        await Card.create(card);
        res.send("Created :)")
    }
    catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
})

app.listen(PORT, () => {
    console.log(`listening at http//localhost:${PORT}`)
})
