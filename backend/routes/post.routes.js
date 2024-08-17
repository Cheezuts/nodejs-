const express = require("express");
const router = express.Router();

// localhost5000/post               request (ce qui est envoyé dans la requête ex: id, numéro de commentaire) response ( ce que le serveur renvoi )
router.get("/", (req, res) => {
  res.json({ message: "Voici les données" });
});

// req = les données qu'on envoi pour faire notre requete ( id/nom de l'auteur/ un commentaire ( une donnée récupéré dans un input ))
router.post("/", (req, res) => {
  console.log(req.body);
  res.json({ message: req.body.message });
});

router.put("/:id", (req, res) => {
  res.json({ messageId: req.params.id });
});

router.delete("/:id", (req, res) => {
  res.json({ message: "Post supprimé id :" + req.params.id });
});

router.patch("/like-post/:id", (req, res) => {
  res.json({ message: "Post liké : id : " + req.params.id });
});

router.patch("/dislike-post/:id", (req, res) => {
  res.json({ message: "Post disliké : id : " + req.params.id });
});

module.exports = router;
