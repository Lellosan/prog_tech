const Item = require('../models/itemModel')

const postItem = async (req,res) => {
    const {id,nome,prezzo,descrizione,numero_acquisti,qunatità_disponibili,tag,animale} = req.body
    try {
        const item = await Item.pItem(id,nome,prezzo,descrizione,numero_acquisti,qunatità_disponibili,tag,animale)
        res.status(200).json({id,nome,prezzo,descrizione,numero_acquisti,qunatità_disponibili,tag,animale})
    } catch(error){
        res.status(400).json({error: error.message})
    }
}