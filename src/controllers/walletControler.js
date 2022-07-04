import { ObjectId } from "mongodb"
import { db } from "../db.js"
import joi from "joi"

export async function getLogs(req, res) {
    const user = res.locals.user
    const userId = user._id
    const logs = await db.collection('logs').findOne({ userId })
    if(!logs){
       await db.collection('logs').insertOne({ userId, logs: [] })
       return res.send([])
    }
    res.send(logs.logs)
   }
   export async function entrada(req, res) {
    const entrada = req.body
    const entradaSchema = joi.object({
        valor: joi.number().required(),
        descricao: joi.string().required(),
        tipo: joi.string().required(),
        data: joi.string().required()
      })
    const validate = entradaSchema.validate(entrada)

    if(!validate){
      return res.sendStatus(401)
    }

    const user = res.locals.user
    const userId = user._id
    const logs = await db.collection('logs').findOne({ userId })
    if(!logs){
        db.collection('logs').insertOne({ userId, logs: [] })
    }
    db.collection('logs').updateOne({ "userId": ObjectId(userId)}, 
    {$push: 
        {"logs": entrada}
    })

    res.sendStatus(201)
   }
   export async function saida(req, res) {
    const saida = req.body
    const saidaSchema = joi.object({
        valor: joi.number().required(),
        descricao: joi.string().required(),
        tipo: joi.string().required(),
        data: joi.string().required()
      })
    const validate = saidaSchema.validate(saida)

    if(!validate){
      return res.sendStatus(401)
    }

    const user = res.locals.user
    const userId = user._id
    const logs = await db.collection('logs').findOne({ userId })
    if(!logs){
        db.collection('logs').insertOne({ userId, logs: [] })
    }
    db.collection('logs').updateOne({ "userId": ObjectId(userId)}, 
    {$push: 
        {"logs": saida}
    })

    res.sendStatus(201)
   }