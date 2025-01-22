const postsData = require("../data/post")

//Index
const index = (req, res) => {
let filteredPosts = postsData;
const {tags} = req.query;

if (tags){
    filteredPosts = postsData.filter(elm => elm.tags.includes(tags));
}

    res.json(filteredPosts)
}
//Show
const show = (req, res) => {
    const posts = postsData.find((elm) => elm.id == req.params.id)
    if(!posts){
        res.status(404);

        return res.json({
            status: 404, 
            error: "Not Found", 
            message: "Post non trovato"
        })
    }
    res.json(posts)
}
//Store
const store = (req, res) => {
    res.send("Creazione nuovo post")
}
//update
const update = (req, res) => {
    res.send(`Modifica integrale del post: ${req.params.id}`)
}
 //Modify
const modify = (req, res) => {
    res.send(`Modifica parziale del post:${req.params.id}`)
}
//Destroy
const destroy = (req, res) => {
    const posts = postsData.find((elm) => elm.id == req.params.id)

    if(!posts){
        res.status(404);

        return res.json({
            status: 404, 
            error: "Not Found", 
            message: "Post non trovato"
        })
    }
    postsData.splice(postsData.indexOf(posts), 1)
    console.log(postsData)
    res.sendStatus(204)
 }
 
module.exports = { index, show, store, update, modify, destroy}