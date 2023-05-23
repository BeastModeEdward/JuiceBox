const express = require("express");
const postsRouter = express.Router();
const { getAllPosts } = require("../db");
const { requireUser } = require("./utils.js");

postsRouter.post("/",  async (req, res, next) => {
  res.send({ message: "under construction" });

});

postsRouter.use((req, res, next) => {
  console.log("A request is being made to /users");

  next();
});

postsRouter.get("/", async (req, res) => {
  const posts = await getAllPosts();

  res.send({
    posts,
  });
});

module.exports = postsRouter;
