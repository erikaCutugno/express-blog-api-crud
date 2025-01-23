const postsData = require("../data/post");

//Index
const index = (req, res) => {
  let filteredPosts = postsData;
  const { tags } = req.query;

  if (tags) {
    filteredPosts = filteredPosts.filter((elm) => elm.tags.includes(tags));
  }

  res.json(filteredPosts);
};

//Show
const show = (req, res) => {
  const posts = postsData.find((elm) => elm.id == req.params.id);
  if (!posts) {
    res.status(404);

    return res.json({
      status: 404,
      error: "Not Found",
      message: "Post non trovato",
    });
  }
  res.json(posts);
};
//Store
const store = (req, res) => {
  const id = postsData[postsData.length - 1].id + 1;

  const newPost = {
    id,
    title: req.body.title,
    image: req.body.image,
    content: req.body.content,
    tags: req.body.tags,
  };

  postsData.push(newPost);

  res.status(201);
  res.json(newPost);
};

//update
const update = (req, res) => {
  const posts = postsData.find((elm) => elm.id == req.params.id);
  if (!posts) {
    res.status(404);

    return res.json({
      status: 404,
      error: "Not Found",
      message: "Post non trovato",
    });
  }

  posts.title = req.body.title;
  posts.image = req.body.image;
  posts.content = req.body.content;
  posts.tags = req.body.tags;

  res.json(posts);
};
//Modify
const modify = (req, res) => {
  res.send(`Modifica parziale del post:${req.params.id}`);
};
//Destroy
const destroy = (req, res) => {
  const posts = postsData.find((elm) => elm.id == req.params.id);

  if (!posts) {
    res.status(404);

    return res.json({
      status: 404,
      error: "Not Found",
      message: "Post non trovato",
    });
  }
  postsData.splice(postsData.indexOf(posts), 1);
  console.log(postsData);
  res.sendStatus(204);
};

module.exports = { index, show, store, update, modify, destroy };
