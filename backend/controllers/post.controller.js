const PostModel = require("../models/post.model");

module.exports.getPosts = async (req, res) => {
  const posts = await PostModel.find();
  res.status(200).json(posts);
};

module.exports.setPosts = async (req, res) => {
  // Condittion si rien dans l'input message
  if (!req.body.message) {
    res.status(400).json({ message: "Merci d'ajouter un message" });
  }

  //   Si message ok partira en bdd
  const post = await PostModel.create({
    message: req.body.message,
    author: req.body.author,
  });
  res.status(200).json(post);
};

module.exports.editPost = async (req, res) => {
  // Récupérer l'id du post à modifier :
  const post = await PostModel.findById(req.params.id);

  if (!post) {
    res.status(400).json({ message: "Ce post n'existe pas" });
  }

  //   findByIdAndUpdate prend 3 paramètres (id du post, req.body, new:true  ) id stocké dans const post , req.body = le contenu du Post, new:true pour rajouter si besoin quelque chose )
  const updatePost = await PostModel.findByIdAndUpdate(post, req.body, {
    new: true,
  });
  res.status(200).json(updatePost);
};

module.exports.deletePost = async (req, res) => {
  // Récupérer l'id du message
  const post = await PostModel.findById(req.params.id);

  // Message d'erreur si post n'existe pas
  if (!post) {
    res.status(400).json({ message: "Ce post n'existe pas" });
  }

  await PostModel.deleteOne({ _id: req.params.id });
  res.status(200).json("Message supprimé " + req.params.id);
};
