// server için gerekli olanları burada ayarlayın

const express = require("express");
const server = express();
//json istekleri desteklemek için
server.use(express.json());
const port = 9000;

// posts router'ını buraya require edin ve bağlayın
const postsRouter = require("./posts/posts-router");
server.use("/api/posts", postsRouter);


server.listen(port, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", port);
})

module.export = server;