const express = require("express");
const {
  setPosts,
  getPosts,
  editPost,
  deletePost,
} = require("../controllers/post.controller");
const router = express.Router();

// localhost5000/post               request (ce qui est envoyé dans la requête ex: id, numéro de commentaire) response ( ce que le serveur renvoi )
// GET pour prendre une donnée en BDD et l'afficher
router.get("/", getPosts);

// req = les données qu'on envoi pour faire notre requete ( id/nom de l'auteur/ un commentaire ( une donnée récupéré dans un input ))
// POST pour envoyer une donnée en BDD
router.post("/", setPosts);

// PUT pour modifier une donnée en BDD
router.put("/:id", editPost);

router.delete("/:id", deletePost);

router.patch("/like-post/:id", (req, res) => {
  res.json({ message: "Post liké : id : " + req.params.id });
});

router.patch("/dislike-post/:id", (req, res) => {
  res.json({ message: "Post disliké : id : " + req.params.id });
});

module.exports = router;
