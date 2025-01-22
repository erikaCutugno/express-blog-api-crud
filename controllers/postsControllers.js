const postsData = require("../data/post")


const index = (req, res) => {
    res.json(postsData)
}

const show = (req, res) => {
    const posts = postsData.find((elm) => elm.id == req.params.id)
    if(!posts){
        res.sendStatus(404)
    }
    res.json(posts)
}

const store = (req, res) => {
    res.send("Creazione nuovo post")
}

const update = (req, res) => {
    res.send(`Modifica integrale del post: ${req.params.id}`)
}
 
const modify = (req, res) => {
    res.send(`Modifica parziale del post:${req.params.id}`)
}
 const destroy = (req, res) => {
    const posts = postsData.find((elm) => elm.id == req.params.id)
    postsData.splice(postsData.indexOf(posts), 1)
    console.log(postsData)
    res.sendStatus(204)
 }
module.exports = { index, show, store, update, modify, destroy}