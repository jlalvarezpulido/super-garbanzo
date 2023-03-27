const express = require('express');

const server = express();

server.use(express.static("dist"));

server.listen("8080", ()=>{
    console.info(
        "Express server is listening at port 8080"
    );
});